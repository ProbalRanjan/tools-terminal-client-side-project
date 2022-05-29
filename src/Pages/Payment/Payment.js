import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';

const Payment = () => {

    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`

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
        <div className='container'>
            <h1>Payment for {id}</h1>
            <h1>Payment for {order.name}</h1>
        </div>
    );
};

export default Payment;