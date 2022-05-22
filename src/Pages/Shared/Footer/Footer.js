import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../../../Assets/icons/tools-terminal-logo2.png';
import logo3 from '../../../Assets/icons/payments1.png';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <div>
            <footer class="footer bg-accent text-white p-8 lg:px-40 lg:py-16">
                <div>
                    <Link className='w-24 lg:w-6/12' to='/'>
                        <img src={logo2} alt="logo" />
                    </Link>
                    <p className='text-xl'>Tools Terminal Ltd.</p>
                    <div className='grid'>
                        <span class="footer-title">Follow Us</span>
                        <div class="grid grid-flow-col gap-4">
                            <button>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </button>
                            <button>
                                <FontAwesomeIcon icon={faInstagram} />
                            </button>
                            <button>
                                <FontAwesomeIcon icon={faTwitter} />
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <span class="footer-title">Services</span>
                    <Link to='/' class="link link-hover">Branding</Link>
                    <Link to='/' class="link link-hover">Design</Link>
                    <Link to='/' class="link link-hover">Marketing</Link>
                    <Link to='/' class="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span class="footer-title">Quick Links</span>
                    <Link to='/' class="link link-hover">About us</Link>
                    <Link to='/' class="link link-hover">Contact</Link>
                    <Link to='/' class="link link-hover">Jobs</Link>
                    <Link to='/' class="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span class="footer-title">Newsletter</span>
                    <div class="form-control w-80">
                        <label class="label">
                            <span>Enter your email address</span>
                        </label>
                        <div class="relative">
                            <input type="text" placeholder="username@email.com" class="input input-bordered w-full pr-16" />
                            <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>

            <footer class="footer items-center p-8 bg-secondary text-white lg:px-40">
                <div class="items-center grid-flow-col">
                    <img src={logo3} alt="" />
                </div>
                <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <p>© Copyright {year} Tools Terminal || All Rights Reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;