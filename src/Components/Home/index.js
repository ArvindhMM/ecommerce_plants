import React from 'react';
import './index.css';

import Header from '../Header/Index'
import SearchAndSummary from '../SearchAndSummary';
import Footer from '../Footer';
import Nursery from '../Nursery';
import Filters from '../Filters';
import Products from '../Products';

const Home = () => (
        <div className='Home'>
            <Header/>
            <SearchAndSummary />
            <Nursery />
            <div className='filtersProducts-container'>
                <Filters />
                <Products />
            </div>
            <Footer />
        </div>
);

export default Home;