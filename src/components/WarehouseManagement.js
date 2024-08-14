import React, { useState, useEffect } from 'react';
import './WarehouseManagement.css';

const WarehouseManagement = () => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('inventoryItems')) || [];
    setItems(storedItems);
  }, []);

  const filterItemsByWarehouse = (warehouse) => {
    return items.filter(item => item.location === warehouse);
  };

  return (
    <div className="warehouse-management">
      <h1>Warehouse Management</h1>
      <div className="warehouses">
        <div className="warehouse-box" id="warehouse-a">
          <h2>Warehouse A</h2>
          <div className="item-list">
            {filterItemsByWarehouse('Warehouse A').length === 0 ? (
              <p className="no-items">No items in Warehouse A.</p>
            ) : (
              <ul>
                {filterItemsByWarehouse('Warehouse A').map((item, index) => (
                  <li key={index}>
                    <strong>{item.name}</strong>
                    <span>Quantity: {item.quantity}</span>
                    <span className="date">Date Added: {item.date}</span> {/* Apply .date class */}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="warehouse-box" id="warehouse-b">
          <h2>Warehouse B</h2>
          <div className="item-list">
            {filterItemsByWarehouse('Warehouse B').length === 0 ? (
              <p className="no-items">No items in Warehouse B.</p>
            ) : (
              <ul>
                {filterItemsByWarehouse('Warehouse B').map((item, index) => (
                  <li key={index}>
                    <strong>{item.name}</strong>
                    <span>Quantity: {item.quantity}</span>
                    <span className="date">Date Added: {item.date}</span> {/* Apply .date class */}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="warehouse-box" id="warehouse-c">
          <h2>Warehouse C</h2>
          <div className="item-list">
            {filterItemsByWarehouse('Warehouse C').length === 0 ? (
              <p className="no-items">No items in Warehouse C.</p>
            ) : (
              <ul>
                {filterItemsByWarehouse('Warehouse C').map((item, index) => (
                  <li key={index}>
                    <strong>{item.name}</strong>
                    <span>Quantity: {item.quantity}</span>
                    <span className="date">Date Added: {item.date}</span> {/* Apply .date class */}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="warehouse-box" id="warehouse-d">
          <h2>Warehouse D</h2>
          <div className="item-list">
            {filterItemsByWarehouse('Warehouse D').length === 0 ? (
              <p className="no-items">No items in Warehouse D.</p>
            ) : (
              <ul>
                {filterItemsByWarehouse('Warehouse D').map((item, index) => (
                  <li key={index}>
                    <strong>{item.name}</strong>
                    <span>Quantity: {item.quantity}</span>
                    <span className="date">Date Added: {item.date}</span> {/* Apply .date class */}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarehouseManagement;
