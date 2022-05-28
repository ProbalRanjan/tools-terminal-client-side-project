import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
        navigate('/');
    }


    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky='top' className='header' variant="dark">
                <Container>
                    <Link to='/' className='site-logo'>
                        <img src="https://i.ibb.co/8XhzrKT/tools-terminal-logo2.png" alt="" />
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <div className='header-link'>
                                <Link to='/'>Home</Link>

                                {
                                    user && <>
                                        <Link to='/dashboard'>Dashboard</Link>
                                    </>
                                }

                                <Link to='/portfolio'>Portfolio</Link>
                                <Link to='/blog'>Blog</Link>
                                <Link to='/contact'>Contact</Link>

                                {
                                    user && <>
                                        <Link to='/' style={{ color: "#FFB700", fontWeight: "600" }}>{(user?.displayName)}</Link>
                                    </>
                                }

                                {
                                    !user ?
                                        <Link to='/login'>
                                            <button className='primary-button'>Login</button>
                                        </Link>
                                        :
                                        <Link to='/'>
                                            <button onClick={handleSignOut} className='accent-button'>Sign Out</button>
                                        </Link>
                                }
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;