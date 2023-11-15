// ProductList.js

import React, { useState } from 'react';
import './product.css';

const ProductList = () => {
  const [products] = useState([
    { id: 1, name: 'Personel Hygiene', description: 'Browse Your Dialy essentials', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/8/335969518/FA/VQ/WT/133360592/dove-shampoo.jpeg' },
    { id: 2, name: 'Product 2', description: 'Description 2', imageUrl: 'url2' },
    { id: 3, name: 'Product 3', description: 'Description 3', imageUrl: 'url3' },
    { id: 4, name: 'Product 4', description: 'Description 4', imageUrl: 'url4' },
    { id: 5, name: 'Product 5', description: 'Description 5', imageUrl: 'url5' },
    { id: 6, name: 'Product 6', description: 'Description 6', imageUrl: 'url6' },
    { id: 7, name: 'Product 7', description: 'Description 7', imageUrl: 'url7' },
    { id: 8, name: 'Product 8', description: 'Description 8', imageUrl: 'url8' },
  ]);

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.imageUrl} alt={`Product ${product.id}`} className="product-image" />
          <div className="product-info">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
