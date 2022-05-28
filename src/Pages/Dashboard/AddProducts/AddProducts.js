import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import './AddProducts.css';

const AddProducts = () => {


    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        const url = 'http://localhost:5000/tools';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    reset();
                    toast.success("Thank you for adding product");
                }
                else {
                    toast.error("Failed to add product");
                }
            })

    }

    return (
        <div className='dashboard-title'>
            <h2>Add a Product</h2>
            <div className='login-form my-4 w-75 d-block mx-auto'>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="formBasicProductName">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Put the product name"
                            className='input-field'
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Product Name is Required'
                                }
                            })}
                        />
                        {errors?.name?.type === 'required' && <span style={{ color: "#f25c05" }}>{errors.name.message}</span>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicImageURL">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter image URL"
                            className='input-field'
                            {...register("img", {
                                required: {
                                    value: true,
                                    message: 'Need a image URL'
                                }
                            })}
                        />
                        {errors?.img?.type === 'required' && <span style={{ color: "#f25c05" }}>{errors.img.message}</span>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={4}
                            type="text"
                            placeholder="Write Description...."
                            className='input-field'
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: 'Write minimum 10 characters'
                                },
                                maxLength: {
                                    value: 300,
                                    message: 'Not more 300 characters'
                                }
                            })}
                        />
                        {errors?.description?.type === 'required' && <span style={{ color: "#f25c05" }}>{errors.description.message}</span>}
                        {errors?.description?.type === 'minLength' && <span style={{ color: "#f25c05" }}>{errors.description.message}</span>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicMinimumOrder">
                        <Form.Label>Minimum Order</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Minimum order quantity"
                            className='input-field'
                            {...register("minOrder", {
                                required: {
                                    value: true,
                                    message: 'Minimum order is required'
                                },
                                valueAsNumber: true,
                            })}
                        />
                        {errors?.minOrder?.type === 'required' && <span style={{ color: "#f25c05" }}>{errors.minOrder.message}</span>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicProductQuantity">
                        <Form.Label>Product Quantity</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Product's Quantity"
                            className='input-field'
                            {...register("quantity", {
                                required: {
                                    value: true,
                                    message: 'Quantity is required'
                                },
                                valueAsNumber: true,
                            })}
                        />
                        {errors?.quantity?.type === 'required' && <span style={{ color: "#f25c05" }}>{errors.quantity.message}</span>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Product's Price"
                            className='input-field'
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: 'Price is required'
                                },
                                valueAsNumber: true,
                            })}
                        />
                        {errors?.price?.type === 'required' && <span style={{ color: "#f25c05" }}>{errors.price.message}</span>}
                    </Form.Group>

                    <button className='primary-button-lg'>Add Product</button>
                </Form>

            </div>
        </div>
    );
};

export default AddProducts;