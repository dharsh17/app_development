import React, { useState } from 'react';
import './CareersPage.css'; // Import your CSS file for styling
import { FaSuitcase, FaStar, FaComments, FaTimes } from 'react-icons/fa';

const CareersPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState('');

  const roleDetails = {
    'parcel-delivery-driver': {
      title: 'Parcel Delivery Driver',
      responsibilities: [
        'Deliver packages to customer locations in a timely manner.',
        'Ensure packages are delivered safely and securely.',
        'Provide excellent customer service and handle inquiries professionally.',
        'Follow company policies and procedures for delivery.'
      ],
      requirements: [
        'Valid driver’s license and clean driving record.',
        'Good communication and customer service skills.',
        'Ability to lift and carry packages up to 50 lbs.',
        'Reliable and punctual with a strong work ethic.'
      ]
    },
    'courier-operations-coordinator': {
      title: 'Courier Operations Coordinator',
      responsibilities: [
        'Oversee daily operations and coordinate courier schedules.',
        'Optimize delivery routes to enhance efficiency and reduce costs.',
        'Monitor performance metrics and address any issues promptly.',
        'Train and manage a team of couriers to ensure high standards.'
      ],
      requirements: [
        'Experience in logistics or operations management.',
        'Strong organizational and problem-solving skills.',
        'Excellent leadership and communication abilities.',
        'Proficiency in route optimization software.'
      ]
    },
    'logistics-dispatch-manager': {
      title: 'Logistics and Dispatch Manager',
      responsibilities: [
        'Direct and manage dispatch operations for efficient service delivery.',
        'Analyze logistics data to improve processes and performance.',
        'Collaborate with other departments to ensure seamless operations.',
        'Implement strategies to enhance customer satisfaction and operational efficiency.'
      ],
      requirements: [
        'Proven experience in logistics and dispatch management.',
        'Strong analytical and strategic planning skills.',
        'Excellent problem-solving and communication abilities.',
        'Experience in managing large teams and complex logistics operations.'
      ]
    }
  };

  const openModal = (role) => {
    setCurrentRole(role);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentRole('');
  };

  const roleData = roleDetails[currentRole] || {};

  return (
    <div className="careers-page">
      <header className="careers-header">
        <h5>Explore our career opportunities and see how you can contribute to our success!</h5>
      </header>
      
      <section id="careers" className="featured-roles">
        <h2>Featured Roles</h2>
        <div className="role-list">
          <div className="role-card">
            <h3>Parcel Delivery Driver</h3>
            <p><strong>Location:</strong> Miami, FL</p>
            <p>Drive our fleet and deliver packages efficiently while maintaining excellent customer service. Make an impact in your community with every delivery.</p>
            <button className="explore-button" onClick={() => openModal('parcel-delivery-driver')}>Explore This Role</button>
          </div>
          
          <div className="role-card">
            <h3>Courier Operations Coordinator</h3>
            <p><strong>Location:</strong> Dallas, TX</p>
            <p>Manage daily courier operations to ensure efficient and timely deliveries. Optimize routes and oversee a team dedicated to top-notch service.</p>
            <button className="explore-button" onClick={() => openModal('courier-operations-coordinator')}>Explore This Role</button>
          </div>
          
          <div className="role-card">
            <h3>Logistics and Dispatch Manager</h3>
            <p><strong>Location:</strong> Seattle, WA</p>
            <p>Oversee dispatch and logistics operations, ensuring smooth workflows and excellent service delivery. Lead initiatives to enhance efficiency and customer satisfaction.</p>
            <button className="explore-button" onClick={() => openModal('logistics-dispatch-manager')}>Explore This Role</button>
          </div>
        </div>
      </section>

      <section className="employee-testimonials">
        <h2>What Our Employees Says!!</h2>
        <div className="testimonial-list">
          <div className="testimonial-card">
            <FaStar className="testimonial-icon" />
            <p>"Working here has been an incredible experience. The team is supportive, and the work is rewarding. I’m proud to be part of a company that values its employees and customers equally."</p>
            <footer>— Alex R., Delivery Driver</footer>
          </div>

          <div className="testimonial-card">
            <FaStar className="testimonial-icon" />
            <p>"The opportunities for growth and development are outstanding. The company provides a great work environment and values feedback, making it a fantastic place to work."</p>
            <footer>— Jordan S., Operations Coordinator</footer>
          </div>
        </div>
      </section>

      {/* Modal Component */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              <FaTimes />
            </button>
            <h3>{roleData.title}</h3>
            <h4>Job Responsibilities:</h4>
            <ul>
              {roleData.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h4>Requirements:</h4>
            <ul>
              {roleData.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareersPage;
