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
        <p>Apollo Hospitals is one of Indias premier healthcare institutions, recognized globally for its high standards in medical care, advanced technology, and patient-centric services. Established in 1983 by Dr. Prathap C. Reddy, Apollo has been a pioneer in transforming the healthcare landscape of India. With a network of multi-specialty hospitals, Apollo offers comprehensive care across a wide range of medical specialties including cardiology, oncology, neurology, and orthopedics. Its state-of-the-art facilities, combined with a team of experienced doctors, nurses, and support staff, ensure the highest quality of medical treatment. Apollos commitment to innovation, patient safety, and compassionate care makes it a trusted choice for patients from all over the world.</p>
      </div>
      
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
          onClick={() => navigate('/appointment')}
        >
          Go to Appointment
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