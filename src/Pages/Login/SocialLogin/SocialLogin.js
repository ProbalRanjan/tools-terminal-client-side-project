import React, { useEffect } from 'react';
import './SocialLogin.css';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import GoogleLogo from '../../../Assets/icons/google.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useToken from '../../../hooks/useToken/useToken';

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

    const [token] = useToken(user);

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, navigate, from, user])

    if (loading) {
        return <Loading />
    }

    if (error) {
        return toast(error.message)
    }

    return (
        <div>
            <div className='social-login'>
                <button onClick={() => signInWithGoogle()}>
                    <img src={GoogleLogo} alt="google" />
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;