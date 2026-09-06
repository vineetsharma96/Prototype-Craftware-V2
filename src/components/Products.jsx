import React from 'react';
import { PRODUCTS } from '../data/content';

export default function Products({ onSelectProduct }) {
  return (
    <section id="products" className="section">
      <div className="container">
        <h2 className="section-title">Featured Products</h2>
        <p className="section-subtitle">Explore our handpicked collection of ergonomic desk gear.</p>
        
        <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {PRODUCTS.map((item) => (
            <div className="product-card" key={item.id}>
              <div className="product-image-container">
                <img src={item.image} alt={item.name} className="product-image" loading="lazy" />
                <span className="product-badge">{item.badge}</span>
              </div>
              <div className="product-content">
                <span className="product-category">{item.category}</span>
                <h3 className="product-name">{item.name}</h3>
                <p className="product-desc">{item.description}</p>
                <div className="product-footer">
                  <span className="product-price">{item.price}</span>
                  <a 
                    href="#contact" 
                    className="btn btn-primary"
                    style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                    onClick={() => onSelectProduct(item.name)}
                  >
                    Inquire Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}