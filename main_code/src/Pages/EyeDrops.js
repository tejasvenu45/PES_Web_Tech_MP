import React, { useState } from 'react';
import './PersonelHygiene.css';
import { Link } from 'react-router-dom';
const ProductList = () => {
  const [products] = useState([
    { id: 1, name: 'ToothBrush', price: 5.99, imageUrl: 'https://images.ctfassets.net/6azfn76zuilv/2A7obk8RHEWYWTeD61tKpu/00b1193df2371e37d0fd26b30b6b6ffe/file.png?fm=webp&q=75' },
    { id: 2, name: 'ToothPaste', price: 7.49, imageUrl: 'https://img.freepik.com/premium-vector/vector-isolated-object-illustration-oral-dental-care-toothbrush-toothpaste_311865-9441.jpg' },
    { id: 3, name: 'Comb', price: 9.99, imageUrl: 'https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2F30610%2F30610.png%3Fversion%3D1594225801&w=1440&bc=%23f5f5f5&ib=%23f5f5f5&h=1440&q=30' },
    { id: 4, name: 'Razor-Blade', price: 6.59, imageUrl: 'https://images.ctfassets.net/7tfi3razjgvb/5tdHBGoAwcQ364vJRHUWDO/35c13ac1c8f0ccb567bc613645b38c1c/sp_overview_402x.png' },
    { id: 5, name: 'Shaving Cream', price: 8.29, imageUrl: 'https://m.media-amazon.com/images/I/71UgNqA9FEL.jpg' },
    { id: 6, name: 'Trimmer', price: 4.99, imageUrl: 'https://www.morphyrichardsindia.com/medias/?context=bWFzdGVyfGltYWdlc3wzOTIyM3xpbWFnZS9qcGVnfGFHRTRMMmhpT1M4NE9UUXdPVEE0TlRjMk56azR8NmJhNGRmMDA5YmM4ZTk0NTYzOWRiN2VhYTVjZjE4ZDE1NDRmYzU4Y2I4YmU2NGJhNDk4MGE0NTFjZTZlYzgyMw' },

    // Existing products ...
  ]);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity++;
      setCartItems(updatedCartItems);
    } else {
      const updatedProduct = { ...product, quantity: 1 };
      setCartItems([...cartItems, updatedProduct]);
    }
    setTotalPrice(totalPrice + product.price);
  };
  return (
    <div>
      <div className="product-page">
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.imageUrl} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>

              <p>Price: ${product.price}</p>
              <button onClick={() => addToCart(product)}>Add To Cart</button>
            </div>
          ))}
        </div>

        {/* Cart Section */}
        <div className="cart">
          <h2>Cart</h2>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <p>{item.name} - ${item.price} x {item.quantity}</p>
              </div>
            ))}
          </div>
          <p>Total Price: ${totalPrice}</p>
          <div className="go-to-payment">
            <Link to="/payment">
              <button>Go to Payment</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Go to Payment button */}

    </div>
  );
};

export default ProductList;