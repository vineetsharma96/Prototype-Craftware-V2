import React, { useState } from 'react';
import { Layers, Terminal, Shield, Sparkles, Check, Zap } from 'lucide-react';
import { RevealOnScroll } from './motion/RevealOnScroll';

const PILLARS = [
  {
    icon: Zap,
    title: 'Hall-Effect & Rapid Trigger',
    desc: 'Continuous analog magnetic sensing with 0.1mm - 4.0mm adjustable actuation and zero mechanical debounce latency.'
  },
  {
    icon: Layers,
    title: 'Aircraft 6063 Aluminum CNC',
    desc: 'Solid aerospace billet milled to ±0.01mm tolerances, bead-blasted anodization, and vibration-dampening Poron acoustic gaskets.'
  },
  {
    icon: Terminal,
    title: 'QMK & VIA Open Firmware',
    desc: 'Zero background bloatware. Re-map layers, create dynamic macros, and flash firmware directly to onboard EEPROM memory.'
  },
  {
    icon: Shield,
    title: '1-Year Hardware & Circuit Warranty',
    desc: 'Comprehensive protection covering PCB trace integrity, hot-swap socket cycles, and controller chips with direct engineer support.'
  }
];

const HARDWARE_PROFILES = [
  {
    name: 'Hall Effect Magnetic PCB',
    origin: 'Gateron Magnetic Jade / Kailh Core',
    tone: 'Contactless analog Hall effect with 8000Hz polling rate',
    hardness: '100,000,000 keystroke continuous lifetime',
    bestFor: 'Competitive Rapid-Trigger Keyboards & Macro Keypads'
  },
  {
    name: '6063 Billet CNC Aluminum',
    origin: 'Aerospace Grade 6063-T6 Unibody Extrusion',
    tone: 'Hard-anodized matte finish with PVD mirror brass sound weight',
    hardness: 'Rigid acoustic chassis dampening unwanted high-frequency ping',
    bestFor: 'Custom Mechanical Keyboards & Studio Docks'
  },
  {
    name: 'Raspberry Pi RP2040 MCU',
    origin: 'Dual-Core ARM Cortex-M0+ @ 133MHz',
    tone: 'High-speed USB PHY, 16MB QSPI Flash, PIO state machines',
    hardness: 'Sub-millisecond interrupt latency with live OLED telemetry',
    bestFor: 'Rotary Macro Decks & Custom Stream Controllers'
  }
];

export function CraftsmanshipSection() {
  const [activeProfile, setActiveProfile] = useState(0);

  return (
    <section id="craftsmanship" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header with Blur Pop */}
        <RevealOnScroll className="text-center max-w-3xl mx-auto mb-16" blur={true} blurAmount={14}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Hardware Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Precision Silicon Architecture & <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Aerospace CNC Engineering
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Engineered from bare silicon to unibody aluminum for developers, competitive esports players, and hardware purists.
          </p>
        </RevealOnScroll>

        {/* 4 Pillars Grid with Blur Pop */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <RevealOnScroll
                key={pillar.title}
                delay={idx * 100}
                blur={true}
                blurAmount={12}
                distance={24}
              >
                <div className="h-full p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Hardware Architecture Dossier Card with Blur Pop */}
        <RevealOnScroll blur={true} blurAmount={14} delay={150}>
          <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-8 sm:p-10 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-200/80 dark:border-slate-800">
              <div>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                  Component Standards
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
                  Hardware Architecture & Silicon Dossier
                </h3>
              </div>

              {/* Hardware Selector Tabs */}
              <div className="flex items-center gap-2 flex-wrap">
                {HARDWARE_PROFILES.map((t, idx) => (
                  <button
                    key={t.name}
                    onClick={() => setActiveProfile(idx)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                      activeProfile === idx
                        ? 'bg-slate-900 text-white dark:bg-emerald-500 dark:text-slate-950 shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {t.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Hardware Content */}
            <div className="grid md:grid-cols-2 gap-8 pt-8 items-center">
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase">Hardware Specification</span>
                  <h4 className="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">
                    {HARDWARE_PROFILES[activeProfile].name}
                  </h4>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200/60 dark:border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 dark:text-slate-400">Core Architecture:</span>
                    <span className="font-bold text-slate-900 dark:text-white">{HARDWARE_PROFILES[activeProfile].origin}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 dark:text-slate-400">Performance Metric:</span>
                    <span className="font-bold text-slate-900 dark:text-white">{HARDWARE_PROFILES[activeProfile].tone}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 dark:text-slate-400">Durability & Tolerance:</span>
                    <span className="font-bold text-slate-900 dark:text-white">{HARDWARE_PROFILES[activeProfile].hardness}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  <Check className="w-4 h-4" />
                  <span>Optimized for: {HARDWARE_PROFILES[activeProfile].bestFor}</span>
                </div>
              </div>

              {/* Hardware Imagery with Smooth Focus */}
              <div className="relative rounded-2xl overflow-hidden aspect-16/9 md:aspect-5/3 shadow-md bg-slate-900">
                <img
                  key={activeProfile}
                  src={
                    activeProfile === 0
                      ? 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=900&q=80'
                      : activeProfile === 1
                      ? 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80'
                      : 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80'
                  }
                  alt={HARDWARE_PROFILES[activeProfile].name}
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 text-white text-xs font-bold">
                  {HARDWARE_PROFILES[activeProfile].name} — Hardware Lab Inspection
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export default CraftsmanshipSection;
