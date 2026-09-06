// Vercel serverless function: server-side dictionary + translation lookup.
//
// The client used to call two third-party APIs directly from the browser
// (a public dictionary API and an unofficial Google Translate endpoint).
// That depends on those services returning proper CORS headers to an
// arbitrary origin, which the unofficial Google endpoint in particular does
// not reliably do, and on a real user's mobile connection completing two
// cross-origin round trips inside a short client-side timeout. Doing the
// lookup here instead means the browser only ever talks to our own origin
// (no CORS involved at all), and outbound requests run from Vercel's
// network rather than an arbitrary mobile connection.
const DICTIONARY_TIMEOUT_MS = 5000;

function withTimeout(promise, ms, controller) {
  const timeoutId = setTimeout(() => controller.abort(), ms);
  return promise.finally(() => clearTimeout(timeoutId));
}

export default async function handler(req, res) {
  const word = (req.query?.word || '').toString().trim().toLowerCase();

  if (!word || !/^[a-z0-9-]+$/.test(word)) {
    res.status(400).json({ found: false, error: 'invalid word' });
    return;
  }

  const controller = new AbortController();

  try {
    const [dictResult, transResult] = await withTimeout(
      Promise.allSettled([
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`, {
          signal: controller.signal
        }),
        fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=en|ja`, {
          signal: controller.signal
        })
      ]),
      DICTIONARY_TIMEOUT_MS,
      controller
    );

    let dictItem = null;
    if (dictResult.status === 'fulfilled' && dictResult.value.ok) {
      const data = await dictResult.value.json().catch(() => null);
      dictItem = Array.isArray(data) && data.length > 0 ? data[0] : null;
    }

    let jaMeaning = '';
    if (transResult.status === 'fulfilled' && transResult.value.ok) {
      const data = await transResult.value.json().catch(() => null);
      const translated = data?.responseData?.translatedText || '';
      // MyMemory echoes the source text back (or an error string) when it
      // has no real translation instead of failing the request outright.
      if (
        translated &&
        translated.toLowerCase() !== word.toLowerCase() &&
        !/invalid|no translation|could not|mymemory warning/i.test(translated)
      ) {
        jaMeaning = translated;
      }
    }

    const phonetic = dictItem?.phonetic || dictItem?.phonetics?.find(p => p.text)?.text || '';
    const firstMeaning = dictItem?.meanings && dictItem.meanings[0];
    const partOfSpeech = firstMeaning?.partOfSpeech || 'word';
    const enDef = firstMeaning?.definitions?.[0]?.definition || '';
    const example = firstMeaning?.definitions?.[0]?.example || '';

    if (!jaMeaning && enDef) {
      jaMeaning = `[英英] ${enDef}`;
    }

    if (!jaMeaning) {
      res.status(404).json({ found: false });
      return;
    }

    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
    res.status(200).json({
      found: true,
      word: dictItem?.word || word,
      phonetic,
      partOfSpeech,
      meaning: jaMeaning,
      techContext: `General & Technical English vocabulary: "${word}". Tap audio icon to practice pronunciation.`,
      example: example || `Common usage: "${word}" in technical documentation and news.`
    });
  } catch {
    res.status(504).json({ found: false, error: 'timeout' });
  }
}
