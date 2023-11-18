// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layout.js';
import Navbar from './navbar.js';
import ProductList from './product.js';
function App() {
  return (
    <div>
    <Navbar/>
    <Router>
      <Layout />
    </Router>
    <ProductList/>
    </div>
  );
}

export default App;
