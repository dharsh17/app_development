import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UserManagement.css';

const UserManagement = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [users, setUsers] = useState([]);

  // Fetch user data from the backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/users/');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleLogout = () => {
    // Perform any logout logic here (e.g., clearing user session)
    navigate('/'); // Redirect to the homepage
  };

  return (
    <div className="user-management">
      <header className="dashboard-header">
        <h1>Welcome, Admin</h1>
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
          <h2>User Management</h2>
          <div className="user-management-actions">
            <Link to="/add-user" className="action-button">Add User</Link>
          </div>
          <table className="users-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link to={`/edit-user/${user.id}`} className="edit-link">Edit</Link>
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

export default UserManagement;
