import React, { useState, useEffect } from 'react';
import amb_1 from './amb_1.jpg';
import amb_2 from './amb_2.jpg';
import amb_3 from './amb_3.jpg';
import './AmbulanceBooking.css';

const AmbulanceBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    pickupLocation: '',
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of images for the slideshow
  const images = [amb_1, amb_2, amb_3];

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // Change slides every 3 seconds
    return () => clearInterval(timer);
  }, [images.length]);

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="ambulance-booking">
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

      <div className="slideshow">
        <div className="slides">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`slide ${currentSlide === index ? 'active' : ''}`}
            />
          ))}
        </div>

        {/* Navigation buttons */}
        <button className="prev" onClick={prevSlide}>
          ‹
        </button>
        <button className="next" onClick={nextSlide}>
          ›
        </button>
      </div>
    </div>
  );
};

export default AmbulanceBooking;