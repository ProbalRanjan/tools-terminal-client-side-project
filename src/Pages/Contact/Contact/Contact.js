import React from 'react';
import { Form } from 'react-bootstrap';
import './Contact.css';
import ContactIng from '../../../Assets/images/Login/contact-us.png'

const Contact = () => {
    return (
        <div className='container section-container'>
            <div className='grid-container'>
                <div className='login-img'>
                    <img src={ContactIng} alt="" />
                </div>

                <div className='login-form'>
                    <h4>Contact Us</h4>

                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                className='input-field' />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Your email"
                                className='input-field' />
                        </Form.Group>

                        <Form.Select className='input-field my-3' aria-label="Default select example">
                            <option>Select your problem</option>
                            <option value="1">Purchase</option>
                            <option value="2">Order</option>
                            <option value="3">Custom</option>
                        </Form.Select>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea" rows={3}
                                type="text"
                                placeholder="Your Message"
                                className='input-field' />
                        </Form.Group>

                        <button className='primary-button-lg'>Submit</button>
                    </Form>

                </div>
            </div>
        </div>
    );
};

export default Contact;