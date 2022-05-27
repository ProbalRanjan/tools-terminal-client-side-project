import React from 'react';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import HeroBanner from '../HeroBanner/HeroBanner';
import MyTools from '../MyTools/MyTools/MyTools';
import FeatureBrand from '../OurCompany/FeatureBrand/FeatureBrand';
import OurCompany from '../OurCompany/OurCompany/OurCompany';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <Services></Services>
            <OurCompany></OurCompany>
            <MyTools></MyTools>
            <FeatureBrand></FeatureBrand>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;