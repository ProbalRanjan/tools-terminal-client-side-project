import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <div>
            <div className='footer'>
                <div className="container footer-details">
                    <div className='footer-about'>
                        <Link to='/'>
                            <img src="https://i.ibb.co/8XhzrKT/tools-terminal-logo2.png" alt="" />
                        </Link>
                        <p>Tools Terminal is world class tools manufacturing company. It's well known industry in the world.</p>
                    </div>

                    <div>
                        <h5>Information</h5>
                        <div className="footer-links">
                            <Link to='/'>About Us</Link>
                            <Link to='/'>Delivery</Link>
                            <Link to='/'>Privacy Policy</Link>
                            <Link to='/'>Inventory</Link>
                            <Link to='/'>Condition</Link>
                        </div>
                    </div>

                    <div>
                        <h5>Quick Links</h5>
                        <div className="footer-links">
                            <Link to='/'>Home</Link>
                            <Link to='/about'>About</Link>
                            <Link to='/blog'>Blog</Link>
                        </div>
                    </div>

                    <div>
                        <h5>Account</h5>
                        <div className="footer-links">
                            <Link to='/'>My Account</Link>
                            <Link to='/'>Wishlist</Link>
                            <Link to='/'>My Orders</Link>
                            <Link to='/'>Returns</Link>
                            <Link to='/'>Shipping</Link>
                        </div>
                    </div>

                    <div>
                        <h5>Contact Us</h5>
                        <div className="footer-links">
                            <p style={{ color: '#FFB700', fontSize: '24px', fontWeight: '600' }}>
                                <FontAwesomeIcon style={{ marginRight: '15px' }} icon={faPhone} />
                                0123 456 789</p>
                            <p>Monday - Friday: 9:00 - 20:00 <br />
                                Saturday: 10:00 - 15:00</p>
                            <div className='social-icon'>
                                <button>
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </button>
                                <button>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </button>
                                <button>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='footer2'>
                <div className='container footer2-info'>
                    <img src="https://i.ibb.co/pr6Bv45/payments.png" alt="" />
                    <p>© Copyright {year} Tools Terminal || All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;