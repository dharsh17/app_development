// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// ReactDOM.render(<App />, document.getElementById('root'));
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserProvider } from './contexts/UserContext'; // Import UserProvider
import { TokenProvider } from './components/TokenProvider';
// import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <TokenProvider>
  <UserProvider>
    <App />
  </UserProvider>
  </TokenProvider>,
  document.getElementById('root')
);
