import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import './Skills.css';

const Skills = () => {
    return (
        <div className='section-container section-header'>
            <h2>Expertise and Tools</h2>
            <div className="skills-tools">
                <div className='skills'>
                    {/* <h3>Skills</h3> */}
                    <div className=''>
                        <h5>HTML5</h5>
                        <ProgressBar className="primary-progress-bar" animated now={90} />
                    </div>
                    <div className=''>
                        <h5>CCS3</h5>
                        <ProgressBar className="primary-progress-bar" animated now={85} />
                    </div>
                    <div className=''>
                        <h5>JavaScript</h5>
                        <ProgressBar className="primary-progress-bar" animated now={75} />
                    </div>
                    <div className=''>
                        <h5>ES6</h5>
                        <ProgressBar className="primary-progress-bar" animated now={75} />
                    </div>
                    <div className=''>
                        <h5>React</h5>
                        <ProgressBar className="primary-progress-bar" animated now={70} />
                    </div>
                    <div className=''>
                        <h5>Git / Github</h5>
                        <ProgressBar className="primary-progress-bar" animated now={80} />
                    </div>
                    <div className=''>
                        <h5>Bootstrap</h5>
                        <ProgressBar className="primary-progress-bar" animated now={85} />
                    </div>
                    <div className=''>
                        <h5>Tailwind</h5>
                        <ProgressBar className="primary-progress-bar" animated now={75} />
                    </div>
                </div>

                <div className="tools">
                    {/* <h3>Tools</h3> */}
                    <div className=''>
                        <h5>Node js</h5>
                        <ProgressBar className="primary-progress-bar" animated now={75} />
                    </div>
                    <div className=''>
                        <h5>Express js</h5>
                        <ProgressBar className="primary-progress-bar" animated now={70} />
                    </div>
                    <div className=''>
                        <h5>MongoDB</h5>
                        <ProgressBar className="primary-progress-bar" animated now={70} />
                    </div>
                    <div className=''>
                        <h5>React Router</h5>
                        <ProgressBar className="primary-progress-bar" animated now={85} />
                    </div>
                    <div className=''>
                        <h5>Firebase</h5>
                        <ProgressBar className="primary-progress-bar" animated now={85} />
                    </div>
                    <div className=''>
                        <h5>Netlify</h5>
                        <ProgressBar className="primary-progress-bar" animated now={80} />
                    </div>
                    <div className=''>
                        <h5>Heroku</h5>
                        <ProgressBar className="primary-progress-bar" animated now={75} />
                    </div>
                    <div className=''>
                        <h5>Figma</h5>
                        <ProgressBar className="primary-progress-bar" animated now={80} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;