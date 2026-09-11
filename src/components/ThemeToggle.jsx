import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function ThemeToggle({ className = '', id = 'theme-toggle-btn' }) {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      id={id}
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex items-center gap-1.5 p-1 rounded-full border transition-all duration-300 ease-out focus:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer ${
        isDark
          ? 'bg-slate-900/90 border-slate-700/80 text-amber-300 shadow-inner'
          : 'bg-slate-100/90 border-slate-200 text-slate-700 shadow-inner'
      } ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode (currently ${theme})`}
    >
      <div
        className={`flex items-center justify-center w-6 h-6 rounded-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isDark
            ? 'translate-x-6 bg-slate-800 text-amber-300 shadow-xs'
            : 'translate-x-0 bg-white text-amber-500 shadow-xs'
        }`}
      >
        {isDark ? (
          <Moon className="w-3.5 h-3.5 transition-transform duration-300 rotate-0" />
        ) : (
          <Sun className="w-3.5 h-3.5 transition-transform duration-300 rotate-0" />
        )}
      </div>

      <div className="absolute inset-0 flex justify-between items-center px-1.5 pointer-events-none text-[10px]">
        <Sun className={`w-3 h-3 transition-opacity duration-200 ${isDark ? 'opacity-40 text-slate-400' : 'opacity-0'}`} />
        <Moon className={`w-3 h-3 transition-opacity duration-200 ${isDark ? 'opacity-0' : 'opacity-40 text-slate-500'}`} />
      </div>
    </button>
  );
}

export default ThemeToggle;
