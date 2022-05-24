import { faPeopleGroup, faSackDollar, faScrewdriverWrench, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './BusinessSummary.css';

const BusinessSummary = () => {
    return (
        <div className='container'>
            <div className='section-container'>
                <div className='section-header'>
                    <h2>Business Summary</h2>
                    <p>Some of our business information</p>
                </div>
                <div className="businesses">
                    <div className="business">
                        <FontAwesomeIcon className='business-icon' icon={faPeopleGroup} />
                        <div>
                            <p><span>100+</span> <br /> Happy Customers</p>
                        </div>
                    </div>
                    <div className="business">
                        <FontAwesomeIcon className='business-icon' icon={faSackDollar} />
                        <div>
                            <p><span>120M+</span> <br /> Annual Revenue</p>
                        </div>
                    </div>
                    <div className="business">
                        <FontAwesomeIcon className='business-icon' icon={faStar} />
                        <div>
                            <p><span>33K+</span> <br /> Positive Reviews</p>
                        </div>
                    </div>
                    <div className="business">
                        <FontAwesomeIcon className='business-icon' icon={faScrewdriverWrench} />
                        <div>
                            <p><span>50+</span> <br /> Quality Tools</p>
                        </div>
                    </div>
                </div>
                <div className="business-query">
                    <div>
                        <h4>Have Any Question about us or get a product request?</h4>
                        <p style={{ marginBottom: "0" }}>Don't hesitate to contact us</p>
                    </div>
                    <div>
                        <Link to='/contact'>
                            <button className='primary-button'>Contact Us</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;