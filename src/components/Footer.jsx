import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#" className="logo">
            CraftWave<span>Studio</span>
          </a>
          <p>Artisanal wooden desk accessories and custom keyboard components tailored for high-performance setups.</p>
        </div>

        <div>
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#why-us">Why Choose Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-title">Contact</h4>
          <ul className="footer-links">
            <li><a href="#contact">Send Query</a></li>
            <li><a href="https://wa.me/919650022810" target="_blank" rel="noreferrer">Direct WhatsApp</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CraftWave Studio. All rights reserved.</p>
      </div>
    </footer>
  );
}