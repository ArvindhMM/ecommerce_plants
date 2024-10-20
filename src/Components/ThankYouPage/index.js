import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const ThankYou = () => {
  return (
    <div className="thank-you-container">
      <p className="thank-you-message">Thank you for your interest in Monstera!</p>
      <Link to = '/'><button>Go back to Home</button></Link>
    </div>
  );
};

export default ThankYou;
