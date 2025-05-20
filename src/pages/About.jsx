import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <h1>About GoVibe</h1>
      <p>
        GoVibe is your ultimate travel companion, offering handpicked stays across the globe to turn your vacations into unforgettable experiences. Whether you're looking for a serene villa, a cozy apartment, or a unique houseboat, GoVibe has it all.
      </p>
      <p>
        Our mission is to make travel planning stress-free and exciting. From browsing to booking, we provide a seamless experience with real-time availability, secure payments, and a user-friendly interface.
      </p>
      <p>
        We believe in vibes—each destination has a unique one, and we're here to help you find yours. Our team is constantly working to bring you the best listings, curated categories, and excellent customer support.
      </p>

      <h2>Why Choose GoVibe?</h2>
      <ul>
        <li>Verified and high-quality listings</li>
        <li>Responsive customer support</li>
        <li>Easy search and filter options</li>
        <li>Safe and secure bookings</li>
        <li>Mobile-friendly experience</li>
      </ul>

      <div className="about-footer">
        <p>
          Start your next journey with <span className="brand">GoVibe</span> — where vibes meet adventure.
        </p>
      </div>
    </div>
  );
};

export default About;
