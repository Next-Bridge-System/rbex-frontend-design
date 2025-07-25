import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroCategory from '../sections/shopByCategory/HeroCategory';

const ShopByCategory = () => {
    return (

        <div className="overflow-x-hidden ">
            <Navbar />
            <HeroCategory />
            <Footer />
        </div>

    );
};

export default ShopByCategory;
