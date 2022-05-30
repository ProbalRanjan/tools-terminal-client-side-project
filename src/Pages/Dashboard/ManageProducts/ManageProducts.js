import React, { useEffect, useState } from 'react';
import { Modal, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import useTools from '../../../hooks/useTools/useTools';
import Loading from '../../Shared/Loading/Loading';
import './ManageProducts.css';

const ManageProducts = () => {

    const [tools, setTools] = useTools();
    const [loading, setLoading] = useState(true);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        if (tools.length > 0) {
            setLoading(false);
        }
    }, [tools])

    const handleUnpaidDelete = id => {
        const url = `https://pacific-garden-52745.herokuapp.com/tools/${id}`
        fetch(url, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
            .then(res => res.json())
            .then(() => {
                const remaining = tools.filter(tool => tool._id !== id)
                setTools(remaining);
                toast.success("Product Deleted");
                // console.log(data)
            })
    }

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='dashboard-table w-75'>
            <h2>Manage Products</h2>
            <p className='text-center fw-bold'>Number of Product: {tools.length}</p>
            <div>
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Min. Order</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools?.map((tool, index) =>
                                <tr key={tool._id}>
                                    <>
                                        <td>{index + 1}</td>
                                        <td>
                                            <img src={tool.img} alt="" className='w-100' />
                                        </td>
                                        <td>{tool.name}</td>
                                        <td>{tool.quantity}</td>
                                        <td>{tool.minOrder}</td>
                                        <td>${tool.price}</td>
                                        <td>
                                            <button onClick={handleShow} className='accent-button'>Delete</button>
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
                                            Once you delete a product, it will not appear in website and delete forever.
                                        </Modal.Body>
                                        <Modal.Footer>

                                            <button onClick={handleClose} className='primary-button'>Close</button>

                                            <button onClick={() => handleUnpaidDelete(tool._id)} className='accent-button'>Confirm</button>

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

export default ManageProducts;