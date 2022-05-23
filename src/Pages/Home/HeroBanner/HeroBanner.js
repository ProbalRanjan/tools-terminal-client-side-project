import React from 'react';
import { Link } from 'react-router-dom';
import './HeroBanner.css';

const HeroBanner = () => {
    return (
        <div className='container'>
            <div className="hero-container">
                <div className='hero-info'>
                    <h1>Welcome to<br />
                        <span>Tools Terminal</span>
                    </h1>
                    <p>Tools Terminal is world class tools manufacturing company. It's well known industry in the world.</p>
                    <Link to='/login'>
                        <button className='primary-button'>Login</button>
                    </Link>
                </div>
                <img src="https://i.ibb.co/hZ5bpL5/hero-banner-img.png" alt="" className='hero-img' />
            </div>
        </div>
    );
};

export default HeroBanner;