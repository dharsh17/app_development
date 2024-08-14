import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; // Your CSS styles

const AdminPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Check the credentials
    if (username === 'dharsh' && password === 'dharsh') {
      alert('Admin Login successful!');
      navigate('/AdminDashboard'); // Navigate to Admin Dashboard after login
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <div className="admin-login-header">
          <i className="admin-icon fas fa-user-shield"></i> {/* Example FontAwesome icon */}
          <h2>Admin Login</h2>
        </div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="admin-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="admin-input"
        />
        <button onClick={handleLogin} className="admin-login-button">
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminPage;
