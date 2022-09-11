import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { SignUp } from './pages/SignUp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<Home />} />  
              {/* <Route path="login" element={<div>Login</div>} /> */}
              {/* <Route path="signup" element={<SignUp />} /> */}
              {/* <Route path="search-friends" element={<div>Search Friends</div>} /> */}
              {/* <Route path="logout" element={<div>Logout</div>} /> */}
            </Route>

            <Route path='/signup' element={<Outlet />}>
                <Route index element={<SignUp />} />
            </Route>
          </Routes>

    </BrowserRouter>
  </React.StrictMode>
);