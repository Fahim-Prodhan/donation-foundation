import React, { useContext, useEffect, useState } from 'react';
import profileLogo from '../../assets/images/man.png'
import { AuthContext } from '../../Context/AuthContext';
import { format } from 'date-fns';
import axios from 'axios';

const MyProfile = () => {
    const { authUser } = useContext(AuthContext)
    const [payments, setPayments] = useState([])
    const [number, setNumber] = useState(10)
    useEffect(() => {
        axios.get(`/api/donate/payment-history/6654f3d4bcf4f017a4a13a7a`)
            .then(res => {
                setPayments(res.data)
            })
    }, [])
    return (
        <div className='mx-6'>
            <div className='text-center'>
                <img className='mx-auto mt-12' src={profileLogo} alt="" />
                <h1 className='mt-4 font-bold text-2xl'>Name: {authUser.firstName} {authUser.lastName}</h1>
                <h3 className='font-semibold'>Email: {authUser.email}</h3>
                <h3 className=''><span className='font-bold'>Edit:</span> <span><a className='text-blue-500' href="/change-password">Change Password</a></span></h3>
            </div>
            <div className='mt-12'>
                <h1 className='text-center text-2xl md:text-4xl font-bold mb-6'>My Donation History</h1>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Transaction Date</th>
                                <th>Transaction ID</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.slice(0,number).map((payment,index) =>
                                 <tr key={payment._id}>
                                    <th>{index+1}</th>
                                    <td>{authUser?.firstName} {authUser?.lastName}</td>
                                    <td>{payment?.createdAt ? format(new Date(payment.createdAt), 'dd-MM-yyyy') : ''}</td>
                                    <td>{payment?.paymentId}</td>
                                    <td>{payment?.amount} $</td>
                                    <td>{payment?.status}</td>
                                </tr>
                                )
                            }

                        </tbody>
                    </table>
                    <div className='text-center mt-6'>
                        {
                            number < payments.length && <button onClick={()=>setNumber(number+10)} className="btn btn-accent text-white">See More</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;