import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <h2>Contact Us</h2>
        <p>Alfa Engineering & Fabrication Works</p>
        <p>📍 Thane, Maharashtra, India</p>
        <p>📞 +91-9768217805</p>
        <p>📧 alfaengineering71@gmail.com</p>
      </div>
      <div className="footer-bottom" id='contact'>
        <p>&copy; {new Date().getFullYear()} Alfa Engineering. All rights reserved.</p>
      </div>
    </footer>
  );
}
