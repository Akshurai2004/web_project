import React from 'react';
import './SpecialtyList.css';

const SpecialtyList = ({ filteredSpecialties }) => {
  return (
    <div className="specialty-list-wrapper">
      {filteredSpecialties.map((specialty) => (
        <div key={specialty.id} className="specialty-item">
          <h3 className="specialty-name">{specialty.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default SpecialtyList;
