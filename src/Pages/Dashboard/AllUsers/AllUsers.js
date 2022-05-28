import React from 'react';
import { useQuery } from 'react-query';
import './AllUsers.css';
import Loading from '../../Shared/Loading/Loading'
import { Table } from 'react-bootstrap';

const AllUsers = () => {

    const { data, isLoading } = useQuery('users', () =>
        fetch('http://localhost:5000/user', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            }
        })
            .then(res => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1>All Users</h1>

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
                            data?.map((d, index) =>
                                <tr key={d._id}>
                                    <td>{index + 1}</td>
                                    <td>{d.email}</td>
                                    <td>Role</td>
                                    <td>
                                        <button className='primary-button'>Make</button>
                                    </td>
                                    <td>
                                        <button className='accent-button'>Remove</button>
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

export default AllUsers;