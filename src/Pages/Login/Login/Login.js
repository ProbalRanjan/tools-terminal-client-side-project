import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import SignInImg from '../../../Assets/images/Login/login-user.png';
import './Login.css';
import { Form } from 'react-bootstrap';

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.form?.pathname || "/";

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    })

    if (loading) {
        return <Loading />
    }

    if (error) {
        return toast.error(error?.message)
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };

    return (
        <div className='container section-container'>
            <div className='grid-container'>
                <div className='login-img'>
                    <img src={SignInImg} alt="" />
                </div>

                <div className='login-form'>
                    <h4>Login</h4>

                    <Form onSubmit={handleSubmit(onSubmit)}>
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
                                required
                            />
                            {errors.email?.type === 'required' && <span style={{ color: "#f25c05" }}>Email is Required</span>}
                            {errors.email?.type === 'pattern' && <span style={{ color: "#f25c05" }}>Provide a valid Email</span>}
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
                                required
                            />
                            {errors.password?.type === 'required' && <span style={{ color: "#f25c05" }}>Password is Required</span>}
                            {errors.password?.type === 'minLength' && <span style={{ color: "#f25c05" }}>Must be 6 characters or longer</span>}
                        </Form.Group>

                        <Link to='/resetPass'>
                            <button className='link-button'>
                                <p>Forget Password?</p>
                            </button>
                        </Link>


                        <button className='primary-button-lg'>Login</button>
                    </Form>

                    <p className='alternative' style={{ marginBottom: "0" }}>OR</p>

                    <SocialLogin></SocialLogin>

                    <p className='login-toggle'>Don't have an account?<Link to='/signup'> Sign Up</Link></p>

                </div>
            </div>
        </div>
    );
};

export default Login;