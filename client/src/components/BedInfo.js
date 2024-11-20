import React from "react";
import "./BedInfo.css";

const BedInfo = ({ beds }) => {
  return (
    <div className="bed-info-card">
      <h3 className="card-title">Available Beds</h3>
      <div className="bed-info-content">
        <div className="bed-row">
          <span className="bed-label">Special Beds:</span>
          <span className="bed-count">{beds.special}</span>
        </div>
        <div className="bed-row">
          <span className="bed-label">Semi-special Beds:</span>
          <span className="bed-count">{beds.semiSpecial}</span>
        </div>
        <div className="bed-row">
          <span className="bed-label">Common Beds:</span>
          <span className="bed-count">{beds.common}</span>
        </div>
      </div>
    </div>
  );
};

export default BedInfo;