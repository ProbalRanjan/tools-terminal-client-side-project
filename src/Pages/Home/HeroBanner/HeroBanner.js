import React from 'react';

const HeroBanner = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/hZ5bpL5/hero-banner-img.png" alt='' class="w-full lg:w-3/6" />
                <div>
                    <h1 class="text-5xl font-bold">
                        <span className='text-xl font-medium'>Welcome to <br /></span>
                        Tools Terminal
                    </h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Login</button>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;