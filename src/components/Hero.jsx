import React from 'react';
import '../styles/hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
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