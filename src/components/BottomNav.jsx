import React from 'react';
import { Home, Bookmark, Search, User } from 'lucide-react';

export const BottomNav = ({ currentTab, onTabChange }) => {
  const tabs = [
    { id: 'home', label: 'ホーム', icon: Home },
    { id: 'read_later', label: 'あとで読む', icon: Bookmark },
    { id: 'search', label: '検索', icon: Search },
    { id: 'mypage', label: 'マイページ', icon: User }
  ];

  return (
    <div className="bottom-nav">
      {tabs.map(tab => {
        const Icon = tab.icon;
        const isActive = currentTab === tab.id;
        return (
          <button
            key={tab.id}
            className={`bottom-nav-item ${isActive ? 'active' : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            <Icon size={22} strokeWidth={isActive ? 2.5 : 2} className="bottom-nav-icon" />
            <span className="bottom-nav-label">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};
