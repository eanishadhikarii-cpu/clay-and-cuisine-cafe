import React from 'react';
import '../styles/hero.css';
import heroImage from '../assets/images/WhatsApp Image 2026-01-06 at 7.33.21 PM.jpeg';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <img src={heroImage} alt="Clay & Cuisine Cafe" loading="eager" />
      </div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Clay & Cuisine Cafe</h1>
          <p className="hero-tagline">
            Where artisan food meets creative clay art experiences
          </p>
          <div className="hero-buttons">
            <button className="btn" onClick={() => scrollToSection('menu')}>
              Explore Menu
            </button>
            <button className="btn btn-outline" onClick={() => scrollToSection('clay-art')}>
              Clay Art Experience
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;