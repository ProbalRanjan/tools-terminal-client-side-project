import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin/useAdmin';
import Loading from '../../Shared/Loading/Loading';

const RequireAdmin = ({ children }) => {

    const location = useLocation();
    const [
        user,
        loading
    ] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);

    if (loading || adminLoading) {
        return <Loading></Loading>
    }

    if (!user || !admin) {
        return [
            <Navigate to="/" state={{ from: location }} replace />,
            toast.warning('Warning! You are not an admin.')
        ]
    }

    return children;
};

export default RequireAdmin;