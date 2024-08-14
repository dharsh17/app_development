import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';
import { TokenContext } from './TokenProvider';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const {token}=useContext(TokenContext);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      // Fetch user data from the API
      const response = await axios.get('http://localhost:8000/users/',{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      });

      if (response.status === 200) {
        const users = response.data;

        // Check if the credentials match any user in the fetched data
        const user = users.find(
          (u) =>
            u.username === username &&
            u.company_name === companyName &&
            u.password === password
        );

        if (user) {
          // If credentials match, proceed with login
          window.alert('Successfully logged in! Redirecting to homepage.');
          localStorage.setItem('user', JSON.stringify({ username }));
          navigate('/');
        } else {
          // If credentials don't match, show an error
          window.alert('Login failed. Please check your credentials.');
        }
      }
    } catch (error) {
      console.error('Login failed:', error);
      window.alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-input-container">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="eye-icon"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? '👁️' : '👁️‍🗨️'}
            </span>
          </div>
        </div>
        <button type="submit">Login</button>
        <div className="signup-link">
          <p>Don't have an account? <Link to="/SignUpPage">Sign Up</Link></p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
