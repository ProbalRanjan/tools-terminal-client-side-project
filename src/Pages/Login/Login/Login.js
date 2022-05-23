import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import SignInImg from '../../../Assets/images/Login/login-user.png';

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
        <div class="hero py-14">
            <div class="hero-content grid lg:grid-cols-2 grid-rows-1 lg:gap-14">
                <img src={SignInImg} alt='' />
                <div class="card min-w-full bg-base-100 shadow-xl ">
                    <div class="card-body lg:px-28 lg:my-14">
                        <h2 className='text-xl lg:text-3xl font-semibold text-center pb-5'>Login to <span className='text-primary'>Tools Terminal</span></h2>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/* Input Email */}
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text font-medium lg:text-lg">Email Address</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="username@email.com"
                                    class="input input-bordered"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Please fill out this field!'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Email is not validate!'
                                        }
                                    })}
                                />

                                <label class="label">
                                    {errors?.email?.type === 'required' && <span className="label-text-alt text-red-600 font-medium text-sm">{errors.email.message}</span>}
                                    {errors?.email?.type === 'pattern' && <span className="label-text-alt text-red-600 font-medium text-sm">{errors.email.message}</span>}
                                </label>
                            </div>

                            {/* Input PassWord */}
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text font-medium lg:text-lg">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="••••••••••"
                                    class="input input-bordered"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Please fill out this field!'
                                        },
                                        pattern: {
                                            value: 5,
                                            message: 'Password must be 6 characters or longer'
                                        }
                                    })}
                                />

                                <label class="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-600 font-medium text-sm">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600 font-medium text-sm">{errors.email.message}</span>}
                                </label>
                            </div>

                            <Link to='/resetPass'>
                                <button className='text-primary font-medium pb-4 float-right hover:text-neutral'>
                                    <p>Forget Password?</p>
                                </button>
                            </Link>

                            <input type="submit" value="Login" className='bg-primary hover:bg-[#ffc533] w-full text-black rounded-lg py-3 text-center font-medium' />
                        </form>

                        <div class="divider py-4">Or login with</div>

                        <SocialLogin></SocialLogin>

                        <p class="font-medium pt-2">Don't have account? <span className='text-primary hover:text-neutral'><Link to='/signup'>Signup Now</Link></span></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;