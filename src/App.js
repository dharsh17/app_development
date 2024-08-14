import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContactPage from './components/ContactPage';
import Homepage from './components/Homepage';
import CareersPage from './components/CareersPage';
import './components/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogComponent from './components/BlogComponent';
import PortfolioComponent from './components/PortfolioComponent';
import ClientsPage from './components/ClientsPage';
import TransportationManagement from './components/TransportationManagement';
import InventoryManagement from './components/InventoryManagement';
import WarehouseManagement from './components/WarehouseManagement';
import OrderManagementPage from './components/OrderManagement';
import SupplyChainManagement from './components/SupplyChainManagement';
import CourierManagement from './components/CourierManagement';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import AdminPage from './components/AdminPage';
import AdminDashboard from './components/AdminDashboard';
import UserManagement from './components/UserManagement';
import EditUser from './components/EditUser';
import AddUsers from './components/AddUsers';
import AddTransport from './components/AddTransport';
import EditTransport from './components/EditTransport';
import TransportManagement from './components/TransportManagement';

const App = () => {
  const location = useLocation();
  const hideNavbarPaths = [
    '/AdminDashboard', '/AdminPage', '/LoginPage', '/SignUpPage',
    '/user-management', '/transport-management', '/edit-user', '/add-user',
    '/admin-users','/.feedback' // Add this path to hide the Navbar on the UserManagement page
  ];

  return (
    <div className="App">
      {/* Conditionally render Navbar based on current path */}
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin-users" element={<UserManagement />} />
        <Route path="/add-user" element={<AddUsers />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/AdminPage" element={<AdminPage />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/CareersPage" element={<CareersPage />} />
        <Route path="/BlogComponent" element={<BlogComponent />} />
        <Route path="/PortfolioComponent" element={<PortfolioComponent />} />
        <Route path="/ClientsPage" element={<ClientsPage />} />
        <Route path="/TransportationManagement" element={<TransportationManagement />} />
        <Route path="/InventoryManagement" element={<InventoryManagement />} />
        <Route path="/WarehouseManagement" element={<WarehouseManagement />} />
        <Route path="/OrderManagementPage" element={<OrderManagementPage />} />
        <Route path="/SupplyChainManagement" element={<SupplyChainManagement />} />
        <Route path="/CourierManagement" element={<CourierManagement />} />
        <Route path="/transport-management" element={<TransportManagement />} />
        <Route path="/add-transport" element={<AddTransport />} />
        <Route path="/edit-transport/:id" element={<EditTransport />} />
        {/* Add more routes here as needed */}
      </Routes>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
