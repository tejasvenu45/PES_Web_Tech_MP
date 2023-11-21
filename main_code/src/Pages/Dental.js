import React, { useState } from 'react';
import './PersonelHygiene.css';
import { Link } from 'react-router-dom';
const ProductList = () => {
  const [products] = useState([
    { id: 1, name: 'ToothBrush', price: 5.99, imageUrl: 'https://images.ctfassets.net/6azfn76zuilv/2A7obk8RHEWYWTeD61tKpu/00b1193df2371e37d0fd26b30b6b6ffe/file.png?fm=webp&q=75' },
    { id: 2, name: 'ToothPaste', price: 7.49, imageUrl: 'https://img.freepik.com/premium-vector/vector-isolated-object-illustration-oral-dental-care-toothbrush-toothpaste_311865-9441.jpg' },
    { id: 3, name: 'Colgate Pain Out Dental Gel', price: 9.99, imageUrl: 'https://res.cloudinary.com/du8msdgbj/image/upload/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/v1600669507/cropped/ktvvysw5feefvppe4i0v.jpg' },
    { id: 4, name: 'Listerine Original Mouth Wash', price: 6.59, imageUrl: 'https://th.bing.com/th/id/OIP.oU4vonMYyNOfzMuY_NLc_QHaHg?pid=ImgDetMain' },
    { id: 5, name: 'Shaving Cream', price: 8.29, imageUrl: 'https://newassets.apollo247.com/pub/media/catalog/product/c/o/col1023_1_1.jpg' },
    { id: 6, name: 'Tata 1mg 2% Gargle and Mouthwash (Povidone Iodine) Mint', price: 4.99, imageUrl: 'https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/6a520833dfa54427a7648586e9c4d8c0.jpg' },
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