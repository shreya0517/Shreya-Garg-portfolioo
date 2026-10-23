"use client";

import { useEffect, useRef, useState } from "react";

export default function ThemeToggle() {
  const [showNotice, setShowNotice] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleThemeToggle = () => {
    setShowNotice(true);
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setShowNotice(false);
      timeoutRef.current = null;
    }, 3000);
  };

  const dismissNotice = () => {
    setShowNotice(false);
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  return (
    <div className="theme-toggle-wrapper">
      <button
        type="button"
        className="theme-switch"
        onClick={handleThemeToggle}
        aria-label="Light mode coming soon"
        aria-expanded={showNotice}
      >
        <span className="chosen" aria-hidden="true">☼</span>
      </button>

      {showNotice && (
        <div className="theme-notice" role="status">
          <span className="notice-icon" aria-hidden="true">✦</span>
          <div className="notice-content">
            <h3>Light mode is on its way</h3>
            <p>A new universe is being crafted.</p>
          </div>
          <button
            type="button"
            className="notice-close"
            onClick={dismissNotice}
            aria-label="Dismiss notification"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
