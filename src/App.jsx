import React, { useState, useEffect } from 'react';
import { Search, Settings, Sparkles, BrainCircuit, User } from 'lucide-react';
import dailyNewsData from './dailyNews.json';
import './index.css';

// Manual category setup since mockData is being removed
const categories = [
  { id: 'all', label: 'All' },
  { id: 'tech', label: 'Technology' },
  { id: 'business', label: 'Business' },
  { id: 'world', label: 'World' },
  { id: 'science', label: 'Science' },
  { id: 'entertainment', label: 'Entertainment' },
];

const NewsCard = ({ news, index }) => {
  const [isEli5, setIsEli5] = useState(false);
  const summaryToDisplay = isEli5 && news.eli5Summary ? news.eli5Summary : news.summary;
  const getImageForVibe = (vibe) => {
    if (vibe === 'positive') return '/positive_news_dog.jpg';
    if (vibe === 'negative' || vibe === 'alert') return '/negative_news_dog.jpg';
    return '/neutral_news_dog.jpg';
  };

  const imageSrc = getImageForVibe(news.vibe);

  return (
    <article className="news-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="card-image-container">
        <img src={imageSrc} alt={news.title} className="card-image" />
        <div className="vibe-overlay"></div>
        <div className={`vibe-indicator vibe-${news.vibe}`}>
          <Sparkles size={12} />
          {news.vibe}
        </div>
      </div>
      
      <div className="card-content">
        <div className="card-meta">
          <span className="card-source">{news.source}</span>
          <span className="card-dot"></span>
          <span>{news.timeAgo}</span>
          <span className="card-dot"></span>
          <span>{news.readTime} read</span>
        </div>
        
        <h2 className="card-title">{news.title}</h2>
        
        <ul className="summary-list">
          {summaryToDisplay.map((point, idx) => (
            <li key={idx} className="summary-item">{point}</li>
          ))}
        </ul>

        {news.isComplex && news.eli5Summary && (
          <button 
            className={`simplify-button ${isEli5 ? 'active' : ''}`}
            onClick={() => setIsEli5(!isEli5)}
          >
            <BrainCircuit size={16} />
            {isEli5 ? '戻る' : 'AI解説'}
          </button>
        )}

        {news.whyYouShouldCare && (
          <div className="why-care-block">
            <User size={14} className="why-care-icon" />
            <p className="why-care-text">{news.whyYouShouldCare}</p>
          </div>
        )}
      </div>
    </article>
  );
};

const App = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentDate, setCurrentDate] = useState('');
  const [dailyFeed, setDailyFeed] = useState([]);

  useEffect(() => {
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    setCurrentDate(date.toLocaleDateString('en-US', options));

    // Only use the real AI generated, translated JSON
    setDailyFeed(dailyNewsData);
  }, []);

  const filteredNews = activeCategory === 'all' 
    ? dailyFeed 
    : dailyFeed.filter(n => n.category === activeCategory);

  const totalReadTime = filteredNews.reduce((acc, curr) => {
    return acc + parseInt(curr.readTime);
  }, 0);

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-branding">
          <h1 className="header-title">LILY AI NEWS</h1>
          <span className="header-date">{currentDate} • {totalReadTime}m total</span>
        </div>
        <div className="header-actions">
          <button className="icon-button"><Search size={22} /></button>
          <button className="icon-button"><Settings size={22} /></button>
        </div>
      </header>

      <nav className="category-nav">
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`category-pill ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </nav>

      <main className="news-feed">
        {filteredNews.map((news, index) => (
          <NewsCard key={news.id} news={news} index={index} />
        ))}
      </main>
    </div>
  );
};

export default App;
