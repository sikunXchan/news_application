import React, { useState, useEffect } from 'react';
import { Volume2, Bookmark, BookmarkCheck, X, Sparkles, Code2, ExternalLink, Loader2 } from 'lucide-react';
import { lookupDictionary, fetchOnlineDefinition, cleanWord } from '../data/techDictionary';

export const DictionaryPopover = ({
  selectedWord,
  anchorRect,
  onClose,
  wordbook,
  onToggleWordbook
}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const clean = cleanWord(selectedWord);
  const isSaved = wordbook.some(item => cleanWord(item.word) === clean);

  useEffect(() => {
    if (!clean) {
      setData(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    const localHit = lookupDictionary(clean);
    if (localHit) {
      setData(localHit);
      setLoading(false);
    } else {
      // Async online fallback
      fetchOnlineDefinition(clean).then(onlineData => {
        if (onlineData) {
          setData(onlineData);
        } else {
          // Minimal fallback
          setData({
            word: clean,
            phonetic: "",
            partOfSpeech: "term",
            meaning: `No direct definition found for "${clean}".`,
            techContext: "Tap audio to hear pronunciation or search documentation.",
            example: ""
          });
        }
        setLoading(false);
      });
    }
  }, [clean]);

  const handleSpeak = (e) => {
    e?.stopPropagation();
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(data?.word || clean);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    setIsPlayingAudio(true);
    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);
    window.speechSynthesis.speak(utterance);
  };

  const handleSaveToggle = (e) => {
    e?.stopPropagation();
    if (!data) return;
    onToggleWordbook({
      word: data.word || clean,
      phonetic: data.phonetic || '',
      partOfSpeech: data.partOfSpeech || 'noun',
      meaning: data.meaning || '',
      techContext: data.techContext || '',
      example: data.example || '',
      savedAt: new Date().toISOString()
    });
  };

  // Calculate popover positioning relative to viewport
  const style = {};
  if (anchorRect) {
    const isMobile = window.innerWidth <= 640;
    if (!isMobile) {
      const top = anchorRect.bottom + 8;
      const left = Math.max(16, Math.min(window.innerWidth - 340, anchorRect.left - 40));
      style.top = `${top}px`;
      style.left = `${left}px`;
    }
  }

  return (
    <div className="popover-overlay" onClick={onClose}>
      <div 
        className="dictionary-popover animate-scale-up" 
        style={style}
        onClick={e => e.stopPropagation()}
      >
        <div className="popover-header">
          <div className="popover-word-group">
            <h3 className="popover-word">{data?.word || clean}</h3>
            {data?.phonetic && <span className="popover-phonetic">{data.phonetic}</span>}
            {data?.partOfSpeech && <span className="popover-badge">{data.partOfSpeech}</span>}
          </div>
          
          <div className="popover-actions">
            <button 
              className={`popover-btn audio-btn ${isPlayingAudio ? 'active' : ''}`}
              onClick={handleSpeak}
              title="Pronounce"
            >
              <Volume2 size={16} />
            </button>
            <button 
              className={`popover-btn save-btn ${isSaved ? 'saved' : ''}`}
              onClick={handleSaveToggle}
              title={isSaved ? "Remove from Wordbook" : "Save to Wordbook"}
            >
              {isSaved ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
            </button>
            <button className="popover-btn close-btn" onClick={onClose}>
              <X size={16} />
            </button>
          </div>
        </div>

        {loading ? (
          <div className="popover-loading">
            <Loader2 className="animate-spin" size={20} />
            <span>Looking up definition...</span>
          </div>
        ) : (
          <div className="popover-body">
            {data?.meaning && (
              <div className="popover-meaning-section">
                <span className="section-label">Definition / 意味:</span>
                <p className="popover-meaning">{data.meaning}</p>
              </div>
            )}

            {data?.techContext && (
              <div className="popover-tech-section">
                <div className="section-title">
                  <Code2 size={13} />
                  <span>Tech & Programming Context</span>
                </div>
                <p className="popover-tech-text">{data.techContext}</p>
              </div>
            )}

            {data?.example && (
              <div className="popover-example-section">
                <span className="section-label">Example:</span>
                <p className="popover-example">"{data.example}"</p>
              </div>
            )}

            <div className="popover-footer">
              <span className="popover-hint">
                💡 Long press or click any word while reading for instant definition!
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};