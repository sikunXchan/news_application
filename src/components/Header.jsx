import React from 'react';
import { 
  Search, BookmarkCheck, Sun, Moon, Sparkles, Terminal, 
  BookOpen, SlidersHorizontal, X 
} from 'lucide-react';

export const Header = ({
  searchQuery,
  onSearchChange,
  selectedLevel,
  onLevelChange,
  wordbookCount,
  onOpenWordbook,
  isDarkMode,
  onToggleTheme
}) => {
  const dateStr = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });

  return (
    <header className="app-header">
      <div className="header-top">
        <div className="header-brand-group">
          <div className="brand-logo-icon">
            <Terminal size={20} />
          </div>
          <div className="brand-text">
            <div className="brand-title-wrap">
              <h1 className="brand-title">TechLingua</h1>
              <span className="brand-pill">EN & DEV</span>
            </div>
            <span className="brand-date">{dateStr} • English & Tech Mastery</span>
          </div>
        </div>

        <div className="header-actions">
          <button 
            className="header-tool-btn wordbook-trigger"
            onClick={onOpenWordbook}
            title="My Vocabulary Book"
          >
            <BookmarkCheck size={18} />
            <span className="btn-label">Wordbook</span>
            {wordbookCount > 0 && (
              <span className="count-badge">{wordbookCount}</span>
            )}
          </button>

          <button 
            className="header-tool-btn theme-toggle"
            onClick={onToggleTheme}
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>

      <div className="header-controls-row">
        <div className="header-search-bar">
          <Search size={16} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search tech topics, tags (#react, #ai), keywords..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="header-search-input"
          />
          {searchQuery && (
            <button 
              className="search-clear-btn"
              onClick={() => onSearchChange('')}
            >
              <X size={14} />
            </button>
          )}
        </div>

        <div className="level-filter-bar">
          <div className="level-filter-label">
            <SlidersHorizontal size={13} />
            <span>Level:</span>
          </div>
          {['all', 'beginner', 'intermediate', 'advanced'].map(lvl => (
            <button
              key={lvl}
              className={`level-btn ${selectedLevel === lvl ? 'active' : ''}`}
              onClick={() => onLevelChange(lvl)}
            >
              {lvl === 'all' ? 'All' : lvl.charAt(0).toUpperCase() + lvl.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};