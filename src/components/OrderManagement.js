import React, { useState, useEffect } from 'react';
import './OrderManagement.css';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [editingOrder, setEditingOrder] = useState(null);
  const [newOrder, setNewOrder] = useState({
    orderId: '',
    customerName: '',
    orderDate: '',
    status: '',
  });

  useEffect(() => {
    // Load orders from localStorage or initialize with an empty array
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value,
    }));
  };

  const addOrder = () => {
    if (editingOrder !== null) {
      // Edit existing order
      const updatedOrders = orders.map((order, index) =>
        index === editingOrder ? newOrder : order
      );
      setOrders(updatedOrders);
      setEditingOrder(null);
    } else {
      // Add new order
      setOrders([...orders, newOrder]);
    }
    setNewOrder({
      orderId: '',
      customerName: '',
      orderDate: '',
      status: '',
    });
  };

  const editOrder = (index) => {
    setEditingOrder(index);
    setNewOrder(orders[index]);
  };

  const deleteOrder = (index) => {
    const updatedOrders = orders.filter((_, i) => i !== index);
    setOrders(updatedOrders);
  };

  useEffect(() => {
    // Save orders to localStorage
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  return (
    <div className="order-management">
      <h1>Order Management</h1>
      <div className="order-form">
        <h2>{editingOrder !== null ? 'Edit Order' : 'Add New Order'}</h2>
        <input
          type="text"
          name="orderId"
          value={newOrder.orderId}
          onChange={handleInputChange}
          placeholder="Order ID"
        />
        <input
          type="text"
          name="customerName"
          value={newOrder.customerName}
          onChange={handleInputChange}
          placeholder="Customer Name"
        />
        <input
          type="date"
          name="orderDate"
          value={newOrder.orderDate}
          onChange={handleInputChange}
          placeholder="Order Date"
        />
        <input
          type="text"
          name="status"
          value={newOrder.status}
          onChange={handleInputChange}
          placeholder="Order Status"
        />
        <button onClick={addOrder}>
          {editingOrder !== null ? 'Update Order' : 'Add Order'}
        </button>
      </div>
      <div className="order-list">
        <h2>Current Orders</h2>
        <ul>
          {orders.length === 0 ? (
            <p>No orders available.</p>
          ) : (
            orders.map((order, index) => (
              <li key={index}>
                <strong>Order ID:</strong> {order.orderId} <br />
                <strong>Customer Name:</strong> {order.customerName} <br />
                <strong>Order Date:</strong> {order.orderDate} <br />
                <strong>Status:</strong> {order.status} <br />
                <button onClick={() => editOrder(index)}>Edit</button>
                <button onClick={() => deleteOrder(index)}>Delete</button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default OrderManagement;
