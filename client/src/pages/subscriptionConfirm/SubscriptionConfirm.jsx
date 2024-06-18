import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SubscriptionConfirm = () => {
    const location = useLocation();
    useEffect(() => {
        // Example: Handle Mercado Pago response
        const queryParams = new URLSearchParams(location.search);
        const status = queryParams.get('status');

        if (status === 'approved') {
            alert('Subscription successfully completed!');
        } else if (status === 'pending') {
            alert('Subscription is pending.');
        } else if (status === 'failure') {
            alert('Subscription failed.');
        } else {
            alert('Unknown status.');
        }
    }, [location.search]);

    return (
        <div>
            <h2>Subscription Complete</h2>
            {/* Additional content as needed */}
        </div>
    );
};

export default SubscriptionConfirm;