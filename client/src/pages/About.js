// About.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="page-content">
      <h1 className="about-header">ABOUT US</h1>
      
      <div className="about-text-box">
      <p>
Apollo Hospitals is one of India's premier healthcare institutions, widely recognized globally for its high standards in medical care, cutting-edge technology, and a patient-first approach. Founded in 1983 by Dr. Prathap C. Reddy, Apollo has been a trailblazer in transforming India’s healthcare landscape. Over the decades, it has grown into a network of multi-specialty hospitals, catering to millions of patients annually from across the globe. 

With a strong focus on innovative medical practices, Apollo Hospitals offers comprehensive care across diverse specialties, including cardiology, oncology, neurology, orthopedics, gastroenterology, pediatrics, and transplants. Its state-of-the-art heart care, advanced cancer treatments, robotic surgeries, and personalized healthcare plans make Apollo a leader in the healthcare sector. 

Apollo Hospitals is renowned for its cutting-edge technology, such as robotic surgeries, AI-driven diagnostics, and telemedicine services, ensuring the highest quality care for patients. Accredited by prestigious global organizations like Joint Commission International (JCI), Apollo adheres to world-class healthcare standards. Its commitment to research and innovation has led to breakthroughs in genomics, preventive healthcare, and wellness programs. 

With over 40 years of excellence in healthcare, Apollo boasts a network of 70+ hospitals across India and abroad, offering 50+ specialties under one roof. Trusted by over 150 million patients from 140 countries, Apollo's highly experienced doctors, nurses, and medical staff provide compassionate, affordable, and reliable care. 

Apollo Hospitals is dedicated to its mission of "Touching lives, Enhancing Quality," making it a trusted and preferred healthcare destination for millions worldwide.


Apollo Hospitals is one of India's premier healthcare institutions, widely recognized globally for its high standards in medical care, cutting-edge technology, and a patient-first approach. Founded in 1983 by Dr. Prathap C. Reddy, Apollo has been a trailblazer in transforming India’s healthcare landscape. Over the decades, it has grown into a network of multi-specialty hospitals, catering to millions of patients annually from across the globe. 

</p>      </div>
      
      <div className="button-container">
        <button 
          className="action-button"
          onClick={() => navigate('/billing')}
        >
          Go to Billing
        </button>
        
        <button 
          className="action-button"
          onClick={() => navigate('/ambulance')}
        >
          Go to Ambulance Services
        </button>
        
        <button 
          className="action-button"
          onClick={() => navigate('/BedBooking')}
        >
          Go to BedBooking
        </button>
        
        <button 
          className="action-button"
          onClick={() => navigate('/doctor')}
        >
          Go to Doctor
        </button>
      </div>
      
      <button className="read-more-button">
        Read More
      </button>
    </div>
  );
};

export default About;