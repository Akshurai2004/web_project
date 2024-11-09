import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* Header Section */}
        <h1 className="about-header">ABOUT US</h1>
        {/* Text Section */}
        <div className="about-text">
          <p>TEXT</p>
        </div>
        {/* Features Grid */}
        <div className="features-grid">
          {/* Feature items */}
          <div className="feature-item">
            <h3>AMBULANCE<br />SERVICES</h3>
          </div>
          <div className="feature-item">
            <h3>OPEN 7 DAYS<br />A WEEK</h3>
          </div>
          <div className="feature-item">
            <h3>ACCEPTING ALL MAJOR<br />INSURANCE PLANS</h3>
          </div>
          <div className="feature-item">
            <h3>SHORT WAITING<br />TIMES</h3>
          </div>
          <div className="feature-item">
            <h3>FASTER<br />APPOINTMENTS</h3>
          </div>
        </div>
        {/* Read More Button */}
        <div style={{ textAlign: 'center' }}>
          <button className="read-more-button">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
