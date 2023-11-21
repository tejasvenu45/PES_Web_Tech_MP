// ProductList.js

import React, { useState } from 'react';
import './product.css';
import {Link} from 'react-router-dom'
const ProductList = () => {
  const [products] = useState([
    { id: 1, name: 'BabyCare', description: 'Browse Your BabyCare', imageUrl: 'https://breeze-media.vega.co.in/media/catalog/product/cache/1ef41c8834aa6b772f4686b0f4051c34/N/i/Nipple_Pack_of_2_Wide_Neck-04.jpg' },
    { id: 2, name: 'CommonCold', description: 'Browse World Class Common Cold', imageUrl: 'https://www.lung.org/optimize/getmedia/980d7bb2-e8c8-4c3d-bc5b-77e65486b46c/flu-symptoms_fever_576x576.png?format=webp' },
    { id: 3, name: 'Cosmetics', description: 'Browse World Class Common Cold', imageUrl: 'https://vivecosmetic.com/wp-content/uploads/2020/08/Top-10-Cosmetic-Companies-in-India.jpg' },
    { id: 4, name: 'Dental', description: 'Browse World Class Dental ', imageUrl: 'https://www.northshore-endo.com/files/2015/09/rct.jpg' },
    { id: 5, name: 'Diabetes', description: 'Browse World Class Diabetes', imageUrl: 'https://www.arkanalabs.com/wp-content/uploads/2021/10/diabetes.png' },
    { id: 6, name: 'EyeDrops', description: 'Browse World Class EyeDrops', imageUrl: 'https://www.vedantu.com/question-sets/283c3e0d-073f-4423-b7b5-56b389d1223d2117453212961669864.png' },
    { id: 7, name: 'Heart', description: 'Browse World Class Heart', imageUrl: 'https://www.vedantu.com/question-sets/d9f110f7-7d2e-4f7a-aa5c-27ef42fee0bb7995164896363224664.png' },
    { id: 8, name: 'PersonalHygiene', description: 'Personale Hygiene', imageUrl: 'https://www.oneeducation.org.uk/wp-content/uploads/2021/03/Hygiene-768x768.png' },
  ]);

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.imageUrl} alt={`Product ${product.id}`} className="product-image" />
          <div className="product-info">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <Link to={`/${product.name}`}>
              <button>Visit Me</button>
            </Link>
          
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
