import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import Payment from './pages/Payment';
import UserProfile from './pages/UserProfile';
// import About from './pages/About';
// import Login from './pages/Login';
// import Registration from './pages/Registration';
// import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Navbar /> {/* Display the Navbar component */}
        <Routes>
          <Route 
            path="/" 
            element={<Home />}
          />
          <Route 
            path="/event/:id" 
            element={<EventDetails />}
          />
          <Route 
            path="/payment/:id" 
            element={<Payment />}
          />
          <Route 
            path="/userprofile" 
            element={<UserProfile />}
          />
          {/* <Route 
            path="/about" 
            element={<About />}
          />
          <Route 
            path="/login" 
            element={<Login />}
          />
          <Route 
            path="/signup" 
            element={<Registration />}
          />
          <Route 
            path="*" 
            element={<NotFound />}
          /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
