import React from 'react';

const InvoiceCard = () => {
    return (
        <div className="max-w-sm bg-white shadow-md rounded-lg p-6 mx-auto">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold">Invoice</h2>
            </div>
            <div className="mb-6">
                <div className="mb-2">
                    <span className="font-bold">Transaction ID:</span> #123456789
                </div>
                <div className="mb-2">
                    <span className="font-bold">Date:</span> May 26, 2024
                </div>
                <div className="mb-2">
                    <span className="font-bold">Name:</span> John Doe
                </div>
                <div>
                    <span className="font-bold">Email:</span> johndoe@example.com
                </div>
            </div>
            <div className="text-center mb-6">
                <div className="text-xl font-bold">
                    <span className="font-bold">Amount Due:</span> $1,234.56
                </div>
            </div>
            <div className="text-center">
                <p>Thank you for your business!</p>
            </div>
        </div>
    );
};

export default InvoiceCard;