// File: src/components/BedInfo.js

import React from "react";

const BedInfo = ({ beds }) => {
  return (
    <div className="bed-info">
      <p>
        <strong>Special Beds Available:</strong> {beds.special}
      </p>
      <p>
        <strong>Semi-special Beds Available:</strong> {beds.semiSpecial}
      </p>
      <p>
        <strong>Common Beds Available:</strong> {beds.common}
      </p>
    </div>
  );
};

export default BedInfo;