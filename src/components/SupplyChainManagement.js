import React, { useState, useEffect } from 'react';
import './SupplyChainManagement.css';

const SupplyChainManagement = () => {
  const [supplyChain, setSupplyChain] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [newEntry, setNewEntry] = useState({
    id: '',
    name: '',
    type: '', // e.g., Supplier, Logistics Partner, etc.
    contact: '',
    details: '',
  });

  useEffect(() => {
    // Load supply chain data from localStorage or initialize with an empty array
    const storedSupplyChain = JSON.parse(localStorage.getItem('supplyChain')) || [];
    setSupplyChain(storedSupplyChain);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEntry((prevEntry) => ({
      ...prevEntry,
      [name]: value,
    }));
  };

  const addOrUpdateEntry = () => {
    if (editingIndex !== null) {
      // Update existing entry
      const updatedSupplyChain = supplyChain.map((entry, index) =>
        index === editingIndex ? newEntry : entry
      );
      setSupplyChain(updatedSupplyChain);
      setEditingIndex(null);
    } else {
      // Add new entry
      setSupplyChain([...supplyChain, newEntry]);
    }
    setNewEntry({
      id: '',
      name: '',
      type: '',
      contact: '',
      details: '',
    });
  };

  const editEntry = (index) => {
    setEditingIndex(index);
    setNewEntry(supplyChain[index]);
  };

  const deleteEntry = (index) => {
    const updatedSupplyChain = supplyChain.filter((_, i) => i !== index);
    setSupplyChain(updatedSupplyChain);
  };

  useEffect(() => {
    // Save supply chain data to localStorage
    localStorage.setItem('supplyChain', JSON.stringify(supplyChain));
  }, [supplyChain]);

  return (
    <div className="supply-chain-management">
      <h1>Supply Chain Management</h1>
      <div className="entry-form">
        <h2>{editingIndex !== null ? 'Edit Entry' : 'Add New Entry'}</h2>
        <input
          type="text"
          name="id"
          value={newEntry.id}
          onChange={handleInputChange}
          placeholder="ID"
        />
        <input
          type="text"
          name="name"
          value={newEntry.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="type"
          value={newEntry.type}
          onChange={handleInputChange}
          placeholder="Type (e.g., Supplier, Logistics Partner)"
        />
        <input
          type="text"
          name="contact"
          value={newEntry.contact}
          onChange={handleInputChange}
          placeholder="Contact Information"
        />
        <textarea
          name="details"
          value={newEntry.details}
          onChange={handleInputChange}
          placeholder="Additional Details"
        />
        <button onClick={addOrUpdateEntry}>
          {editingIndex !== null ? 'Update Entry' : 'Add Entry'}
        </button>
      </div>
      <div className="entry-list">
        <h2>Current Entries</h2>
        <ul>
          {supplyChain.length === 0 ? (
            <p>No entries available.</p>
          ) : (
            supplyChain.map((entry, index) => (
              <li key={index}>
                <strong>ID:</strong> {entry.id} <br />
                <strong>Name:</strong> {entry.name} <br />
                <strong>Type:</strong> {entry.type} <br />
                <strong>Contact:</strong> {entry.contact} <br />
                <strong>Details:</strong> {entry.details} <br />
                <button onClick={() => editEntry(index)}>Edit</button>
                <button onClick={() => deleteEntry(index)}>Delete</button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default SupplyChainManagement;
