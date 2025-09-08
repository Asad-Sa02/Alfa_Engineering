import { useState } from 'react';
import '../App.css';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
// import OrderModal from './cutomers/Order';

export default function Navbar() {
  // const [isOrderModalOpen, setOrderModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const token = sessionStorage['token']
  const cart = useSelector((state) => state.cart);
  console.log('cart in navbar', cart);
  // Close menu after clicking a link (for mobile UX)
  const handleLinkClick = (callback) => (e) => {
    if (callback) callback(e);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src='logo.png' className='logo-img' alt='ALFA' />
        Alfa Engineering & Fabrication Works
      </div>
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </div>
      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        <li>
          <a
            href="#home"
            onClick={handleLinkClick((e) => {
              e.preventDefault();
              document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
            })}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={handleLinkClick((e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            })}
          >
            Contact
          </a>
        </li>
        <li>
          <a href="https://maps.app.goo.gl/gVWZTfd6DoRNCuAp7" onClick={handleLinkClick()}>
            Map
          </a>
        </li>
        
             <li>
          <a href="/cart">
            cart {cart.items.length===0?'':'('+cart.items.length+')'}
          </a>
        </li>
      
        {token!==undefined?
          <li>
          <a href="/" onClick={()=>{
            sessionStorage.removeItem('token')
          }}>
            Logout
          </a>
          </li>
            :
            <>
            <li>
          <a href="/login" onClick={handleLinkClick}>
            Sign In
          </a>
        </li>
          <li>
          <a href="/register" onClick={handleLinkClick}>
            Sign Up
          </a>
        </li>
        </>}
        {/* <li>
          <a href="#order" onClick={handleLinkClick(() => setOrderModalOpen(true))}>
            Order
          </a>
          {/* <OrderModal isOpen={isOrderModalOpen} onClose={() => setOrderModalOpen(false)} /> */}
        {/* </li> */} 
      </ul>
    </nav>
  );
}
