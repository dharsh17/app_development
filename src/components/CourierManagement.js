import React from 'react';
import './CourierManagement.css';

const CourierManagement = () => {
  return (
    <div className="courier-management">
      <h1 className="title">Courier Management System</h1>
      
      <div className="grid-container">
        <div className="grid-item">
          <div className="grid-item-content">
            <h2>Real-Time Tracking</h2>
            <p>Monitor the real-time location of your shipments with our GPS-enabled tracking system. Stay informed with live updates and ensure timely deliveries.</p>
          </div>
        </div>
        
        <div className="grid-item">
          <div className="grid-item-content">
            <h2>Automated Dispatching</h2>
            <p>Automatically assign orders to the nearest available courier to optimize delivery routes and reduce transit times. Improve efficiency with our intelligent dispatching algorithms.</p>
          </div>
        </div>
        
        <div className="grid-item">
          <div className="grid-item-content">
            <h2>Proof of Delivery (POD)</h2>
            <p>Ensure accountability with digital proof of delivery. Our system allows couriers to capture signatures, photos, and notes directly on their mobile devices.</p>
          </div>
        </div>
        
        <div className="grid-item">
          <div className="grid-item-content">
            <h2>Customer Notifications</h2>
            <p>Keep your customers informed with automatic SMS and email notifications. Provide real-time updates on their delivery status and expected arrival times.</p>
          </div>
        </div>
        
        <div className="grid-item">
          <div className="grid-item-content">
            <h2>Route Optimization</h2>
            <p>Utilize advanced algorithms to calculate the most efficient delivery routes. Minimize fuel consumption and delivery times, and reduce overall operational costs.</p>
          </div>
        </div>
        
        <div className="grid-item">
          <div className="grid-item-content">
            <h2>Analytics & Reporting</h2>
            <p>Access detailed reports and analytics to monitor your delivery performance. Identify trends, measure KPIs, and make data-driven decisions to improve your courier operations.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourierManagement;
