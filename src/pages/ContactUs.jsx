import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroContact from '../sections/contactUs/HeroContact';

const TrackOrder = () => {
    return (

        <div className="overflow-x-hidden">
            <Navbar />
            <HeroContact/>
            <Footer />
        </div>

    );
};

export default TrackOrder;
