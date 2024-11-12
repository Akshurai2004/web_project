import React, { useState } from 'react';
import './AppointmentBooking.css';

function AppointmentBooking() {
  const [formData, setFormData] = useState({
    patientName: '',
    doctorName: '',
  });

  const [appointment, setAppointment] = useState(null);
  const [appointmentCount, setAppointmentCount] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBooking = (e) => {
    e.preventDefault();

    const now = new Date();
    const currentHour = now.getHours();

    // Check for lunch break and end of appointments
    if (currentHour >= 12 && currentHour < 13) {
      alert("Appointments cannot be scheduled during lunch break (12 pm - 1 pm).");
      return;
    } else if (currentHour >= 16) {
      alert("Appointments cannot be scheduled after 4 pm.");
      return;
    }

    if (formData.patientName && formData.doctorName) {
      const nextAppointmentTime = new Date();
      nextAppointmentTime.setHours(9 + Math.floor(appointmentCount / 2), (appointmentCount % 2) * 30);

      setAppointment({
        patientName: formData.patientName,
        doctorName: formData.doctorName,
        time: nextAppointmentTime,
      });
      setAppointmentCount(appointmentCount + 1);
      setFormData({ patientName: '', doctorName: '' });
      alert('Appointment booked successfully!');
    } else {
      alert('Please fill in all the details');
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h2 className="animated-heading">Appointment Booking</h2>
        <div className="form-section">
          <form onSubmit={handleBooking}>
            <input
              type="text"
              placeholder="Patient Name"
              name="patientName"
              value={formData.patientName}
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
            <button type="submit">Book Appointment</button>
          </form>
          <div className="appointment-list">
            <h3>Current Appointment</h3>
            {appointment ? (
              <ul>
                <li>
                  <span className="patient-info">
                    {appointment.patientName} with {appointment.doctorName}
                  </span>
                  <div className="appointment-time">
                    Appointment Time: {appointment.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </li>
              </ul>
            ) : (
              <p className="no-appointments">No appointments</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentBooking;