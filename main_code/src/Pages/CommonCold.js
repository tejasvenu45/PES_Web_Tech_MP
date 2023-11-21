import React, { useState } from 'react';
import './PersonelHygiene.css';
import { Link } from 'react-router-dom';
const ProductList = () => {
  const [products] = useState([
    { id: 1, name: 'Inhaler', price: 5.99, imageUrl: 'https://th.bing.com/th/id/OIP.FOeXYZOoQKDuQV0BXXm1jgHaHa?pid=ImgDetMain' },
    { id: 2, name: 'Cough Syrup', price: 7.49, imageUrl: 'https://5.imimg.com/data5/MH/NU/MY-38618492/apollo-cough-syrup-500x500.jpg' },
    { id: 3, name: 'Vicks drops', price: 9.99, imageUrl: 'https://th.bing.com/th/id/OIP.YB_wBjnGDR4sqK92-krnqgHaHa?pid=ImgDetMain' },
    { id: 4, name: 'Otrivin', price: 6.59, imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2022/12/TL/FG/HB/64730033/otrivin-paediatric-nasal-drops-1000x1000.jpg' },
    { id: 5, name: 'coldcalm', price: 8.29, imageUrl: 'https://th.bing.com/th/id/R.79ad02346d1523e1c0c55df1b526c468?rik=AWFhQNhIPFsmzQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-9a9EZeHRLqk%2fUnANy62Q1wI%2fAAAAAAAAQRg%2feVEnCJeyvng%2fs1600%2fColdcalm_Tablet__Left.jpg&ehk=eBrZApF6JY7weMWcvMw6zROTeXv8oICbO0%2bODjCPkjM%3d&risl=&pid=ImgRaw&r=0' },
    { id: 6, name: 'Coldmine', price: 4.99, imageUrl: 'https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/351e56cfb889417baa4c017e290fde3c.jpg' },
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