import React, { useState } from 'react';
import '../App.css';
import '../components/button.css';
import Services from '../components/Services';
import Navbar from '../components/Navbar';
import Reviews from '../components/Reviews';
import Footer from '../components/footer';
import GetOrders from '../components/GetOrders';
import GetItems from '../components/GetItems';

export default function Home() {
  return (
    <div className="homepage" id="home">
      <Navbar></Navbar>
      {/* Hero Section */}
<GetOrders></GetOrders>
<GetItems></GetItems>
      <section className="hero">
        
        <h1>Alfa Engineering & Fabrication Works</h1>
        <p>Precision. Strength. Reliability.</p>
       <button onClick={() => {
  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
}}>
  Explore Services
</button>

      </section>
      {/* <OrderList></OrderList> */}

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
      {/* <button className='oauthButton'>hi</button> */}
      <Reviews></Reviews>
      <Services></Services>
      <Footer></Footer>
{/* <Reviews></Reviews> */}
    </div>
  );
}
