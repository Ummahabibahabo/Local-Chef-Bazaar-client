import React from "react";
import { Link } from "react-router";

const PaymentCancelled = () => {
  return (
    <div>
      <h2>Payment is cancelled.Please try again</h2>
      <Link to="/dashboard/my-orders">
        <button className="font-bold px-8 py-3 rounded-xl bg-primary ">
          Try Again
        </button>
      </Link>
    </div>
  );
};

export default PaymentCancelled;
