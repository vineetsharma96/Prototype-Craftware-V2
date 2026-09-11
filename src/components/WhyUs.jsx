import React from 'react';

export default function WhyUs() {
  const highlights = [
    { title: 'Zero Bloatware or Telemetry', text: 'Firmware runs entirely local on open-source QMK/VIA stored in EEPROM memory.' },
    { title: 'Direct Engineer Line', text: 'No chatbots. Communicate directly with the hardware engineer tuning your rig.' },
    { title: 'Custom Switch & Actuation Tuning', text: 'Need a specific actuation depth or switch lubing? We calibrate every build.' }
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