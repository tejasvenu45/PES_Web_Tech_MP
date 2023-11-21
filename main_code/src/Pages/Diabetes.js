import React, { useState } from 'react';
import './PersonelHygiene.css';
import { Link } from 'react-router-dom';
const ProductList = () => {
  const [products] = useState([
    { id: 1, name: 'Kapiva Dia Free Juice', price: 5.99, imageUrl: 'https://m.media-amazon.com/images/I/61dPNIQ1EnL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 2, name: 'Aadved Ayush 82 | Control Diabetes and Blood Sugar Naturally', price: 7.49, imageUrl: 'https://m.media-amazon.com/images/I/81axPMUesHL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 3, name: 'Krishnas Diabic Care Tablet - 80 Tab', price: 9.99, imageUrl: 'https://m.media-amazon.com/images/I/71ROGMI-KxL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 4, name: 'GUDMAR 500 mg, Pack Of 60 Capsules For Regulation Of Blood Sugar', price: 6.59, imageUrl: 'https://m.media-amazon.com/images/I/71OMABKugoL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 5, name: 'Himalaya Wellness Pure Herbs Meshashringi Metabolic Wellness - 60 Tablet', price: 8.29, imageUrl: 'https://m.media-amazon.com/images/I/61lRRkazp9L._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 6, name: 'Just Jaivik Organic Gymnema/Gymnema Sylvestre/Gurmar Tablets', price: 4.99, imageUrl: 'https://m.media-amazon.com/images/I/61vbmr73PxL._AC_UL480_FMwebp_QL65_.jpg' },
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

  const handlePayment = () => {
    // Simulating payment received
    alert('Payment received from Google Pay. Your order is being processed for delivery.');
    // Reset cart and total price after payment
    setCartItems([]);
    setTotalPrice(0);
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
          <h2 >Cart</h2>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <p>{item.name} - ${item.price} x {item.quantity}</p>
              </div>
            ))}
          </div>
          <p>Total Price: ${totalPrice}</p>
          <div className="go-to-payment">
            {/* Updated button with onClick handler */}
            <button onClick={handlePayment}>Proceed to Payment</button>
          </div>
        </div>
      </div>

      {/* Go to Payment button */}

    </div>
  );
};

export default ProductList;