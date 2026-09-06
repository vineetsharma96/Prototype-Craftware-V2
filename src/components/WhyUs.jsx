import React from 'react';

export default function WhyUs() {
  const highlights = [
    { title: 'Zero Mass Production', text: 'Each item is hand-finished individually to maintain high structural integrity.' },
    { title: 'Direct WhatsApp Line', text: 'No chatbots. Communicate directly with the artisan making your accessories.' },
    { title: 'Tailored Customization', text: 'Need a custom size or timber species? We accept direct personalized requests.' }
  ];

  return (
    <section id="why-us" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Why Choose CraftWave</h2>
        <p className="section-subtitle">We prioritize quality and individual customer care over scale.</p>
        
        <div className="grid-cards">
          {highlights.map((h, i) => (
            <div className="card" key={i}>
              <h3 className="card-title" style={{ color: 'var(--primary)' }}>{h.title}</h3>
              <p className="card-desc">{h.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}