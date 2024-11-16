import React, { useState } from 'react';
import './AmbulanceBooking.css';

function AmbulanceBooking() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    pickupLocation: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'contact' && !/^\d*$/.test(value)) {
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleBooking = (e) => {
    e.preventDefault();
    if (formData.name && formData.contact && formData.pickupLocation) {
      alert(`Ambulance booked successfully! For further assistance, please contact: 9000000001`);
      setFormData({ name: '', contact: '', pickupLocation: '' });
    } else {
      alert('Please fill in all the details');
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="form-section">
          <h2>Ambulance Booking</h2>
          <form onSubmit={handleBooking}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              placeholder="Contact"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              required
              maxLength="10"
            />
            <input
              type="text"
              placeholder="Pickup Location"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Book Ambulance</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AmbulanceBooking;
