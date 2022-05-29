import React from 'react';
import { toast } from 'react-toastify';

const UsersTable = ({ user, refetch, index }) => {

    const { email, role } = user;

    // Handle to Create Admin 
    const makeAdmin = () => {

        fetch(`http://localhost:5000/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("Create an Admin Failed");
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success("Create an Admin Successfully");
                }
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role || 'user'}</td>
            <td>
                {
                    role !== 'admin' ? <button
                        onClick={() => makeAdmin(user.email)} className='primary-button'>Make</button>
                        :
                        <p className='fw-bold' style={{ color: '#FFB700' }}>Already Admin</p>
                }
            </td>
            {/* <td>
                        <button
                            className='accent-button'>
                            Remove
                        </button>
                    </td> */}
        </tr>
    );
};

export default UsersTable;