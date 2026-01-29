import React, { useState } from 'react';
import { FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // UI only - no backend functionality
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Visit Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Visit Our Studio Cafe</h3>
            <div className="contact-details">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4>Location</h4>
                  <p>Kankai Rd, Birtamod, Nepal<br />(Opposite to Nova)</p>
                </div>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <p><a href="tel:9700911505">9700911505</a></p>
                </div>
              </div>
              <div className="contact-item">
                <FaClock className="contact-icon" />
                <div>
                  <h4>Hours</h4>
                  <p>Mon-Sun: 7:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="map-section">
            <div className="map-header">
              <h3>Find Us</h3>
              <p>Visit us at Clay and Cuisine Cafe</p>
            </div>
            <div className="premium-map-container">
              <iframe
                title="Clay and Cuisine Cafe Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3566.0652882836857!2d87.99348337543029!3d26.646391976807074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5bb00068c9619%3A0x91b86199a58af462!2sClay%20and%20cuisine%20cafe!5e0!3m2!1sen!2snp!4v1769648795081!5m2!1sen!2snp"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;