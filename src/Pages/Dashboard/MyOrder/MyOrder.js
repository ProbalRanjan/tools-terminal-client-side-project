import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './MyOrder.css';

const MyOrder = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`,
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
        <div className='dashboard-table w-75'>
            <h2>My Total Order: {orders?.length}</h2>
            <div>
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) =>
                                <tr key={order._id}>
                                    <td>{index + 1}</td>
                                    <td>{order.name}</td>
                                    <td>{order.inputQuantity}</td>
                                    <td>${order.totalPrice}</td>
                                    <td className='status-btn'>
                                        {
                                            !order.paid ? <>
                                                <Link to={`/dashboard/payment/${order._id}`}>
                                                    <button className='primary-button btn-sm'>Pay</button>
                                                </Link>
                                                <button className='accent-button ms-3 btn-sm'>
                                                    <FontAwesomeIcon icon={faTrashCan} />
                                                </button>
                                            </> :
                                                <div>
                                                    <p>Paid</p>
                                                    <p><span className='fw-bold'>TransactionId:</span> {order.transactionId}</p>
                                                </div>
                                        }
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