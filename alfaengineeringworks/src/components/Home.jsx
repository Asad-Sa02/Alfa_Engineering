import React, { useState } from 'react';
import '../App.css';
import './button.css';
import Services from './Services';
// import Reviews from './cutomers/Reviews';

export default function Home() {
  return (
    <div className="homepage" id="home">
      {/* Hero Section */}
      <section className="hero">
        
        <h1>Alfa Engineering & Fabrication Works</h1>
        <p>Precision. Strength. Reliability.</p>
       <button onClick={() => {
  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
}}>
  Explore Services
</button>

      </section>

      {/* Scrolling Image Gallery */}
      <section className="gallery">
        <div className="scroll-images">
          <img src="logo.png" alt="Pipe 1" />
          <img src="logo.png" alt="Pipe 2" />
          <img src="logo.png" alt="Pipe 3" />
          <img src="logo.png" alt="Pipe 4" />
          <img src="logo.png" alt="Pipe 4" />
                    <img src="logo.png" alt="Pipe 4" />
                              <img src="logo.png" alt="Pipe 4" />
        </div>
      </section>

      {/* Services Section */}
<Services></Services>
{/* <Reviews></Reviews> */}
    </div>
  );
}
