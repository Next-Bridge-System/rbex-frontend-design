import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


import HeroHelp from '../sections/helpCenter/HeroHelp.jsx';

const HelpCenter = () => {
    return (

        <div className="overflow-x-hidden ">
            <Navbar />
            <HeroHelp/>
            <Footer />
        </div>

    );
};

export default HelpCenter;
