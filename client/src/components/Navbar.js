import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1>Welcome to the Event Management Platform</h1>
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/userprofile">Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
