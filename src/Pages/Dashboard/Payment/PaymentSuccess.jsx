import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const axiosSecure = UseAxiosSecure();

  const [paymentInfo, setPaymentInfo] = useState({
    transactionId: "",
    trackingId: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("paymentInfo");
    if (saved) {
      setPaymentInfo(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    if (!sessionId) return;

    axiosSecure
      .patch(`/payment-success?session_id=${sessionId}`)
      .then((res) => {
        const stored = JSON.parse(localStorage.getItem("paymentInfo") || "{}");

        const data = {
          transactionId: res.data?.transactionId || stored.transactionId || "",
          trackingId: res.data?.trackingId || stored.trackingId || "",
        };

        if (data.transactionId || data.trackingId) {
          setPaymentInfo(data);
          localStorage.setItem("paymentInfo", JSON.stringify(data));
        }
      });
  }, [sessionId, axiosSecure]);

  return (
    <div className="text-center mt-10">
      <h2 className="text-4xl font-bold text-green-600">Payment Successful</h2>

      {paymentInfo.transactionId && (
        <p>Your TransactionId: {paymentInfo.transactionId}</p>
      )}

      {paymentInfo.trackingId && (
        <p>Your TrackingId: {paymentInfo.trackingId}</p>
      )}
    </div>
  );
};

export default PaymentSuccess;
