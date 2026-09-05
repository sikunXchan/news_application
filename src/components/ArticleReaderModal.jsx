import React, { useState, useEffect } from 'react';
import { 
  X, Volume2, VolumeX, Play, Pause, RotateCcw, 
  Sparkles, CheckCircle2, HelpCircle, BookOpen, 
  Code2, Bookmark, BookmarkCheck, Languages, Award
} from 'lucide-react';
import confetti from 'canvas-confetti';
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
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [showJapanese, setShowJapanese] = useState(false);
  
  // Quiz state
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  useEffect(() => {
    // Reset state on new article
    setIsPlaying(false);
    setSelectedAnswer(null);
    setQuizSubmitted(false);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [news?.id, isOpen]);

  if (!isOpen || !news) return null;

  const fullTextToRead = `${news.title}. ${news.fullArticle || news.summary.join(' ')}`;

  const toggleAudio = () => {
    if (!('speechSynthesis' in window)) {
      alert("Text-to-speech is not supported in this browser.");
      return;
    }

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(fullTextToRead);
      utterance.lang = 'en-US';
      utterance.rate = playbackRate;
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  };

  const changeRate = (rate) => {
    setPlaybackRate(rate);
    if (isPlaying) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(fullTextToRead);
      utterance.lang = 'en-US';
      utterance.rate = rate;
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleAnswerSelect = (index) => {
    if (quizSubmitted) return;
    setSelectedAnswer(index);
  };

  const handleQuizSubmit = () => {
    if (selectedAnswer === null) return;
    setQuizSubmitted(true);
    if (selectedAnswer === news.quiz?.answerIndex) {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 }
      });
    }
  };

  const isWordSaved = (word) => {
    return wordbook.some(w => w.word.toLowerCase() === word.toLowerCase());
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container reader-modal animate-scale-up" onClick={e => e.stopPropagation()}>
        <div className="reader-header">
          <div className="reader-meta-group">
            <span className={`level-pill level-${news.level?.toLowerCase() || 'intermediate'}`}>
              {news.level || 'Intermediate'}
            </span>
            <span className="reader-source">{news.source}</span>
            <span className="reader-dot">•</span>
            <span className="reader-time">{news.readTime}</span>
          </div>
          <button className="icon-button close-button" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="reader-hero-image-wrap">
          <img src={news.imageUrl} alt={news.title} className="reader-hero-image" />
          <div className="reader-tags-bar">
            {news.tags?.map(tag => (
              <span key={tag} className="reader-tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="reader-content-scroll">
          {/* Audio Control Bar */}
          <div className="reader-audio-bar">
            <div className="audio-left">
              <button 
                className={`audio-play-btn ${isPlaying ? 'playing' : ''}`}
                onClick={toggleAudio}
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                <span>{isPlaying ? 'Pause Audio' : 'Listen Article (TTS)'}</span>
              </button>
              
              <div className="rate-selector">
                {[0.8, 1.0, 1.2].map(rate => (
                  <button
                    key={rate}
                    className={`rate-btn ${playbackRate === rate ? 'active' : ''}`}
                    onClick={() => changeRate(rate)}
                  >
                    {rate}x
                  </button>
                ))}
              </div>
            </div>

            <button 
              className={`translation-toggle-btn ${showJapanese ? 'active' : ''}`}
              onClick={() => setShowJapanese(!showJapanese)}
            >
              <Languages size={16} />
              <span>{showJapanese ? 'Hide Japanese' : '日本語対訳'}</span>
            </button>
          </div>

          <h1 className="reader-title">
            <InteractiveText 
              text={news.title}
              onWordSelected={onWordSelected}
            />
          </h1>

          {/* Key Tech Insights */}
          <div className="reader-insight-card">
            <div className="insight-header">
              <Sparkles size={16} className="insight-icon" />
              <span>Key Tech Takeaway & Architectural Impact</span>
            </div>
            <p className="insight-text">
              <InteractiveText 
                text={news.techTakeaway}
                onWordSelected={onWordSelected}
              />
            </p>
            {showJapanese && news.techTakeawayJa && (
              <p className="insight-text-ja">【日本語訳】: {news.techTakeawayJa}</p>
            )}
          </div>

          {/* Article Full Text */}
          <div className="reader-article-body">
            <div className="section-title-bar">
              <BookOpen size={16} />
              <span>Full Story (Tap or long-press words for instant definition)</span>
            </div>

            {news.fullArticle ? (
              news.fullArticle.split('\n\n').map((paragraph, pIdx) => (
                <p key={pIdx} className="article-paragraph">
                  <InteractiveText 
                    text={paragraph}
                    onWordSelected={onWordSelected}
                  />
                </p>
              ))
            ) : (
              <ul className="reader-summary-list">
                {news.summary.map((point, idx) => (
                  <li key={idx} className="reader-summary-item">
                    <InteractiveText 
                      text={point}
                      onWordSelected={onWordSelected}
                    />
                    {showJapanese && news.japaneseSummary && news.japaneseSummary[idx] && (
                      <div className="point-ja">→ {news.japaneseSummary[idx]}</div>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Key Vocabulary Section */}
          {news.keyVocabulary && news.keyVocabulary.length > 0 && (
            <div className="reader-vocab-section">
              <div className="section-title-bar">
                <Code2 size={16} />
                <span>Essential Tech & English Vocabulary in this Article</span>
              </div>
              <div className="vocab-cards-grid">
                {news.keyVocabulary.map((v, vIdx) => {
                  const saved = isWordSaved(v.word);
                  return (
                    <div key={vIdx} className="vocab-card">
                      <div className="vocab-card-top">
                        <span className="vocab-word-name">{v.word}</span>
                        <button 
                          className={`vocab-save-btn ${saved ? 'saved' : ''}`}
                          onClick={() => onToggleWordbook({
                            word: v.word,
                            meaning: v.meaning,
                            techContext: v.techNote,
                            example: `Encountered in article: "${news.title}"`,
                            savedAt: new Date().toISOString()
                          })}
                        >
                          {saved ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
                        </button>
                      </div>
                      <p className="vocab-meaning-ja">{v.meaning}</p>
                      {v.techNote && (
                        <p className="vocab-technote">💡 {v.techNote}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Grammar & Language Tips */}
          {news.grammarTip && (
            <div className="reader-grammar-tip">
              <div className="grammar-tip-header">
                <Award size={16} />
                <span>English Language & Technical Grammar Tip</span>
              </div>
              <p className="grammar-tip-content">{news.grammarTip}</p>
            </div>
          )}

          {/* Comprehension Quiz */}
          {news.quiz && (
            <div className="reader-quiz-container">
              <div className="quiz-header">
                <HelpCircle size={18} />
                <span>Comprehension & Vocabulary Check</span>
              </div>
              <h4 className="quiz-question">{news.quiz.question}</h4>

              <div className="quiz-options-list">
                {news.quiz.options.map((option, optIdx) => {
                  let optionClass = "quiz-option";
                  if (quizSubmitted) {
                    if (optIdx === news.quiz.answerIndex) {
                      optionClass += " correct";
                    } else if (selectedAnswer === optIdx) {
                      optionClass += " incorrect";
                    }
                  } else if (selectedAnswer === optIdx) {
                    optionClass += " selected";
                  }

                  return (
                    <button
                      key={optIdx}
                      className={optionClass}
                      onClick={() => handleAnswerSelect(optIdx)}
                    >
                      <span className="option-letter">{String.fromCharCode(65 + optIdx)}</span>
                      <span className="option-text">{option}</span>
                    </button>
                  );
                })}
              </div>

              {!quizSubmitted ? (
                <button 
                  className="primary-action-btn quiz-submit-btn"
                  disabled={selectedAnswer === null}
                  onClick={handleQuizSubmit}
                >
                  Check My Answer
                </button>
              ) : (
                <div className={`quiz-result-box ${selectedAnswer === news.quiz.answerIndex ? 'success' : 'fail'}`}>
                  <div className="result-title">
                    {selectedAnswer === news.quiz.answerIndex ? (
                      <>
                        <CheckCircle2 size={18} />
                        <span>Correct! Great comprehension!</span>
                      </>
                    ) : (
                      <>
                        <X size={18} />
                        <span>Not quite right! Keep learning!</span>
                      </>
                    )}
                  </div>
                  <p className="result-explanation">{news.quiz.explanation}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};