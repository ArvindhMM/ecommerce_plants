import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'; 

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <Link to = '/thankyou'><img src={product.image} alt={product.name} className="product-image" /></Link>
      </div>
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <div className="product-rating">
        {Array(Math.round(product.rating))
          .fill()
          .map((_, i) => (
            <span key={i}>⭐</span>
          ))}
        <span>{product.rating}</span>
      </div>
      <div className="product-price">
        <span className="start-price">{product.actualPrice}</span>
        <span className="price">{product.price}</span>
      </div>
      <div className="product-buttons">
        <button className="add-to-cart-btn">+ Add to cart</button>
        <button className="buy-on-rent-btn">Buy on Rent</button>
      </div>
    </div>
  );
};

export default ProductCard;
