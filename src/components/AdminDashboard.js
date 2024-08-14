import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [transportData, setTransportData] = useState([]); // State to store transport data

  // Fetch transport data from the backend
  useEffect(() => {
    const fetchTransportData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/transports/', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_ACCESS_TOKEN`, // Add token if required
          },
        });
        setTransportData(response.data);
      } catch (error) {
        console.error('Error fetching transport data:', error);
      }
    };

    fetchTransportData();
  }, []);

  const handleLogout = () => {
    // Perform any logout logic here (e.g., clearing user session)
    navigate('/'); // Redirect to the homepage
  };

  return (
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <h2>Welcome, Admin!!</h2>
        <h1>Elite Logistics</h1>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </header>
      <div className="dashboard-body">
        <nav className="dashboard-sidebar">
          <ul>
            <li><Link to="/admin-users">Users</Link></li>
            <li><Link to="/transport-management">Transportation Management</Link></li>
      
          </ul>
        </nav>
        <main className="dashboard-content">
          <ul>
            {transportData.map((transport, index) => (
              <li key={index}>
                <p><strong>ID:</strong> {transport.id}</p>
                <p><strong>Customer Name:</strong> {transport.name}</p>
                <p><strong>Company:</strong> {transport.company}</p>
                <p><strong>Mode of Transport:</strong> {transport.mode_of_transport}</p>
                {/* Add more fields as required */}
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
