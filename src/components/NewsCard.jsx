import React, { useState } from 'react';
import { Bookmark, Sparkles, Volume2, BookOpen } from 'lucide-react';
import { InteractiveText } from './InteractiveText';

export const NewsCard = ({
  news,
  variant = 'list', // 'hero' | 'list'
  onWordSelected,
  onOpenReader,
  isSaved,
  onToggleSave
}) => {
  const highlightWords = news.keyVocabulary ? news.keyVocabulary.map(v => v.word) : [];

  if (variant === 'hero') {
    return (
      <article className="news-card hero-card animate-slide-up" onClick={() => onOpenReader(news)}>
        <div className="hero-image-wrap">
          <img 
            src={news.imageUrl} 
            alt={news.title} 
            className="hero-image" 
            loading="lazy" 
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000'; }}
          />
          <div className="hero-gradient"></div>
          <span className="hero-new-badge">NEW</span>
          <div className="hero-content">
            <h2 className="hero-title">
              <InteractiveText 
                text={news.title}
                onWordSelected={onWordSelected}
                highlightWords={highlightWords}
              />
            </h2>
            <div className="hero-meta">
              <span>{news.timeAgo}</span>
              <span className="meta-dot">•</span>
              <span>{news.tags?.[0] || 'Tech'}</span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // list variant
  return (
    <article className="news-card list-card animate-slide-up" onClick={() => onOpenReader(news)}>
      <div className="list-thumbnail">
        <img 
          src={news.imageUrl} 
          alt={news.title} 
          className="list-image" 
          loading="lazy" 
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000'; }}
        />
      </div>
      <div className="list-body">
        <h3 className="list-title">
          <InteractiveText 
            text={news.title}
            onWordSelected={onWordSelected}
            highlightWords={highlightWords}
          />
        </h3>
        <div className="list-meta">
          <span>{news.timeAgo}</span>
          <span className="meta-dot">•</span>
          <span>{news.tags?.[0] || 'Tech'}</span>
        </div>
      </div>
      <button 
        className="list-save-btn" 
        onClick={(e) => {
          e.stopPropagation();
          if(onToggleSave) onToggleSave();
        }}
      >
        <Bookmark size={20} className={isSaved ? 'saved-icon' : ''} fill={isSaved ? 'currentColor' : 'none'} />
      </button>
    </article>
  );
};