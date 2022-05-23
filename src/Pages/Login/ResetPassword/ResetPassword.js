import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const ResetPassword = () => {

    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handleResetPass = async () => {
        const inputEmail = email;
        if (inputEmail) {
            await sendPasswordResetEmail(email);
            return toast("Please check your email");
        }
    }

    if (sending) {
        return <Loading></Loading>
    }

    return (
        <div class="hero py-20">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h3 class="text-3xl font-bold">Forget your Password?</h3>
                    <form onClick={handleResetPass}>
                        <div class="form-control max-w-xs">
                            <label class="label">
                                <span class="label-text">Please, enter your email address</span>
                            </label>
                            <input
                                class="input input-bordered w-auto max-w-xs"
                                onBlur={handleEmailBlur}
                                type="email"
                                placeholder="Type here"
                                required
                            />
                            {/* <label class="label">
                                <span class="label-text-alt">Alt label</span>
                            </label> */}
                        </div>

                        <button className='bg-primary hover:bg-[#ffc533] text-black rounded-lg py-3 text-center font-medium w-full'>
                            <p>Continue to Reset Password</p>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;