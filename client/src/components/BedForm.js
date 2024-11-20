import React from "react";
import "./BedForm.css";

const BedForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div className="form-card">
      <h3 className="card-title">Book a Bed</h3>
      <form onSubmit={handleSubmit} className="booking-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-input"
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
          className="form-input"
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          value={formData.contact}
          onChange={handleChange}
          required
          className="form-input"
        />
        <select
          name="bedType"
          value={formData.bedType}
          onChange={handleChange}
          required
          className="form-select"
        >
          <option value="" disabled>Select Bed Type</option>
          <option value="special">Special</option>
          <option value="semiSpecial">Semi-special</option>
          <option value="common">Common</option>
        </select>
        <button type="submit" className="submit-button">
          Book Bed
        </button>
      </form>
    </div>
  );
};

export default BedForm;