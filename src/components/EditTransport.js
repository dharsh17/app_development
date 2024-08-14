import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './EditTransport.css';

const EditTransport = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [modeOfTransport, setModeOfTransport] = useState('');

  useEffect(() => {
    const fetchTransport = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/transports/${id}/`);
        setName(response.data.name);
        setEmail(response.data.email);
        setCompany(response.data.company);
        setModeOfTransport(response.data.mode_of_transport);
      } catch (error) {
        console.error('Error fetching transport data:', error);
      }
    };

    fetchTransport();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/transports/${id}/`, {
        name,
        email,
        company,
        mode_of_transport: modeOfTransport,
      });
      navigate('/transport-management'); // Redirect after successful update
    } catch (error) {
      console.error('Error updating transport:', error);
    }
  };

  return (
    <div className="edit-transport">
      <h2>Edit Transport</h2>
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
        <button type="submit">Update Transport</button>
      </form>
    </div>
  );
};

export default EditTransport;
