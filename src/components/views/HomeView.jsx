import React from 'react';
import { NewsCard } from '../NewsCard';

export const HomeView = ({ 
  categories, activeCategory, setActiveCategory, 
  filteredNews, handleWordSelected, setActiveReaderNews, 
  handleToggleWordbook, wordbook, handleToggleSaveArticle, savedArticles
}) => {
  return (
    <div className="view-container">
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

      <main className="feed-container">
        {filteredNews.length === 0 ? (
          <div className="no-results-box">
            <p>記事がありません</p>
          </div>
        ) : (
          <div className="feed-grid">
            {filteredNews.map((news, index) => {
              const isSaved = savedArticles.some(a => a.id === news.id);
              return (
                <NewsCard
                  key={news.id}
                  news={news}
                  variant={index === 0 ? 'hero' : 'list'}
                  onWordSelected={handleWordSelected}
                  onOpenReader={setActiveReaderNews}
                  onToggleWordbook={handleToggleWordbook}
                  wordbook={wordbook}
                  isSaved={isSaved}
                  onToggleSave={() => handleToggleSaveArticle(news)}
                />
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
};
