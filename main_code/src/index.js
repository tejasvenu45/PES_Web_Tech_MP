import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import ProductList from './product'
// import Slide from './slide'

const root = ReactDOM.createRoot(document.getElementById('navBar'));
root.render(
    <App />
);



const shoot = ReactDOM.createRoot(document.getElementById('products'));
shoot.render(
    <ProductList />
);

