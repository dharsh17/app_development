import React, { useState, useEffect, useContext } from 'react';
import './InventoryManagement.css';
import UserContext from '../contexts/UserContext';

const InventoryManagement = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    name: '',
    quantity: '',
    location: '',
    date: '',
  });
  const [editIndex, setEditIndex] = useState(null);

  const { userDetails } = useContext(UserContext); 

  const locations = ['Warehouse A', 'Warehouse B', 'Warehouse C', 'Warehouse D'];

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('inventoryItems')) || [];
    setItems(storedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem('inventoryItems', JSON.stringify(items));
  }, [items]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleAddOrUpdateItem = (e) => {
    e.preventDefault();
    const itemWithUserId = { ...newItem, userId: userDetails.id }; // Include the user ID
    if (editIndex !== null) {
      const updatedItems = items.map((item, index) =>
        index === editIndex ? itemWithUserId : item
      );
      setItems(updatedItems);
      setEditIndex(null);
    } else {
      setItems([...items, itemWithUserId]);
    }
    setNewItem({ name: '', quantity: '', location: '', date: '' });
  };

  const handleEditItem = (index) => {
    setNewItem(items[index]);
    setEditIndex(index);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="inventory-management">
      <h1>Inventory Management</h1>
      <blockquote className="quote">
        "Good inventory management is the cornerstone of a successful business."
      </blockquote>
      <div className="inventory-container">
        <div className="inventory-form">
          <h2>{editIndex !== null ? 'Edit Item' : 'Add New Item'}</h2>
          <form onSubmit={handleAddOrUpdateItem}>
            <input
              type="text"
              name="name"
              placeholder="Item Name"
              value={newItem.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              value={newItem.quantity}
              onChange={handleInputChange}
              required
            />
            <select
              name="location"
              value={newItem.location}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Storage Location</option>
              {locations.map((location, index) => (
                <option key={index} value={location}>
                  {location}
                </option>
              ))}
            </select>
            <input
              type="date"
              name="date"
              placeholder="Date Added"
              value={newItem.date}
              onChange={handleInputChange}
              required
            />
            <button type="submit" className="add-item">
              {editIndex !== null ? 'Update Item' : 'Add Item'}
            </button>
            {editIndex !== null && (
              <button
                type="button"
                onClick={() => {
                  setNewItem({ name: '', quantity: '', location: '', date: '' });
                  setEditIndex(null);
                }}
                className="cancel"
              >
                Cancel
              </button>
            )}
          </form>
        </div>
        <div className="inventory-list">
          <h2>Current Inventory</h2>
          {items.length === 0 ? (
            <p>No items in inventory.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Quantity</th>
                  <th>Location</th>
                  <th>Date Added</th>
                  <th>User ID</th> {/* Display User ID */}
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.location}</td>
                    <td>{item.date}</td>
                    <td>{item.userId}</td> {/* Display User ID */}
                    <td>
                      <button className="edit" onClick={() => handleEditItem(index)}>Edit</button>
                      <button className="delete" onClick={() => handleDeleteItem(index)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default InventoryManagement;
