import React, { useState } from 'react';
import { 
  Sparkles, Volume2, BookOpen, Languages, ChevronDown, 
  ChevronUp, ExternalLink, HelpCircle, Code2 
} from 'lucide-react';
import { InteractiveText } from './InteractiveText';

export const NewsCard = ({
  news,
  index,
  onWordSelected,
  onOpenReader,
  onToggleWordbook,
  wordbook
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showJapanese, setShowJapanese] = useState(false);

  const handleAudioPreview = (e) => {
    e.stopPropagation();
    if (!('speechSynthesis' in window)) return;

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      window.speechSynthesis.cancel();
      const textToSpeak = `${news.title}. ${news.summary.join(' ')}`;
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = 'en-US';
      utterance.rate = 1.0;
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  };

  const handleVocabChipClick = (e, vocab) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    onWordSelected(vocab.word, rect);
  };

  const highlightWords = news.keyVocabulary ? news.keyVocabulary.map(v => v.word) : [];

  return (
    <article className="news-card animate-slide-up" style={{ animationDelay: `${index * 0.08}s` }}>
      <div className="card-image-wrap" onClick={() => onOpenReader(news)}>
        <img src={news.imageUrl} alt={news.title} className="card-image" loading="lazy" />
        <div className="card-image-gradient"></div>
        
        <div className="card-badges-top">
          <span className={`level-tag level-${news.level?.toLowerCase() || 'intermediate'}`}>
            {news.level || 'Intermediate'}
          </span>
          <span className="source-tag">{news.source}</span>
        </div>

        <div className="card-tags-bottom">
          {news.tags?.slice(0, 3).map(tag => (
            <span key={tag} className="tag-chip">{tag}</span>
          ))}
        </div>
      </div>

      <div className="card-body">
        <div className="card-meta-row">
          <span className="card-time">{news.timeAgo}</span>
          <span className="meta-separator">•</span>
          <span className="card-read-time">{news.readTime} read</span>
          
          <button 
            className={`card-audio-btn ${isPlaying ? 'playing' : ''}`}
            onClick={handleAudioPreview}
            title={isPlaying ? "Stop audio" : "Listen summary audio"}
          >
            <Volume2 size={15} />
            <span>{isPlaying ? 'Playing' : 'Listen'}</span>
          </button>
        </div>

        <h2 className="card-title" onClick={() => onOpenReader(news)}>
          <InteractiveText 
            text={news.title}
            onWordSelected={onWordSelected}
            highlightWords={highlightWords}
          />
        </h2>

        {/* 3-point English Summary */}
        <ul className="card-summary-list">
          {news.summary.map((point, idx) => (
            <li key={idx} className="summary-item">
              <InteractiveText 
                text={point}
                onWordSelected={onWordSelected}
                highlightWords={highlightWords}
              />
              {showJapanese && news.japaneseSummary && news.japaneseSummary[idx] && (
                <div className="japanese-translation">
                  → {news.japaneseSummary[idx]}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Key Tech Takeaway Box */}
        {news.techTakeaway && (
          <div className="card-takeaway-box">
            <div className="takeaway-header">
              <Sparkles size={14} className="takeaway-icon" />
              <span>Tech Takeaway</span>
            </div>
            <p className="takeaway-text">
              <InteractiveText 
                text={news.techTakeaway}
                onWordSelected={onWordSelected}
              />
            </p>
            {showJapanese && news.techTakeawayJa && (
              <p className="takeaway-text-ja">
                【訳】: {news.techTakeawayJa}
              </p>
            )}
          </div>
        )}

        {/* Essential Vocabulary Chips */}
        {news.keyVocabulary && news.keyVocabulary.length > 0 && (
          <div className="card-vocab-row">
            <div className="vocab-label">
              <Code2 size={13} />
              <span>Key Vocab:</span>
            </div>
            <div className="vocab-chips-container">
              {news.keyVocabulary.map((v, vIdx) => (
                <button
                  key={vIdx}
                  className="vocab-chip"
                  onClick={(e) => handleVocabChipClick(e, v)}
                  title={`Tap to inspect "${v.word}"`}
                >
                  <span className="vocab-chip-word">{v.word}</span>
                  <span className="vocab-chip-meaning">{v.meaning}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Card Actions Footer */}
        <div className="card-footer-actions">
          <button 
            className="footer-btn read-full-btn"
            onClick={() => onOpenReader(news)}
          >
            <BookOpen size={16} />
            <span>Full Story & Quiz</span>
          </button>

          <button 
            className={`footer-btn translation-btn ${showJapanese ? 'active' : ''}`}
            onClick={() => setShowJapanese(!showJapanese)}
            title="Toggle Japanese translation"
          >
            <Languages size={15} />
            <span>{showJapanese ? 'Hide 日本語' : '日本語'}</span>
          </button>
        </div>
      </div>
    </article>
  );
};