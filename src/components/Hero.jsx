import React, { useState, useEffect } from 'react';
import { AnimatedButton } from './motion/AnimatedButton';

export function Hero({ onExplore, onWhatsApp }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getHeroClass = () =>
    `transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${
      mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-[0.98]'
    }`;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div style={{ transitionDelay: '100ms' }} className={getHeroClass()}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-100/80 text-emerald-800 border border-emerald-200">
              Artisanal Wooden Craftsmanship
            </span>
          </div>
          <h1 style={{ transitionDelay: '250ms' }} className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] ${getHeroClass()}`}>
            Elegance Designed for <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Your Modern Workspace.
            </span>
          </h1>
          <p style={{ transitionDelay: '400ms' }} className={`text-lg text-slate-600 max-w-xl ${getHeroClass()}`}>
            Handcrafted walnut desk accessories and custom tech peripherals designed to elevate daily productivity.
          </p>
          <div style={{ transitionDelay: '550ms' }} className={`flex flex-wrap items-center gap-4 pt-2 ${getHeroClass()}`}>
            <AnimatedButton variant="primary" onClick={onExplore} className="px-6 py-3.5">
              Explore Collection
            </AnimatedButton>
            <AnimatedButton variant="whatsapp" onClick={onWhatsApp} className="px-6 py-3.5">
              Order via WhatsApp
            </AnimatedButton>
          </div>
        </div>
        <div style={{ transitionDelay: '700ms' }} className={`lg:col-span-5 relative ${getHeroClass()}`}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-2 border border-slate-200/60 animate-subtle-float">
            <img
              src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1000&q=80"
              alt="Artisanal Walnut Wrist Rest"
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;