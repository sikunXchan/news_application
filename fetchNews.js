import Parser from 'rss-parser';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

const { GEMINI_API_KEY } = process.env;

if (!GEMINI_API_KEY) {
  console.error('Error: GEMINI_API_KEY is not set in .env');
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
const parser = new Parser();

// Global English RSS Feeds to demonstrate translation
const FEEDS = [
  { category: 'tech', url: 'https://feeds.bbci.co.uk/news/technology/rss.xml' },
  { category: 'business', url: 'https://feeds.bbci.co.uk/news/business/rss.xml' },
  { category: 'world', url: 'https://feeds.bbci.co.uk/news/world/rss.xml' },
  { category: 'science', url: 'https://feeds.bbci.co.uk/news/science_and_environment/rss.xml' },
  { category: 'entertainment', url: 'https://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml' }
];

// Helper to determine approximate read time simply
const estimateReadTime = (text) => {
  const words = text ? text.split(' ').length : 100;
  const time = Math.max(1, Math.ceil(words / 200));
  return `${time} min`;
};

// Prompt for Gemini
const generatePrompt = (articleTitle, articleContent, category) => {
  return `
あなたはプロの日本語ニュース編集者であり、多忙な読者向けに「AIパーソナル新聞」を制作しています。
以下の英語のニュース記事のタイトルと概要から、読者が一瞬で内容を把握でき、UI映えするJSONデータを生成してください。
【重要】元のニュースは英語ですが、出力する文字列（summary、whyYouShouldCare、eli5Summary）はすべて**必ず自然で洗練された日本語に翻訳**してください。英語は絶対に残さないでください。

ニュースの内容:
タイトル: ${articleTitle}
概要: ${articleContent}
カテゴリ: ${category}

以下のJSONフォーマットで出力してください。Markdownのコードブロック（\`\`\`json など）は**絶対に含めず**、純粋なJSON文字列のみを出力してください。

{
  "title": "${articleTitle}", // タイトルは原文の英語のままで構いません（必要なら日本語訳を併記しても良いです）
  "vibe": "positive or negative or alert or info or curious", // ニュースの雰囲気に最も近いものを1つ選ぶ（小文字の英語）
  "summary": [
    "箇条書き1（日本語）",
    "箇条書き2（日本語）",
    "箇条書き3（日本語）"
  ], // 【重要】記事の内容を、必ず3つの簡潔な日本語の箇条書きポイントに翻訳・要約してください。
  "whyYouShouldCare": "このニュースが一般の日本人読者の生活や仕事にどう関わるか、1文で教えてください。（日本語）",
  "isComplex": true または false, // テクノロジーや経済、難しい政治など、小学生には理解が難しそうなトピックならtrue、そうでなければfalse
  "eli5Summary": [
    "小学生向け説明1",
    "小学生向け説明2",
    "小学生向け説明3"
  ] // isComplexがtrueの場合のみ必須。難しい専門用語を使わず、小学生でもわかるように【日本語】で3行で説明してください。isComplexがfalseの場合は省略可。
}
`;
};

async function processNewsItem(item, category, id) {
  const prompt = generatePrompt(item.title, item.content || item.contentSnippet || item.title, category);
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        temperature: 0.2, // Low temperature for consistent JSON
      }
    });

    let text = response.text;
    
    // Safety matching in case the model returns markdown format despite instructions
    if (text.startsWith('\`\`\`json')) {
      text = text.replace(/^\`\`\`json\s*/, '').replace(/\s*\`\`\`$/, '');
    } else if (text.startsWith('\`\`\`')) {
       text = text.replace(/^\`\`\`\s*/, '').replace(/\s*\`\`\`$/, '');
    }

    const parsedAiData = JSON.parse(text);

    return {
      id: id.toString(),
      category: category,
      title: parsedAiData.title || item.title,
      source: 'BBC News', // We are using BBC as the source for all for simplicity in this demo
      timeAgo: 'Today', // Simplifying time
      imageUrl: item.enclosure?.url || 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&q=80&w=1000',
      readTime: estimateReadTime(item.content),
      vibe: parsedAiData.vibe || 'info',
      summary: parsedAiData.summary,
      whyYouShouldCare: parsedAiData.whyYouShouldCare,
      isComplex: parsedAiData.isComplex || false,
      eli5Summary: parsedAiData.eli5Summary
    };

  } catch (error) {
    console.warn(`Failed to process item: ${item.title}. Error: ${error.message}`);
    return null; // Skip if parsing fails
  }
}

async function run() {
  console.log('Starting daily news fetch via RSS and processing via Gemini (English to Japanese)...');
  const allNews = [];
  let currentId = 1;

  for (const feedConfig of FEEDS) {
    console.log(`Fetching feed for category: ${feedConfig.category}...`);
    try {
      const feed = await parser.parseURL(feedConfig.url);
      
      // Get top 3 items per category (15 total) for a fast daily feed
      const topItems = feed.items.slice(0, 3); 

      for (const item of topItems) {
        console.log(`Processing: ${item.title}`);
        const newsObj = await processNewsItem(item, feedConfig.category, currentId++);
        if (newsObj) {
          allNews.push(newsObj);
        }
        
        // Delay 5 seconds between API calls to respect rate limits
        console.log('Waiting 5 seconds...');
        await new Promise(r => setTimeout(r, 5000));
      }
    } catch (e) {
      console.error(`Error processing feed ${feedConfig.category}: ${e.message}`);
    }
  }

  // Save to src directory so React can import it directly
  if (allNews.length === 0) {
    console.error('Error: No news items were successfully processed. This might be due to a blocked/leaked API key or rate limiting.');
    process.exit(1);
  }

  const outputPath = path.join(process.cwd(), 'src', 'dailyNews.json');
  fs.writeFileSync(outputPath, JSON.stringify(allNews, null, 2), 'utf8');
  console.log(`Successfully generated ${allNews.length} news items to ${outputPath}`);
}

run();
