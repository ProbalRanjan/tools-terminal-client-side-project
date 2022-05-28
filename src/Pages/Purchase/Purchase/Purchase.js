import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import './Purchase.css';

const Purchase = () => {

    const [product, setProduct] = useState({});
    const { id } = useParams();
    const [user, loading] = useAuthState(auth);
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        mode: "onChange"
    });

    // Destructuring Product
    const { _id, img, name, description, minOrder, quantity, price } = product;

    // Load single inventory
    useEffect(() => {
        const url = `http://localhost:5000/purchase/${id}`
        fetch(url, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            }
        })
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [id])

    // React Hook Form to place Order
    const onSubmit = data => {
        const inputQuantity = parseInt(data.quantity);
        const totalPrice = inputQuantity * price;
        const order = {
            customerName: data.name,
            email: data.email,
            address: data.address,
            phoneNumber: data.phoneNumber,
            _id,
            name,
            price,
            inputQuantity,
            totalPrice
        }
        // console.log(order)

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                toast.success("Order placed successfully")
            })

    }

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='container section-container'>

            <div className='product-details'>
                <img src={img} alt="" />
                <div>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <p><span>Minimum Order: </span>{minOrder}</p>
                    <p><span>Available: </span>{quantity}</p>
                    <p><span>Price: </span>${price}</p>
                </div>
            </div>

            <div className='section-container purchase-form'>
                <h2 className='text-center fw-bold py-4'>Please fill the form to tool</h2>

                <Form onSubmit={handleSubmit(onSubmit)}>

                    <Form.Group className="mb-3" controlId="formBasicQuantity">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Your Quantity"
                            className='input-field'
                            defaultValue={minOrder}
                            {...register("quantity", {
                                required: {
                                    value: true,
                                    message: "Please input your quantity"
                                },
                                min: {
                                    value: `${minOrder}`,
                                    message: `Al least ${minOrder} products can be purchased`
                                },
                                max: {
                                    value: `${quantity}`,
                                    message: `You can order only ${quantity} products`
                                }
                            })}

                        />
                        {errors.quantity?.type === 'required' && <span style={{ color: "#f25c05" }}>{errors.quantity.message}</span>}
                        {errors.quantity?.type === 'max' && <span style={{ color: "#f25c05" }}>{errors.quantity.message}</span>}
                        {errors.quantity?.type === 'min' && <span style={{ color: "#f25c05" }}>{errors.quantity.message}</span>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            className='input-field'
                            value={user?.displayName}
                            {...register("name")}
                            readOnly
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            className='input-field'
                            value={user?.email}
                            {...register("email")}
                            readOnly
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Present Address</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Your Address"
                            className='input-field'
                            {...register("address", {
                                required: {
                                    value: true,
                                    message: "Address is required"
                                },
                                /* pattern: {
                                    value: /(?=.*?[0-9])/,
                                    message: "Please input your house number"
                                } */
                            })}
                        />
                        {errors.address?.type === 'required' && <span style={{ color: "#f25c05" }}>{errors.address.message}</span>}
                        {/* {errors.address?.type === 'pattern' && <span style={{ color: "#f25c05" }}>{errors.address.message}</span>} */}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="+88 0123 456 789"
                            className='input-field'
                            {...register("phoneNumber", {
                                required: {
                                    value: true,
                                    message: "Phone Number is required"
                                },
                                minLength: {
                                    value: 11,
                                    message: "Please put 11 digit phone number"
                                },
                                maxLength: {
                                    value: 11,
                                    message: "Please input a valid phone number"
                                }
                            })}
                        />
                        {errors.phoneNumber?.type === 'required' && <span style={{ color: "#f25c05" }}>{errors.phoneNumber.message}</span>}
                        {errors.phoneNumber?.type === 'minLength' && <span style={{ color: "#f25c05" }}>{errors.phoneNumber.message}</span>}
                        {errors.phoneNumber?.type === 'maxLength' && <span style={{ color: "#f25c05" }}>{errors.phoneNumber.message}</span>}
                    </Form.Group>

                    <Button
                        variant="#FFB700"
                        type="submit"
                        className='primary-button-lg'
                        disabled={!isValid}
                    >
                        Order Now
                    </Button>

                </Form>
            </div>
        </div>
    );
};

export default Purchase;