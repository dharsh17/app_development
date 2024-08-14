// SignUpPage.js
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignUpPage.css';
import { TokenContext } from './TokenProvider';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const {token}=useContext(TokenContext);

  const handleSignUp = async (event) => {
    event.preventDefault();

    // Basic validation
    let errors = {};
    if (!username) errors.username = 'Username is required';
    if (!email) errors.email = 'Email is required';
    if (!companyName) errors.companyName = 'Company name is required';
    if (!password) errors.password = 'Password is required';
    if (password !== confirmPassword) errors.confirmPassword = 'Passwords must match';

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        // Send a POST request to the Django API
        await axios.post('http://localhost:8000/users/', {
          username,
          email,
          company_name: companyName,
          password
        },{
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          }
        });

        // Display success popup
        window.alert('Successfully registered! Redirecting to login page.');

        // Navigate to login page
        navigate('/LoginPage');
      } catch (error) {
        console.error('There was an error registering the user:', error);
        window.alert('Registration failed. Please try again later.');
      }
    }
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp} className="signup-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <p className="error-text">{errors.username}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          {errors.companyName && <p className="error-text">{errors.companyName}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-input-container">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span 
              className="eye-icon" 
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? '👁️' : '👁️‍🗨️'}
            </span>
          </div>
          {errors.password && <p className="error-text">{errors.password}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="password-input-container">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span 
              className="eye-icon" 
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            >
              {confirmPasswordVisible ? '👁️' : '👁️‍🗨️'}
            </span>
          </div>
          {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
