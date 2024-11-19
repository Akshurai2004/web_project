// File: src/components/BedForm.js

import React, { useState } from "react";

const BedForm = ({ bookBed }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    contact: "",
    bedType: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.bedType) {
      alert("Please select a bed type.");
      return;
    }

    bookBed(formData.bedType);

    // Reset form
    setFormData({
      name: "",
      age: "",
      contact: "",
      bedType: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="contact"
        placeholder="Contact"
        value={formData.contact}
        onChange={handleChange}
        required
      />
      <select
        name="bedType"
        value={formData.bedType}
        onChange={handleChange}
        required
      >
        <option value="" disabled>
          Select Bed Type
        </option>
        <option value="special">Special</option>
        <option value="semiSpecial">Semi-special</option>
        <option value="common">Common</option>
      </select>
      <button type="submit">Book Bed</button>
    </form>
  );
};

export default BedForm;