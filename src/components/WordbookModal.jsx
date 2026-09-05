import React, { useState } from 'react';
import { 
  X, BookmarkCheck, Volume2, Trash2, RotateCw, CheckCircle2, 
  HelpCircle, Sparkles, BookOpen, Layers, Search, Filter 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const WordbookModal = ({
  isOpen,
  onClose,
  wordbook,
  onRemoveWord,
  onUpdateWordStatus,
  onClearAll
}) => {
  const [activeTab, setActiveTab] = useState('list'); // 'list' | 'flashcards'
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all'); // 'all' | 'learning' | 'mastered'
  
  // Flashcard state
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;

  const filteredWords = wordbook.filter(item => {
    const matchesSearch = item.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (item.techContext && item.techContext.toLowerCase().includes(searchQuery.toLowerCase()));
    if (!matchesSearch) return false;
    if (filterStatus === 'mastered') return item.isMastered;
    if (filterStatus === 'learning') return !item.isMastered;
    return true;
  });

  const speak = (word, e) => {
    e?.stopPropagation();
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(word);
    u.lang = 'en-US';
    u.rate = 0.9;
    window.speechSynthesis.speak(u);
  };

  const handleNextCard = (mastered = false) => {
    if (filteredWords[cardIndex]) {
      onUpdateWordStatus?.(filteredWords[cardIndex].word, mastered);
    }
    
    setIsFlipped(false);
    if (cardIndex + 1 < filteredWords.length) {
      setCardIndex(cardIndex + 1);
    } else {
      setIsCompleted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const resetFlashcards = () => {
    setCardIndex(0);
    setIsFlipped(false);
    setIsCompleted(false);
  };

  const currentCard = filteredWords[cardIndex];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container wordbook-modal animate-scale-up" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="modal-icon-badge">
              <BookmarkCheck size={20} />
            </div>
            <div>
              <h2 className="modal-title">My Tech Vocabulary Book</h2>
              <span className="modal-subtitle">
                {wordbook.length} saved words • Mastered {wordbook.filter(w => w.isMastered).length}
              </span>
            </div>
          </div>
          <button className="icon-button close-button" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-tab-nav">
          <button 
            className={`tab-btn ${activeTab === 'list' ? 'active' : ''}`}
            onClick={() => setActiveTab('list')}
          >
            <BookOpen size={16} />
            <span>Word List ({wordbook.length})</span>
          </button>
          <button 
            className={`tab-btn ${activeTab === 'flashcards' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('flashcards');
              resetFlashcards();
            }}
          >
            <Layers size={16} />
            <span>Flashcards Practice</span>
          </button>
        </div>

        {activeTab === 'list' && (
          <div className="wordbook-list-container">
            <div className="wordbook-toolbar">
              <div className="search-input-wrapper">
                <Search size={16} className="search-icon" />
                <input 
                  type="text"
                  placeholder="Search saved vocabulary or tech notes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
              </div>

              <div className="filter-group">
                <button 
                  className={`filter-chip ${filterStatus === 'all' ? 'active' : ''}`}
                  onClick={() => setFilterStatus('all')}
                >
                  All ({wordbook.length})
                </button>
                <button 
                  className={`filter-chip ${filterStatus === 'learning' ? 'active' : ''}`}
                  onClick={() => setFilterStatus('learning')}
                >
                  Learning ({wordbook.filter(w => !w.isMastered).length})
                </button>
                <button 
                  className={`filter-chip ${filterStatus === 'mastered' ? 'active' : ''}`}
                  onClick={() => setFilterStatus('mastered')}
                >
                  Mastered ({wordbook.filter(w => w.isMastered).length})
                </button>
              </div>
            </div>

            {filteredWords.length === 0 ? (
              <div className="empty-state">
                <Sparkles size={40} className="empty-icon" />
                <h3>No words found</h3>
                <p>
                  {wordbook.length === 0 
                    ? "While reading news articles, long press or tap on any word to look up its definition and save it to your wordbook!"
                    : "No words match your search filter."}
                </p>
              </div>
            ) : (
              <div className="wordbook-grid">
                {filteredWords.map((item) => (
                  <div key={item.word} className={`wordbook-card ${item.isMastered ? 'mastered' : ''}`}>
                    <div className="wordbook-card-header">
                      <div className="word-meta">
                        <span className="word-title">{item.word}</span>
                        {item.phonetic && <span className="word-phonetic">{item.phonetic}</span>}
                        {item.partOfSpeech && <span className="word-badge">{item.partOfSpeech}</span>}
                      </div>

                      <div className="word-actions">
                        <button 
                          className="word-action-btn"
                          onClick={(e) => speak(item.word, e)}
                          title="Listen pronunciation"
                        >
                          <Volume2 size={16} />
                        </button>
                        <button 
                          className={`word-action-btn ${item.isMastered ? 'mastered-btn' : ''}`}
                          onClick={() => onUpdateWordStatus?.(item.word, !item.isMastered)}
                          title={item.isMastered ? "Mark as learning" : "Mark as mastered"}
                        >
                          <CheckCircle2 size={16} />
                        </button>
                        <button 
                          className="word-action-btn delete-btn"
                          onClick={() => onRemoveWord(item.word)}
                          title="Delete from wordbook"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>

                    <p className="word-meaning">{item.meaning}</p>

                    {item.techContext && (
                      <div className="word-tech-context">
                        <span className="tech-badge">Tech Context</span>
                        <p className="tech-text">{item.techContext}</p>
                      </div>
                    )}

                    {item.example && (
                      <p className="word-example">"{item.example}"</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'flashcards' && (
          <div className="flashcards-container">
            {filteredWords.length === 0 ? (
              <div className="empty-state">
                <HelpCircle size={40} className="empty-icon" />
                <h3>No words to practice</h3>
                <p>Save words from news articles first to start flashcard drills.</p>
              </div>
            ) : isCompleted ? (
              <div className="flashcard-complete-state">
                <Sparkles size={48} className="complete-icon" />
                <h3>Great job! Session completed 🎉</h3>
                <p>You practiced {filteredWords.length} tech vocabulary cards.</p>
                <button className="primary-action-btn" onClick={resetFlashcards}>
                  <RotateCw size={16} />
                  <span>Practice Again</span>
                </button>
              </div>
            ) : (
              <div className="flashcard-wrapper">
                <div className="flashcard-progress">
                  <span>Card {cardIndex + 1} of {filteredWords.length}</span>
                  <div className="progress-bar-bg">
                    <div 
                      className="progress-bar-fill" 
                      style={{ width: `${((cardIndex + 1) / filteredWords.length) * 100}%` }}
                    />
                  </div>
                </div>

                <div 
                  className={`flashcard ${isFlipped ? 'flipped' : ''}`}
                  onClick={() => setIsFlipped(!isFlipped)}
                >
                  <div className="flashcard-inner">
                    {/* Front */}
                    <div className="flashcard-front">
                      <span className="flashcard-hint">Click card to reveal definition</span>
                      <h2 className="flashcard-word">{currentCard?.word}</h2>
                      {currentCard?.phonetic && (
                        <span className="flashcard-phonetic">{currentCard.phonetic}</span>
                      )}
                      <button 
                        className="flashcard-audio-btn"
                        onClick={(e) => speak(currentCard?.word, e)}
                      >
                        <Volume2 size={18} />
                        <span>Listen Pronunciation</span>
                      </button>
                    </div>

                    {/* Back */}
                    <div className="flashcard-back">
                      <div className="card-back-header">
                        <span className="card-badge">{currentCard?.partOfSpeech || 'noun'}</span>
                        <h3 className="card-back-word">{currentCard?.word}</h3>
                      </div>

                      <div className="card-meaning-box">
                        <span className="box-title">Meaning / 日本語訳:</span>
                        <p className="box-content">{currentCard?.meaning}</p>
                      </div>

                      {currentCard?.techContext && (
                        <div className="card-tech-box">
                          <span className="box-title">💡 Tech Context:</span>
                          <p className="box-content">{currentCard?.techContext}</p>
                        </div>
                      )}

                      {currentCard?.example && (
                        <div className="card-example-box">
                          <p className="example-text">"{currentCard?.example}"</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {isFlipped && (
                  <div className="flashcard-actions">
                    <button 
                      className="flashcard-btn review-btn"
                      onClick={() => handleNextCard(false)}
                    >
                      <RotateCw size={16} />
                      <span>Review Again</span>
                    </button>
                    <button 
                      className="flashcard-btn master-btn"
                      onClick={() => handleNextCard(true)}
                    >
                      <CheckCircle2 size={16} />
                      <span>Mastered!</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};