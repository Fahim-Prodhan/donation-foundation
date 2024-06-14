import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import logo from '../../assets/images/6 Logo Verde.png'
import Navbar from '../../components/navbar/Navbar';
// import Footer from '../../components/footer/Footer';

const Donate = () => {
  const { authUser } = useContext(AuthContext)
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  // console.log(amount);
  // console.log(authUser);
  const handleDonate = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      setError('Please enter a valid amount');
      return;
    }

    try {
      const order = {
        amount,
        firstName: authUser.firstName,
        lastName: authUser.lastName,
        email: authUser.email
      }

      const res = await fetch('/api/pay/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      });
      
      const data = await res.json();
      console.log(data);
      if (data.init_point) {
        window.location.href = data.init_point;
      }
    } catch (error) {
      console.log(error);
      setError('Please enter a valid amount');
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className='flex justify-center flex-col'>
      </div>
      <div className="max-w-md mx-6 md:mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md  my-12">
        <img className='w-[25%] mx-auto rounded-lg' src={logo} alt="" />
        <p className='text-center font-semibold py-4'>Join us in sowing the seeds of hope and prosperity. Your donation helps farmers cultivate not just their crops, but their futures</p>
        <h2 className="text-2xl font-semibold text-center mb-6">Donate</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">{success}</p>}
        <form onSubmit={handleDonate}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-bold">Amount $:</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              placeholder='please enter donation amount $'
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 text-[#fff] hover:bg-[#099c6b] bg-[#03C988] font-semibold rounded-lg "
          >
            Donate
          </button>
        </form>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Donate;
