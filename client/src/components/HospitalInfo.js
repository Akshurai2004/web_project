// src/components/HospitalInfo.js

import React from 'react';

const HospitalInfo = () => (
  <div className="hospital-info">
    <h2>Our History</h2>
    <p><strong>Founded:</strong> 1985</p>
    <p><strong>Founder:</strong> Dr. John Doe</p>
    <p>St. Augustine's Hospital, founded in 1892, started as a 20-bed facility in a Victorian mansion and evolved into a leading institution known for pioneering work in infectious diseases, cardiac care, and technological advancements, merging with Riverton Memorial Hospital in the 1990s to form the Riverton Health Network and continue providing compassionate, patient-centered care.</p>

    <img 
  src="/founder.jpeg" 
  alt="Founder Dr. John Doe" 
  className="founder-photo" 
/>

  </div>
);

export default HospitalInfo;