// Doctor.js
import React from 'react';
import DoctorList from './DoctorList';
import './Doctor.css';

const Doctor = () => {
  return (
    <div className="doctor-info-section">
      <div className="doctor-list-container">
        <DoctorList />
      </div>
    </div>
  );
};

export default Doctor;
