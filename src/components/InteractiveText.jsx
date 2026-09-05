import React, { useRef } from 'react';
import { cleanWord } from '../data/techDictionary';

export const InteractiveText = ({ 
  text, 
  className = "", 
  onWordSelected,
  highlightWords = []
}) => {
  const touchTimerRef = useRef(null);
  const isLongPressRef = useRef(false);

  if (!text) return null;

  // Split text into tokens (words and separators)
  const tokens = text.split(/(\s+|[.,!?;:()""'`[\]{}]+)/);

  const handleTouchStart = (e, word) => {
    const clean = cleanWord(word);
    if (!clean) return;

    isLongPressRef.current = false;
    const target = e.currentTarget;

    touchTimerRef.current = setTimeout(() => {
      isLongPressRef.current = true;
      if (navigator.vibrate) {
        try { navigator.vibrate(40); } catch (_) {}
      }
      const rect = target.getBoundingClientRect();
      onWordSelected?.(clean, rect);
    }, 380); // 380ms for long press
  };

  const handleTouchEnd = (e, word) => {
    if (touchTimerRef.current) {
      clearTimeout(touchTimerRef.current);
      touchTimerRef.current = null;
    }
  };

  const handleTouchMove = () => {
    if (touchTimerRef.current) {
      clearTimeout(touchTimerRef.current);
      touchTimerRef.current = null;
    }
  };

  const handleClick = (e, word) => {
    // If long press already triggered on mobile, avoid double action
    if (isLongPressRef.current) {
      isLongPressRef.current = false;
      return;
    }
    const clean = cleanWord(word);
    if (!clean) return;
    const rect = e.currentTarget.getBoundingClientRect();
    onWordSelected?.(clean, rect);
  };

  return (
    <span className={`interactive-text-container ${className}`}>
      {tokens.map((token, idx) => {
        const clean = cleanWord(token);
        const isWord = clean.length > 0 && /^[a-zA-Z0-9_-]+$/.test(clean);

        if (!isWord) {
          return <span key={idx}>{token}</span>;
        }

        const isHighlighted = highlightWords.some(hw => cleanWord(hw) === clean);

        return (
          <span
            key={idx}
            className={`interactive-word ${isHighlighted ? 'highlight-keyword' : ''}`}
            onTouchStart={(e) => handleTouchStart(e, token)}
            onTouchEnd={(e) => handleTouchEnd(e, token)}
            onTouchMove={handleTouchMove}
            onClick={(e) => handleClick(e, token)}
            title="Long press or tap for Tech English definition"
          >
            {token}
          </span>
        );
      })}
    </span>
  );
};