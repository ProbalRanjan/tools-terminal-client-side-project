import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

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
            <div class="hero-content grid lg:grid-cols-2 grid-rows-1 gap-4">
                <img src="https://i.ibb.co/Gn7T9Nb/404-page.png" alt='' class="w-" />
                <div class="card min-w-full bg-base-100 shadow-xl ">
                    <div class="card-body text-center lg:px-28 lg:my-16">
                        <h2 className='text-2xl font-semibold text-primary'>Login</h2>

                        <SocialLogin></SocialLogin>

                        <div class="divider">OR</div>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/* Input Email */}
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text font-medium">Email Address</span>
                                </label>
                                <input
                                    type="text"
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
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>

                            {/* Input PassWord */}
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text font-medium">Password</span>
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
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>

                            <input type="submit" value="Login" className='btn btn-primary w-full' />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;