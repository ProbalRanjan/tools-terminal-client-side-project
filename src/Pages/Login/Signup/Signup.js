import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import SignUpImg from '../../../Assets/images/Login/signup-user.png';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import 'react-toastify/dist/ReactToastify.css';
import { Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import useToken from '../../../hooks/useToken/useToken';

const Signup = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [token] = useToken(user);

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data?.email, data?.password);
        await updateProfile({ displayName: data?.name });
    }

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
            toast.success("Signup Successfully");
        }
    }, [token, navigate, from, user])

    if (loading || updating) {
        return <Loading></Loading>;
    }

    let signInError;
    if (error || updateError) {
        signInError = <p style={{ color: "#F25C05" }}>{error?.message || updateError?.message}</p>;
    }

    return (
        <div className='container section-container'>
            <div className='grid-container'>
                <div className='login-img'>
                    <img src={SignUpImg} alt="" />
                </div>

                <div className='login-form'>
                    <h4>Sign Up</h4>

                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Your name"
                                className='input-field'
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            {errors?.name?.type === 'required' && <span style={{ color: "#f25c05" }}>{errors.name.message}</span>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                className='input-field'
                                {...register("email", {
                                    required: {
                                        value: true,
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    }
                                })}
                            />
                            {errors?.email?.type === 'required' && <span style={{ color: "#f25c05" }}>Email is Required</span>}
                            {errors?.email?.type === 'pattern' && <span style={{ color: "#f25c05" }}>Provide a valid Email</span>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                className='input-field'
                                {...register("password", {
                                    required: {
                                        value: true,
                                    },
                                    minLength: {
                                        value: 6,
                                    }
                                })}
                            />
                            {errors?.password?.type === 'required' && <span style={{ color: "#f25c05" }}>Password is Required</span>}
                            {errors?.password?.type === 'minLength' && <span style={{ color: "#f25c05" }}>Must be 6 characters or longer</span>}
                        </Form.Group>

                        {signInError}

                        <button className='primary-button-lg'>Sign Up</button>
                    </Form>

                    <p className='alternative' style={{ marginBottom: "0" }}>OR</p>

                    <SocialLogin></SocialLogin>

                    <p className='login-toggle'>Have an account?<Link to='/login'> Login</Link></p>

                </div>
            </div>
        </div>
    );
};

export default Signup;