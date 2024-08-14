import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddUser.css';

const AddUser = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/users/', {
        username:name,
        email,
      });
      navigate('/AdminDashboard'); // Redirect after successful submission
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div className="add-user">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
