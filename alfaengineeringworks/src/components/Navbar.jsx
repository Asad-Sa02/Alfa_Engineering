import React from 'react';
import '../App.css';
import { useState } from 'react';
import OrderModal from './cutomers/Order';

export default function Navbar() {
    //   const [menuOpen, setMenuOpen] = useState(false);
const [isOrderModalOpen, setOrderModalOpen] = useState(false);
const [isLoggedIn,setLoggedIn] = useState(false)    
return (
    <nav className="navbar">
      <div className="logo">
        <img src='logo.png' className='logo-img' alt='ALFA'></img>Alfa Engineering & Fabrication Works</div>
 {/* <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div> */}
      <ul className="nav-links">
        <li>
                        <a
  href="#home"
  onClick={(e) => {
    e.preventDefault();
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  }}
>
  Home
</a>
            </li>
        <li>
            <a
  href="#contact"
  onClick={(e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }}
>
  Contact
</a>

            </li>
        <li><a href="https://maps.app.goo.gl/7UkBTjpoEv92xwUk6">Map</a></li>
        <li><a href="">Login</a></li>
        <li><a href="#order" onClick={()=>setOrderModalOpen(true)}>Order</a>
          <OrderModal isOpen={isOrderModalOpen} onClose={() => setOrderModalOpen(false)} /></li>
      </ul>
    </nav>
  );
}
