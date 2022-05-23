import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    const navMenu = <>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/about'>About</Link>
        </li>
        {
            user && <li><Link to='/dashboard'>Dashboard</Link></li>
        }
        <li>
            <Link to='/portfolio'>Portfolio</Link>
        </li>
        <li>
            <Link to='/blog'>Blog</Link>
        </li>
    </>

    return (
        <div className="navbar bg-accent py-4 lg:px-40 text-white">

            {/* Mobile Navbar */}
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        {navMenu}
                    </ul>
                </div>
                <Link className='w-24 lg:w-2/12' to='/'>
                    <img src="https://i.ibb.co/8XhzrKT/tools-terminal-logo2.png" alt="logo" />
                </Link>
            </div>

            {/* Desktop Navbar */}
            <div className='navbar-end'>
                <div className="hidden lg:flex lg:pr-3">
                    <ul className="menu menu-horizontal p-0">
                        {navMenu}
                    </ul>
                </div>

                {
                    !user ?
                        <Link to='/login'>
                            <button className="bg-primary hover:bg-[#ffc533] text-black rounded-lg text-center font-medium py-2 px-4">Login
                            </button>
                        </Link>
                        :
                        // Profile Avatar
                        <div className="dropdown dropdown-end text-black pr-3">
                            <label tabIndex="0" className="btn btn-ghost btn-circle avatar ring ring-primary">
                                <div className="w-10 rounded-full">
                                    {
                                        user.photoURL ? <img src={user.photoURL} alt='' />
                                            :
                                            <img src='https://i.ibb.co/FBnRSCK/user-img.png' alt='' />
                                    }
                                </div>
                            </label>

                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <h5>{user.displayName}</h5>
                                </li>
                                <li>
                                    <button onClick={handleSignOut} className='bg-neutral hover:bg-[#f57d37] text-white rounded-lg text-center font-medium py-2 px-4'>Sign Out</button>
                                </li>
                            </ul>
                        </div>
                }
            </div>
        </div>
    );
};

export default Header;