import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import './Purchase.css';

const Purchase = () => {

    const [tool, setTool] = useState({});
    const { id } = useParams();
    const [user] = useAuthState(auth);

    useEffect(() => {
        const url = `http://localhost:5000/purchase/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data))

    }, [id])

    /* const handlePurchaseChange = event => {
        setPurchase(event.target.value)
    } */

    const handlePurchase = event => {
        event.preventDefault();
        const inputQuantity = parseInt(event.target.quantity.value);

        if (inputQuantity <= 0) {
            toast.error("Please set the quantity first")
        }

        if (inputQuantity < tool.minOrder) {
            return toast.error(`Order at least ${tool.minOrder} Quantity`)
        }

        if (inputQuantity > tool.quantity) {
            return toast.error(`Available Only ${tool.quantity} tools`)
        }

        if (inputQuantity >= tool.minOrder && inputQuantity <= tool.quantity) {
            const purchaseQuantity = (tool.quantity) - inputQuantity;
            const currentQuantity = { ...tool, quantity: purchaseQuantity }
            setTool(currentQuantity);
            toast('Thank Your for Purchase')
        }

    }


    return (
        <div className='container section-container'>
            {/* <h2>Hey! <span>{(user.displayName).split(" ")[0]}</span>, Here's your tool!!</h2> */}
            <div className='purchase-container'>
                <div className='purchase-details'>
                    <img src={tool.img} alt="" />
                    <div>
                        <h3>{tool.name}</h3>
                        <p>{tool.description}</p>
                        <p><span>Minimum Order: </span>{tool.minOrder}</p>
                        <p><span>Quantity: </span>{tool.quantity}</p>
                        <p><span>${tool.price}</span></p>
                    </div>
                </div>

                <div className='quantity-input'>

                    <Form onSubmit={handlePurchase}>
                        <Form.Group className="mb-3" controlId="formBasicQuantity">
                            <Form.Label>Your Quantity</Form.Label>
                            <Form.Control
                                type="number"
                                name='quantity'
                                className='input-field'
                                // placeholder={tool.minOrder}
                                required />
                        </Form.Group>

                        <button className='primary-button-lg'>Submit</button>
                    </Form>

                </div>
            </div>

            <div className='purchase-form'>
                <h2>Please fill the form to purchase</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            className='input-field'
                            placeholder={user.displayName}
                            value={user.displayName}
                            disabled />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            className='input-field'
                            placeholder={user.email}
                            value={user.email}
                            disabled />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Present Address</Form.Label>
                        <Form.Control type="text" className='input-field' placeholder="You Address" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" className='input-field' placeholder="+88 0123456789" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicShop">
                        <Form.Label>Shop Name</Form.Label>
                        <Form.Control type="text" className='input-field' placeholder="Enter your Shop Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicOrder">
                        <Form.Label>Shop Name</Form.Label>
                        <Form.Control type="text" className='input-field' placeholder="Enter your Shop Name" required />
                    </Form.Group>

                    <button className='primary-button-lg'>Submit</button>
                </Form>
            </div>

        </div>
    );
};

export default Purchase;