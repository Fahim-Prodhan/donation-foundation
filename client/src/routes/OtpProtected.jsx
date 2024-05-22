import React, { useContext } from 'react';
import useLogin from '../Hooks/useLogin';
import { AuthContext } from '../Context/AuthContext';
import { Navigate } from 'react-router-dom';
import useLogout from '../Hooks/useLogout';

const OtpProtected = ({ children }) => {

    const { loading } = useLogin();
    const { authUser } = useContext(AuthContext)
    const { logout } = useLogout()

    if (loading) {
        return <div className="flex justify-center"><span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span></div>
    }

    if(authUser && authUser.verified === false) {     
        return (
        <Navigate to='/otp'></Navigate>
        )
    }else{
        return children
    }

 
};

export default OtpProtected;