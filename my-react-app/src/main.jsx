import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <div className="flex justify-center items-center h-full">
       
           
            <App />
          </div>
       
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);