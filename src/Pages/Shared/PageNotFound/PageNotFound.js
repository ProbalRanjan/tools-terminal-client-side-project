import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div class="hero py-14">
            <div class="hero-content flex-col lg:flex-row gap-12">
                <img src="https://i.ibb.co/Gn7T9Nb/404-page.png" alt='' class="w-full lg:w-3/6" />
                <div>
                    <h1 class="text-5xl font-bold">OPPS! PAGE NOT FOUND</h1>
                    <p class="py-6">Sorry, the page you're looking for doesn't exist. Please go to the home page.</p>
                    <Link to='/'>
                        <button class="btn btn-primary">Get Back to Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;