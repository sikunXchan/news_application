import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, Bookmark, Share, MoreHorizontal, PawPrint, BookOpen, Volume2, Pause, Play, Languages
} from 'lucide-react';
import { InteractiveText } from './InteractiveText';

export const ArticleReaderModal = ({
  news,
  isOpen,
  onClose,
  onWordSelected,
  wordbook,
  onToggleWordbook
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showJapanese, setShowJapanese] = useState(false);
  const [isSaved, setIsSaved] = useState(false); // mock save state for this specific screen

  useEffect(() => {
    setIsPlaying(false);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    return () => {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    };
  }, [news?.id, isOpen]);

  if (!isOpen || !news) return null;

  const fullTextToRead = `${news.title}. ${news.fullArticle || news.summary.join(' ')}`;

  const toggleAudio = () => {
    if (!('speechSynthesis' in window)) return;
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(fullTextToRead);
      utterance.lang = 'en-US';
      utterance.rate = 1.0;
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  };

  return (
    <div className="reader-full-screen animate-slide-up">
      {/* Top Header */}
      <div className="reader-top-bar">
        <button className="icon-btn" onClick={onClose}><ArrowLeft size={24} /></button>
        <div className="reader-top-actions">
          <button className="icon-btn"><Bookmark size={22} /></button>
          <button className="icon-btn"><Share size={22} /></button>
          <button className="icon-btn"><MoreHorizontal size={22} /></button>
        </div>
      </div>

      <div className="reader-content-scrollable">
        <div className="reader-hero-img-box">
          <img 
            src={news.imageUrl} 
            alt={news.title} 
            className="reader-main-img"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000'; }}
          />
        </div>

        <div className="reader-body-content">
          <h1 className="reader-main-title">
            <InteractiveText text={news.title} onWordSelected={onWordSelected} />
          </h1>
          
          <div className="reader-meta-row">
            <span className="reader-date">{news.timeAgo}</span>
            <span className="reader-dot">•</span>
            <span className="reader-category">{news.tags?.[0] || 'AI'}</span>
          </div>

          <div className="reader-article-text">
            {news.fullArticle ? (
              news.fullArticle.split('\n\n').map((paragraph, pIdx) => (
                <p key={pIdx} className="article-paragraph">
                  <InteractiveText text={paragraph} onWordSelected={onWordSelected} />
                </p>
              ))
            ) : (
              news.summary.map((point, idx) => (
                <p key={idx} className="article-paragraph">
                  <InteractiveText text={point} onWordSelected={onWordSelected} />
                </p>
              ))
            )}
          </div>

          {/* Added Controls for Learning App context within Mockup style */}
          <div className="reader-tools-box">
             <button className="tool-btn" onClick={toggleAudio}>
               {isPlaying ? <Pause size={18} /> : <Volume2 size={18} />}
               <span>音声読上げ</span>
             </button>
             <button className={`tool-btn ${showJapanese ? 'active' : ''}`} onClick={() => setShowJapanese(!showJapanese)}>
               <Languages size={18} />
               <span>和訳を表示</span>
             </button>
          </div>

          {showJapanese && news.japaneseSummary && (
             <div className="reader-japanese-translation">
                {news.japaneseSummary.map((p, i) => <p key={i}>{p}</p>)}
             </div>
          )}

        </div>
      </div>

      {/* Bottom Sticky Action Bar */}
      <div className="reader-bottom-action-bar">
        <div className="reader-likes">
          <PawPrint size={24} className="paw-icon" />
          <span>128</span>
        </div>
        <button 
          className={`reader-save-btn ${isSaved ? 'saved' : ''}`}
          onClick={() => setIsSaved(!isSaved)}
        >
          <Bookmark size={20} fill={isSaved ? 'currentColor' : 'none'} />
          <span>{isSaved ? '保存済み' : 'あとで読む'}</span>
        </button>
      </div>
    </div>
  );
};