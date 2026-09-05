import Parser from 'rss-parser';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

const { GEMINI_API_KEY } = process.env;

if (!GEMINI_API_KEY) {
  console.warn('Notice: GEMINI_API_KEY is not set in .env. Using bundled educational dataset.');
}

const ai = GEMINI_API_KEY ? new GoogleGenAI({ apiKey: GEMINI_API_KEY }) : null;
const parser = new Parser();

// Tech-focused RSS feeds for English & Engineering learning
const FEEDS = [
  { category: 'ai', url: 'https://dev.to/feed/tag/ai', source: 'DEV AI Community' },
  { category: 'web', url: 'https://dev.to/feed/tag/react', source: 'React & Web Weekly' },
  { category: 'cloud', url: 'https://dev.to/feed/tag/cloud', source: 'Cloud Architecture Hub' },
  { category: 'devops', url: 'https://dev.to/feed/tag/devops', source: 'DevOps & SRE Pulse' },
  { category: 'security', url: 'https://feeds.bbci.co.uk/news/technology/rss.xml', source: 'Cyber & Tech News' },
  { category: 'career', url: 'https://dev.to/feed/tag/career', source: 'Engineering Growth' }
];

// Helper to determine approximate read time
const estimateReadTime = (text) => {
  const words = text ? text.split(' ').length : 120;
  const time = Math.max(2, Math.ceil(words / 180));
  return `${time} min`;
};

// Generates educational English & Tech structured metadata via Gemini
const generatePrompt = (articleTitle, articleContent, category) => {
  return `
You are an expert Silicon Valley software architect and bilingual (English/Japanese) technical educator.
Analyze the following tech news article and output a structured JSON dataset designed to teach engineers both cutting-edge technology and professional technical English.

Article Title: ${articleTitle}
Content: ${articleContent}
Category: ${category}

Respond ONLY with a valid JSON object. Do not include markdown codeblocks (no \`\`\`json).

JSON Schema:
{
  "title": "${articleTitle}",
  "level": "Beginner or Intermediate or Advanced",
  "tags": ["#Tag1", "#Tag2", "#Tag3"],
  "summary": [
    "Concise English key point 1",
    "Concise English key point 2",
    "Concise English key point 3"
  ],
  "japaneseSummary": [
    "日本語要約ポイント1",
    "日本語要約ポイント2",
    "日本語要約ポイント3"
  ],
  "techTakeaway": "1-2 sentences in clear English explaining the architectural or engineering significance.",
  "techTakeawayJa": "技術的学び・影響の日本語訳（1文）",
  "keyVocabulary": [
    {
      "word": "English tech/news word",
      "meaning": "日本語の意味",
      "techNote": "プログラミングやシステム開発での実際の使われ方や背景解説"
    },
    {
      "word": "Second tech word",
      "meaning": "日本語の意味",
      "techNote": "技術現場での使われ方"
    }
  ],
  "grammarTip": "【Grammar/Expression Pattern】: 日本語による文法やフレーズの解説と例文",
  "fullArticle": "A 2-3 paragraph readable English article body summarizing the story with rich tech vocabulary.",
  "quiz": {
    "question": "A multiple-choice question testing technical understanding or reading comprehension (English)",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "answerIndex": 0,
    "explanation": "Why this answer is correct (English)."
  }
}
`;
};

async function processNewsItem(item, feedConfig, id) {
  if (!ai) return null;

  const prompt = generatePrompt(item.title, item.contentSnippet || item.content || item.title, feedConfig.category);
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        temperature: 0.2,
      }
    });

    let text = response.text;
    if (text.startsWith('```json')) {
      text = text.replace(/^```json\s*/, '').replace(/\s*```$/, '');
    } else if (text.startsWith('```')) {
      text = text.replace(/^```\s*/, '').replace(/\s*```$/, '');
    }

    const parsed = JSON.parse(text);

    return {
      id: id.toString(),
      category: feedConfig.category,
      title: parsed.title || item.title,
      source: feedConfig.source,
      timeAgo: 'Today',
      imageUrl: item.enclosure?.url || 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000',
      readTime: estimateReadTime(item.content || item.contentSnippet),
      level: parsed.level || 'Intermediate',
      tags: parsed.tags || ['#Tech', '#Engineering'],
      summary: parsed.summary || [item.title],
      japaneseSummary: parsed.japaneseSummary || [],
      techTakeaway: parsed.techTakeaway || '',
      techTakeawayJa: parsed.techTakeawayJa || '',
      keyVocabulary: parsed.keyVocabulary || [],
      grammarTip: parsed.grammarTip || '',
      fullArticle: parsed.fullArticle || item.contentSnippet || item.title,
      quiz: parsed.quiz || null
    };
  } catch (error) {
    console.warn(`Failed to process item: ${item.title}. Error: ${error.message}`);
    return null;
  }
}

async function run() {
  if (!ai) {
    console.log('Skipping RSS generation since GEMINI_API_KEY is not configured.');
    return;
  }

  console.log('Starting daily tech news fetch via RSS and AI enrichment...');
  const allNews = [];
  let currentId = 1;

  for (const feedConfig of FEEDS) {
    console.log(`Fetching feed for category: ${feedConfig.category}...`);
    try {
      const feed = await parser.parseURL(feedConfig.url);
      const topItems = feed.items.slice(0, 2); 

      for (const item of topItems) {
        console.log(`Processing: ${item.title}`);
        const newsObj = await processNewsItem(item, feedConfig, currentId++);
        if (newsObj) {
          allNews.push(newsObj);
        }
        await new Promise(r => setTimeout(r, 6000));
      }
    } catch (e) {
      console.error(`Error processing feed ${feedConfig.category}: ${e.message}`);
    }
  }

  if (allNews.length > 0) {
    const outputPath = path.join(process.cwd(), 'src', 'dailyNews.json');
    fs.writeFileSync(outputPath, JSON.stringify(allNews, null, 2), 'utf8');
    console.log(`Successfully generated ${allNews.length} enriched news items to ${outputPath}`);
  }
}

run();