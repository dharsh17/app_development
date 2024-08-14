import React from 'react';
import { UserProvider } from '../contexts/UserContext';
import TransportationManagement from './TransportationManagement';
import InventoryManagement from './InventoryManagement';

function App() {
  return (
    <UserProvider>
      <TransportationManagement />
      <InventoryManagement />
    </UserProvider>
  );
}

export default App;
