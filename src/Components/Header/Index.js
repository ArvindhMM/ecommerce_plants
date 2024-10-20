import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Header = () => (
  <header>
    <div className='ShippingAndContact'>
        <p className='freeShipping'>Free Shipping on orders above 999/-</p>
        <p>Call us on: +91 98768 05120</p>
    </div>
    <div className='HeaderMenu'>
        <img src='https://res.cloudinary.com/dhs1xv9et/image/upload/v1729405752/Group_59_zk4peo.png' className='logo' alt='logo' />
        <ul>
            <li><button>Home</button></li>
            <li><button>Plants & Pots</button></li>
            <li><button className="dropbtn">Tools <MdOutlineKeyboardArrowDown /></button></li>
            <li><button className="dropbtn">Our Services <MdOutlineKeyboardArrowDown /></button></li>
            <li><button>Blog</button></li>
            <li><button>Our Story</button></li>
            <li><button>FAQs</button></li> 
        </ul>
    
    <div className='profileAndCart'>
        <div className='profileContainer'>
            <img src='https://res.cloudinary.com/dhs1xv9et/image/upload/v1729408515/profile.256x256_kmkils.png' alt='profile' className='profile_img'/>
            <p>My Profile</p>
        </div>
        <Link to='/cart'>
        <div className='cartContainer'>
        <HiOutlineShoppingCart className='cartIcon' />
        <p>Cart</p>
        </div>
        </Link>
    </div>
    </div>
  </header>
);

export default Header;
