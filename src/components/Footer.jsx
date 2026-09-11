import React from 'react';
import { MessageCircle } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-12 gap-10">
        {/* Brand Column */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2 text-xl font-bold tracking-tight text-white">
            <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-xs font-black text-sm">
              CW
            </span>
            <span>
              CraftWave<span className="text-emerald-400">.</span>
            </span>
          </div>
          <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
            High-performance mechanical keyboards, Hall-effect magnetic switches, 40Gbps Thunderbolt hubs, and open-source QMK controllers engineered for developers and tech purists.
          </p>
          <div className="pt-2 flex items-center gap-3">
            <span className="text-xs text-slate-500">Theme Mode:</span>
            <ThemeToggle id="footer-theme-toggle" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-3 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>
              <a href="#home" className="hover:text-emerald-400 transition-colors">Tech Overview</a>
            </li>
            <li>
              <a href="#products" className="hover:text-emerald-400 transition-colors">Hardware Catalog</a>
            </li>
            <li>
              <a href="#dashboard" className="hover:text-emerald-400 transition-colors">Interactive Hardware Lab</a>
            </li>
            <li>
              <a href="#craftsmanship" className="hover:text-emerald-400 transition-colors">Silicon & Architecture</a>
            </li>
            <li>
              <a href="#b2b" className="hover:text-emerald-400 transition-colors">Enterprise Deployment</a>
            </li>
          </ul>
        </div>

        {/* Direct WhatsApp Contact */}
        <div className="lg:col-span-4 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Engineer Direct Line
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Need custom switch tuning, rapid trigger calibration, or volume workstation hardware deployment?
          </p>
          <div className="pt-1">
            <a
              href="https://wa.me/919650022810"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all duration-200 shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Direct WhatsApp: +91 96500 22810</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800/80 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} CraftWave Systems. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Engineered with 6063 CNC aluminum & open-source QMK/VIA</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;