import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';


const CartPage = () => {
  return (
    <div className="cart-page-container">
      <div className="cart-page-content">
        <h3>Your Cart</h3>
        <hr className="divider" />
        <div className="cart-confirmation">
          <h2>Congratulations</h2>
          <p>Order Placed!</p>
          <div className="plant-icon">
            <img src="https://res.cloudinary.com/dhs1xv9et/image/upload/v1729405753/plant_1_izsc0z.jpg" alt="Plant icon" />
          </div>
          <p>Thank you for choosing Chaperone services. We will soon get in touch with you!</p>
          <Link to="/"><button className="continue-shopping-btn">Continue Shopping</button></Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
