import React from 'react';
import ProfileImage from '../../../Assets/images/Portfolio/probal_ranjan.jpg'
import Education from '../Education/Education';
import MyPortfolioWork from '../MyPortfolioWork/MyPortfolioWork';
import Skills from '../Skills/Skills';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <div className='container section-container'>
            <div className=''>
                <div className='personal-info'>
                    <img src={ProfileImage} alt="" />
                    <h1>Probal Ranjan Paul</h1>
                    <p><span>Email: </span>probal.ranjan1198@gmail.com</p>
                </div>

                <div>
                    <Education></Education>
                    <Skills></Skills>
                    <MyPortfolioWork></MyPortfolioWork>
                </div>
            </div>

        </div>
    );
};

export default Portfolio;