import React from 'react';
import './Education.css';

const Education = () => {
    return (
        <div className='section-container section-header'>
            <h2>Educational Background</h2>
            <div className='education-background'>
                <div className='education'>
                    <h3>BBA</h3>
                    <h5>Govt. Shaheed Suhrawardy College (affiliated to the University of Dhaka)</h5>
                    <p>Accounting</p>
                </div>
                <div className='education'>
                    <h3>HSC</h3>
                    <h5>Dhaka City College</h5>
                    <p>Business Studies</p>
                </div>
                <div className='education'>
                    <h3>SSC</h3>
                    <h5>Dhaka Collegiate School, Dhaka</h5>
                    <p>Business Studies</p>
                </div>
            </div>
        </div>
    );
};

export default Education;