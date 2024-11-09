// Billing.js
import React, { useState } from 'react';
import './Billing.css';  // Make sure your styles are linked here

const Billing = () => {
  const [activeSection, setActiveSection] = useState('insurance');
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    doctorName: '',
  });

  // Placeholder for expenditure value (can be fetched from backend later)
  const expenditure = null;

  // Function to switch between sections (Insurance and Billing)
  const switchSection = (section) => {
    setActiveSection(section);
    setFormData({ name: '', contact: '', doctorName: '' });
  };

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Placeholder for form submission (backend connection can be added later)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} form submitted (Backend integration pending)`);
  };

  return (
    <div className="App">
      <div className="container">
        {/* Section Switcher */}
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

        {/* Insurance Section */}
        {activeSection === 'insurance' ? (
          <div className="form-section">
            <h2>Insurance</h2>
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
                placeholder="Expenditure (To be fetched from backend)"
                value={expenditure !== null ? `${expenditure} `: ''}
                readOnly
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        ) : (
          // Billing Section
          <div className="form-section">
            <h2>Billing</h2>
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
                placeholder="Expenditure (To be fetched from backend)"
                value={expenditure !== null ? `${expenditure} `: ''}
                readOnly
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Billing;