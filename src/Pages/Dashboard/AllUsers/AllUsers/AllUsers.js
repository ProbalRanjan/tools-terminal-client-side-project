import React from 'react';
import { useQuery } from 'react-query';
import './AllUsers.css';
import Loading from '../../../Shared/Loading/Loading'
import { Table } from 'react-bootstrap';
import { toast } from 'react-toastify';

const AllUsers = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () =>
        fetch('http://localhost:5000/users', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            }
        })
            .then(res => res.json())
    );

    // Handle to Create Admin 
    const makeAdmin = email => {

        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                toast.success("Create Admin Successfully")
            })

    }


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1>All Users List</h1>

            <div>
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Make Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users?.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.email}</td>
                                    <td>{user.role || 'user'}</td>
                                    <td>
                                        {
                                            user.role !== 'admin' ? <button
                                                onClick={() => makeAdmin(user.email)} className='primary-button'>Make</button>
                                                :
                                                <p className='fw-bold' style={{ color: '#FFB700' }}>Already Admin</p>
                                        }
                                    </td>
                                    <td>
                                        <button
                                            className='accent-button'>
                                            Remove
                                        </button>
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </Table>
            </div>

        </div>
    );
};

export default AllUsers;