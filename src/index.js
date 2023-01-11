import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import GlobalContextProvider from './context/GlobalContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalContextProvider>
  <AuthContextProvider>
    <React.StrictMode>
      <Router>
      <App />
      </Router>
    </React.StrictMode>
  </AuthContextProvider>
  </GlobalContextProvider>
 
);


