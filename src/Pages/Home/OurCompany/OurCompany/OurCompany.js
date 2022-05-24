import { faGears, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './OurCompany.css';

const OurCompany = () => {
    return (
        <div className='container section-container company-container'>
            <div className='company-info'>
                <h2>Our Capabilities</h2>
                <p>We are always aiming to exceed customer expectations and provide creative solutions to meet any kind of demand. Keeping up with the emerging trends, market needs and combining them with our technical and creative expertise.</p>

                <div className='capability-container'>
                    <div className='d-flex align-items-center'>
                        <FontAwesomeIcon className='pe-3' style={{ color: '#FFB700' }} icon={faPeopleGroup} />
                        <h6><span>27,000</span> <br /> Working People</h6>
                    </div>
                    <div className='d-flex align-items-center'>
                        <FontAwesomeIcon className='pe-3' style={{ color: '#FFB700' }} icon={faGears} />
                        <h6><span>150</span> <br /> Advance Technology</h6>
                    </div>
                </div>

                <Link to='/'>
                    <button className='primary-button'>Learn More</button>
                </Link>
            </div>
            <img src="https://i.ibb.co/9GprLXf/our-company.jpg" alt="" />
        </div>
    );
};

export default OurCompany;