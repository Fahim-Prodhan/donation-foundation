import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SubscriptionConfirm = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const preapprovalId = query.get("preapproval_id");
    const [fetched, setFetched] = useState(false);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchSuccessData = () => {
            fetch("/api/subscription/confirm-subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ preapprovalId }),
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

    }, [fetched, preapprovalId]);

    return (
        <div>
            <h2>Subscription Complete</h2>
            {/* Additional content as needed */}
        </div>
    );
};

export default SubscriptionConfirm;