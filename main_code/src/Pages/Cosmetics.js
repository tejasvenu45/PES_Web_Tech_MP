import React, { useState } from 'react';
import './PersonelHygiene.css';
import { Link } from 'react-router-dom';
const ProductList = () => {
  const [products] = useState([
    { id: 1, name: 'Nivea Lip Balm', price: 5.99, imageUrl: 'https://m.media-amazon.com/images/I/71tnwVcvqLL._SX679_.jpg' },
    { id: 2, name: 'Wild Stone Perfume', price: 7.49, imageUrl: 'https://th.bing.com/th/id/OIP.Jh_gtLEv3NjFCrxbckMQpQHaHa?rs=1&pid=ImgDetMain' },
    { id: 3, name: 'Ponds Powder', price: 9.99, imageUrl: 'https://nammamaligai.com/wp-content/uploads/2016/12/ponds_dream_flower_talcum_powder_100gm_1.png' },
    { id: 4, name: 'Lakme Lip Stick', price: 6.59, imageUrl: 'https://th.bing.com/th/id/R.8f9dc9a7097d71e70373e604d870915c?rik=TW9S8C7LIykQww&riu=http%3a%2f%2f2.bp.blogspot.com%2f-yX25UEol-fw%2fUhUwwHHcJNI%2fAAAAAAAACuM%2fYFtPCZCdxc8%2fs1600%2fLakme%2bAbsolute%2bLip%2bCreme%2bShades.jpg&ehk=W08gasSAD3Opfn0gC6gfDhTEF0GcNIWm2vZ0ep7CcsQ%3d&risl=&pid=ImgRaw&r=0' },
    { id: 5, name: 'Lakme Foundation Cream', price: 8.29, imageUrl: 'https://m.media-amazon.com/images/I/51IgR2yRK2L._SX679_.jpg' },
    { id: 6, name: 'Comfort Matte Priming Lipstick ', price: 4.99, imageUrl: 'data:image/jpeg;base64,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' },
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