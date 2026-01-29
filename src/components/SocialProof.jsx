import React, { useState, useEffect, useRef } from 'react';
import { FaSmile, FaStar, FaComments, FaCoffee, FaPalette } from 'react-icons/fa';
import '../styles/social-proof.css';

const SocialProof = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    customers: 0,
    rating: 0,
    reviews: 0,
    dishes: 0,
    clayArt: 0
  });
  const sectionRef = useRef(null);

  const stats = [
    { key: 'customers', icon: <FaSmile />, target: 2500, label: 'Happy Customers', suffix: '+' },
    { key: 'rating', icon: <FaStar />, target: 4.8, label: 'Google Rating', suffix: '', decimal: true },
    { key: 'reviews', icon: <FaComments />, target: 450, label: 'Google Reviews', suffix: '+' },
    { key: 'dishes', icon: <FaCoffee />, target: 15000, label: 'Dishes Served', suffix: '+' },
    { key: 'clayArt', icon: <FaPalette />, target: 800, label: 'Clay Art Experiences', suffix: '+' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          startCountAnimation();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const startCountAnimation = () => {
    stats.forEach(stat => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = stat.target / steps;
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current = Math.min(increment * step, stat.target);
        
        setCounters(prev => ({
          ...prev,
          [stat.key]: stat.decimal ? parseFloat(current.toFixed(1)) : Math.floor(current)
        }));

        if (step >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);
    });
  };

  return (
    <section ref={sectionRef} className={`section social-proof ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="social-proof-header">
          <h2 className="social-proof-title">Trusted by Our Guests</h2>
          <p className="social-proof-subtitle">A reflection of our guests' experiences</p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={stat.key} className="stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="stat-icon">
                {stat.icon}
              </div>
              <div className="stat-number">
                {stat.decimal ? counters[stat.key].toFixed(1) : counters[stat.key].toLocaleString()}
                {stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;