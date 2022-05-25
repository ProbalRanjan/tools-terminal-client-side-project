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
                        <img src="https://i.ibb.co/C0sJxMJ/screenshot-the-grocery-stock-project-web-app-2022-05-26-02-00-19.png" alt="" />
                        <h3>GrocHouse Project</h3>
                        <button className='primary-button' onClick={handleGrocHouse}>View Website</button>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/X4FbFFn/screenshot-drone-squad-netlify-app-2022-05-26-02-10-23.png" alt="" />
                        <h3>Drone Squad Project</h3>
                        <button className='primary-button' onClick={handleDrone}>View Website</button>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/Hty9w1n/screenshot-go-tour-project-web-app-2022-05-26-02-00-38.png" alt="" />
                        <h3>Go Tour Project</h3>
                        <button className='primary-button' onClick={handleTour}>View Website</button>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/Z2KNKrP/screenshot-keyboard-bucket-netlify-app-2022-05-26-02-01-00.png" alt="" />
                        <h3>KeyBoard Bucket Project</h3>
                        <button className='primary-button' onClick={handleKeyboard}>View Website</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolioWork;