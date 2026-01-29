import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYelp } from 'react-icons/fa';
import '../styles/footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 onClick={scrollToTop} className="footer-logo">Clay & Cuisine Cafe</h3>
            <p className="footer-tagline">Where artisan food meets creative clay art</p>
          </div>
          
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook" className="social-link">
                <FaFacebook />
              </a>
              <a href="#" aria-label="Instagram" className="social-link">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Twitter" className="social-link">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Yelp" className="social-link">
                <FaYelp />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; Clay & Cuisine Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;