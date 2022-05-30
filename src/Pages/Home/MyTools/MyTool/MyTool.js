import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MyTool.css';

const MyTool = ({ tool }) => {

    const { _id, name, img, description, minOrder, quantity, price } = tool;
    const navigate = useNavigate();

    const handleToolsId = id => {
        navigate(`/purchase/${id}`);
    }

    return (
        <div className='tool-details'>
            <img src={img} alt="" />
            <div className='tool-info'>
                <h5 title={name}>{name.slice(0, 25)}...</h5>
                <p title={description}>{description.slice(0, 40)}...</p>
                <p><span>Minimum Order: </span>{minOrder}</p>
                <p><span>Stock: </span>{quantity}</p>
                <p><span>Price: </span>${price}/pc</p>
                <button className='primary-button-lg' onClick={() => handleToolsId(_id)}>Place Order</button>
            </div>
        </div>
    );
};

export default MyTool;