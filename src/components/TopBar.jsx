import React from 'react';
import { Bell } from 'lucide-react';

export const TopBar = () => {
  return (
    <header className="top-bar">
      <div className="top-brand">
        <div className="paw-logo">
          {/* A simple paw icon placeholder */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 9.5C13.3807 9.5 14.5 8.38071 14.5 7C14.5 5.61929 13.3807 4.5 12 4.5C10.6193 4.5 9.5 5.61929 9.5 7C9.5 8.38071 10.6193 9.5 12 9.5Z" />
            <path d="M6.5 13C7.60457 13 8.5 12.1046 8.5 11C8.5 9.89543 7.60457 9 6.5 9C5.39543 9 4.5 9.89543 4.5 11C4.5 12.1046 5.39543 13 6.5 13Z" />
            <path d="M17.5 13C18.6046 13 19.5 12.1046 19.5 11C19.5 9.89543 18.6046 9 17.5 9C16.3954 9 15.5 9.89543 15.5 11C15.5 12.1046 16.3954 13 17.5 13Z" />
            <path d="M12 11.5C9.5 11.5 7.5 13.5 7.5 16C7.5 17.1046 8.39543 18 9.5 18H14.5C15.6046 18 16.5 17.1046 16.5 16C16.5 13.5 14.5 11.5 12 11.5Z" />
          </svg>
        </div>
        <h1>Tech Paws</h1>
      </div>
      <button className="notification-btn">
        <Bell size={22} />
      </button>
    </header>
  );
};
