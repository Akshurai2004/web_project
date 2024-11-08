import React from 'react';
import './services.css'; // Import the CSS file for styling
import HealthServicesPage from './HealthServicesPage';

const services = ()=> {
  return (
    <div>
      {/* Add the styled headline */}
      <h1 className="headline">All-Inclusive Care</h1>

      {/* Render the HealthServicesPage component */}
      <HealthServicesPage />
    </div>
  );
}

export default services;