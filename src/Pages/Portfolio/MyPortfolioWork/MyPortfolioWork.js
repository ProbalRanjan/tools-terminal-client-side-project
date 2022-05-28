import React from 'react';
import './MyPortfolioWork.css'

const MyPortfolioWork = () => {

    const handleGrocHouse = () => {
        window.open("https://the-grocery-stock-project.web.app");
    };
    const handleDrone = () => {
        window.open("https://drone-squad.netlify.app");
    };
    const handleTour = () => {
        window.open("https://go-tour-project.web.app");
    };
    const handleKeyboard = () => {
        window.open("https://keyboard-bucket.netlify.app");
    };

    return (
        <div className='section-container section-header'>
            <h2>Some of My Work</h2>
            <div className='pt-4'>
                <div className="projects">
                    <div>
                        <img src="https://i.ibb.co/RvCz4XS/Groc-House-Project.png" alt="" />
                        <div className='project-site'>
                            <h3>GrocHouse Project</h3>
                            <button className='primary-button' onClick={handleGrocHouse}>View Website</button>
                        </div>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/nRcP8n2/Drone-Squad-Project.png" alt="" />
                        <div className='project-site'>
                            <h3>Drone Squad Project</h3>
                            <button className='primary-button' onClick={handleDrone}>View Website</button>
                        </div>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/g9TmSzN/Go-Tour-Project.png" alt="" />
                        <div className='project-site'>
                            <h3>Go Tour Project</h3>
                            <button className='primary-button' onClick={handleTour}>View Website</button>
                        </div>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/QQzdrGG/Key-Board-Bucket-Project.png" alt="" />
                        <div className='project-site'>
                            <h3>KeyBoard Bucket Project</h3>
                            <button className='primary-button' onClick={handleKeyboard}>View Website</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolioWork;