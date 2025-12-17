import React from "react";
import { useParams } from "react-router";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import {
  FaCreditCard,
  FaMoneyBillWave,
  FaShoppingCart,
  FaUtensils,
} from "react-icons/fa";

const Payment = () => {
  const { foodId } = useParams();
  const axiosSecure = UseAxiosSecure();

  // Fetch the order by foodId
  const { isLoading, data: orders } = useQuery({
    queryKey: ["orders", foodId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/orders/food/${foodId}`);
      return res.data;
    },
  });

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (!orders || orders.length === 0)
    return <p className="text-center mt-10">No orders found</p>;

  const order = orders[0];

  // Handle Stripe Payment
  const handlePayment = async () => {
    const paymentInfo = {
      cost: order.totalPrice,
      foodId: order.foodId,
      orderId: order._id,
      userEmail: order.userEmail,
      mealName: order.mealName,
    };

    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
    console.log(res.data);

    if (res.data.url) {
      window.location.href = res.data.url;
    }
  };

  return (
    <div className="flex bg-gray-100 px-4 min-h-screen items-center justify-center">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-8 text-center">
        <h1 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2">
          <FaCreditCard className="text-green-500" /> Payment Details
        </h1>

        <div className="flex flex-col gap-4 mb-4 text-gray-700">
          <p className="flex items-center gap-2">
            <FaUtensils className="text-red-500" /> Meal: {order.mealName}
          </p>
          <p className="flex items-center gap-2">
            <FaShoppingCart className="text-yellow-500" /> Quantity:{" "}
            {order.quantity}
          </p>
          <p className="flex items-center gap-2">
            <FaMoneyBillWave className="text-purple-500" /> Total:{" "}
            <span className="font-bold">{order.totalPrice} BDT</span>
          </p>
        </div>

        <button
          onClick={handlePayment}
          className="font-bold px-8 py-3 rounded-xl bg-primary mt-5 hover:bg-green-600 transition text-black"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Payment;
