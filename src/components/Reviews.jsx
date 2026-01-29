import React from 'react';
import { FaStar } from 'react-icons/fa';
import '../styles/reviews.css';

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Chen",
      rating: 5,
      text: "An absolutely magical experience! The food was incredible and making pottery while dining was so therapeutic. The instructors were patient and encouraging.",
      date: "2 weeks ago"
    },
    {
      name: "Michael Rodriguez",
      rating: 5,
      text: "Perfect date night spot! We loved creating our own mugs while enjoying the amazing shakshuka. The atmosphere is so calming and unique.",
      date: "1 month ago"
    },
    {
      name: "Emma Thompson",
      rating: 5,
      text: "I've never experienced anything like this. The combination of artisan food and clay art is genius. My handmade bowl is now my favorite piece at home!",
      date: "3 weeks ago"
    },
    {
      name: "David Park",
      rating: 4,
      text: "Great concept and execution. The food quality is outstanding and the pottery experience adds such a special touch. Will definitely be back!",
      date: "1 week ago"
    },
    {
      name: "Lisa Johnson",
      rating: 5,
      text: "This place exceeded all expectations. The staff is wonderful, the food is fresh and creative, and I left with a beautiful ceramic piece I made myself.",
      date: "2 months ago"
    },
    {
      name: "Alex Kumar",
      rating: 5,
      text: "A truly unique dining experience. The open creative sessions are perfect - no pressure, just pure enjoyment. The coffee served in handmade mugs is perfection!",
      date: "3 weeks ago"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar 
        key={index} 
        className={index < rating ? 'star filled' : 'star'} 
      />
    ));
  };

  return (
    <section id="reviews" className="section reviews">
      <div className="container">
        <h2 className="section-title">What Our Guests Say</h2>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-header">
                <div className="reviewer-info">
                  <h4 className="reviewer-name">{review.name}</h4>
                  <span className="review-date">{review.date}</span>
                </div>
                <div className="rating">
                  {renderStars(review.rating)}
                </div>
              </div>
              <p className="review-text">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;