import { faGift, faHeadset, faTruck, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div className='services-container'>
            <div className='container'>

                <div className="services">
                    <div className="service">
                        <FontAwesomeIcon className='service-icon' icon={faTruck} />
                        <div>
                            <h5>DEVLIVERY IN 24H</h5>
                            <p>Free shipping over $100</p>
                        </div>
                    </div>
                    <div className="service">
                        <FontAwesomeIcon className='service-icon' icon={faWallet} />
                        <div>
                            <h5>24 HOURS RETURN</h5>
                            <p>Free return over $100</p>
                        </div>
                    </div>
                    <div className="service">
                        <FontAwesomeIcon className='service-icon' icon={faGift} />
                        <div>
                            <h5>QUALITY GUARANTEE</h5>
                            <p>Quality checked by our team</p>
                        </div>
                    </div>
                    <div className="service">
                        <FontAwesomeIcon className='service-icon' icon={faHeadset} />
                        <div>
                            <h5>SUPPORT 24/7</h5>
                            <p>Shop with an expert</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;