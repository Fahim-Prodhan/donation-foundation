import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const Donate = () => {
    const { authUser } = useContext(AuthContext)
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
    console.log(authUser);
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
            firstName:authUser.firstName,
            lastName:authUser.lastName,
            email:authUser.email
        }
        
        const res = await fetch('/api/donate/cheakout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        });
        const data = await res.json();
        console.log(data);
        if (data.session.url) {
            window.location.href = data.session.url;
        }
    } catch (error) {
        console.log(error);
        setError('Please enter a valid amount');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Donate</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      {success && <p className="text-green-500 text-center mb-4">{success}</p>}
      <form onSubmit={handleDonate}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
        >
          Donate
        </button>
      </form>
    </div>
  );
};

export default Donate;
