import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import './TransportationManagement.css';
import UserContext from '../contexts/UserContext';
import { TokenContext } from './TokenProvider';

function TransportationManagement() {
  const [step, setStep] = useState(1);
  const { userDetails, setUserDetails } = useContext(UserContext);
  const { token } = useContext(TokenContext);

  const [localUserDetails, setLocalUserDetails] = useState({
    name: userDetails.name || '',
    email: userDetails.email || '',
    company: userDetails.company || '',
    mode_of_transport: userDetails.mode_of_transport || '',
  });

  const handleInputChange = (e) => {
    setLocalUserDetails({
      ...localUserDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Post the data to the server
      console.log(token);
      const response = await axios.post('http://localhost:8000/transports/', localUserDetails, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      });

      if (response.status === 201) { // 201 Created
        // Successfully posted data, update context and proceed
        setUserDetails(localUserDetails);
        setStep(3);
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

  const handleGetStarted = () => {
    setStep(2);
  };

  const handleReturnToServices = () => {
    setStep(1);
    setLocalUserDetails({ 
      name: '',
      email: '',
      company: '',
      mode_of_transport: '',
    });
  };

  const getCurrentDateTime = () => {
    const now = new Date();
    return {
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString(),
    };
  };

  return (
    <div className="transportation-management">
      {step === 1 && (
        <div className="services-section">
          <h2 className="services-title">Transportation Management Services</h2>
          <p className="services-description">
            Explore our range of transportation services designed to optimize your logistics operations.
          </p>
          <div className="services-list">
            {/* Services List */}
          </div>
          <button className="get-started-button" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="user-details-form-container">
          <h2 className="form-title">Enter Your Details</h2>
          <p className="form-description">
            Fill out the form to proceed with our transportation management services:
          </p>
          <form className="user-details-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={localUserDetails.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={localUserDetails.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={localUserDetails.company}
              onChange={handleInputChange}
              required
            />
            <select
              name="mode_of_transport"
              value={localUserDetails.mode_of_transport}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select Mode of Transport
              </option>
              <option value="road">Road</option>
              <option value="air">Air</option>
              <option value="sea">Sea</option>
              <option value="rail">Rail</option>
            </select>
            <button type="submit">Proceed</button>
          </form>
        </div>
      )}

      {step === 3 && (
        <div className="billing-info">
          <div className="billing-card">
            <div className="billing-header">
              <div className="billing-date">{getCurrentDateTime().date}</div>
              <div className="billing-time">{getCurrentDateTime().time}</div>
            </div>
            <h2 className="billing-title">Electronic Bill</h2>
            <div className="billing-body">
              <div className="billing-info-item">
                <strong>ID:</strong> {localUserDetails.id}
              </div>
              <div className="billing-info-item">
                <strong>Customer Name:</strong> {localUserDetails.name}
              </div>
              <div className="billing-info-item">
                <strong>Company:</strong> {localUserDetails.company}
              </div>
              <div className="billing-info-item">
                <strong>Mode of Transport:</strong> {localUserDetails.mode_of_transport}
              </div>
              <div className="billing-info-item">
                <strong>Estimated Cost:</strong> $150.00
              </div>
            </div>
            <div className="billing-footer">
              <p className="billing-note">
                Thank you for choosing our transportation management services. If you have any questions, please contact us.
              </p>
              <button className="return-button" onClick={handleReturnToServices}>
                Return to Services
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TransportationManagement;
