import React, { useState, useEffect } from 'react';
import './AppointmentBooking.css';

function AppointmentBooking() {
  const [formData, setFormData] = useState({
    patientName: '',
    doctorName: '',
    phoneNumber: '',
    email: '',
    reasonForVisit: '',
    insurance: '',
    emergencyContact: '',
    previousPatient: 'no'
  });
  const [appointmentTime, setAppointmentTime] = useState('');
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/patient/appointments');
      if (!response.ok) {
        throw new Error('Failed to fetch appointments');
      }
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      setError('Error fetching appointments: ' + error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleTimeChange = (e) => {
    setAppointmentTime(e.target.value);
  };

  const validateAppointmentTime = (dateTime) => {
    const selectedDate = new Date(dateTime);
    const now = new Date();
    
    if (selectedDate < now) {
      return "Cannot book appointments in the past";
    }

    const hours = selectedDate.getHours();
    const day = selectedDate.getDay();

    if (day === 0 || day === 6) {
      return "Appointments are not available on weekends";
    }

    if (hours < 9 || hours >= 16) {
      return "Appointments are only available between 9 AM and 4 PM";
    }

    if (hours === 12) {
      return "Appointments are not available during lunch break (12 PM - 1 PM)";
    }

    return null;
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.phoneNumber || !formData.email) {
      setError('Please fill in all required fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phoneNumber.replace(/\D/g, ''))) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }

    if (!formData.patientName || !formData.doctorName || !appointmentTime) {
      setError('Please fill in all required fields');
      return;
    }

    const timeError = validateAppointmentTime(appointmentTime);
    if (timeError) {
      setError(timeError);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/patient/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          patientName: formData.patientName,
          doctorName: formData.doctorName,
          appointmentTime: appointmentTime
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to book appointment');
      }

      setFormData({
        patientName: '',
        doctorName: '',
        phoneNumber: '',
        email: '',
        reasonForVisit: '',
        insurance: '',
        emergencyContact: '',
        previousPatient: 'no'
      });
      setAppointmentTime('');
      
      await fetchAppointments();
      alert('Appointment booked successfully!');

    } catch (error) {
      setError(`Error booking appointment: ${error.message}`);
    }
  };

  const handleCancelAppointment = async (appointmentId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/patient/appointments/${appointmentId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to cancel appointment');
      }

      await fetchAppointments();
      alert('Appointment cancelled successfully!');
    } catch (error) {
      setError(`Error cancelling appointment: ${error.message}`);
    }
  };

  const formatDate = (dateString) => {
    const options = { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="appointment-page">
      <div className="appointment-container">
        <h2 className="appointment-title">Appointment Booking</h2>
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <div className="appointment-form-card">
          <form onSubmit={handleBooking} className="form-spacing">
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label required">
                  Patient Name
                </label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label required">
                  Doctor Name
                </label>
                <input
                  type="text"
                  placeholder="Select doctor"
                  name="doctorName"
                  value={formData.doctorName}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label required">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label required">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label required">
                  Appointment Date & Time
                </label>
                <input
                  type="datetime-local"
                  value={appointmentTime}
                  onChange={handleTimeChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Insurance Provider
                </label>
                <input
                  type="text"
                  placeholder="Enter insurance provider"
                  name="insurance"
                  value={formData.insurance}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-group full-width">
                <label className="form-label">
                  Reason for Visit
                </label>
                <textarea
                  placeholder="Please describe your symptoms or reason for visit"
                  name="reasonForVisit"
                  value={formData.reasonForVisit}
                  onChange={handleInputChange}
                  className="form-input"
                  rows="3"
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Emergency Contact
                </label>
                <input
                  type="text"
                  placeholder="Name and phone number"
                  name="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Previous Patient?
                </label>
                <select
                  name="previousPatient"
                  value={formData.previousPatient}
                  onChange={handleInputChange}
                  className="form-input"
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-button">
                Book Appointment
              </button>
            </div>
          </form>

          <div className="appointments-section">
            <h3 className="appointments-title">All Appointments</h3>
            {appointments.length > 0 ? (
              <div className="appointment-list">
                {appointments.map((appointment) => (
                  <div key={appointment._id} className="appointment-card">
                    <div className="appointment-info">
                      <div className="appointment-details">
                        <p className="patient-name">
                          {appointment.patientName}
                        </p>
                        <p className="doctor-name">
                          Dr. {appointment.doctorName}
                        </p>
                        <p className="appointment-date">
                          {formatDate(appointment.appointmentTime)}
                        </p>
                      </div>
                      <button
                        onClick={() => handleCancelAppointment(appointment._id)}
                        className="cancel-button"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="no-appointments">No appointments scheduled</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentBooking;