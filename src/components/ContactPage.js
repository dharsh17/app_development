import React, { useState, useRef, useContext } from 'react';
import axios from 'axios';
import './ContactPage.css';
import { TokenContext } from './TokenProvider';

function ContactPage() {
  const [showPopup, setShowPopup] = useState(false);
  const formRef = useRef(null);
  const{token}=useContext(TokenContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: formRef.current.name.value,
      email: formRef.current.email.value,
      phone: formRef.current.phone.value,
      message: formRef.current.message.value,
    };

    try {
      // Send the form data to the server
      const response = await axios.post('http://localhost:8000/feedbacks/', formData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        // If the data was successfully posted, show the popup
        setShowPopup(true);
      } else {
        console.error('Failed to submit the data. Response:', response);
        window.alert('Failed to submit the data. Please try again.');
      }
    } catch (error) {
      // Handle errors
      console.error('Error submitting data:', error);
      window.alert('An error occurred while submitting the data. Please try again.');
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    // Reset form fields
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you have any questions or need assistance, please fill out the form below, and we'll get back to you as soon as possible.</p>
      <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Thank You!</h2>
            <p>Your message has been sent successfully. We will get back to you soon.</p>
            <button className="close-popup" onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactPage;
