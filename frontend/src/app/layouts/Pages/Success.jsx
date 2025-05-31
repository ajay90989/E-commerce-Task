import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react"; 

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [paymentId, setPaymentId] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.split("?")[1]);
    const id = params.get("payment_id");

    if (id) {
      setPaymentId(id);
      setShowPopup(true);

      const timeout = setTimeout(() => {
        setShowPopup(false);
        navigate("/");
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [location, navigate]);

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-green-100 via-white to-green-50 px-4">
      {showPopup && (
        <div className="bg-white border border-green-300 rounded-2xl shadow-xl p-8 max-w-lg w-full text-center animate-fade-in">
          <div className="flex justify-center mb-4">
            <CheckCircle className="text-green-600" size={64} />
          </div>
          <h2 className="text-2xl font-extrabold text-green-700">Payment Successful!</h2>
          <p className="mt-3 text-gray-700">Thank you for your purchase.</p>
          <p className="mt-2 text-sm text-gray-500">Your payment ID:</p>
          <code className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md mt-1 inline-block font-mono text-sm">
            {paymentId}
          </code>
          <p className="mt-4 text-gray-500 text-sm">You will be redirected shortly...</p>
        </div>
      )}
    </div>
  );
};

export default Success;
