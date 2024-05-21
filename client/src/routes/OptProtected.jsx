import React, { useContext } from 'react';
import useLogin from '../Hooks/useLogin';
import { AuthContext } from '../Context/AuthContext';

const OptProtected = ({ children }) => {

    const { loading } = useLogin();
    const { authUser } = useContext(AuthContext)


    if (loading) {
        return <div className="flex justify-center"><span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span></div>
    }

    if(authUser && authUser)

        return (
            <div>

            </div>
        );
};

export default OptProtected;