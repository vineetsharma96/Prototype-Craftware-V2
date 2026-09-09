import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import AIAssistantModal from './components/AIAssistantModal';
import RevealOnScroll from './components/motion/RevealOnScroll';
import ImageReveal from './components/motion/ImageReveal';
import AnimatedButton from './components/motion/AnimatedButton';

const PRODUCTS = [
  {
    id: 1,
    title: 'Artisanal Walnut Wrist Rest',
    category: 'Workspace',
    price: '2,499',
    description: 'Ergonomic solid walnut wrist support finished with organic natural oils.',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Minimalist Desk Mat',
    category: 'Accessories',
    price: '1,899',
    description: 'Water-resistant merino wool felt desk pad with non-slip backing.',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Custom Engraved Wooden Dock',
    category: 'Peripherals',
    price: '3,299',
    description: 'Multi-device docking station with built-in fast wireless charging pad.',
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=800&q=80',
  },
];

export default function App() {
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);

  const handleWhatsAppRedirect = (productName = '') => {
    const text = productName
      ? `Hi CraftWave Studio, I am interested in ordering the ${productName}.`
      : `Hi CraftWave Studio, I would like to make an inquiry.`;
    window.open(`https://wa.me/919650022810?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-500 selection:text-white">
      <Navbar onOpenAI={() => setIsAIModalOpen(true)} />

      <main>
        <Hero
          onExplore={() => {
            document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onWhatsApp={() => handleWhatsAppRedirect()}
        />

        <section id="products" className="py-24 max-w-7xl mx-auto px-6">
          <RevealOnScroll className="mb-12 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
              Featured Collection
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Handcrafted for Everyday Focus
            </h2>
            <p className="text-slate-600 mt-3">
              Sustainably sourced materials engineered for premium tactile quality.
            </p>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {PRODUCTS.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                onSelect={(prod) => handleWhatsAppRedirect(prod.title)}
              />
            ))}
          </div>
        </section>

        <section id="b2b" className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <RevealOnScroll direction="right">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                Corporate & Bulk Orders
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">
                Custom Laser Engraved Gifting for Teams
              </h2>
              <p className="text-slate-300 mt-4 leading-relaxed">
                Elevate your office aesthetic with bespoke walnut accessories featuring custom corporate branding and volume tiered pricing.
              </p>
              <div className="mt-8">
                <AnimatedButton
                  variant="whatsapp"
                  onClick={() => handleWhatsAppRedirect('Corporate Bulk Order Inquiry')}
                >
                  Request B2B Quote via WhatsApp
                </AnimatedButton>
              </div>
            </RevealOnScroll>

            <ImageReveal
              src="https://images.unsplash.com/photo-1542744094-3a3172720177?auto=format&fit=crop&w=1000&q=80"
              alt="Corporate Gifting"
              variant="clip-inset"
              aspectRatio="aspect-16/9 sm:aspect-4/3"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </section>
      </main>

      <AIAssistantModal isOpen={isAIModalOpen} onClose={() => setIsAIModalOpen(false)}>
        <div className="p-6">
          <div className="flex justify-between items-center pb-4 border-b border-slate-100">
            <h3 className="font-bold text-lg text-slate-900">CraftWave AI Concierge</h3>
            <button
              onClick={() => setIsAIModalOpen(false)}
              className="text-slate-400 hover:text-slate-600 font-bold p-1"
            >
              ✕
            </button>
          </div>
          <div className="py-8 text-center">
            <p className="text-slate-600 text-sm">
              Have questions about custom sizing, materials, or corporate quotes?
            </p>
            <div className="mt-6">
              <AnimatedButton
                variant="whatsapp"
                className="w-full justify-center"
                onClick={() => {
                  setIsAIModalOpen(false);
                  handleWhatsAppRedirect('General Inquiry from AI Concierge');
                }}
              >
                Connect via WhatsApp
              </AnimatedButton>
            </div>
          </div>
        </div>
      </AIAssistantModal>
    </div>
  );
}