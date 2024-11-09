// DoctorCard.js
import React from 'react';
import './DoctorCard.css';

const DoctorCard = ({ name, specialty, experience, photo }) => {
  return (
    <div className="doctor-card">
      <img src={photo} alt={`${name}`} className="doctor-photo" />
      <h2 className="doctor-name">{name}</h2>
      <p className="doctor-specialty">Specialty: {specialty}</p>
      <p className="doctor-experience">Experience: {experience} years</p>
    </div>
  );
};

export default DoctorCard;