import React, { useState, useEffect } from 'react';

function AppointmentBooking() {
  const [formData, setFormData] = useState({
    patientName: '',
    doctorName: '',
  });
  const [appointmentTime, setAppointmentTime] = useState('');
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState('');

  // Fetch all appointments when component mounts
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

    // Validate all required fields
    if (!formData.patientName || !formData.doctorName || !appointmentTime) {
      setError('Please fill in all fields');
      return;
    }

    // Validate appointment time
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

      // Reset form
      setFormData({ patientName: '', doctorName: '' });
      setAppointmentTime('');
      
      // Fetch updated appointments list
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

      // Refresh appointments list
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
    <div className="App">
      <div className="container">
        <h2 className="animated-heading">Appointment Booking</h2>
        {error && (
          <div className="error-message" style={{ color: 'red', marginBottom: '10px' }}>
            {error}
          </div>
        )}
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
            <input
              type="datetime-local"
              value={appointmentTime}
              onChange={handleTimeChange}
              required
            />
            <button type="submit">Book Appointment</button>
          </form>

          <div className="appointment-list" style={{ marginTop: '2rem' }}>
            <h3>All Appointments</h3>
            {appointments.length > 0 ? (
              <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                {appointments.map((appointment) => (
                  <div
                    key={appointment._id}
                    style={{
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      padding: '1rem',
                      marginBottom: '1rem',
                      backgroundColor: '#f9f9f9'
                    }}
                  >
                    <div style={{ marginBottom: '0.5rem' }}>
                      <strong>{appointment.patientName}</strong> with Dr. {appointment.doctorName}
                    </div>
                    <div style={{ color: '#666', fontSize: '0.9rem' }}>
                      {formatDate(appointment.appointmentTime)}
                    </div>
                    <button
                      onClick={() => handleCancelAppointment(appointment._id)}
                      style={{
                        backgroundColor: '#ff4444',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '0.5rem 1rem',
                        marginTop: '0.5rem',
                        cursor: 'pointer'
                      }}
                    >
                      Cancel Appointment
                    </button>
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