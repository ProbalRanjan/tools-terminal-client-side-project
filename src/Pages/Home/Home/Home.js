import React from 'react';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import HeroBanner from '../HeroBanner/HeroBanner';
import MyTools from '../MyTools/MyTools';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <Services></Services>
            <MyTools></MyTools>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;