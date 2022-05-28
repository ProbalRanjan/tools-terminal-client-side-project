import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import useTools from '../../../hooks/useTools/useTools';
import Loading from '../../Shared/Loading/Loading';
import './ManageProducts.css';

const ManageProducts = () => {

    const [tools, setTools] = useTools();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (tools.length > 0) {
            setLoading(false);
        }
    })

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `http://localhost:5000/tools/${id}`
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                },
            })
                .then(res => res.json())
                .then(() => {
                    const remaining = tools.filter(tool => tool._id !== id)
                    setTools(remaining);
                    toast.success("Product Deleted")
                    // console.log(data)
                })
        }
    }

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2>Manage Products</h2>
            <p>Number of Product: {tools.length}</p>
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
                                    <td>{index + 1}</td>
                                    <td>
                                        <img src={tool.img} alt="" className='w-50' />
                                    </td>
                                    <td>{tool.name}</td>
                                    <td>{tool.quantity}</td>
                                    <td>{tool.minOrder}</td>
                                    <td>${tool.price}</td>
                                    <td>
                                        <button onClick={() => handleDelete(tool._id)} className='accent-button'>Delete</button>
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

export default ManageProducts;