import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { SignUp } from './pages/SignUp';
import { Login } from './pages/Login';
import { AuthProvider } from './context/auth';
import { Logout } from './pages/Logout';
import { Search } from './pages/Search';
import { Movies } from './pages/Movies';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Login />}>
              <Route index element={<Login />} />  
              {/* <Route path="login" element={<div>Login</div>} /> */}
              {/* <Route path="signup" element={<SignUp />} /> */}
              {/* <Route path="search-friends" element={<div>Search Friends</div>} /> */}
              {/* <Route path="logout" element={<div>Logout</div>} /> */}
            </Route>

            <Route path='/home' element={<Outlet />}>
                <Route index element={<Home />} />
            </Route>

            <Route path='/signup' element={<Outlet />}>
                <Route index element={<SignUp />} />
            </Route>

            <Route path='/login' element={<Outlet />}>
                <Route index element={<Login />} />
            </Route>

            <Route path='/search' element={<Outlet />}>
                <Route index element={<Search />} />
            </Route>

            <Route path='/logout' element={<Outlet />}>
                <Route index element={<Logout />}/>
            </Route>

            <Route path='/movies' element={<Outlet />}>
                <Route index element={<Movies />}/>
            </Route>

            <Route path='/profile' element={<Outlet />}>
                <Route index element={<div>Profile</div>}/>
            </Route>

          </Routes>
        </BrowserRouter>
    </AuthProvider>
  // </React.StrictMode>
);