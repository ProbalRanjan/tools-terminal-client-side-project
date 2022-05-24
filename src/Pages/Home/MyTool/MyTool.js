import React from 'react';
import { Link } from 'react-router-dom';
import './MyTool.css';

const MyTool = ({ tool }) => {

    const { name, img, description, minOrder, quantity, price } = tool;

    return (
        <div className='tool-details'>
            <img src={img} alt="" />
            <div className='tool-info'>
                <h5 title={name}>{name.slice(0, 20)}...</h5>
                <p>{description.slice(0, 60)}...</p>
                <p><span>Minimum Order: </span>{minOrder}</p>
                <p><span>Quantity: </span>{quantity}</p>
                <p>${price}</p>
                <Link to='/purchase'>
                    <button className='primary-button-lg'>Purchase</button>
                </Link>
            </div>
        </div>
    );
};

export default MyTool;