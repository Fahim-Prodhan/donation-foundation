import React, { useState } from 'react';
import axios from 'axios';
import logo from '../../assets/images/Logo-FUNDAPROTAN.png';
import toast from 'react-hot-toast';
import useLogout from '../../Hooks/useLogout';

const OtpPage = () => {
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');
    const { logout } = useLogout()


    const handleVerifyOTP = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/verify-otp', { otp });
            if (response.data.error) {
                throw new Error(response.data.error);
            }
            toast.success('OTP verified! Please login you account');
            setTimeout(() => {
                logout()
                // Redirect to login page
                window.location.href = '/login';
            }, 2800);
        } catch (error) {
            // Handle error
            setError(error.message);
        }
    };

    return (
        <div className='max-w-sm px-6 md:max-w-3xl md:px-8 lg:max-w-7xl mx-auto lg:mt-12'>
            <div className='flex justify-center'>
                <div className="lg:py-0 py-4">
                    <div className='flex justify-center my-1'>
                        <img className='w-32' src={logo} alt="" />
                    </div>
                    <div className='space-y-3' >
                        <h1 className='font-bold text-xl md:text-3xl lg:text-4xl text-center'>Reset Your Account Password</h1>
                    </div>
                    <form onSubmit={handleVerifyOTP}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">OTP</span>
                            </label>
                            <input type="text" placeholder="OTP" className="input input-bordered rounded-md" value={otp} onChange={(e) => setOtp(e.target.value)} required />
                        </div>
                        {error && <div className="text-red-500">{error}</div>}
                        <div className='text-center mt-4'>
                            <button type="submit" className="btn bg-[#FDDE55]">Confirm</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OtpPage;
