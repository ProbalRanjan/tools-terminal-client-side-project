import { faTrashCan, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Modal, Table } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import './ManageOrders.css';

const ManageOrders = () => {

    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Get all orders from multiple user
    const url = `http://localhost:5000/orders`
    const { data: orders, isLoading } = useQuery('order', () =>
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
                }
                return res.json()
            })
    );

    // Deliver Paid Orders
    const handleDeliver = id => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.upsertedCount) {
                    toast.success("Delivered Successful!")
                }
                // console.log(data);
            })
    }

    // Delete Unpaid Order
    const handleDelete = id => {
        const url = `http://localhost:5000/orders/${id}`
        fetch(url, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success("Deleted unpaid order!")
                }
                // console.log(data);
            })
    }

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
                            <th>Product</th>
                            <th>Customer</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order) =>
                                <tr key={order._id}>
                                    <>
                                        <td title={order.name}>{(order.name).slice(0, 22)}...</td>
                                        <td>{order.customerName}</td>
                                        <td>{order.inputQuantity}</td>
                                        <td>${order.totalPrice}</td>
                                        <td>{order.email}</td>
                                        <td>
                                            {
                                                order.paid ?
                                                    <p className='text-success fw-bold'>Paid</p>
                                                    :
                                                    <p className='text-danger fw-bold'>Unpaid</p>
                                            }
                                        </td>
                                        <td>
                                            {
                                                order.paid ?
                                                    <>
                                                        {
                                                            order.delivered ?
                                                                <p className='text-warning fw-bold'>Delivered</p>
                                                                :
                                                                <button onClick={() => handleDeliver(order._id)} className='primary-button'>
                                                                    <FontAwesomeIcon icon={faTruck} />
                                                                </button>
                                                        }
                                                    </>
                                                    :
                                                    <>
                                                        <button onClick={handleShow} className='accent-button'>
                                                            <FontAwesomeIcon icon={faTrashCan} />
                                                        </button>
                                                    </>
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
                                            <Modal.Title className='fw-bold text-danger'>Are you sure want to delete?</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            Once you delete a ordered product, it will also remove from customer's website.
                                        </Modal.Body>
                                        <Modal.Footer>

                                            <button onClick={handleClose} className='primary-button'>Close</button>

                                            <button onClick={() => handleDelete(order._id)} className='accent-button'>Confirm</button>

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

export default ManageOrders;