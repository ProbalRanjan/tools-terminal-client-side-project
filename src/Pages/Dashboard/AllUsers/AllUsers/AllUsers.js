import React from 'react';
import { useQuery } from 'react-query';
import './AllUsers.css';
import Loading from '../../../Shared/Loading/Loading'
import { Table } from 'react-bootstrap';
import UsersTable from '../UsersTable/UsersTable';

const AllUsers = () => {

    const { data, isLoading, refetch } = useQuery('users', () =>
        fetch('https://pacific-garden-52745.herokuapp.com/users', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                return res.json();
            })
    );

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='dashboard-table w-75'>
            <h2>All Users: {data.length}</h2>
            <div>
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Make Admin</th>
                            {/* <th>Remove User</th> */}
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data?.map((user, index) =>
                                <UsersTable
                                    key={user._id}
                                    user={user}
                                    refetch={refetch}
                                    index={index}
                                ></UsersTable>)
                        }

                    </tbody>
                </Table>
            </div>

        </div>
    );
};

export default AllUsers;