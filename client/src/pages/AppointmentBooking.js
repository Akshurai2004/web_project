import React, { useState, useEffect } from 'react';

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

    // Frontend validation for new fields
    if (!formData.phoneNumber || !formData.email) {
      setError('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Phone validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phoneNumber.replace(/\D/g, ''))) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }

    // Original backend validation and submission
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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Appointment Booking</h2>
        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
            {error}
          </div>
        )}
        <div className="bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleBooking} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Patient Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Doctor Name *
                </label>
                <input
                  type="text"
                  placeholder="Select doctor"
                  name="doctorName"
                  value={formData.doctorName}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Appointment Date & Time *
                </label>
                <input
                  type="datetime-local"
                  value={appointmentTime}
                  onChange={handleTimeChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Insurance Provider
                </label>
                <input
                  type="text"
                  placeholder="Enter insurance provider"
                  name="insurance"
                  value={formData.insurance}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Reason for Visit
                </label>
                <textarea
                  placeholder="Please describe your symptoms or reason for visit"
                  name="reasonForVisit"
                  value={formData.reasonForVisit}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md h-24"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Emergency Contact
                </label>
                <input
                  type="text"
                  placeholder="Name and phone number"
                  name="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Previous Patient?
                </label>
                <select
                  name="previousPatient"
                  value={formData.previousPatient}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Book Appointment
              </button>
            </div>
          </form>

          <div className="mt-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">All Appointments</h3>
            {appointments.length > 0 ? (
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {appointments.map((appointment) => (
                  <div
                    key={appointment._id}
                    className="border rounded-lg p-4 bg-gray-50"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-lg">
                          {appointment.patientName}
                        </p>
                        <p className="text-gray-600">
                          Dr. {appointment.doctorName}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {formatDate(appointment.appointmentTime)}
                        </p>
                      </div>
                      <button
                        onClick={() => handleCancelAppointment(appointment._id)}
                        className="bg-red-600 text-white px-4 py-1 rounded-md hover:bg-red-700 transition-colors text-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-4">No appointments scheduled</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentBooking;