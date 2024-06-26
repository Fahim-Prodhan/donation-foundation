import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../../assets/images/6 Logo Verde.png'

function Success() {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const preferenceId = query.get("preference_id");
    const transactionId = query.get("payment_id");
    const [fetched, setFetched] = useState(false);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchSuccessData = () => {
            fetch("/api/pay/pay-success", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ preferenceId, transactionId }),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setFetched(true);
                });
        };

        if (!fetched) {
            const timeout = setTimeout(fetchSuccessData, 1000);
            return () => clearTimeout(timeout);
        }
        setLoading(false)

    }, [transactionId, fetched, preferenceId]);

    return (
        <div>
            <div className="flex items-center justify-center ">
                <div className=" p-8 rounded-lg  max-w-md flex flex-col justify-center items-center">
                    <img className="w-1/2 rounded-e-lg mb-4" src={logo} alt="" />
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Payment Successful</h2>
                    <p className="text-gray-600 text-center mb-6">Thank you for your Donation</p>
                    {
                    loading ?
                        <button className="btn btn-accent text-white flex justify-center items-center gap-4">Sending Invoice <span className="loading loading-spinner loading-md"></span></button> :
                        <Link to='/my-profile'><button className="btn btn-accent text-white">Done</button></Link>
                    }

                </div>
            </div>
        </div>
    );
}

export default Success;
