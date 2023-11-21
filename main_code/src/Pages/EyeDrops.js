import React, { useState } from 'react';
import './PersonelHygiene.css';
import { Link } from 'react-router-dom';
const ProductList = () => {
  const [products] = useState([
    { id: 1, name: 'Similasan pink Eye Relief Eye Drops 0.33 oz', price: 5.99, imageUrl: 'https://cdn11.bigcommerce.com/s-ilgxsy4t82/images/stencil/960w/products/52784/107920/71GjFaBYsgL__87808.1659779756.jpg?c=1' },
    { id: 2, name: 'Lubricant Eye Drop 15 Ml By Sunmark', price: 7.49, imageUrl: 'https://cdn11.bigcommerce.com/s-ilgxsy4t82/images/stencil/960w/products/236622/672107/115758_3f5e6108-3bae-43a2-bef6-5f71ab0a8ae0__33178.1689056907.jpg?c=1' },
    { id: 3, name: 'Sunmark Eye Itch Relief Antihistamine Eye Drops 5 Oz By Sunmark', price: 9.99, imageUrl: 'https://cdn11.bigcommerce.com/s-ilgxsy4t82/images/stencil/960w/products/236616/672104/159169__25648.1689056905.jpg?c=1' },
    { id: 4, name: 'REFRESH TEARS Lubricant Eye Drops 0.50 oz', price: 6.59, imageUrl: 'https://cdn11.bigcommerce.com/s-ilgxsy4t82/images/stencil/960w/products/34227/46453/077508__14333__35133.1657343224.jpg?c=1' },
    { id: 5, name: 'OTC Polysporin Pink Eye Drops 15 ml', price: 8.29, imageUrl: 'https://cdn11.bigcommerce.com/s-ilgxsy4t82/images/stencil/960w/products/200715/472662/Polysporin_Pink_Eye_Drops_15ml__99184.1698922333.png?c=1' },
    { id: 6, name: 'Trimmer', price: 4.99, imageUrl: 'https://cdn11.bigcommerce.com/s-ilgxsy4t82/images/stencil/960w/products/249470/696616/hylo-tears-2020__94434.1691048637.jpg?c=1'},
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