import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './EditUser.css';

const EditUser = () => {
  const { id } = useParams(); // Get user ID from URL
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/users/${id}/`);
        setName(response.data.username);
        setEmail(response.data.email);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/users/${id}/`, {
        name,
        email,
      });
      navigate('/AdminDashboard'); // Redirect after successful update
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className="edit-user">
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default EditUser;
