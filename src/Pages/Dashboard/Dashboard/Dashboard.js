import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {

    return (
        <div className='container section-container'>
            <div className='dashboard-container'>
                <div className='side-navbar'>
                    <Nav className="flex-column sidebar-link">
                        <Link to='/dashboard'>My Order</Link>
                        <Link to='/dashboard/addReview'>Add Review</Link>
                        <Link to='/dashboard/myProfile'>My Profile</Link>
                    </Nav>
                </div>
                <Outlet></Outlet>


            </div>
        </div>
    );
};

export default Dashboard;