import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate } from 'react-router-dom';
import useLogin from '../Hooks/useLogin';
import useLogout from '../Hooks/useLogout';

const AdminProtected = ({children}) => {
    const { loading } = useLogin();
    const { authUser } = useContext(AuthContext);
    const { logout } = useLogout();
    
    useEffect(() => {
        if (!loading && (!authUser || authUser.role !== 'admin')) {
            logout();
        }
    }, [loading, authUser, logout]);

    if (loading) {
        return (
            <div className="flex justify-center">
                <span className="loading loading-ring loading-xs"></span>
                <span className="loading loading-ring loading-sm"></span>
                <span className="loading loading-ring loading-md"></span>
                <span className="loading loading-ring loading-lg"></span>
            </div>
        );
    }

    if (authUser && authUser.role === 'admin') {
        return children;
    } else {
        return <Navigate to='/login' />;
    }
};

export default AdminProtected;
