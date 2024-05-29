import React, { useContext } from 'react';
import profileLogo from '../../assets/images/man.png'
import { AuthContext } from '../../Context/AuthContext';

const MyProfile = () => {
    const { authUser } = useContext(AuthContext)
    return (
        <div className='mx-6'>
            <div className='text-center'>
                <img className='mx-auto mt-12' src={profileLogo} alt="" />
                <h1 className='mt-4 font-bold text-2xl'>Name: {authUser.firstName} {authUser.lastName}</h1>
                <h3 className='font-semibold'>Email: {authUser.email}</h3>
                <h3 className=''><span className='font-bold'>Edit:</span> <span><a className='text-blue-500' href="/change-password">Change Password</a></span></h3>
            </div>
            <div className='mt-12'>
                <h1 className='text-center text-2xl md:text-4xl font-bold'>My Donation History</h1>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;