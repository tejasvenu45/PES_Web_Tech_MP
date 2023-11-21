import React, { useState } from 'react';
import './PersonelHygiene.css';
import { Link } from 'react-router-dom';
const ProductList = () => {
  const [products] = useState([
    { id: 1, name: 'Johnson Baby Powder', price: 5.99, imageUrl: 'https://s3.images-iherb.com/jnj/jnj03072/l/1.jpg' },
    { id: 2, name: 'Johnson Baby Shampoo', price: 7.49, imageUrl: 'https://www.rationatmydoor.com/wp-content/uploads/2019/02/johnsons-babyshampoo.jpg' },
    { id: 3, name: 'Pampers', price: 9.99, imageUrl: 'https://th.bing.com/th/id/OIP.UdCDtO47OOVbT3iJfXrJCwHaHa?rs=1&pid=ImgDetMain' },
    { id: 4, name: 'Mamy Poko Pants', price: 6.59, imageUrl: 'https://n3.sdlcdn.com/imgs/e/t/r/Mamy-Poko-Pants-SDL709564447-1-c598a.jpg' },
    { id: 5, name: 'Baby Milk Bottle', price: 8.29, imageUrl: 'https://cdn01.pharmeasy.in/dam/products_otc/J26433/liveasy-baby-care-feeding-bottle-1-1647333741.jpg?dim=700x0&dpr=1&q=100' },
    { id: 6, name: 'Baby Soap', price: 4.99, imageUrl: 'https://cdn01.pharmeasy.in/dam/products_otc/M45205/johnsons-baby-soap-box-of-400-g-buy-3-get-1-free-1-1654256126.jpg?dim=700x0&dpr=1&q=100' },
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