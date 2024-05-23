/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate } from 'react-router-dom';
import useLogout from '../Hooks/useLogout';

const AdminProtected = ({ children }) => {

    const { authUser, loadingUser } = useContext(AuthContext);
    const { logout } = useLogout();
    console.log(authUser);

    // useEffect(() => {      
    //     if (!loadingUser && (!authUser || authUser.role !== 'admin')) {
    //         logout();
    //         location.reload()
    //     }
    // }, [loadingUser, authUser, logout]);

    if (loadingUser) {
        return (
            <div className="flex justify-center">
                <span className="loading loading-ring loading-xs"></span>
                <span className="loading loading-ring loading-sm"></span>
                <span className="loading loading-ring loading-md"></span>
                <span className="loading loading-ring loading-lg"></span>
            </div>
        );
    }

    if (authUser && authUser?.role === 'admin') {
        return children;
    } else {
        return (
            <div className='flex justify-center'>
                <div className="text-center p-6 bg-white ">
                    <h1 className="text-6xl font-bold text-red-500">403</h1>
                    <h2 className="text-2xl mt-4 text-gray-800">Forbidden</h2>
                    <p className="mt-2 text-gray-600">You don't have permission to access this resource.</p>
                    <a href="/" className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Go to Home
                    </a>
                </div>
            </div>
        );
    }
    // return children
};

export default AdminProtected;
