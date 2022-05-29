import React from 'react';
import { Table } from 'react-bootstrap';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import './ManageOrders.css';

const ManageOrders = () => {

    const url = `http://localhost:5000/order`
    const { data: orders, isLoading } = useQuery('order', () =>
        fetch(url, {
            method: 'GET',
            headers: {
                // authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            }
        })
            .then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='dashboard-table w-75'>
            <h2>Total Orders: {orders.length}</h2>
            <div>
                <Table responsive="sm">
                    <thead>
                        <tr>
                            {/* <th>Image</th> */}
                            <th>Product ID</th>
                            <th>Customer Name</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order) =>
                                <tr key={order._id}>

                                    <td>{order._id}</td>
                                    <td>{order.customerName}</td>
                                    <td>{order.inputQuantity}</td>
                                    <td>${order.totalPrice}</td>
                                    <td>${order.email}</td>
                                    <td>
                                        <button className='primary-button'>Pay</button>
                                    </td>
                                    <td>
                                        <button className='accent-button'>Cancel</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>

            </div>
        </div>
    );
};

export default ManageOrders;