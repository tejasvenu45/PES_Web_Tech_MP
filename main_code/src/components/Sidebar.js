// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/BabyCare">Baby Care</Link>
        </li>
        <li>
          <Link to="/CommonCold">Common Cold</Link>
        </li>
        <li>
          <Link to="/Cosmetics">Cosmetics </Link>
        </li>
        <li>
          <Link to="/Dental">Dental</Link>
        </li>
        <li>
          <Link to="/Diabetes">Diabetes </Link>
        </li>
        <li>
          <Link to="/EyeDrops">EyeDrops </Link>
        </li>
        <li>
          <Link to="/Heart">Heart</Link>
        </li>
        <li>
          <Link to="/PersonelHygiene">PersonelHygiene</Link>
        </li>
        
        
      </ul>
    </div>
  );
};

export default Sidebar;
