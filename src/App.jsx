import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StudioDashboard from './components/StudioDashboard';
import ProductCard from './components/ProductCard';
import CraftsmanshipSection from './components/CraftsmanshipSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AIAssistantModal from './components/AIAssistantModal';
import RevealOnScroll from './components/motion/RevealOnScroll';
import ImageReveal from './components/motion/ImageReveal';
import AnimatedButton from './components/motion/AnimatedButton';
import { PRODUCTS } from './data/content';
import { Sparkles, Building2 } from 'lucide-react';

export default function App() {
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [inquiryProduct, setInquiryProduct] = useState('');

  const categories = [
    'All',
    'Keyboards & Keypads',
    'Docks & Connectivity',
    'Controllers & Macro Decks',
    'Cables & Power',
    'Peripherals'
  ];

  const filteredProducts =
    selectedCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  const handleWhatsAppRedirect = (productName = '') => {
    const text = productName
      ? `Hi CraftWave Systems, I am interested in ordering the ${productName}. Could you share technical specifications, firmware details, and availability?`
      : `Hi CraftWave Systems, I would like to inquire about your high-performance hardware and peripherals.`;
    window.open(`https://wa.me/919650022810?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleSelectProduct = (product) => {
    setInquiryProduct(product.title || product.name);
    // Smooth scroll to contact form with preselected product
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-emerald-500 selection:text-white transition-colors duration-300">
      {/* Primary Sticky Header */}
      <Navbar onOpenAI={() => setIsAIModalOpen(true)} />

      <main>
        {/* Hero Section with Blur-Pop Scroll entrance */}
        <Hero
          onExplore={() => {
            document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onGoToDashboard={() => {
            document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onWhatsApp={() => handleWhatsAppRedirect()}
        />

        {/* Studio Dashboard: Smooth image transitions with interactive presets & specs */}
        <StudioDashboard onInquire={(item) => handleWhatsAppRedirect(item)} />

        {/* Featured Collection Section with Filter Tabs & Blur-Pop Effects */}
        <section id="products" className="py-24 max-w-7xl mx-auto px-6">
          <RevealOnScroll className="mb-12 text-center max-w-2xl mx-auto" blur={true} blurAmount={16}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Hardware Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              High-Performance Hardware & Peripherals
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-3 text-base sm:text-lg">
              Precision 6063 CNC aluminum, contactless Hall-effect magnetic switches, 40Gbps Thunderbolt hubs, and open-source QMK firmware.
            </p>

            {/* Category Filter Pills */}
            <div className="flex items-center justify-center gap-2 flex-wrap mt-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-slate-900 text-white dark:bg-emerald-500 dark:text-slate-950 shadow-sm'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </RevealOnScroll>

          {/* Product Cards with Scroll Blur Pop */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                onSelect={handleSelectProduct}
              />
            ))}
          </div>
        </section>

        {/* Craftsmanship Philosophy & Timber Sourcing Section */}
        <CraftsmanshipSection />

        {/* Corporate & Bulk B2B Orders with Smooth Blur Entrance */}
        <section id="b2b" className="py-24 bg-slate-900 dark:bg-slate-950 text-white border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <RevealOnScroll direction="right" blur={true} blurAmount={14}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-950 text-emerald-300 border border-emerald-800 mb-4">
                <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Enterprise & Workstation Deployment</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                High-Performance Hardware for Tech Teams & Studios
              </h2>
              <p className="text-slate-300 mt-4 text-base sm:text-lg leading-relaxed">
                Equip engineering and design teams with high-throughput 40Gbps Thunderbolt 4 hubs, custom macro decks, and rapid-trigger ergonomic keyboards with volume pricing.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                  <span>Pre-flashed customized QMK/VIA keymaps and layer profiles</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                  <span>High-yield QA testing with 100% individual PCB signal verification</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                  <span>Tiered enterprise volume pricing starting at 5+ workstation rigs</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <AnimatedButton
                  variant="whatsapp"
                  onClick={() => handleWhatsAppRedirect('Corporate Bulk Order Inquiry (10+ Units)')}
                  className="px-6 py-3.5 text-sm font-bold shadow-md"
                >
                  Request Corporate B2B Quote via WhatsApp
                </AnimatedButton>
              </div>
            </RevealOnScroll>

            <ImageReveal
              src="https://images.unsplash.com/photo-1542744094-3a3172720177?auto=format&fit=crop&w=1000&q=80"
              alt="Engineering Workstation Deployment"
              variant="clip-inset"
              aspectRatio="aspect-16/9 sm:aspect-4/3"
              className="rounded-3xl shadow-2xl border border-slate-800"
            />
          </div>
        </section>

        {/* Direct WhatsApp Query & Commission Form */}
        <ContactForm preselectedProduct={inquiryProduct} />
      </main>

      {/* Modern Footer with Theme Toggle and Direct Contact */}
      <Footer />

      {/* AI Assistant Modal with Dark Mode and Quick Links */}
      <AIAssistantModal isOpen={isAIModalOpen} onClose={() => setIsAIModalOpen(false)}>
        <div className="p-6 sm:p-7">
          <div className="flex justify-between items-center pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm">
                CW
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  CraftWave Tech Concierge
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Hardware architecture & specs support
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsAIModalOpen(false)}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 font-bold p-1 rounded-lg transition-colors cursor-pointer"
            >
              ✕
            </button>
          </div>

          <div className="py-6 space-y-4">
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Have questions about Hall-effect sensor actuation, Thunderbolt 4 multi-display setups, custom switch lubing, or QMK keymaps?
            </p>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-2 text-slate-700 dark:text-slate-300">
              <p className="font-semibold text-slate-900 dark:text-white">Hardware Topics:</p>
              <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
                <li>Rapid trigger & Hall-effect actuation calibration (0.1mm - 4.0mm)</li>
                <li>Thunderbolt 4 dual 4K 144Hz workstation docking</li>
                <li>Custom RP2040 macro deck layer programming</li>
              </ul>
            </div>

            <div className="pt-2">
              <AnimatedButton
                variant="whatsapp"
                className="w-full justify-center py-3.5 text-sm font-bold shadow-md"
                onClick={() => {
                  setIsAIModalOpen(false);
                  handleWhatsAppRedirect('General Consultation from Concierge');
                }}
              >
                💬 Chat on WhatsApp (+91 96500 22810)
              </AnimatedButton>
            </div>
          </div>
        </div>
      </AIAssistantModal>
    </div>
  );
}