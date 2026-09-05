import React, { useState, useEffect } from 'react';
import dailyNewsData from './dailyNews.json';
import { TopBar } from './components/TopBar';
import { BottomNav } from './components/BottomNav';
import { DictionaryPopover } from './components/DictionaryPopover';
import { ArticleReaderModal } from './components/ArticleReaderModal';
import { WordbookModal } from './components/WordbookModal';
import { cleanWord } from './data/techDictionary';
import { HomeView } from './components/views/HomeView';
import { ReadLaterView } from './components/views/ReadLaterView';
import { SearchView } from './components/views/SearchView';
import { MyPageView } from './components/views/MyPageView';
import './index.css';

// Tech-focused categories mapped for mockup
const categories = [
  { id: 'all', label: 'トップ' },
  { id: 'ai', label: 'AI' },
  { id: 'web', label: 'ガジェット' },
  { id: 'cloud', label: 'スタートアップ' },
  { id: 'devops', label: '科学' },
];

export const App = () => {
  const [currentTab, setCurrentTab] = useState('home'); // home, read_later, search, mypage
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false); // Default to light mode for mockup
  
  const [dailyFeed] = useState(dailyNewsData);
  const [savedArticles, setSavedArticles] = useState([]);

  // Modals and Popover states
  const [popoverWord, setPopoverWord] = useState(null);
  const [popoverAnchor, setPopoverAnchor] = useState(null);
  const [activeReaderNews, setActiveReaderNews] = useState(null);
  const [isWordbookOpen, setIsWordbookOpen] = useState(false);

  // Wordbook stored in LocalStorage
  const [wordbook, setWordbook] = useState(() => {
    try {
      const saved = localStorage.getItem('techlingua_wordbook');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('techlingua_wordbook', JSON.stringify(wordbook));
    } catch (e) {
      console.warn("Failed to persist wordbook", e);
    }
  }, [wordbook]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleWordSelected = (word, rect) => {
    const clean = cleanWord(word);
    if (!clean) return;
    setPopoverWord(clean);
    setPopoverAnchor(rect);
  };

  const handleClosePopover = () => {
    setPopoverWord(null);
    setPopoverAnchor(null);
  };

  const handleToggleWordbook = (wordObj) => {
    const clean = cleanWord(wordObj.word);
    const existingIndex = wordbook.findIndex(item => cleanWord(item.word) === clean);
    if (existingIndex >= 0) {
      setWordbook(wordbook.filter((_, idx) => idx !== existingIndex));
    } else {
      setWordbook([{ ...wordObj, isMastered: false, savedAt: new Date().toISOString() }, ...wordbook]);
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

  const handleToggleSaveArticle = (news) => {
    const isSaved = savedArticles.some(a => a.id === news.id);
    if (isSaved) {
      setSavedArticles(savedArticles.filter(a => a.id !== news.id));
    } else {
      setSavedArticles([news, ...savedArticles]);
    }
  };

  const filteredNews = dailyFeed.filter(item => {
    if (activeCategory !== 'all' && item.category !== activeCategory) {
      return false;
    }
    return true;
  });

  const searchedNews = dailyFeed.filter(item => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return item.title.toLowerCase().includes(q) || 
           item.summary.some(s => s.toLowerCase().includes(q)) || 
           item.tags?.some(t => t.toLowerCase().includes(q));
  });

  return (
    <div className={`app-root ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="mobile-app-layout">
        <TopBar />
        
        <div className="main-content-scroll">
          {currentTab === 'home' && (
            <HomeView 
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              filteredNews={filteredNews}
              handleWordSelected={handleWordSelected}
              setActiveReaderNews={setActiveReaderNews}
              handleToggleWordbook={handleToggleWordbook}
              wordbook={wordbook}
              savedArticles={savedArticles}
              handleToggleSaveArticle={handleToggleSaveArticle}
            />
          )}
          {currentTab === 'read_later' && (
            <ReadLaterView 
              savedArticles={savedArticles}
              handleWordSelected={handleWordSelected}
              setActiveReaderNews={setActiveReaderNews}
              handleToggleWordbook={handleToggleWordbook}
              wordbook={wordbook}
              handleToggleSaveArticle={handleToggleSaveArticle}
            />
          )}
          {currentTab === 'search' && (
            <SearchView 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              searchedNews={searchedNews}
              handleWordSelected={handleWordSelected}
              setActiveReaderNews={setActiveReaderNews}
              handleToggleWordbook={handleToggleWordbook}
              wordbook={wordbook}
              savedArticles={savedArticles}
              handleToggleSaveArticle={handleToggleSaveArticle}
            />
          )}
          {currentTab === 'mypage' && (
            <MyPageView 
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
              onOpenWordbook={() => setIsWordbookOpen(true)}
              wordbookCount={wordbook.length}
            />
          )}
        </div>

        <BottomNav currentTab={currentTab} onTabChange={setCurrentTab} />

        {popoverWord && (
          <DictionaryPopover
            selectedWord={popoverWord}
            anchorRect={popoverAnchor}
            onClose={handleClosePopover}
            wordbook={wordbook}
            onToggleWordbook={handleToggleWordbook}
          />
        )}

        {activeReaderNews && (
          <ArticleReaderModal
            news={activeReaderNews}
            isOpen={!!activeReaderNews}
            onClose={() => setActiveReaderNews(null)}
            onWordSelected={handleWordSelected}
            wordbook={wordbook}
            onToggleWordbook={handleToggleWordbook}
            isSaved={savedArticles.some(a => a.id === activeReaderNews.id)}
            onToggleSave={() => handleToggleSaveArticle(activeReaderNews)}
          />
        )}

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