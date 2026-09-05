import React, { useState } from 'react';
import { NewsCard } from '../NewsCard';

export const ReadLaterView = ({ 
  savedArticles, handleWordSelected, setActiveReaderNews, 
  handleToggleWordbook, wordbook, handleToggleSaveArticle 
}) => {
  const [filter, setFilter] = useState('all'); // all, unread, read (mocked)

  return (
    <div className="view-container read-later-view">
      <h2 className="view-title">あとで読む</h2>
      
      <div className="read-later-tabs">
        <button className={`rl-tab ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>すべて</button>
        <button className={`rl-tab ${filter === 'unread' ? 'active' : ''}`} onClick={() => setFilter('unread')}>未読</button>
        <button className={`rl-tab ${filter === 'read' ? 'active' : ''}`} onClick={() => setFilter('read')}>既読</button>
      </div>

      <div className="feed-container">
        {savedArticles.length === 0 ? (
          <div className="no-results-box">
            <p>保存された記事はありません</p>
          </div>
        ) : (
          <div className="feed-grid">
            {savedArticles.map((news) => (
              <NewsCard
                key={news.id}
                news={news}
                variant="list"
                onWordSelected={handleWordSelected}
                onOpenReader={setActiveReaderNews}
                onToggleWordbook={handleToggleWordbook}
                wordbook={wordbook}
                isSaved={true}
                onToggleSave={() => handleToggleSaveArticle(news)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
