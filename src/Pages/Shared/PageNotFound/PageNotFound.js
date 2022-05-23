import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <div className="container page-not-found">
            <img src="https://i.ibb.co/Gn7T9Nb/404-page.png" alt="" />
            <Card className='not-found-card'>
                <Card.Body>
                    <h3>Something Went Wrong!!</h3>
                    <Card.Text>
                        We are very sorry for inconvenience. It looks you're trying to access a page that either has been deleted or never been existed.
                    </Card.Text>
                    <Link to='/'>
                        <button className='accent-button'>Go to Home Page</button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default PageNotFound;