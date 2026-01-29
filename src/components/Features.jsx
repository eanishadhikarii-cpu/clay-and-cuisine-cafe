import React from 'react';
import { FaPalette, FaLeaf, FaHeart, FaClock } from 'react-icons/fa';
import '../styles/features.css';

const Features = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: <FaPalette />,
      title: "Timeless Craftsmanship",
      description: "Shape clay into vessels and artistic forms through mindful creation"
    },
    {
      icon: <FaLeaf />,
      title: "Tranquil Creative Space",
      description: "A serene setting designed for quiet focus"
    },
    {
      icon: <FaHeart />,
      title: "Mindful Expression",
      description: "Discover the meditative rhythm of working with clay"
    },
    {
      icon: <FaClock />,
      title: "Unhurried Experience",
      description: "Create at your own pace, free from distraction"
    }
  ];

  return (
    <section id="clay-art" className="section features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Clay Art at Clay and Cuisine Cafe</h2>
          <p className="section-subtitle">A signature creative experience rooted in timeless craftsmanship</p>
        </div>
        
        <div className="intro-highlights">
          <div className="highlight-item">Hands-on clay art experience</div>
          <div className="highlight-item">Mindful and immersive creative process</div>
          <div className="highlight-item">Harmony between art and refined dining</div>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="philosophy-statement">
          <div className="philosophy-item">Slow down</div>
          <div className="philosophy-item">Create with intention</div>
          <div className="philosophy-item">Appreciate the harmony of art and cuisine</div>
        </div>

        <div className="features-cta">
          <button className="btn premium-btn" onClick={() => scrollToSection('contact')}>
            Discover the Creative Experience
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;