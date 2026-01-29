import React from 'react';
import '../styles/about.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Our Unique Experience</h2>
        <div className="about-content">
          <div className="about-layout">
            <div className="about-text">
              
              <p>
                Clay and Cuisine Cafe is a thoughtfully curated space where fine cuisine and artistic expression coexist in quiet harmony. Designed with an appreciation for craftsmanship, comfort, and culture, the café offers an experience that extends beyond dining.
              </p>
              <p>
                We serve carefully prepared food and beverages in a calm, refined environment, distinguished by the integration of clay art as a creative experience. Guests are invited to engage with the timeless craft of pottery while enjoying the warmth and elegance of the café setting.
              </p>
            </div>
            <div className="about-photo">
              <div className="photo-card">
                <div className="photo-placeholder">
                  <span>Elegant café interior with clay art displays and refined dining atmosphere</span>
                </div>
              </div>
            </div>
          </div>
          <div className="about-bottom">
            <p>
              Defined by a refined plum-green and white palette, our interiors reflect simplicity and sophistication, creating an atmosphere ideal for relaxation, creativity, and meaningful moments.
            </p>
            <p className="about-tagline">
              <strong>Clay and Cuisine Cafe — where art, taste, and tranquility come together.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;