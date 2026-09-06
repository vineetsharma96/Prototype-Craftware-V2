import React from 'react';
import { FEATURES } from '../data/content';

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Built with Craftsmanship</h2>
        <p className="section-subtitle">Merging engineering accuracy with timeless natural materials.</p>
        
        <div className="grid-cards">
          {FEATURES.map((feature, idx) => (
            <div className="card" key={idx}>
              <div className="card-icon">{feature.icon}</div>
              <h3 className="card-title">{feature.title}</h3>
              <p className="card-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}