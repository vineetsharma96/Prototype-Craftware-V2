import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  Sliders,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ShieldCheck,
  Zap,
  Eye
} from 'lucide-react';
import { AnimatedButton } from './motion/AnimatedButton';
import { RevealOnScroll } from './motion/RevealOnScroll';

const DASHBOARD_SETUPS = [
  {
    id: 'apex-cnc',
    name: 'Apex Pro 65% CNC Mechanical Rig',
    tagline: 'Aircraft 6063 Aluminum Unibody & Gasket Mount',
    category: 'Keyboards & Keypads',
    price: '₹14,999',
    badge: 'Flagship Edition',
    description: '5-axis CNC-milled 6063 unibody chassis, Poron gasket suspension, hot-swappable PCB with south-facing RGB, and open-source QMK/VIA firmware.',
    views: [
      {
        label: 'Rig Architecture',
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1200&q=85',
        caption: 'Anodized 6063 aluminum unibody with precision PVD brass acoustic sound bar'
      },
      {
        label: 'Hot-Swap PCB',
        image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=1200&q=85',
        caption: 'Kailh hot-swap sockets, FR4 flex-cut plate, and south-facing per-key RGB'
      },
      {
        label: 'Acoustic Gasket',
        image: 'https://images.unsplash.com/photo-1541689592655-f5f52825a3b8?auto=format&fit=crop&w=1200&q=85',
        caption: 'Multi-layer Poron isolation pads dampening high-frequency case reverb'
      }
    ],
    specs: [
      { label: 'Chassis Material', value: '6063 Aircraft Billet Aluminum' },
      { label: 'Mounting Style', value: 'Multi-Point Poron Gasket Isolation' },
      { label: 'Microcontroller', value: 'ARM Cortex-M4 32-Bit MCU' },
      { label: 'Firmware Engine', value: 'Open-Source QMK / VIA / VIAL' }
    ],
    hotspots: [
      { x: '28%', y: '65%', title: 'Poron Gasket Dampening', text: 'Multi-layer acoustic foam eliminates high-pitch case ping' },
      { x: '72%', y: '45%', title: 'FR4 Flex-Cut Plate', text: 'Independent flex relief cuts for balanced switch bottom-out' }
    ]
  },
  {
    id: 'magnetic-hall',
    name: 'Hall-Effect 8000Hz Rapid-Trigger Station',
    tagline: 'Contactless Magnetic Sensing & 0.1mm Actuation',
    category: 'Keyboards & Keypads',
    price: '₹6,499',
    badge: '8000Hz Ultra-Polling',
    description: 'Analog Hall effect magnetic switches featuring continuous 0.1mm-4.0mm adjustable actuation, dynamic rapid trigger, and 8000Hz polling rate.',
    views: [
      {
        label: 'Rapid Trigger Rig',
        image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=1200&q=85',
        caption: 'Contactless magnetic analog actuation with zero physical debounce delay'
      },
      {
        label: 'Magnetic Switch Core',
        image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1200&q=85',
        caption: 'Gateron Magnetic Jade switches with permanent neodymium core'
      },
      {
        label: 'Dynamic Calibrator',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=85',
        caption: 'Real-time 0.02mm step actuation curve calibrator over USB-C'
      }
    ],
    specs: [
      { label: 'Sensor Technology', value: 'Continuous Analog Hall Effect' },
      { label: 'Actuation Range', value: '0.1mm - 4.0mm (0.02mm increments)' },
      { label: 'Polling Rate', value: 'Native 8000Hz (0.125ms report rate)' },
      { label: 'Switch Lifespan', value: '100+ Million Keystrokes (Contactless)' }
    ],
    hotspots: [
      { x: '46%', y: '42%', title: 'Continuous Hall Sensor', text: 'Calculates key depth in real-time with sub-millimeter precision' },
      { x: '70%', y: '68%', title: 'Dynamic Rapid Trigger', text: 'Switch resets instantly the moment it begins upward travel' }
    ]
  },
  {
    id: 'thunderbolt-dock',
    name: 'Quantum 40Gbps Thunderbolt 4 Studio Hub',
    tagline: 'Dual 4K 144Hz / 8K Pipeline & 100W GaN Charging',
    category: 'Docks & Connectivity',
    price: '₹18,499',
    badge: 'Pro Tier',
    description: 'Dual Intel Thunderbolt 4 controller delivering 40Gbps bidirectional throughput, dual 4K 144Hz display outputs, 2.5G Ethernet, and 100W GaN power delivery.',
    views: [
      {
        label: 'Hub Architecture',
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=85',
        caption: 'Machined aluminum chassis with passive internal cooling heatsinks'
      },
      {
        label: 'High-Speed I/O Array',
        image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=1200&q=85',
        caption: '3x Thunderbolt 4 downstream, 4x USB-A 3.2 10Gbps, 2.5GbE LAN'
      },
      {
        label: 'UHS-II & GaN Power',
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1200&q=85',
        caption: '312MB/s real-world SD read speeds and 100W laptop PD charging'
      }
    ],
    specs: [
      { label: 'Interface Standard', value: 'Thunderbolt 4 / USB4 (40Gbps)' },
      { label: 'Display Output', value: 'Dual 4K @ 144Hz or Single 8K @ 60Hz' },
      { label: 'Power Delivery', value: '100W GaN Smart Power Output' },
      { label: 'Networking', value: '2.5Gbps Base-T RJ45 Gigabit Ethernet' }
    ],
    hotspots: [
      { x: '32%', y: '55%', title: 'Intel JHL8440 Controller', text: 'Certified Thunderbolt 4 bridge with PCIe 32Gbps tunneling' },
      { x: '78%', y: '42%', title: 'GaN Fast Power Module', text: 'Integrated high-efficiency gallium-nitride transformer' }
    ]
  },
  {
    id: 'macro-deck',
    name: 'Programmable OLED Rotary Macro Deck',
    tagline: 'RP2040 Powered Telemetry & Dual Optical Encoders',
    category: 'Controllers & Macro Decks',
    price: '₹5,299',
    badge: 'Developer Essential',
    description: '9 hot-swappable mechanical switches, dual CNC knurled aluminum rotary encoders, 128x64 OLED telemetry screen, and programmable Raspberry Pi RP2040 chip.',
    views: [
      {
        label: 'Deck Control Surface',
        image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1200&q=85',
        caption: 'Dual rotary dials for scrubbing timelines, zoom, and volume'
      },
      {
        label: 'Live OLED Telemetry',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=85',
        caption: 'Displays live CPU usage, RAM stats, or custom animated GIFs'
      },
      {
        label: 'PCB & RP2040 MCU',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85',
        caption: 'RP2040 dual-core ARM Cortex-M0+ with 16MB SPI flash'
      }
    ],
    specs: [
      { label: 'MCU Processor', value: 'Raspberry Pi RP2040 (133MHz Dual-Core)' },
      { label: 'Rotary Encoders', value: '2x 24-Pulse Aluminum Encoders + Push' },
      { label: 'Telemetry Screen', value: '0.96-inch High-Contrast 128x64 OLED' },
      { label: 'Scripting Support', value: 'QMK, VIA & CircuitPython Compatible' }
    ],
    hotspots: [
      { x: '42%', y: '45%', title: 'Live OLED Telemetry', text: 'Real-time CPU/RAM monitor and active layer switcher' },
      { x: '82%', y: '62%', title: 'CNC Knurled Encoders', text: 'Tactile notched steps for precision scrub and volume' }
    ]
  }
];

