import React, { useState, useEffect } from 'react';
import { MessageSquare, CheckCircle2 } from 'lucide-react';
import { PRODUCTS } from '../data/content';
import { RevealOnScroll } from './motion/RevealOnScroll';
import { AnimatedButton } from './motion/AnimatedButton';

export function ContactForm({ preselectedProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: '',
    query: ''
  });

  const [errors, setErrors] = useState({});
  const [statusMsg, setStatusMsg] = useState('');

  const YOUR_WHATSAPP_NUMBER = '919650022810';

  useEffect(() => {
    if (preselectedProduct) {
      setFormData((prev) => ({ ...prev, product: preselectedProduct }));
    }
  }, [preselectedProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Enter a valid 10-digit mobile number';
    }
    if (!formData.query.trim()) newErrors.query = 'Please enter your message or query';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getFormattedMessage = () => {
    return `Hello CraftWave Systems,

Name: ${formData.name.trim() || '[Your Name]'}
Phone: ${formData.phone.trim() || '[Your Phone]'}
Product: ${formData.product || 'General Tech Inquiry'}
Query: ${formData.query.trim() || 'I would like to inquire about your hardware specs and availability.'}

Please advise on technical specifications, shipping, and firmware setup.`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatusMsg('Opening WhatsApp...');

    const encodedMessage = encodeURIComponent(getFormattedMessage());
    const whatsappUrl = `https://wa.me/${YOUR_WHATSAPP_NUMBER}?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setStatusMsg('');
    }, 400);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header with Blur Pop */}
        <RevealOnScroll className="text-center max-w-3xl mx-auto mb-16" blur={true} blurAmount={14}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Direct Hardware Engineer Line</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Order or Inquire About <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              High-Performance Hardware
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Fill out the details below to generate an instant direct WhatsApp chat with our hardware engineering team.
          </p>
        </RevealOnScroll>

        {/* Contact Form Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          {/* Form Fields Card */}
          <div className="lg:col-span-7">
            <RevealOnScroll direction="right" blur={true} blurAmount={12}>
              <div className="p-7 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 shadow-sm transition-colors duration-300">
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Aarav Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 transition-all text-sm"
                    />
                    {errors.name && <span className="text-xs text-rose-500 mt-1 block">{errors.name}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      Mobile Number (10 Digits) *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 transition-all text-sm"
                    />
                    {errors.phone && <span className="text-xs text-rose-500 mt-1 block">{errors.phone}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      Product or Commission Type
                    </label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 transition-all text-sm cursor-pointer"
                    >
                      <option value="">General Custom Inquiry</option>
                      {PRODUCTS.map((p) => (
                        <option key={p.id} value={p.title || p.name}>
                          {p.title || p.name} (₹{p.price})
                        </option>
                      ))}
                      <option value="Corporate Bulk Order">Enterprise Workstation Deployment & Bulk Hardware</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      Message / Custom Dimensions *
                    </label>
                    <textarea
                      name="query"
                      rows={3}
                      placeholder="e.g. Inquiring about custom switch lubing, rapid trigger actuation curves, or bulk workstation setups."
                      value={formData.query}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 transition-all text-sm"
                    />
                    {errors.query && <span className="text-xs text-rose-500 mt-1 block">{errors.query}</span>}
                  </div>

                  <AnimatedButton
                    variant="whatsapp"
                    type="submit"
                    className="w-full justify-center py-3.5 text-sm font-bold shadow-md"
                  >
                    💬 Send Query on WhatsApp
                  </AnimatedButton>

                  {statusMsg && (
                    <p className="text-center text-xs font-bold text-emerald-600 dark:text-emerald-400 animate-pulse">
                      {statusMsg}
                    </p>
                  )}
                </form>
              </div>
            </RevealOnScroll>
          </div>

          {/* WhatsApp Live Bubble Preview */}
          <div className="lg:col-span-5">
            <RevealOnScroll direction="left" blur={true} blurAmount={12} delay={100}>
              <div className="p-7 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl">
                <div className="flex items-center gap-3 pb-5 border-b border-slate-800">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-slate-950">
                    CW
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">CraftWave Systems Tech Desk</h4>
                    <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Online • Typically replies in 15 mins
                    </p>
                  </div>
                </div>

                <div className="py-6 space-y-4">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Live WhatsApp Message Preview:
                  </span>
                  <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-800/40 text-xs text-emerald-200 leading-relaxed font-mono whitespace-pre-line shadow-inner">
                    {getFormattedMessage()}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 space-y-2.5 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Direct chat with our hardware engineers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Custom QMK/VIA firmware profiles on request</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Live dispatch tracking provided on WhatsApp</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;