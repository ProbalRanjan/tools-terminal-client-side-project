import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading'

const SocialLogin = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";

    const [
        signInWithGoogle,
        user,
        loading,
        error
    ] = useSignInWithGoogle(auth);

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    })

    if (loading) {
        return <Loading />
    }

    if (error) {
        return toast(error?.message)
    }

    return (
        <div className='bg-[#4081EC] hover:bg-[#3A63BE] w-full text-white rounded-lg py-3'>
            <button onClick={() => signInWithGoogle()}>
                <FontAwesomeIcon className='pr-4' icon={faGoogle} />
                Sign in with Google
            </button>
        </div>
    );
};

export default SocialLogin;