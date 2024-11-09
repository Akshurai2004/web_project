// DoctorList.js
import React from 'react';
import DoctorCard from './DoctorCard.js';
import './DoctorList.css';

const doctors = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Dr. ${['Alice', 'Bob', 'Charlie', 'Diana', 'Eli', 'Fiona', 'George', 'Hannah', 'Ian', 'Jane', 'Kevin', 'Laura', 'Mark', 'Nina', 'Oscar', 'Paula', 'Quinn', 'Rachel', 'Sam', 'Tina'][i]}`,
  specialty: ['Cardiology', 'Dermatology', 'Pediatrics', 'Orthopedics', 'Neurology'][i % 5],
  experience: Math.floor(Math.random() * 21) + 5, // Random experience between 5 and 25 years
  photo: `https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i + 30}.jpg`,
}));

const DoctorList = () => {
  return (
    <div className="doctor-list-container">
      <div className="doctor-info-title-container">
        <h1 className="doctor-info-title">Doctor Information</h1>
      </div>
      <div className="doctor-list">
        {doctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            name={doctor.name}
            specialty={doctor.specialty}
            experience={doctor.experience}
            photo={doctor.photo}
          />
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
