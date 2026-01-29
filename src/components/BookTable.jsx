import React, { useState, useEffect } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaCalendarAlt, FaClock, FaUsers, FaCheckCircle } from 'react-icons/fa';
import '../styles/book-table.css';

const BookTable = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    const element = document.getElementById('book-table');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.phone || !formData.date || !formData.time) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      // Send booking data to serverless function
      const response = await fetch('/api/send-booking-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          date: formData.date,
          time: formData.time,
          guests: formData.guests,
          specialRequests: formData.specialRequests
        })
      });

      const result = await response.json();

      if (response.ok) {
        // Store confirmed booking data
        setConfirmedBooking({ ...formData });
        
        // Show confirmation UI
        setShowConfirmation(true);
        
        console.log('Booking email sent successfully');
      } else {
        throw new Error(result.error || 'Failed to send booking');
      }
    } catch (error) {
      console.error('Booking submission error:', error);
      alert('Sorry, there was an error processing your booking. Please try again or call us directly.');
    }
  };

  const handleBookAnother = () => {
    setShowConfirmation(false);
    setConfirmedBooking(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      guests: '2',
      specialRequests: ''
    });
  };

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const timeSlots = [
    '7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM',
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
    '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'
  ];

  if (showConfirmation && confirmedBooking) {
    return (
      <section id="book-table" className={`section book-table luxury-booking ${isVisible ? 'visible' : ''}`}>
        <div className="container">
          <div className="confirmation-wrapper">
            <div className="confirmation-card">
              <div className="confirmation-icon">
                <FaCheckCircle />
              </div>
              
              <h2 className="confirmation-title">Reservation Confirmed</h2>
              <p className="confirmation-message">
                Thank you for your reservation. We look forward to welcoming you.
              </p>
              
              <div className="booking-details">
                <h3>Booking Details</h3>
                <div className="details-grid">
                  <div className="detail-item">
                    <span className="detail-label">Name:</span>
                    <span className="detail-value">{confirmedBooking.fullName}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Date:</span>
                    <span className="detail-value">{new Date(confirmedBooking.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Time:</span>
                    <span className="detail-value">{confirmedBooking.time}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Guests:</span>
                    <span className="detail-value">{confirmedBooking.guests} {confirmedBooking.guests === '1' ? 'Guest' : 'Guests'}</span>
                  </div>
                </div>
              </div>
              
              <div className="confirmation-actions">
                <button className="primary-action-btn" onClick={handleBookAnother}>
                  Book Another Table
                </button>
                <button className="secondary-action-btn" onClick={scrollToMenu}>
                  Return to Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="book-table" className={`section book-table luxury-booking ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="booking-header">
          <h2 className="booking-title">Book a Table</h2>
          <p className="booking-subtitle">Reserve your place for a refined dining experience</p>
        </div>

        <div className="booking-form-wrapper">
          <form className="luxury-booking-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label>
                  <FaUser className="form-icon" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label>
                  <FaPhone className="form-icon" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="form-group">
                <label>
                  <FaEnvelope className="form-icon" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email (optional)"
                />
              </div>

              <div className="form-group">
                <label>
                  <FaUsers className="form-icon" />
                  Number of Guests *
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                >
                  {[1,2,3,4,5,6,7,8,9,10].map(num => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>
                  <FaCalendarAlt className="form-icon" />
                  Preferred Date *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={getTomorrowDate()}
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  <FaClock className="form-icon" />
                  Preferred Time *
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Time</option>
                  {timeSlots.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group full-width">
              <label>Special Requests</label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows="4"
                placeholder="Any special requests, dietary restrictions, or celebration details..."
              ></textarea>
            </div>

            <div className="form-submit">
              <button type="submit" className="reserve-btn">
                Reserve Table
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookTable;