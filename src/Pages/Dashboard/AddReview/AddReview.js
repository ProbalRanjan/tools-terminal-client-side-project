import React from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddReview = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);

    const defaultUserImg = "https://i.ibb.co/ykQWnbr/user-img.png";

    const onSubmit = data => {

        const url = 'http://localhost:5000/reviews';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    reset();
                    toast.success("Tanks for the review");
                }
                // console.log(data)
            })

    }

    return (
        <div className='dashboard-component'>
            <h2>Add a Review</h2>
            <div className='dashboard-form'>

                <Form onSubmit={handleSubmit(onSubmit)}>

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

                    <Form.Group className="mb-3" controlId="formBasicReview">
                        <Form.Label>Review</Form.Label>
                        <Form.Control as="textarea" rows={3}
                            type="text"
                            placeholder="Add review...."
                            className='input-field'
                            {...register("review", {
                                required: {
                                    value: true,
                                    message: 'Write minimum 10 characters'
                                }
                            })}
                        />
                        {errors?.review?.type === 'required' && <span style={{ color: "#f25c05" }}>{errors.review.message}</span>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicRating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                            type="number"
                            defaultValue={0}
                            className='input-field'
                            {...register("rating", {
                                min: {
                                    value: 1,
                                    message: "Please add rating more than 0"
                                },
                                max: {
                                    value: 5,
                                    message: "Can't rating more than 5"
                                },
                                valueAsNumber: true,
                            })}
                        />
                        {errors?.rating?.type === 'min' && <span style={{ color: "#f25c05" }}>{errors.rating.message}</span>}
                        {errors?.rating?.type === 'max' && <span style={{ color: "#f25c05" }}>{errors.rating.message}</span>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicUserImage">
                        <Form.Label>Your Image</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter image URL"
                            defaultValue={defaultUserImg}
                            className='input-field'
                            {...register("img", {
                                required: {
                                    value: true,
                                    message: 'Please set a image URL'
                                }
                            })}
                        />
                        {errors?.img?.type === 'required' && <span style={{ color: "#f25c05" }}>{errors.img.message}</span>}
                    </Form.Group>

                    <button className='primary-button-lg'>Add a Review</button>
                </Form>

            </div>
        </div>
    );
};

export default AddReview;