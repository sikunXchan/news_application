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
  const clean = cleanWord(selectedWord);
  const [data, setData] = useState(() => lookupDictionary(clean) || {
    word: clean,
    phonetic: '',
    partOfSpeech: 'term',
    meaning: '',
    techContext: '',
    example: ''
  });
  const [loading, setLoading] = useState(!lookupDictionary(clean));
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const isSaved = wordbook.some(item => cleanWord(item.word) === clean);

  useEffect(() => {
    if (!clean) return;

    const localHit = lookupDictionary(clean);
    if (localHit) {
      setData(localHit);
      setNotFound(false);
      setLoading(false);
      return;
    }

    setLoading(true);
    setNotFound(false);
    let isCancelled = false;

    fetchOnlineDefinition(clean).then(onlineData => {
      if (isCancelled) return;
      if (onlineData) {
        setData(onlineData);
        setNotFound(false);
      } else {
        // Neither the local dictionary nor the online lookup found a real
        // definition — say so plainly rather than showing a fake one.
        setData(null);
        setNotFound(true);
      }
      setLoading(false);
    });

    return () => {
      isCancelled = true;
    };
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
    if (!data?.meaning) return;
    onToggleWordbook({
      word: data.word || clean,
      phonetic: data.phonetic || '',
      partOfSpeech: data.partOfSpeech || 'noun',
      meaning: data.meaning,
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
              disabled={!data?.meaning}
              title={!data?.meaning ? "No definition to save" : isSaved ? "Remove from Wordbook" : "Save to Wordbook"}
            >
              {isSaved ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
            </button>
            <button className="popover-btn close-btn" onClick={onClose}>
              <X size={16} />
            </button>
          </div>
        </div>

        <div className="popover-body">
          {loading && !data?.meaning ? (
            <div className="popover-loading">
              <Loader2 className="animate-spin" size={18} />
              <span>Looking up translation & context...</span>
            </div>
          ) : notFound ? (
            <div className="popover-not-found">
              <span>この単語の意味を見つけられませんでした。</span>
              <p>通信環境をご確認のうえ、もう一度お試しください。</p>
            </div>
          ) : (
            <>
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
            </>
          )}

          <div className="popover-footer">
            <span className="popover-hint">
              💡 Tip: Tap speaker icon for audio. Tap bookmark to save to Wordbook.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};