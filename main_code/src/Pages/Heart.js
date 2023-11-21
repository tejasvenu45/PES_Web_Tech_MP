import React, { useState } from 'react';
import './PersonelHygiene.css';
import { Link } from 'react-router-dom';
const ProductList = () => {
  const [products] = useState([
    { id: 1, name: 'Axcer', price: 5.99, imageUrl: 'https://www.jeevandip.com/wp-content/uploads/2023/06/Axcer-1646719856-10057857-1-520x520.jpg' },
    { id: 2, name: 'Bisoheart', price: 7.49, imageUrl: 'https://mcareexports.com/wp-content/uploads/2021/05/Bisoheart-2.5mg-tab.jpg' },
    { id: 3, name: 'Ecosprin', price: 9.99, imageUrl: 'https://th.bing.com/th/id/OIP.5TBJyLoT7FgN5v2n9lCFpgHaHa?rs=1&pid=ImgDetMain' },
    { id: 4, name: 'Oxra-S', price: 6.59, imageUrl: 'https://newassets.apollo247.com/pub/media/catalog/product/o/x/oxr0010_2.jpg' },
    { id: 5, name: 'Novastat-40', price: 8.29, imageUrl: 'https://www.jeevandip.com/wp-content/uploads/2023/04/Novastat-Asp-1675082890-10087698-1-520x520.jpg' },
    { id: 6, name: 'Nicorandil', price: 4.99, imageUrl: 'https://th.bing.com/th/id/OIP.T114ZbYGYE7G5HM_mLzwLQHaE8?rs=1&pid=ImgDetMain' },

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