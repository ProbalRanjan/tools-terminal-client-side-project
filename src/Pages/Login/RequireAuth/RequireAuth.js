import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {

    const location = useLocation();
    const [
        user,
        loading
    ] = useAuthState(auth);

    const [
        sendEmailVerification,
        sending
    ] = useSendEmailVerification(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!user.emailVerified) {
        return <div className='container my-5 email-verify'>
            <img src="https://i.ibb.co/YcQWchk/email-verify.png" alt="" />
            <h4>Please Verify your email to access the site!!</h4>
            <button className='global-button'
                onClick={
                    async () => {
                        await sendEmailVerification();
                        toast('Email Sent! Please check your mail!');
                    }}>Verify Email</button>
        </div>
    }

    return children;
};

export default RequireAuth;