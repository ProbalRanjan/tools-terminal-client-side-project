import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import './Review.css';

const Review = ({ reviewOne }) => {

    const { name, review, rating, image } = reviewOne;

    return (
        <div className='review-details'>
            <img src={image} alt="" />
            <div className='tool-info'>
                <h5>{name}</h5>
                <p title={review}>{review.slice(0, 35)}...</p>
                <div className='d-flex fw-bold'>
                    <Rating
                        initialRating={rating}
                        emptySymbol={<FontAwesomeIcon icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon style={{ color: '#FFBF00' }} icon={faStar} />}
                        readonly
                    ></Rating>
                    <p className='ps-2' style={{ color: '#FFBF00' }}>{rating}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;