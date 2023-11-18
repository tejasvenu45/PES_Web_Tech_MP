import React, { useState } from 'react';
import './navbar.css';
import logo from "./download.png"
import App from './App';
import { ReactDOM } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [image] = useState({ img: logo });

  return (
    <div className="navbar">
      <div className="logo">
        <img src={image.img} alt="logo" className='logo-img' />
      </div>
      <div className="brand">Pharmacart</div>
      <div className="links">
      <div className="link"><Link to ="/">Home</Link></div>
        <div className="link"><Link to ="/About">About us</Link></div>
        
        <div className="link"><Link to ="/Cart">Cart</Link></div>

      </div>
    </div>
  );
};

export default Navbar;