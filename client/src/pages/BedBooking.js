import React, { useState } from "react";
import BedInfo from "../components/BedInfo";
import BedForm from "../components/BedForm";
 import "./BedBooking.css";

const BedBooking = () => {
  // State for available beds
  const [beds, setBeds] = useState({
    special: 10,
    semiSpecial: 15,
    common: 20,
  });

  // State to control which component to show
  const [showForm, setShowForm] = useState(false);

  // Function to handle bed booking
  const bookBed = (bedType) => {
    if (beds[bedType] > 0) {
      setBeds((prevBeds) => ({
        ...prevBeds,
        [bedType]: prevBeds[bedType] - 1,
      }));
      alert(`${bedType.replace(/([A-Z])/g, " $1")} bed booked successfully!`);
    } else {
      alert(`No ${bedType.replace(/([A-Z])/g, " $1")} beds available!`);
    }
  };

  // Toggle between BedInfo and BedForm
  const toggleView = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  return (
    <div className="container">
      <h2>Hospital Bed Booking</h2>
      <button onClick={toggleView}>
        {showForm ? "View Bed Information" : "Book a Bed"}
      </button>

      {showForm ? (
        <BedForm bookBed={bookBed} />
      ) : (
        <BedInfo beds={beds} />
      )}
    </div>
  );
};

export default BedBooking;