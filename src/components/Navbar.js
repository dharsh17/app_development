import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import logo from '../logo.jpg'; // Corrected path to your logo
import { FaBoxOpen, FaConciergeBell, FaUsers, FaBriefcase, FaSuitcase, FaPhone, FaBlog, FaChevronDown, FaUserShield } from 'react-icons/fa';

const Navbar = () => {
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showCourierDropdown, setShowCourierDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const handleAdminLogin = () => {
    navigate('/AdminPage');
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>
        <div className="navbar-center">
          <div 
            className="nav-item dropdown" 
            onMouseEnter={() => setShowProductsDropdown(true)}
            onMouseLeave={() => setShowProductsDropdown(false)}
          >
            <a href="#products" className="nav-link">
              <FaBoxOpen className="nav-icon" /> Products
              <FaChevronDown className="dropdown-symbol" />
            </a>
            {showProductsDropdown && (
              <div className="dropdown-menu">
                <div 
                  className="dropdown-item dropdown"
                  onMouseEnter={() => setShowCourierDropdown(true)}
                  onMouseLeave={() => setShowCourierDropdown(false)}
                >
                  <Link to="/CourierManagement" className="dropdown-link">Courier Management</Link>
                </div>
              </div>
            )}
          </div>
          <div 
            className="nav-item dropdown"
            onMouseEnter={() => setShowServicesDropdown(true)}
            onMouseLeave={() => setShowServicesDropdown(false)}
          >
            <a href="#services" className="nav-link">
              <FaConciergeBell className="nav-icon" /> Services
              <FaChevronDown className="dropdown-symbol" />
            </a>
            {showServicesDropdown && (
              <div className="dropdown-menu">
                <Link to="/TransportationManagement" className="dropdown-item">Transportation Management</Link>
                <Link to="/InventoryManagement" className="dropdown-item">Inventory Management</Link>
                <Link to="/WarehouseManagement" className="dropdown-item">Warehouse Management</Link>
                <Link to="/OrderManagementPage" className="dropdown-item">Order Management</Link>
                <Link to="/SupplyChainManagement" className="dropdown-item">Supply Chain Management</Link>
              </div>
            )}
          </div> 
          <Link to="/ClientsPage" className="nav-link">
            <FaUsers className="nav-icon" /> Clients
          </Link>
          <Link to="/PortfolioComponent" className="nav-link">
            <FaBriefcase className="nav-icon" /> Portfolio
          </Link>
          <a href="/CareersPage" className="nav-link">
            <FaSuitcase className="nav-icon" /> Careers
          </a>
          <Link to="/ContactPage" className="nav-link">
            <FaPhone className="nav-icon" /> Contact
          </Link>
          <Link to="/BlogComponent" className="nav-link">
            <FaBlog className="nav-icon" /> Blog
          </Link>
          <button onClick={handleAdminLogin} className="admin-login-button">
            <FaUserShield className="nav-icon" /> Admin Login
          </button>
        </div>
        <div className="navbar-right">
          {user ? (
            <button onClick={handleLogout} className="logout-button">Logout</button>
          ) : (
            <Link to="/LoginPage" className="login-button">Login</Link>
          )}
        </div>
      </nav>
      {/* {user && (
        <div className="welcome-container" style={{ textAlign: 'left', margin: '20px 0 0 20px' }}>
          Welcome {user.username}!!
        </div>
      )} */}
    </>
  );
};

export default Navbar;
