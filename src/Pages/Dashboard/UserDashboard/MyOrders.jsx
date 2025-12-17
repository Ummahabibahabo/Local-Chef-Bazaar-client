// import React, { useEffect, useState } from "react";
// import useAuth from "../../../hooks/useAuth";
// import { Link, useNavigate } from "react-router";
// import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
// import {
//   FaUtensils,
//   FaUserTie,
//   FaMoneyBillWave,
//   FaShoppingCart,
//   FaCreditCard,
//   FaBoxOpen,
// } from "react-icons/fa";

// const MyOrders = () => {
//   const { user } = useAuth();
//   const [orders, setOrders] = useState([]);
//   const navigate = useNavigate();
//   const axiosSecure = UseAxiosSecure();

//   useEffect(() => {
//     if (user?.email) {
//       axiosSecure
//         .get(`/orders/${user.email}`)
//         .then((res) => setOrders(res.data))
//         .catch((err) => console.error(err));
//     }
//   }, [user, axiosSecure]);

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "pending":
//         return "bg-yellow-100 text-yellow-800";
//       case "accepted":
//         return "bg-blue-100 text-blue-800";
//       case "rejected":
//         return "bg-red-100 text-red-800";
//       default:
//         return "bg-gray-100 text-gray-800";
//     }
//   };

//   return (
//     <div className="px-4 md:px-8 py-8">
//       <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
//         My Orders
//       </h2>

//       {orders.length === 0 && (
//         <p className="text-center text-gray-500 text-lg mt-10">
//           No orders found
//         </p>
//       )}

//       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {orders.map((order) => (
//           <div
//             key={order._id}
//             className="bg-white p-6 rounded-3xl shadow-lg border border-gray-200 hover:shadow-2xl transition-transform transform hover:-translate-y-1"
//           >
//             {/* Meal Name */}
//             <h3 className="font-bold text-xl mb-3 text-gray-800 flex items-center justify-center gap-2">
//               <FaUtensils className="text-red-500" /> {order.mealName}
//             </h3>

//             {/* Info */}
//             <div className="flex flex-col gap-2 mb-3 text-gray-700">
//               <p className="flex items-center gap-2">
//                 <FaUserTie className="text-blue-500" /> Chef ID: {order.chefId}
//               </p>
//               <p className="flex items-center gap-2">
//                 <FaMoneyBillWave className="text-green-500" /> Price:{" "}
//                 <span className="font-semibold">{order.price} BDT</span>
//               </p>
//               <p className="flex items-center gap-2">
//                 <FaShoppingCart className="text-yellow-500" /> Quantity:{" "}
//                 {order.quantity}
//               </p>
//               <p className="flex items-center gap-2">
//                 <FaMoneyBillWave className="text-purple-500" /> Total:{" "}
//                 <span className="font-semibold">{order.totalPrice} BDT</span>
//               </p>
//             </div>

//             {/* Payment Button */}
//             <div className="flex justify-center gap-3 mt-4">
//               {order.paymentStatus === "paid" ? (
//                 <span className="px-4 py-2 rounded-full bg-green-100 text-green-800 font-semibold flex items-center gap-2 justify-center">
//                   <FaCreditCard /> Paid
//                 </span>
//               ) : (
//                 <Link to={`/dashboard/payment/${order.foodId}`}>
//                   <button className="px-5 py-2 rounded-full bg-yellow-400 text-black font-semibold shadow hover:bg-yellow-500 transition flex items-center gap-2 justify-center">
//                     <FaCreditCard /> Pay
//                   </button>
//                 </Link>
//               )}
//             </div>

//             {/* Order Status */}
//             <p
//               className={`mt-4 text-center px-4 py-1 rounded-full font-semibold flex items-center justify-center gap-2 ${getStatusColor(
//                 order.orderStatus
//               )}`}
//             >
//               <FaBoxOpen /> {order.orderStatus.toUpperCase()}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyOrders;

import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import {
  FaUtensils,
  FaUserTie,
  FaMoneyBillWave,
  FaShoppingCart,
  FaCreditCard,
  FaBoxOpen,
} from "react-icons/fa";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const axiosSecure = UseAxiosSecure();

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/orders/${user.email}`)
        .then((res) => setOrders(res.data))
        .catch((err) => console.error(err));
    }
  }, [user, axiosSecure]);

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "accepted":
        return "bg-blue-100 text-blue-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="px-4 md:px-8 py-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
        My Orders
      </h2>

      {orders.length === 0 && (
        <p className="text-center text-gray-500 text-lg mt-10">
          No orders found
        </p>
      )}

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {orders.map((order) => (
          <div
            key={order._id}
            className="bg-white p-6 rounded-3xl shadow-lg border border-gray-200 hover:shadow-2xl transition-transform transform hover:-translate-y-1"
          >
            <h3 className="font-bold text-xl mb-3 text-gray-800 flex items-center justify-center gap-2">
              <FaUtensils className="text-red-500" /> {order.mealName}
            </h3>

            <div className="flex flex-col gap-2 mb-3 text-gray-700">
              <p className="flex items-center gap-2">
                <FaUserTie className="text-blue-500" /> Chef ID: {order.chefId}
              </p>
              <p className="flex items-center gap-2">
                <FaMoneyBillWave className="text-green-500" /> Price:{" "}
                <span className="font-semibold">{order.price} BDT</span>
              </p>
              <p className="flex items-center gap-2">
                <FaShoppingCart className="text-yellow-500" /> Quantity:{" "}
                {order.quantity}
              </p>
              <p className="flex items-center gap-2">
                <FaMoneyBillWave className="text-purple-500" /> Total:{" "}
                <span className="font-semibold">{order.totalPrice} BDT</span>
              </p>
            </div>

            <div className="flex justify-center gap-3 mt-4">
              {order.paymentStatus === "paid" ? (
                <span className="px-4 py-2 rounded-full bg-green-100 text-green-800 font-semibold flex items-center gap-2 justify-center">
                  <FaCreditCard /> Paid
                </span>
              ) : (
                <Link to={`/dashboard/payment/${order.foodId}`}>
                  <button className="px-5 py-2 rounded-full bg-yellow-400 text-black font-semibold shadow hover:bg-yellow-500 transition flex items-center gap-2 justify-center">
                    <FaCreditCard /> Pay
                  </button>
                </Link>
              )}
            </div>

            <p
              className={`mt-4 text-center px-4 py-1 rounded-full font-semibold flex items-center justify-center gap-2 ${getStatusColor(
                order.orderStatus
              )}`}
            >
              <FaBoxOpen /> {order.orderStatus.toUpperCase()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
