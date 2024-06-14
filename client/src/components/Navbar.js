import React from 'react';
import './Navbar.css'; // Import CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Logo or brand name */}
        <a href="/">Logo</a>
      </div>
      <ul className="navbar-links">
        {/* Navigation links */}
        <li><a href="/" style={{color:"black"}}>Home</a></li>
        <li><a href="/about" style={{color:"black"}}>About</a></li>
        <li><a href="/services" style={{color:"black"}}>Services</a></li>
        <li><a href="/contact" style={{color:"black"}}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
