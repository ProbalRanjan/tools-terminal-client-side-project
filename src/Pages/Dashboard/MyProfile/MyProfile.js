import React from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import './MyProfile.css';

const MyProfile = () => {

    const [user, loading] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)

    }

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='dashboard-title'>
            <h2 className=''>My Profile</h2>
            <div className='py-4 dashboard-profile'>
                <img src={user?.photoURL} alt="" />
                <div>
                    <h4 className='fw-bold'>{user?.displayName}</h4>
                    <p className='mb-0'>{user?.email}</p>
                </div>
            </div>
            <div className='login-form my-4 w-75 d-block mx-auto'>

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
                            className='input-field'
                            {...register("img")}
                            readOnly
                        />
                    </Form.Group>

                    <button className='primary-button-lg'>Add a Review</button>
                </Form>

            </div>
        </div>
    );
};

export default MyProfile;