import React from 'react';
import useReviews from '../../../hooks/useReviews/useReviews';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {

    const [reviews] = useReviews();

    return (
        <div className='container section-container'>
            <div className='section-header'>
                <h2>Testimonials</h2>
                <p>What clients says about us</p>
            </div>
            <div className='tools-container'>
                {
                    reviews.slice(0, 3).map(reviewOne => <Review
                        key={reviewOne._id}
                        reviewOne={reviewOne}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;