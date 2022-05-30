import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Modal, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './MyOrder.css';
import { toast } from 'react-toastify';

const MyOrder = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        if (user) {
            fetch(`https://pacific-garden-52745.herokuapp.com/order?email=${user.email}`, {
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
    }, [navigate, user]);

    // Delete ordered product
    const handleDeleteMyOrder = id => {
        const url = `https://pacific-garden-52745.herokuapp.com/order/${id}`
        fetch(url, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
            .then(res => res.json())
            .then(() => {
                const remaining = orders.filter(order => order._id !== id)
                setOrders(remaining);
                toast.success("Your Product Deleted");
                // console.log(data)
            });
    }

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
                                    <>

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
                                                    <button onClick={handleShow} className='accent-button ms-3 btn-sm'>
                                                        <FontAwesomeIcon icon={faTrashCan} />
                                                    </button>
                                                </> :
                                                    <div>
                                                        <p>Paid</p>
                                                        <p><span className='fw-bold'>TransactionId:</span> {order.transactionId}</p>
                                                    </div>
                                            }
                                        </td>
                                    </>

                                    {/* Modal */}
                                    <Modal
                                        show={show}
                                        onHide={handleClose}
                                        backdrop="static"
                                        keyboard={false}>
                                        <Modal.Header closeButton>
                                            <Modal.Title className='fw-bold text-danger'>Are you sure to remove from cart?</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            Once you delete a product, you will not get it back.
                                        </Modal.Body>
                                        <Modal.Footer>

                                            <button onClick={handleClose} className='primary-button'>Close</button>

                                            <button onClick={() => handleDeleteMyOrder(order._id)} className='accent-button'>Confirm</button>

                                        </Modal.Footer>
                                    </Modal>

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