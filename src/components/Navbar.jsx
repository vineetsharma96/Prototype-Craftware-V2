import React, { useState, useEffect } from 'react';

export function Navbar({ onOpenAI }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight text-slate-900 transition-opacity hover:opacity-80">
          CraftWave<span className="text-emerald-600">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#products" className="hover:text-slate-900 transition-colors relative group py-1">
            Products
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-200 ease-out group-hover:w-full" />
          </a>
          <a href="#b2b" className="hover:text-slate-900 transition-colors relative group py-1">
            Corporate Gifting
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-200 ease-out group-hover:w-full" />
          </a>
        </nav>

        <button
          onClick={onOpenAI}
          className="text-xs font-semibold px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-sm"
        >
          Ask AI Assistant
        </button>
      </div>
    </header>
  );
}

// Dual export guarantees compatibility with both default and named imports
export default Navbar;