// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

import Navbar from '../navbar';


const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Outlet/>

    </div>
  );
};

export default Layout;
