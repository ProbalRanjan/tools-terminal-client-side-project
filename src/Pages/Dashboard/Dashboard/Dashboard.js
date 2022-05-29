import { faBoxesPacking, faBoxesStacked, faCartFlatbed, faGear, faPlus, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin/useAdmin';
import Loading from '../../Shared/Loading/Loading';
import './Dashboard.css';

const Dashboard = () => {


    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);

    if (loading || adminLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='container px-0'>
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 dashboard-bg">
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <h2 className="d-flex align-items-center pb-5 mb-md-0 me-md-auto text-black fw-bold">
                                <span className="fs-5 d-none d-sm-inline">Dashboard</span>
                            </h2>
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start sidebar-link" id="menu">

                                <li className="nav-item">
                                    <Link to='/dashboard' className="nav-link align-middle px-0">
                                        <FontAwesomeIcon icon={faUser} />
                                        <span className="ms-2 d-none d-sm-inline">My Profile</span>
                                    </Link>
                                </li>

                                {
                                    !admin && <>
                                        <li>
                                            <Link to='/dashboard/order' className="nav-link align-middle px-0">
                                                <FontAwesomeIcon icon={faBoxesPacking} />
                                                <span className="ms-2 d-none d-sm-inline">My Order</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/dashboard/addReview' className="nav-link align-middle px-0">
                                                <FontAwesomeIcon icon={faStar} />
                                                <span className="ms-2 d-none d-sm-inline">Add Review</span>
                                            </Link>
                                        </li>
                                    </>
                                }

                                {
                                    admin && <>
                                        <li>
                                            <Link to='/dashboard/allUsers' className="nav-link align-middle px-0">
                                                <FontAwesomeIcon icon={faGear} />
                                                <span className="ms-2 d-none d-sm-inline">Manage Users</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/dashboard/manageOrders' className="nav-link align-middle px-0">
                                                <FontAwesomeIcon icon={faCartFlatbed} />
                                                <span className="ms-2 d-none d-sm-inline">Manage Orders</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/dashboard/addProducts' className="nav-link align-middle px-0">
                                                <FontAwesomeIcon icon={faPlus} />
                                                <span className="ms-2 d-none d-sm-inline">Add Products</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/dashboard/manageProducts' className="nav-link align-middle px-0">
                                                <FontAwesomeIcon icon={faBoxesStacked} />
                                                <span className="ms-2 d-none d-sm-inline">Manage Products</span>
                                            </Link>
                                        </li>
                                    </>
                                }

                            </ul>
                        </div>
                    </div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;