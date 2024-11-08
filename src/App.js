// src/App.js
import React from 'react';
import './App.css'; // Import the CSS file for styling
import HealthServicesPage from './HealthServicesPage';

function App() {
  return (
    <div>
      {/* Add the styled headline */}
      <h1 className="headline">All-Inclusive Care</h1>

      {/* Render the HealthServicesPage component */}
      <HealthServicesPage />
    </div>
  );
}

export default App;
