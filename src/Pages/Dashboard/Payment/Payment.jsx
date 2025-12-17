// import React from "react";
// import { useParams } from "react-router";
// import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
// import { useQuery } from "@tanstack/react-query";
// import {
//   FaCheckCircle,
//   FaCreditCard,
//   FaMoneyBillWave,
//   FaShoppingCart,
//   FaUtensils,
// } from "react-icons/fa";

// const Payment = () => {
//   const { foodId } = useParams();
//   const axiosSecure = UseAxiosSecure();
//   const { isLoading, data: orders } = useQuery({
//     queryKey: ["orders", foodId],
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/orders/food/${foodId}`);
//       return res.data;
//     },
//   });

//   const handlePayment = async () => {
//     const paymentInfo = {
//       cost: order.totalPrice,
//       foodId: order.foodId,
//       userEmail: order.userEmail,
//       mealName: order.mealName,
//     };
//     const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
//     console.log(res.data);
//     window.location.href = res.data.url;
//   };

//   if (isLoading) {
//     return (
//       <p className="text-center mt-10 text-lg font-semibold">
//         Loading meals...
//       </p>
//     );
//   }
//   if (!orders || orders.length === 0) {
//     return (
//       <p className="text-center mt-10 text-lg font-semibold">
//         No orders found for this food.
//       </p>
//     );
//   }

//   // Example: showing the first order
//   const order = orders[0];
//   return (
//     <div className=" flex  bg-gray-100 px-4">
//       <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-8 text-center">
//         <h1 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2">
//           <FaCreditCard className="text-green-500" /> Payment Details
//         </h1>

//         <div className="space-y-3 text-gray-700 text-lg">
//           <p className="flex items-center justify-center gap-2">
//             <FaUtensils className="text-red-500" />
//             <span className="font-semibold">{order.mealName}</span>
//           </p>

//           <p className="flex items-center justify-center gap-2">
//             <FaMoneyBillWave className="text-green-600" />
//             Price: <span className="font-semibold">{order.price} BDT</span>
//           </p>

//           <p className="flex items-center justify-center gap-2">
//             <FaShoppingCart className="text-yellow-500" />
//             Quantity: <span className="font-semibold">{order.quantity}</span>
//           </p>

//           <p className="flex items-center justify-center gap-2 text-xl">
//             <FaMoneyBillWave className="text-purple-600" />
//             Total:{" "}
//             <span className="font-bold text-purple-700">
//               {order.totalPrice} BDT
//             </span>
//           </p>

//           <p className="flex items-center justify-center gap-2">
//             <FaCheckCircle className="text-blue-500" />
//             Status:{" "}
//             <span className="font-semibold capitalize">
//               {order.paymentStatus}
//             </span>
//           </p>
//         </div>
//         <h1>Please pay $ {order.totalPrice}</h1>
//         <button
//           onClick={handlePayment}
//           className=" font-bold px-8 py-3 rounded-xl bg-primary mt-5"
//         >
//           Pay
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Payment;

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
    try {
      const paymentInfo = {
        cost: order.totalPrice,
        foodId: order.foodId,
        orderId: order._id, // ✅ Send orderId
        userEmail: order.userEmail,
        mealName: order.mealName,
      };

      const res = await axiosSecure.post(
        "/create-checkout-session",
        paymentInfo
      );

      if (res.data.url) {
        window.location.href = res.data.url; // redirect to Stripe checkout
      }
    } catch (error) {
      console.error(error);
      alert("Payment initiation failed!");
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
