import React, { useContext } from 'react';
import useLogin from '../Hooks/useLogin';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const OtpProtected = ({ children }) => {

    const { loading } = useLogin();
    const { authUser } = useContext(AuthContext)

    if (loading) {
        return <div className="flex justify-center"><span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span></div>
    }

    if(authUser && authUser.verified === false) {
        return <Navigate to='/otp'></Navigate>
    }else{
        return children
    }

 
};

export default OtpProtected;