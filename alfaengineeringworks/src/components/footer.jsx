import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <h2>Contact Us</h2>
        <p>Alfa Engineering & Fabrication Works</p>
        <p>📍 Thane, Maharashtra, India</p>
        <p>📞 +91-9876543210</p>
        <p>📧 alfa.fabrication@example.com</p>
      </div>
      <div className="footer-bottom" id='contact'>
        <p>&copy; {new Date().getFullYear()} Alfa Engineering. All rights reserved.</p>
      </div>
    </footer>
  );
}
