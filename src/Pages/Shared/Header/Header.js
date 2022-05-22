import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../../Assets/icons/tools-terminal-logo2.png';

const Header = () => {

    const navMenu = <>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/about'>About</Link>
        </li>
        <li>
            <Link to='/dashboard'>Dashboard</Link>
        </li>
        <li>
            <Link to='/portfolio'>Portfolio</Link>
        </li>
        <li>
            <Link to='/blog'>Blog</Link>
        </li>
    </>

    return (
        <div className="navbar bg-accent py-4 lg:px-40 text-white">
            <div className="navbar-start">

                {/* Mobile Navbar */}
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navMenu}
                    </ul>
                </div>
                <Link className='w-24 lg:w-2/12' to='/'>
                    <img src={logo1} alt="logo" />
                </Link>
            </div>

            {/* Desktop Navbar */}
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navMenu}
                </ul>
            </div>


            <div className='ml-4'>
                <div className="pl-16 lg:pl-0">
                    <Link to='/login'>Login</Link>
                </div>

                {/* Profile Avatar */}
                <div className="dropdown dropdown-end text-black">
                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar online">
                        <div className="w-10 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=33791" alt='' />
                        </div>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <h5>Profile</h5>
                        </li>
                        <li>
                            <button>Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;