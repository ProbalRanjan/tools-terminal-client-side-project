import React, { useEffect, useState } from 'react';
import useReviews from '../../../../hooks/useReviews/useReviews';
import Loading from '../../../Shared/Loading/Loading';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {

    const [reviews] = useReviews();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (reviews.length > 0) {
            setLoading(false);
        }
    }, [reviews]);

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='container section-container'>
            <div className='section-header'>
                <h2>Testimonials</h2>
                <p>What clients says about us</p>
            </div>
            <div className='tools-container'>
                {
                    reviews.map(reviewOne => <Review
                        key={reviewOne._id}
                        reviewOne={reviewOne}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;