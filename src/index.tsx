import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<Home />} />  
              <Route path="signup" element={<div>SignUp</div>} />
            </Route>

          </Routes>
    </BrowserRouter>
  </React.StrictMode>
);