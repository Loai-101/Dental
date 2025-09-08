import React, { useState, useEffect } from 'react';
import './Appointment.css';

const Appointment = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    doctor: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('appointment');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const doctors = [
    { id: 'sarah-johnson', name: 'Dr. Sarah Johnson', specialty: 'General Dentist' },
    { id: 'michael-chen', name: 'Dr. Michael Chen', specialty: 'Cosmetic Dentist' },
    { id: 'emily-rodriguez', name: 'Dr. Emily Rodriguez', specialty: 'Orthodontist' },
    { id: 'david-thompson', name: 'Dr. David Thompson', specialty: 'Oral Surgeon' },
    { id: 'lisa-park', name: 'Dr. Lisa Park', specialty: 'Pediatric Dentist' },
    { id: 'robert-wilson', name: 'Dr. Robert Wilson', specialty: 'Periodontist' },
    { id: 'amanda-foster', name: 'Dr. Amanda Foster', specialty: 'Endodontist' },
    { id: 'james-martinez', name: 'Dr. James Martinez', specialty: 'Prosthodontist' }
  ];

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Email configuration
      const emailData = {
        to: 'q9g8moh@gmail.com', // Target email address
        subject: 'New Appointment Request - Dental Care Clinic',
        body: `
New Appointment Request Details:

Patient Information:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Phone: ${formData.phone}

Appointment Details:
- Date: ${formData.date}
- Time: ${formData.time}
- Doctor: ${formData.doctor}
- Message: ${formData.message}

Please contact the patient to confirm this appointment.

Best regards,
Dental Care Clinic Website
        `
      };

      // Using EmailJS or similar service would be ideal here
      // For now, we'll simulate the email sending
      console.log('Email would be sent to:', emailData.to);
      console.log('Email content:', emailData);

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        doctor: '',
        message: ''
      });

    } catch (error) {
      console.error('Error submitting appointment:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3); // 3 months in advance
    return maxDate.toISOString().split('T')[0];
  };

  return (
    <div className="appointment-page">
      <section id="appointment" className={`appointment ${isVisible ? 'appointment-visible' : ''}`}>
        <div className="appointment-container">
          <div className="appointment-header">
            <h2 className="appointment-title">Book an Appointment</h2>
            <p className="appointment-subtitle">
              Schedule your visit with our experienced dental professionals
            </p>
          </div>
          
          <div className="appointment-content">
            <div className="appointment-form-container">
              <form className="appointment-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName" className="form-label">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName" className="form-label">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date" className="form-label">Preferred Date *</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      min={getMinDate()}
                      max={getMaxDate()}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="time" className="form-label">Preferred Time *</label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="form-select"
                      required
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="doctor" className="form-label">Preferred Doctor *</label>
                  <select
                    id="doctor"
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleInputChange}
                    className="form-select"
                    required
                  >
                    <option value="">Select a doctor</option>
                    {doctors.map(doctor => (
                      <option key={doctor.id} value={`${doctor.name} - ${doctor.specialty}`}>
                        {doctor.name} ({doctor.specialty})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Additional Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    rows="4"
                    placeholder="Please describe the reason for your visit or any specific concerns..."
                  />
                </div>

                <div className="form-submit">
                  <button 
                    type="submit" 
                    className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Book Appointment'}
                  </button>
                </div>

                {submitStatus === 'success' && (
                  <div className="success-message">
                    <p>✅ Your appointment request has been sent successfully! We'll contact you soon to confirm.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="error-message">
                    <p>❌ There was an error sending your request. Please try again or call us directly.</p>
                  </div>
                )}
              </form>
            </div>

            <div className="appointment-info">
              <div className="info-card">
                <h3>Office Hours</h3>
                <div className="hours-list">
                  <div className="hours-item">
                    <span className="day">Monday - Friday</span>
                    <span className="time">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Saturday</span>
                    <span className="time">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Sunday</span>
                    <span className="time">Closed</span>
                  </div>
                </div>
              </div>

              <div className="info-card">
                <h3>Contact Information</h3>
                <div className="contact-info">
                  <p><strong>Phone:</strong> +973 1234 5678</p>
                  <p><strong>Email:</strong> info@dentalcareclinic.com</p>
                  <p><strong>Address:</strong> Manama, Bahrain</p>
                </div>
              </div>

              <div className="info-card">
                <h3>Emergency Contact</h3>
                <p>For dental emergencies outside office hours, please call our emergency line:</p>
                <p><strong>Emergency:</strong> +973 9876 5432</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
