import axios from 'axios';
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { Link } from 'react-router';
import { IoBagCheckOutline } from 'react-icons/io5';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    if (sessionId) {
      axios.post(`${import.meta.env.VITE_API_URL}/payment-success`, {
        sessionId,
      });
    }
  }, [sessionId]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center max-w-md">
        {/* Success Icon */}
        <IoBagCheckOutline className="w-16 h-16 text-green-500 mx-auto mb-4" />

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Payment Successful!
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. <br /> Your order is being processed.
        </p>

        {/* Button */}
        <Link
          to="/dashboard/my-orders"
          className="inline-block bg-lime-500 hover:bg-lime-600 text-white font-semibold py-2 px-5 rounded-lg transition-all"
        >
          Go to My Orders
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
