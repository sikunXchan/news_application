import React from 'react';
import { Bell } from 'lucide-react';

export const TopBar = () => {
  return (
    <header className="top-bar">
      <div className="top-brand">
        <h1>LILY NEWS 2</h1>
      </div>
      <button className="notification-btn">
        <Bell size={22} />
      </button>
    </header>
  );
};
