// Import your components
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './pages/NavigationBar';
import Shop from './pages/Shop';
import Reservations from './pages/Reservations';
import ContactUs from './pages/ContactUs';
import './App.css';
import Home from './pages/Home';
import Footer from './pages/Footer' // Add this import for the Home component

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/contact-us" element={<ContactUs />} />
        {/* Add other routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App; // Make sure this line is correct
