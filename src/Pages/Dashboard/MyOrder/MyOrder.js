import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './MyOrder.css';

const MyOrder = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`https://pacific-garden-52745.herokuapp.com/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem();
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    setOrders(data);
                })
        }
    }, [navigate, user])

    return (
        <div>
            <h2>My Total Order: {orders?.length}</h2>
            <div>
                <Table responsive="sm">
                    <thead>
                        <tr>
                            {/* <th>Image</th> */}
                            <th>No.</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total Price</th>
                            <th>Pay Now</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) =>
                                <tr key={order._id}>
                                    {/* <td>
                                            <img src={order.img} alt="" />
                                        </td> */}
                                    <td>{index + 1}</td>
                                    <td>{order.name}</td>
                                    <td>{order.inputQuantity}</td>
                                    <td>${order.price}</td>
                                    <td>${order.totalPrice}</td>
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

export default MyOrder;