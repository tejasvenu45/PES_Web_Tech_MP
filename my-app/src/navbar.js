import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Logo</div>
      <div className="brand">Pharmacart</div>
      <div className="links">
        <div className="link">Home Page</div>
        <div className="link">Cart</div>
      </div>
    </div>
  );
};

export default Navbar;