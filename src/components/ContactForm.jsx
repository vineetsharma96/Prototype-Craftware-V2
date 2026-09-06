import React, { useState, useEffect } from 'react';
import { PRODUCTS } from '../data/content';

export default function ContactForm({ preselectedProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: '',
    query: ''
  });

  const [errors, setErrors] = useState({});
  const [statusMsg, setStatusMsg] = useState('');

  // TARGET WHATSAPP NUMBER - Replace with actual mobile number (with country code, no + or spaces)
  const YOUR_WHATSAPP_NUMBER = "919650022810";

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
    const phoneRegex = /^[6-9]\d{9}$/; // Standard 10-digit Indian mobile validation

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatusMsg('Opening WhatsApp...');

    const message = 
`Hello, I have a query.

Name: ${formData.name.trim()}
Phone: ${formData.phone.trim()}
Product/Service: ${formData.product || 'General Inquiry'}
Query: ${formData.query.trim()}

Please provide more information.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${YOUR_WHATSAPP_NUMBER}?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setStatusMsg('');
    }, 600);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Send a Direct Query</h2>
        <p className="section-subtitle">Fill out the details below to generate an instant WhatsApp message.</p>

        <div className="contact-container">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="e.g. Vineet Kumar"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-input"
                placeholder="10-digit mobile number"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="product">Product / Service (Optional)</label>
              <select
                id="product"
                name="product"
                className="form-select"
                value={formData.product}
                onChange={handleChange}
              >
                <option value="">General Inquiry</option>
                {PRODUCTS.map((p) => (
                  <option key={p.id} value={p.name}>{p.name}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="query">Message / Query *</label>
              <textarea
                id="query"
                name="query"
                rows="4"
                className="form-textarea"
                placeholder="How long does custom keycap processing take?"
                value={formData.query}
                onChange={handleChange}
              ></textarea>
              {errors.query && <span className="error-text">{errors.query}</span>}
            </div>

            <button type="submit" className="btn btn-whatsapp" style={{ width: '100%' }}>
              💬 Send Query on WhatsApp
            </button>

            {statusMsg && (
              <p style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--wa-green)', fontWeight: '600' }}>
                {statusMsg}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}