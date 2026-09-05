import React, { useState, useEffect } from 'react';
import { 
  Terminal, Sparkles, SlidersHorizontal, BookOpen, 
  BookmarkCheck, Search, Info, HelpCircle, Check 
} from 'lucide-react';
import dailyNewsData from './dailyNews.json';
import { Header } from './components/Header';
import { NewsCard } from './components/NewsCard';
import { DictionaryPopover } from './components/DictionaryPopover';
import { ArticleReaderModal } from './components/ArticleReaderModal';
import { WordbookModal } from './components/WordbookModal';
import { cleanWord } from './data/techDictionary';
import './index.css';

// Tech-focused categories
const categories = [
  { id: 'all', label: 'All Stories' },
  { id: 'ai', label: 'AI & Machine Learning' },
  { id: 'web', label: 'Web & Frontend' },
  { id: 'cloud', label: 'Cloud & Backend' },
  { id: 'devops', label: 'DevOps & Systems' },
  { id: 'security', label: 'Cybersecurity' },
  { id: 'career', label: 'Career & Open Source' },
];

export const App = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all'); // 'all' | 'beginner' | 'intermediate' | 'advanced'
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Feed & Live Update state
  const [dailyFeed, setDailyFeed] = useState(dailyNewsData);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdatedTime, setLastUpdatedTime] = useState('Today');

  // Modals and Popover states
  const [popoverWord, setPopoverWord] = useState(null);
  const [popoverAnchor, setPopoverAnchor] = useState(null);
  const [activeReaderNews, setActiveReaderNews] = useState(null);
  const [isWordbookOpen, setIsWordbookOpen] = useState(false);

  // Wordbook stored in LocalStorage
  const [wordbook, setWordbook] = useState(() => {
    try {
      const saved = localStorage.getItem('techlingua_wordbook');
      return saved ? JSON.parse(saved) : [
        {
          word: "orchestration",
          phonetic: "/ˌɔː.kɪˈstreɪ.ʃən/",
          partOfSpeech: "noun",
          meaning: "統合管理、オーケストレーション",
          techContext: "複数のコンテナやマイクロサービスの自動デプロイ・スケーリング管理（Kubernetes）。",
          example: "Kubernetes orchestrates Docker containers across cloud clusters.",
          isMastered: false,
          savedAt: new Date().toISOString()
        },
        {
          word: "hydrate",
          phonetic: "/ˈhaɪ.dreɪt/",
          partOfSpeech: "verb",
          meaning: "水和させる、ハイドレーションする",
          techContext: "SSR（サーバーレンダリング）されたHTMLにクライアント側でJSイベントを結合する処理。",
          example: "React hydrates the initial HTML snapshot in the browser.",
          isMastered: true,
          savedAt: new Date().toISOString()
        }
      ];
    } catch {
      return [];
    }
  });

  // Save wordbook to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('techlingua_wordbook', JSON.stringify(wordbook));
    } catch (e) {
      console.warn("Failed to persist wordbook", e);
    }
  }, [wordbook]);

  // Apply dark/light class to root element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Refresh latest news feed simulation & timestamp update
  const handleRefreshNews = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setDailyFeed([...dailyNewsData]);
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setLastUpdatedTime(`Today at ${timeStr}`);
      setIsRefreshing(false);
    }, 600);
  };

  // Handle word selection from long press or click
  const handleWordSelected = (word, rect) => {
    const clean = cleanWord(word);
    if (!clean) return;
    setPopoverWord(clean);
    setPopoverAnchor(rect);
  };

  // Close popover
  const handleClosePopover = () => {
    setPopoverWord(null);
    setPopoverAnchor(null);
  };

  // Toggle word in wordbook (Add / Remove)
  const handleToggleWordbook = (wordObj) => {
    const clean = cleanWord(wordObj.word);
    const existingIndex = wordbook.findIndex(item => cleanWord(item.word) === clean);

    if (existingIndex >= 0) {
      setWordbook(wordbook.filter((_, idx) => idx !== existingIndex));
    } else {
      setWordbook([
        {
          ...wordObj,
          isMastered: false,
          savedAt: new Date().toISOString()
        },
        ...wordbook
      ]);
    }
  };

  const handleRemoveWord = (word) => {
    const clean = cleanWord(word);
    setWordbook(wordbook.filter(w => cleanWord(w.word) !== clean));
  };

  const handleUpdateWordStatus = (word, isMastered) => {
    const clean = cleanWord(word);
    setWordbook(wordbook.map(w => {
      if (cleanWord(w.word) === clean) {
        return { ...w, isMastered };
      }
      return w;
    }));
  };

  // Filter news items
  const filteredNews = dailyFeed.filter(item => {
    // Category filter
    if (activeCategory !== 'all' && item.category !== activeCategory) {
      return false;
    }
    // Level filter
    if (selectedLevel !== 'all' && item.level?.toLowerCase() !== selectedLevel) {
      return false;
    }
    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const inTitle = item.title.toLowerCase().includes(q);
      const inSummary = item.summary.some(s => s.toLowerCase().includes(q));
      const inTags = item.tags?.some(t => t.toLowerCase().includes(q));
      const inVocab = item.keyVocabulary?.some(v => v.word.toLowerCase().includes(q) || v.meaning.toLowerCase().includes(q));
      if (!inTitle && !inSummary && !inTags && !inVocab) {
        return false;
      }
    }
    return true;
  });

  return (
    <div className={`app-root ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="app-layout">
        {/* Main Header */}
        <Header
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedLevel={selectedLevel}
          onLevelChange={setSelectedLevel}
          wordbookCount={wordbook.length}
          onOpenWordbook={() => setIsWordbookOpen(true)}
          isDarkMode={isDarkMode}
          onToggleTheme={() => setIsDarkMode(!isDarkMode)}
          onRefreshNews={handleRefreshNews}
          isRefreshing={isRefreshing}
          lastUpdatedTime={lastUpdatedTime}
        />

        {/* Learning Hint Banner */}
        <div className="learning-banner">
          <div className="banner-content">
            <Sparkles size={16} className="banner-icon" />
            <span>
              💡 <strong>Tech & English Pro Tip:</strong> Long press or tap on any English word to look up its programming context, listen to native pronunciation, and save it to your Wordbook!
            </span>
          </div>
        </div>

        {/* Category Navigation Pills */}
        <nav className="category-scroll-nav">
          <div className="category-pills-wrap">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`category-pill-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Main News Feed */}
        <main className="feed-container">
          {filteredNews.length === 0 ? (
            <div className="no-results-box">
              <BookOpen size={48} className="no-results-icon" />
              <h3>No articles found</h3>
              <p>Try adjusting your category, difficulty level, or search keyword.</p>
              <button 
                className="reset-filters-btn"
                onClick={() => {
                  setActiveCategory('all');
                  setSelectedLevel('all');
                  setSearchQuery('');
                }}
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="feed-grid">
              {filteredNews.map((news, index) => (
                <NewsCard
                  key={news.id}
                  news={news}
                  index={index}
                  onWordSelected={handleWordSelected}
                  onOpenReader={setActiveReaderNews}
                  onToggleWordbook={handleToggleWordbook}
                  wordbook={wordbook}
                />
              ))}
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="app-footer">
          <div className="footer-content">
            <div className="footer-brand">
              <Terminal size={18} />
              <span>TechLingua News</span>
            </div>
            <p className="footer-desc">
              Master cutting-edge software engineering and technical English simultaneously. Daily automated updates via RSS & AI.
            </p>
          </div>
        </footer>

        {/* Dictionary Popover */}
        {popoverWord && (
          <DictionaryPopover
            selectedWord={popoverWord}
            anchorRect={popoverAnchor}
            onClose={handleClosePopover}
            wordbook={wordbook}
            onToggleWordbook={handleToggleWordbook}
          />
        )}

        {/* Full Article Reader Modal */}
        {activeReaderNews && (
          <ArticleReaderModal
            news={activeReaderNews}
            isOpen={!!activeReaderNews}
            onClose={() => setActiveReaderNews(null)}
            onWordSelected={handleWordSelected}
            wordbook={wordbook}
            onToggleWordbook={handleToggleWordbook}
          />
        )}

        {/* Vocabulary Wordbook Modal */}
        {isWordbookOpen && (
          <WordbookModal
            isOpen={isWordbookOpen}
            onClose={() => setIsWordbookOpen(false)}
            wordbook={wordbook}
            onRemoveWord={handleRemoveWord}
            onUpdateWordStatus={handleUpdateWordStatus}
          />
        )}
      </div>
    </div>
  );
};

export default App;