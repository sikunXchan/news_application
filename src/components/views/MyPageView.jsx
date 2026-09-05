import React from 'react';
import { Moon, Sun, Download, BookOpen } from 'lucide-react';

export const MyPageView = ({ isDarkMode, setIsDarkMode, onOpenWordbook, wordbookCount }) => {
  return (
    <div className="view-container mypage-view">
      <div className="mypage-header">
        <h2 className="view-title">表示設定</h2>
      </div>

      <div className="settings-card">
        <div className="theme-toggle-group">
          <button 
            className={`theme-btn ${!isDarkMode ? 'active' : ''}`}
            onClick={() => setIsDarkMode(false)}
          >
            <Sun size={18} />
            ライトモード
          </button>
          <button 
            className={`theme-btn ${isDarkMode ? 'active' : ''}`}
            onClick={() => setIsDarkMode(true)}
          >
            <Moon size={18} />
            ダークモード
          </button>
        </div>
      </div>

      <div className="settings-card mt-4">
        <h3 className="settings-subtitle">学習ツール</h3>
        <button className="wordbook-access-btn" onClick={onOpenWordbook}>
          <div className="wb-icon"><BookOpen size={20} /></div>
          <div className="wb-text">
            <h4>単語帳 (Flashcards)</h4>
            <p>保存した単語を復習する</p>
          </div>
          <span className="wb-badge">{wordbookCount} 語</span>
        </button>
      </div>

      <div className="settings-card mt-4">
        <div className="setting-row">
          <div className="setting-info">
            <h4>オフラインで読む</h4>
            <p>Wi-Fiがなくても記事を読めます</p>
          </div>
          <div className="setting-action">
            <Download size={24} className="download-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
