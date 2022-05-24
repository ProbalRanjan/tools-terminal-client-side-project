import React from 'react';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import HeroBanner from '../HeroBanner/HeroBanner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <Services></Services>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;