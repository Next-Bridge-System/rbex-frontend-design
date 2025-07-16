import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroTrackOrder from '../sections/trackOrder/HeroTrackOrder.jsx';

const TrackOrder = () => {
    return (

        <div className="overflow-x-hidden">
            <Navbar />
            <HeroTrackOrder/>
            <Footer />
        </div>

    );
};

export default TrackOrder;
