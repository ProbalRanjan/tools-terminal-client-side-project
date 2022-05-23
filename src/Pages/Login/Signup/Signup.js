import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import SignUpImg from '../../../Assets/images/Login/signup-user.png';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
    }

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    })

    if (loading || updating) {
        return <Loading></Loading>;
    }

    if (error || updateError) {
        return toast.error(error?.message || updateError?.message);
    }

    return (
        <div class="hero py-14">
            <div class="hero-content grid lg:grid-cols-2 grid-rows-1 lg:gap-14">
                <img src={SignUpImg} alt='' />
                <div class="card min-w-full bg-base-100 shadow-xl ">
                    <div class="card-body lg:px-28 lg:my-14">
                        <h2 className='text-xl lg:text-3xl font-semibold text-center pb-5'>Sign Up <span className='text-primary'>Tools Terminal</span></h2>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/* Input Name */}
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text font-medium lg:text-lg">Name</span>
                                </label>

                                <input type="text"
                                    placeholder="Your Name"
                                    class="input input-bordered"
                                    {...register("name",
                                        {
                                            required: true,
                                        })} />

                                <label class="label">
                                    {errors?.name?.type === 'required' && <span className="label-text-alt text-red-600 font-medium text-sm">{errors.name.message}</span>}
                                </label>
                            </div>

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
                            <div class="form-control pb-2">
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
                                            message: 'Password must be 5 characters or longer'
                                        }
                                    })}
                                />

                                <label class="label">
                                    {errors?.password?.type === 'required' && <span className="label-text-alt text-red-600 font-medium text-sm">{errors.password.message}</span>}
                                    {errors?.password?.type === 'pattern' && <span className="label-text-alt text-red-600 font-medium text-sm">{errors.password.message}</span>}
                                </label>
                            </div>

                            <input type="submit" value="Sign Up" className='bg-primary hover:bg-[#ffc533] w-full text-black rounded-lg py-3 text-center font-medium' />
                        </form>

                        <div class="divider py-4">Or login with</div>

                        <SocialLogin></SocialLogin>

                        <p class="font-medium pt-2">Already have an account? <span className='text-primary hover:text-neutral'><Link to='/login'>Login</Link></span></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;