export function StudioDashboard({ onInquire }) {
  const [selectedSetupIdx, setSelectedSetupIdx] = useState(0);
  const [activeViewIdx, setActiveViewIdx] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [slideDirection, setSlideDirection] = useState('next');
  const timerRef = useRef(null);

  const currentSetup = DASHBOARD_SETUPS[selectedSetupIdx];
  const currentView = currentSetup.views[activeViewIdx] || currentSetup.views[0];

  const handleSetupChange = (idx) => {
    if (idx === selectedSetupIdx) return;
    setSlideDirection(idx > selectedSetupIdx ? 'next' : 'prev');
    setIsTransitioning(true);
    setActiveHotspot(null);
    setTimeout(() => {
      setSelectedSetupIdx(idx);
      setActiveViewIdx(0);
      setIsTransitioning(false);
    }, 280);
  };

  const handleViewChange = (idx) => {
    if (idx === activeViewIdx) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveViewIdx(idx);
      setIsTransitioning(false);
    }, 220);
  };

  const handleNextSetup = () => {
    const nextIdx = (selectedSetupIdx + 1) % DASHBOARD_SETUPS.length;
    handleSetupChange(nextIdx);
  };

  const handlePrevSetup = () => {
    const prevIdx = (selectedSetupIdx - 1 + DASHBOARD_SETUPS.length) % DASHBOARD_SETUPS.length;
    handleSetupChange(prevIdx);
  };

  // Auto-play tour
  useEffect(() => {
    if (!isAutoPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setSelectedSetupIdx((prev) => (prev + 1) % DASHBOARD_SETUPS.length);
      setActiveViewIdx(0);
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying]);

  return (
    <section id="dashboard" className="py-24 relative overflow-hidden transition-colors duration-300 bg-white dark:bg-slate-900 border-y border-slate-200/80 dark:border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-teal-500/10 dark:bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header with Blur Pop */}
        <RevealOnScroll className="text-center max-w-3xl mx-auto mb-16" blur={true} blurAmount={14}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-emerald-100/90 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            Interactive Tech Lab Dashboard
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Explore Hardware Architectures in <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
              Ultra-Smooth Motion
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Switch between custom high-performance setups, inspect PCB micro-architecture, and verify zero-latency hardware specs.
          </p>
        </RevealOnScroll>

        {/* Dashboard Navigation Tabs */}
        <div className="flex items-center justify-between gap-4 flex-wrap pb-6 border-b border-slate-200/70 dark:border-slate-800 mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none max-w-full">
            {DASHBOARD_SETUPS.map((setup, idx) => {
              const isActive = idx === selectedSetupIdx;
              return (
                <button
                  key={setup.id}
                  onClick={() => handleSetupChange(idx)}
                  className={`relative px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-slate-900 text-white dark:bg-emerald-500 dark:text-slate-950 shadow-md scale-[1.02]'
                      : 'bg-slate-100/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-700/80'
                  }`}
                >
                  <span>{setup.name}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 dark:bg-slate-950 animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Autoplay & Direction Controls */}
          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={() => setIsAutoPlaying((prev) => !prev)}
              className="px-3 py-2 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
              title={isAutoPlaying ? 'Pause interactive tour' : 'Start interactive tour'}
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Pause Tour</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Auto Tour</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-1">
              <button
                onClick={handlePrevSetup}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                aria-label="Previous Setup"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextSetup}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                aria-label="Next Setup"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Interactive Stage Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Visual Showcase Stage (Smooth Motion Viewport) */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className="relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-200/80 dark:border-slate-800 shadow-2xl group min-h-[460px] sm:min-h-[520px]">
              {/* Background ambient lighting inside image stage */}
              <div className="absolute inset-0 bg-radial from-emerald-500/20 via-transparent to-transparent opacity-60 pointer-events-none" />

              {/* SMOOTH MOTION IMAGE VIEWPORT */}
              <div className="relative w-full h-full min-h-[460px] sm:min-h-[520px] overflow-hidden flex items-center justify-center">
                <img
                  key={`${currentSetup.id}-${activeViewIdx}`}
                  src={currentView.image}
                  alt={currentSetup.name}
                  className={`w-full h-full object-cover will-change-transform-opacity transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isTransitioning
                      ? `scale-[1.05] filter blur-md opacity-40 ${slideDirection === 'next' ? 'translate-x-3' : '-translate-x-3'}`
                      : 'scale-100 filter blur-0 opacity-100 translate-x-0'
                  }`}
                  loading="eager"
                />

                {/* Dark Vignette Overlay for Crisp Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-slate-950/30 pointer-events-none" />

                {/* Interactive Hotspots */}
                {currentSetup.hotspots.map((spot, hIdx) => {
                  const isOpened = activeHotspot === hIdx;
                  return (
                    <div
                      key={hIdx}
                      style={{ left: spot.x, top: spot.y }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                    >
                      <button
                        onClick={() => setActiveHotspot(isOpened ? null : hIdx)}
                        className="relative group/spot flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-slate-950 font-bold shadow-lg hover:scale-115 transition-all duration-200 cursor-pointer"
                        aria-label={spot.title}
                      >
                        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60 pointer-events-none" />
                        <Eye className="w-4 h-4 text-slate-950" />
                      </button>

                      {/* Hotspot Popover */}
                      {isOpened && (
                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-56 p-3.5 rounded-xl bg-slate-900/95 backdrop-blur-md border border-emerald-500/40 shadow-2xl text-left z-30 animate-in fade-in zoom-in-95 duration-200">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 mb-1">
                            <Sparkles className="w-3 h-3" />
                            {spot.title}
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            {spot.text}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Top Badge Overlay */}
                <div className="absolute top-6 left-6 flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-emerald-500/90 text-slate-950 shadow-sm backdrop-blur-xs">
                    {currentSetup.badge}
                  </span>
                  <span className="hidden sm:inline-flex px-3 py-1 rounded-full text-xs font-medium bg-black/60 text-white/90 border border-white/15 backdrop-blur-xs">
                    {currentSetup.category}
                  </span>
                </div>

                {/* Bottom Overlay Info & Caption */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-sm">
                      {currentSetup.name}
                    </h3>
                    <p className="text-sm text-slate-300 mt-1 max-w-md line-clamp-1 drop-shadow-sm">
                      {currentView.caption}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-black text-emerald-400">
                      {currentSetup.price}
                    </span>
                    <button
                      onClick={() => onInquire?.(currentSetup.name)}
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-900 hover:bg-emerald-400 hover:text-slate-950 transition-all duration-200 shadow-lg cursor-pointer flex items-center gap-1.5"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Smooth Angle & View Switcher Bar */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {currentSetup.views.map((v, vIdx) => {
                const isViewActive = vIdx === activeViewIdx;
                return (
                  <button
                    key={vIdx}
                    onClick={() => handleViewChange(vIdx)}
                    className={`p-2.5 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex items-center gap-3 ${
                      isViewActive
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500/60 dark:border-emerald-500/60 shadow-xs'
                        : 'bg-white dark:bg-slate-850 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="w-12 h-10 rounded-lg overflow-hidden shrink-0 bg-slate-900 border border-slate-200/50 dark:border-slate-700">
                      <img
                        src={v.image}
                        alt={v.label}
                        className={`w-full h-full object-cover transition-transform duration-500 ${
                          isViewActive ? 'scale-110' : 'opacity-80'
                        }`}
                      />
                    </div>
                    <div className="min-w-0">
                      <p className={`text-xs font-bold truncate ${
                        isViewActive ? 'text-emerald-700 dark:text-emerald-300' : 'text-slate-800 dark:text-slate-200'
                      }`}>
                        {v.label}
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                        View {vIdx + 1} of {currentSetup.views.length}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Setup Specifications & Artisan Details Column */}
          <div className="lg:col-span-4 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-slate-50/90 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 shadow-sm transition-colors duration-300">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Hardware Specifications
                  </span>
                </div>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-200/60 dark:border-emerald-800/60">
                  Ready to Ship
                </span>
              </div>

              <div className="mt-5">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                  {currentSetup.tagline}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  {currentSetup.description}
                </p>
              </div>

              {/* Specs Breakdown */}
              <div className="mt-6 space-y-3">
                {currentSetup.specs.map((spec, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 flex items-start justify-between gap-3 shadow-2xs"
                  >
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {spec.label}
                    </span>
                    <span className="text-xs font-bold text-slate-900 dark:text-slate-200 text-right">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Assurance Trust Badges */}
              <div className="mt-6 pt-6 border-t border-slate-200/80 dark:border-slate-800 space-y-2.5">
                <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>100% CNC 6063 Aluminum & Lead-Free Multilayer PCB</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>1-Year Hardware & Controller Warranty</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                  <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Direct WhatsApp Hardware Engineer Consultation</span>
                </div>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800">
              <AnimatedButton
                variant="primary"
                onClick={() => onInquire?.(currentSetup.name)}
                className="w-full justify-center py-3.5 text-sm font-bold shadow-md"
              >
                Order {currentSetup.name} ({currentSetup.price})
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudioDashboard;
