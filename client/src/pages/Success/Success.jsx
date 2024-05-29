import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function Success() {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const transactionId = query.get("session_id");
    useEffect(() => {
        fetch("/api/donate/success", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ transactionId }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    }, [transactionId]);
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen ">
                <div className=" p-8 rounded-lg  max-w-md flex flex-col justify-center items-center">
                   
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Payment Successful</h2>
                    <p className="text-gray-600 text-center mb-6">Thank you for your Donate</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Success