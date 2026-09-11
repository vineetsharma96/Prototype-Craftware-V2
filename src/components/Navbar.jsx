import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export function Navbar({ onOpenAI }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Hardware', href: '#products' },
    { label: 'Tech Lab', href: '#dashboard' },
    { label: 'Engineering', href: '#craftsmanship' },
    { label: 'Enterprise B2B', href: '#b2b' },
    { label: 'Inquire', href: '#contact' }
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isScrolled
          ? 'bg-white/85 dark:bg-slate-950/85 backdrop-blur-md shadow-xs border-b border-slate-200/80 dark:border-slate-800/80 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white transition-opacity hover:opacity-85"
        >
          <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-xs font-black text-sm">
            CW
          </span>
          <span>
            CraftWave<span className="text-emerald-600 dark:text-emerald-400">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-slate-900 dark:hover:text-white transition-colors relative group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 transition-all duration-200 ease-out group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Action Controls: Theme Switch + AI Button */}
        <div className="flex items-center gap-3">
          {/* Dark / Light Mode Switch */}
          <ThemeToggle id="nav-theme-toggle" />

          {/* AI Assistant Button */}
          <button
            id="open-ai-chat-btn"
            onClick={onOpenAI}
            className="hidden sm:inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full bg-slate-900 text-white dark:bg-emerald-500 dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-emerald-400 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-xs cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400 dark:text-slate-950" />
            <span>AI Concierge</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pt-4 pb-6 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Theme
              </span>
              <ThemeToggle id="mobile-theme-toggle" />
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAI();
              }}
              className="mt-2 w-full flex items-center justify-center gap-2 text-sm font-bold py-3 rounded-xl bg-slate-900 text-white dark:bg-emerald-500 dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-emerald-400 transition-colors cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-emerald-400 dark:text-slate-950" />
              <span>Ask AI Concierge</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

// Dual export guarantees compatibility with both default and named imports
export default Navbar;