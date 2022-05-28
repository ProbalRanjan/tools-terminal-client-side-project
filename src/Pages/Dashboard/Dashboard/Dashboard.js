import React from 'react';
import { Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin/useAdmin';
import './Dashboard.css';

const Dashboard = () => {


    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className='container section-container'>
            <div className='dashboard-container'>
                <div className='side-navbar'>
                    <Nav className="flex-column sidebar-link">
                        <Link to='/dashboard'>My Profile</Link>

                        {
                            !admin && <>
                                <Link to='/dashboard/order'>My Order</Link>
                                <Link to='/dashboard/addReview'>Add Review</Link>
                            </>
                        }

                        {
                            admin && <>
                                <Link to='/dashboard/allUsers'>Manage Users</Link>
                                <Link to='/dashboard/manageOrders'>Manage Orders</Link>
                                <Link to='/dashboard/addProducts'>Add Products</Link>
                                <Link to='/dashboard/manageProducts'>Manage Products</Link>
                            </>
                        }
                    </Nav>
                </div>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;