import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddTransport.css';

const AddTransport = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [modeOfTransport, setModeOfTransport] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/transports/', {
        name,
        email,
        company,
        mode_of_transport: modeOfTransport,
      });
      navigate('/transport-management'); // Redirect after successful submission
    } catch (error) {
      console.error('Error adding transport:', error);
    }
  };

  return (
    <div className="add-transport">
      <h2>Add Transport</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Company:
          <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} required />
        </label>
        <label>
          Mode of Transport:
          <input type="text" value={modeOfTransport} onChange={(e) => setModeOfTransport(e.target.value)} required />
        </label>
        <button type="submit">Add Transport</button>
      </form>
    </div>
  );
};

export default AddTransport;
