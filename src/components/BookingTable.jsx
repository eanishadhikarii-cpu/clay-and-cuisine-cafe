import React from 'react';
import '../styles/booking-table.css';

const BookingTable = () => {
  const bookings = [
    { id: 1, name: "Sarah Chen", type: "Cafe Seating", date: "2024-02-15", time: "2:00 PM", guests: 2, status: "Confirmed" },
    { id: 2, name: "Michael Rodriguez", type: "Clay Art Experience", date: "2024-02-15", time: "4:30 PM", guests: 4, status: "Pending" },
    { id: 3, name: "Emma Thompson", type: "Cafe Seating", date: "2024-02-16", time: "12:00 PM", guests: 3, status: "Confirmed" },
    { id: 4, name: "David Park", type: "Clay Art Experience", date: "2024-02-16", time: "6:00 PM", guests: 2, status: "Confirmed" },
    { id: 5, name: "Lisa Johnson", type: "Cafe Seating", date: "2024-02-17", time: "10:30 AM", guests: 1, status: "Pending" }
  ];

  return (
    <section className="booking-table-section">
      <div className="container">
        <h2 className="section-title">Current Reservations</h2>
        
        <div className="booking-table">
          <div className="table-header">
            <span>GUEST</span>
            <span>EXPERIENCE</span>
            <span>DATE</span>
            <span>TIME</span>
            <span>GUESTS</span>
            <span>STATUS</span>
          </div>
          
          <div className="booking-rows">
            {bookings.map((booking) => (
              <div key={booking.id} className="booking-card">
                <div className="booking-guest">
                  <span className="guest-name">{booking.name}</span>
                </div>
                <div className="booking-type">
                  <span>{booking.type}</span>
                </div>
                <div className="booking-date">
                  <span>{new Date(booking.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                </div>
                <div className="booking-time">
                  <span>{booking.time}</span>
                </div>
                <div className="booking-guests">
                  <span>{booking.guests}</span>
                </div>
                <div className="booking-status">
                  <span className={`status ${booking.status.toLowerCase()}`}>{booking.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingTable;