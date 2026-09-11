import React from 'react';
import { Cpu, Layers, Zap } from 'lucide-react';
import { AnimatedButton } from './motion/AnimatedButton';
import { RevealOnScroll } from './motion/RevealOnScroll';

export function Hero({ onExplore, onWhatsApp, onGoToDashboard }) {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-48 -right-24 w-80 h-80 bg-teal-500/10 dark:bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Copy & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          <RevealOnScroll direction="down" blur={true} blurAmount={10} delay={80}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-100/90 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 shadow-2xs">
              <Zap className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>High-Performance Computing Hardware & Keyboards</span>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" blur={true} blurAmount={16} delay={180}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.12] tracking-tight">
              Zero Latency. <br />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-500 dark:from-emerald-400 dark:via-teal-300 dark:to-emerald-400 bg-clip-text text-transparent">
                Absolute Tactile Precision.
              </span>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll direction="up" blur={true} blurAmount={12} delay={280}>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
              Custom CNC aluminum mechanical keyboards, Hall-effect rapid-trigger controllers, and high-bandwidth workstation peripherals engineered for engineers and power users.
            </p>
          </RevealOnScroll>

          {/* Quick Metrics Bar */}
          <RevealOnScroll direction="up" blur={true} blurAmount={10} delay={380}>
            <div className="grid grid-cols-3 gap-4 pt-1 max-w-lg border-y border-slate-200/80 dark:border-slate-800 py-3.5">
              <div>
                <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">8000Hz</p>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">Ultra Polling Rate</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">0.1mm</p>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">Rapid Trigger Step</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">40Gbps</p>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">Thunderbolt 4 Hub</p>
              </div>
            </div>
          </RevealOnScroll>

          {/* CTAs */}
          <RevealOnScroll direction="up" blur={true} blurAmount={8} delay={480}>
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <AnimatedButton variant="primary" onClick={onExplore} className="px-6 py-3.5 text-sm font-bold shadow-md">
                Explore Hardware
              </AnimatedButton>

              <button
                onClick={onGoToDashboard}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shadow-xs"
              >
                <Layers className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Interactive Tech Lab</span>
              </button>

              <AnimatedButton variant="whatsapp" onClick={onWhatsApp} className="px-5 py-3.5 text-sm font-bold shadow-xs">
                WhatsApp Inquiry
              </AnimatedButton>
            </div>
          </RevealOnScroll>
        </div>

        {/* Right Showcase Card with Smooth Blur Pop */}
        <div className="lg:col-span-5 relative">
          <RevealOnScroll direction="left" blur={true} blurAmount={16} delay={250}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-slate-900 p-2.5 border border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
              <div className="relative rounded-2xl overflow-hidden aspect-4/3 sm:aspect-5/4">
                <img
                  src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1200&q=85"
                  alt="Custom CNC Aluminum Mechanical Keyboard Setup"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Spec Chip on Image */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-white/40 dark:border-slate-700/60 shadow-lg flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                      Flagship Rig
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      Apex Pro 65% CNC Aluminum
                    </h4>
                  </div>
                  <span className="text-xs sm:text-sm font-black text-slate-900 dark:text-emerald-400">
                    ₹14,999
                  </span>
                </div>
              </div>
            </div>

            {/* Subtle Float Floating Badge */}
            <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 shadow-xl animate-subtle-float">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">ARM Cortex MCU</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Open-Source QMK / VIA Architecture</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

export default Hero;