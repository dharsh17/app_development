import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './TransportManagement.css';

const TransportManagement = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [transports, setTransports] = useState([]);

  useEffect(() => {
    const fetchTransports = async () => {
      try {
        const response = await axios.get('http://localhost:8000/transports/');
        setTransports(response.data);
      } catch (error) {
        console.error('Error fetching transport data:', error);
      }
    };

    fetchTransports();
  }, []);

  const handleLogout = () => {
    // Perform any logout logic here (e.g., clearing user session)
    navigate('/'); // Redirect to the homepage
  };

  return (
    <div className="transport-management">
      <header className="dashboard-header">
        <h1>Welcome, Admin!!</h1>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </header>
      <div className="dashboard-body">
        <nav className="dashboard-sidebar">
          <ul>
            <li><Link to="/admin-users">Users</Link></li>
            <li><Link to="/transport-management">Transportation Management</Link></li>
            <li><Link to="/feedback">Feedback</Link></li>
          </ul>
        </nav>
        <main className="dashboard-content">
          <h2>Transport Management</h2>
          <div className="transport-management-actions">
            <Link to="/add-transport" className="action-button">Add Transport</Link>
          </div>
          <table className="transports-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Company</th>
                <th>Mode of Transport</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {transports.map(transport => (
                <tr key={transport.id}>
                  <td>{transport.id}</td>
                  <td>{transport.name}</td>
                  <td>{transport.email}</td>
                  <td>{transport.company}</td>
                  <td>{transport.mode_of_transport}</td>
                  <td>
                    <Link to={`/edit-transport/${transport.id}`} className="edit-link">Edit</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
};

export default TransportManagement;
