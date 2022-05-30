import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import './Payment.css';

const stripePromise = loadStripe('pk_test_51L4nasGUnCcTF64usPVhqkBGxn22iMcyW2VRBOaBfp2FYKTO0UstvrHGF4YUCGmp4nAwqByv2L1nkiUuzNun2C3V00GKpnw4gN');

const Payment = () => {

    const { id } = useParams();
    const [user] = useAuthState(auth);
    const url = `https://pacific-garden-52745.herokuapp.com/order/${id}`

    const { data: order, isLoading } = useQuery('order', () =>
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            }
        })
            .then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='dashboard-component w-75'>
            <h2>Payment</h2>
            <div className='dashboard-form mb-4'>
                <h4>Hello, {(user.displayName).split(" ")[0]}</h4>
                <p><span className='fw-bold'>Your Product:</span> {(order.name)}</p>
                <p><span className='fw-bold'>Quantity:</span> {order.inputQuantity}</p>
                <p><span className='fw-bold'>Total Price:</span> {order.totalPrice}</p>
            </div>
            <div className='dashboard-form mb-4'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm order={order} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;