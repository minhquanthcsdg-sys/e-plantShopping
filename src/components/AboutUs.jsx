import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-hero">
        <h1>🌿 Welcome to Paradise Nursery</h1>
        <p>Where Green Dreams Come True</p>
      </div>
      
      <div className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Paradise Nursery was founded with a simple mission: to bring the joy of 
            indoor gardening to every home. We believe that plants are not just 
            decorations but companions that purify air, boost mood, and create 
            peaceful sanctuaries in our living spaces.
          </p>
        </div>

        <div className="about-section">
          <h2>Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature">
              <span className="feature-icon">🌱</span>
              <h3>Premium Quality</h3>
              <p>Healthy, well-maintained plants from trusted growers</p>
            </div>
            <div className="feature">
              <span className="feature-icon">🌿</span>
              <h3>Expert Care</h3>
              <p>Detailed care instructions for every plant</p>
            </div>
            <div className="feature">
              <span className="feature-icon">💚</span>
              <h3>Sustainable</h3>
              <p>Eco-friendly packaging and practices</p>
            </div>
            <div className="feature">
              <span className="feature-icon">🚚</span>
              <h3>Fast Delivery</h3>
              <p>Carefully packaged and delivered with love</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Our Promise</h2>
          <p>
            Every plant that leaves our nursery is nurtured with care and attention. 
            We're committed to helping you create your own green paradise at home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
