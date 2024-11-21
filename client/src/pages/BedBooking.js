import React, { useState } from "react";
import BedInfo from "../components/BedInfo";
import BedForm from "../components/BedForm";
import "./BedBooking.css";
import homeImage from './Home-3.jpeg';

const BedBooking = () => {
  const [beds, setBeds] = useState({
    special: 10,
    semiSpecial: 15,
    common: 20,
  });

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    contact: "",
    bedType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const bookBed = (bedType) => {
    if (beds[bedType] > 0) {
      setBeds((prevBeds) => ({
        ...prevBeds,
        [bedType]: prevBeds[bedType] - 1,
      }));
      alert(` bed booked successfully!`);
    } else {
      alert(` beds available!`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.bedType) {
      alert("Please select a bed type.");
      return;
    }
    bookBed(formData.bedType);
    setFormData({
      name: "",
      age: "",
      contact: "",
      bedType: "",
    });
  };

  return (
    <div className="container">
      <div className="header-section">
        <div className="hospital-image">

          <img 
            src={homeImage}
            alt="Hospital Building" 
            className="hospital-img"
          />
        </div>
        <h2 className="page-title">Hospital Bed Booking</h2>
      </div>
      
      <div className="booking-container">
        <BedInfo beds={beds} />
        <BedForm 
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default BedBooking;