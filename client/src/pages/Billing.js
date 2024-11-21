import React, { useState } from 'react';
import './Billing.css';

const Billing = () => {
  const [activeSection, setActiveSection] = useState('insurance');
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    doctorName: '',
    insuranceProvider: '',
    policyNumber: '',
    claimNumber: '',
    admissionDate: '',
    dischargeDate: '',
    roomType: '',
    doctorSpecialty: '',
    consultationFees: '',
    haveSubmittedBefore: '',
    supportingDocuments: null,
    paymentMode: '',
    discount: '',
  });

  // Switch between sections
  const switchSection = (section) => {
    setActiveSection(section);
    setFormData({
      name: '',
      contact: '',
      dateOfBirth: '',
      gender: '',
      address: '',
      doctorName: '',
      insuranceProvider: '',
      policyNumber: '',
      claimNumber: '',
      admissionDate: '',
      dischargeDate: '',
      roomType: '',
      doctorSpecialty: '',
      consultationFees: '',
      haveSubmittedBefore: '',
      supportingDocuments: null,
      paymentMode: '',
      discount: '',
    });
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (activeSection === 'billing') {
      const expenditure = Math.floor(Math.random() * (5000 - 300 + 1)) + 300;

      // Prepare form data for billing
      const billingData = {
        ...formData,
        expenditure,
        type: 'billing',
      };

      // Send billing data to the backend
      try {
        const response = await fetch('http://localhost:5000/api/billing/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(billingData),
        });
        const data = await response.json();
        alert(`Billing submitted with expenditure: ${data.data.expenditure}`);
      } catch (error) {
        console.error('Error submitting billing data:', error);
      }
    } else {
      // Handle insurance submission

try {
  // Fetch billing record for the patient by name
  const response = await fetch(`http://localhost:5000/api/billing/latest?name=${formData.name}`);
  const data = await response.json();

  if (response.ok && data.expenditure) {
    // Calculate 50% of billing expenditure
    const insuranceExpenditure = Math.floor(data.expenditure * 0.5);

    // Display the calculated insurance expenditure
    alert(`Insurance expenditure for ${formData.name} is: ${insuranceExpenditure}`);
  } else {
    alert('No matching billing record found for the patient.');
  }
} catch (error) {
  console.error('Error fetching billing record:', error);
  alert('An error occurred while calculating insurance expenditure.');
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
            {/* Common Fields */}
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Contact:</label>
              <input
                type="text"
                placeholder="Contact"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Date of Birth:</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Gender:</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Address:</label>
              <textarea
                placeholder="Address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label>Doctor Name:</label>
              <input
                type="text"
                placeholder="Doctor Name"
                name="doctorName"
                value={formData.doctorName}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Conditional Fields for Insurance */}
            {activeSection === 'insurance' && (
              <>
                <div className="form-group">
                  <label>Insurance Provider:</label>
                  <input
                    type="text"
                    placeholder="Insurance Provider"
                    name="insuranceProvider"
                    value={formData.insuranceProvider}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Policy Number:</label>
                  <input
                    type="text"
                    placeholder="Policy Number"
                    name="policyNumber"
                    value={formData.policyNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Claim Number:</label>
                  <input
                    type="text"
                    placeholder="Claim Number"
                    name="claimNumber"
                    value={formData.claimNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Have you submitted your claim before?</label>
                  <select
                    name="haveSubmittedBefore"
                    value={formData.haveSubmittedBefore}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Supporting Documents:</label>
                  <input
                    type="file"
                    name="supportingDocuments"
                    onChange={handleInputChange}
                    accept=".pdf,.jpg,.png"
                  />
                </div>
              </>
            )}

            {/* Conditional Fields for Billing */}
            {activeSection === 'billing' && (
              <>
                <div className="form-group">
                  <label>Admission Date:</label>
                  <input
                    type="date"
                    name="admissionDate"
                    value={formData.admissionDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Discharge Date:</label>
                  <input
                    type="date"
                    name="dischargeDate"
                    value={formData.dischargeDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Room Type:</label>
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Room Type</option>
                    <option value="general">General</option>
                    <option value="semi-private">Semi-private</option>
                    <option value="private">Private</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Doctor's Specialty:</label>
                  <input
                    type="text"
                    placeholder="Doctor's Specialty"
                    name="doctorSpecialty"
                    value={formData.doctorSpecialty}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Consultation Fees:</label>
                  <input
                    type="number"
                    placeholder="Consultation Fees"
                    name="consultationFees"
                    value={formData.consultationFees}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Payment Mode:</label>
                  <select
                    name="paymentMode"
                    value={formData.paymentMode}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Payment Mode</option>
                    <option value="cash">Cash</option>
                    <option value="card">Card</option>
                    <option value="upi">UPI</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Discount (%):</label>
                  <input
                    type="number"
                    placeholder="Discount"
                    name="discount"
                    value={formData.discount}
                    onChange={handleInputChange}
                    min="0"
                    max="100"
                  />
                </div>
              </>
            )}

            {/* Expenditure Field */}
            <div className="form-group">
              <label>Expenditure:</label>
              <input
                type="text"
                placeholder={
                  activeSection === 'insurance'
                    ? 'Calculated on submission'
                    : 'Generated on submission'
                }
                value={
                  activeSection === 'insurance'
                    ? 'Calculated on submission'  
                    : 'Generated on submission'
                }
                readOnly
              />
            </div>

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Billing;
