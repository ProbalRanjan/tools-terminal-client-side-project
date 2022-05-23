import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import './ResetPassword.css';

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
        <div className='container section-container'>
            <div className='password-reset'>
                <div>
                    <h4>Forget Your Password</h4>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            className='input-field'
                            onBlur={handleEmailBlur}
                            required
                        />
                    </Form.Group>
                    <button onClick={handleResetPass} className='primary-button-lg'>Reset Password</button>
                </div>
                <Link to='/login'>
                    <button className='link-button2'>
                        <p>Go back to the sign in page</p>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ResetPassword;