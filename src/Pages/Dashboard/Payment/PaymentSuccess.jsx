// import React, { useEffect } from "react";
// import { useNavigate, useSearchParams } from "react-router";
// import UseAxiosSecure from "../../../hooks/UseAxiosSecure";

// const PaymentSuccess = () => {
//   const [searchParams] = useSearchParams();
//   const sessionId = searchParams.get("session_id");
//   const axiosSecure = UseAxiosSecure();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (sessionId) {
//       axiosSecure.patch(`/payment-success?session_id=${sessionId}`).then(() => {
//         navigate("/dashboard/my-orders");
//       });
//     }
//   }, [sessionId, axiosSecure, navigate]);

//   return (
//     <div className="text-center mt-10">
//       <h2 className="text-4xl font-bold text-green-600">Payment Successful</h2>
//       <p className="mt-2">Redirecting to My Orders...</p>
//     </div>
//   );
// };

// export default PaymentSuccess;
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const axiosSecure = UseAxiosSecure();
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionId) {
      axiosSecure.patch(`/payment-success?session_id=${sessionId}`).then(() => {
        navigate("/dashboard/my-orders");
      });
    }
  }, [sessionId, axiosSecure, navigate]);

  return (
    <div className="text-center mt-10">
      <h2 className="text-4xl font-bold text-green-600">Payment Successful</h2>
      <p className="mt-2">Redirecting to My Orders...</p>
    </div>
  );
};

export default PaymentSuccess;
