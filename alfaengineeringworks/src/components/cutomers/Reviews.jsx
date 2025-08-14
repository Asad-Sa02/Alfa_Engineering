import React from 'react';
import './reviews.css'; // Optional: for styling

const reviews = [
  {
    name: "Ramesh Mesta",
    location: "Mumbai, Maharashtra",
    review: "The cleaning is very nice. Every type of concrete cleaning is done with precision.",
    rating: 5
  },
  {
    name: "Priya Kulkarni",
    location: "Mhape, Maharashtra",
    review: "Every bend pipe work is handled professionally. Great service!",
    rating: 5
  },
  {
    name: "Amit Deshmukh",
    location: "Thane, Maharashtra",
    review: "Very satisfied with the fabrication quality. Highly recommended.",
    rating: 4
  },
  {
    name: "Sneha Patil",
    location: "Turbhe, Maharashtra",
    review: "Excellent service and timely delivery. Concrete cleaning was spotless.",
    rating: 5
  },
  {
    name: "Rajesh Sawant",
    location: "Ulwe, Maharashtra",
    review: "Great experience overall. Bend pipe work was accurate and clean.",
    rating: 3.5
  }
];

const Reviews = () => {
  return (
    <section className="reviews-section">
      <h2>Customer Reviews</h2>
      <div className="reviews-container">
        {reviews.map((r, index) => (
          <div key={index} className="review-card">
            <h3>{r.name}</h3>
            <p className="location">{r.location}</p>
            <p className="review-text">“{r.review}”</p>
            <p className="rating">⭐ {r.rating} / 5</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
