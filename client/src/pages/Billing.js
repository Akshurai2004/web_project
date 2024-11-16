import React, { useState } from 'react';
import './Billing.css';

const Billing = () => {
  const [activeSection, setActiveSection] = useState('insurance');
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    doctorName: '',
  });

  // Switch between sections
  const switchSection = (section) => {
    setActiveSection(section);
    setFormData({ name: '', contact: '', doctorName: '' });
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (activeSection === 'billing') {
      const expenditure = Math.floor(Math.random() * (5000 - 300 + 1)) + 300;

      // Send billing data to the backend
      try {
        const response = await fetch('http://localhost:5000/api/billing/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            expenditure,
            type: 'billing',
          }),
        });
        const data = await response.json();
        alert(`Billing submitted with expenditure: ${data.data.expenditure}`);
      } catch (error) {
        console.error('Error submitting billing data:', error);
      }
    } else {
      // Check for a matching billing record for insurance submission
      try {
        const response = await fetch(`http://localhost:5000/api/billing/latest?name=${formData.name}`);
        const data = await response.json();

        if (response.ok) {
          const insuranceExpenditure = Math.floor(data.expenditure * 0.5);
          alert(`Insurance form submitted with expenditure: ${insuranceExpenditure}`);
        } else {
          alert('No user found or no matching billing record');
        }
      } catch (error) {
        console.error('Error fetching latest expenditure:', error);
      }
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="switcher">
          <button
            onClick={() => switchSection('insurance')}
            className={activeSection === 'insurance' ? 'active' : ''}
          >
            Insurance
          </button>
          <button
            onClick={() => switchSection('billing')}
            className={activeSection === 'billing' ? 'active' : ''}
          >
            Billing
          </button>
        </div>

        <div className="form-section">
          <h2>{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h2>
          <form onSubmit={handleSubmit}>
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
            />
            <input
              type="text"
              placeholder="Doctor Name"
              name="doctorName"
              value={formData.doctorName}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              placeholder="Expenditure"
              value={activeSection === 'insurance' ? 'Calculated on submission' : 'Generated on submission'}
              readOnly
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Billing;
