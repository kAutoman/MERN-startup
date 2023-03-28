//style for App
import './App.css';
//import built-in modules
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
//import external modules
import Navbar from './components/navbar/navbar.component';
import Landing from './views/landing/landing.view';
import Footer from './components/footer/footer.component';
import Login from './views/login/login.view';
import Register from './views/register/register.view';
// admin components
import AdminLink from './views/admin/link/link.view';
import AdminAppearance from './views/admin/appearance/appearance.view';

// Membership components
import MemberShip from './views/membership/membership.view';
import Channels from './views/channels/channels.view';

//routing module
import PrivateRoute from './components/routing/PrivateRoute';
//redux module
import { loadUser } from './store/actions/auth';
import store from './store/store';
import { LOGOUT } from './store/types';
import setAuthToken from './utils/setAuthToken';
//toastify settings
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
//pro-sidebar example
import { ProSidebarProvider } from 'react-pro-sidebar';

const App = () => {
  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.kenek_token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.kenek_token);
    }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.kenek_token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <>
    <ProSidebarProvider>
      <Router>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />} />
          <Route path="/:username" element={<PrivateRoute component={AdminLink} />} />          
          <Route path="/appearance/:username" element={<PrivateRoute component={AdminAppearance} />} />
          <Route path="/membership" element={<PrivateRoute component={MemberShip} />} />
          <Route path="/channels" element={<PrivateRoute component={Channels} />} />
        </Routes>
        <Footer />
      </Router>
    </ProSidebarProvider>
    </>
  );
}

export default App;
