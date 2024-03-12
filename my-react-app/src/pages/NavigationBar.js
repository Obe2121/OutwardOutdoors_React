import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Assuming you'll create a CSS file for the NavBar styles
import logo from './fish.jpg'; // Adjust the path to your logo

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links left-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </div>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="nav-links right-links">
        <Link to="/reservations">Reservations</Link>
        <Link to="/contact-us">Contact Us</Link>
      </div>
    </nav>
  );
};

export default NavBar;