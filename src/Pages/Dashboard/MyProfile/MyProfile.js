import React from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import './MyProfile.css';

const MyProfile = () => {

    const [user, loading] = useAuthState(auth);
    const [updateProfile, updating] = useUpdateProfile(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const defaultUserImg = "https://i.ibb.co/ykQWnbr/user-img.png";

    // Get user info
    const email = user?.email;
    const url = `http://localhost:5000/user/${email}`;
    const { data, isLoading } = useQuery('user', () =>
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            }
        })
            .then(res => res.json())
    );

    // Update User Profile
    const onSubmit = async data => {
        await updateProfile({ displayName: data.name });

        const updateUser = {
            address: data.address,
            education: data.education,
            linkedinLink: data.linkedinLink,
            phoneNumber: data.phoneNumber,
        }

        if (email) {
            const url = `http://localhost:5000/user/${email}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(updateUser),
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    toast.success('Update your profile successfully');
                    reset();
                })
        }
    }

    if (loading || isLoading || updating) {
        return <Loading></Loading>
    }

    return (
        <div className='dashboard-component'>
            <h2 className=''>My Profile</h2>
            <div className='py-2 py-lg-3'>
                <div className='dashboard-profile'>
                    <img src={user?.photoURL || defaultUserImg} alt="" />
                    <h4 className='fw-bold pt-3 pt-lg-0'>{data?.name || user?.displayName}</h4>
                    <p className='mb-0'><span className='fw-bold'>Email:</span> {user?.email}</p>
                    <p className='mb-0 fw-bold' style={{ color: '#FFB700' }}>{data?.role || "Customer"}</p>
                </div>
            </div>

            {/* Update Profile form */}
            <div className='dashboard-form'>
                <Form onSubmit={handleSubmit(onSubmit)}>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                            type="text"
                            className='input-field'
                            defaultValue={user?.displayName}
                            {...register("name")}
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
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Your Address"
                            className='input-field'
                            {...register("address", {
                                required: {
                                    value: true,
                                    message: "Address is required"
                                },
                            })}
                        />
                        {errors.address?.type === 'required' && <span style={{ color: "#f25c05" }}>{errors.address.message}</span>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEducation">
                        <Form.Label>Education</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Your Address"
                            className='input-field'
                            {...register("education", {
                                required: {
                                    value: true,
                                    message: "Education is required"
                                },
                            })}
                        />
                        {errors.education?.type === 'required' && <span style={{ color: "#f25c05" }}>{errors.education.message}</span>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="+88 012345678"
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
                    <Form.Group className="mb-3" controlId="formBasicLinkedIn">
                        <Form.Label>LinkedIn Profile Link</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Profile URL"
                            className='input-field'
                            {...register("linkedinLink", {
                                required: {
                                    value: true,
                                    message: "LinkedIn link is required"
                                },
                            })}
                        />
                        {errors.linkedinLink?.type === 'required' && <span style={{ color: "#f25c05" }}>{errors.linkedinLink.message}</span>}
                    </Form.Group>

                    <button className='primary-button-lg'>Update</button>
                </Form>
            </div>
        </div>
    );
};

export default MyProfile;