import React from 'react';
import { Search } from 'lucide-react';
import { NewsCard } from '../NewsCard';

export const SearchView = ({ 
  searchQuery, setSearchQuery, searchedNews,
  handleWordSelected, setActiveReaderNews, 
  handleToggleWordbook, wordbook, savedArticles, handleToggleSaveArticle
}) => {
  return (
    <div className="view-container search-view">
      <div className="search-bar-wrapper">
        <Search size={20} className="search-icon" />
        <input 
          type="text" 
          className="search-input-field" 
          placeholder="ニュースを検索..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="feed-container mt-4">
        {searchQuery && searchedNews.length === 0 ? (
          <div className="no-results-box">
            <p>見つかりませんでした</p>
          </div>
        ) : (
          <div className="feed-grid">
            {searchedNews.map((news) => {
              const isSaved = savedArticles.some(a => a.id === news.id);
              return (
                <NewsCard
                  key={news.id}
                  news={news}
                  variant="list"
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
      </div>
    </div>
  );
};
