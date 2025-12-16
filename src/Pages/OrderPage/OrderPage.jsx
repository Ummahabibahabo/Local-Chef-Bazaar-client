import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { FaUtensils, FaMoneyBillWave, FaEnvelope } from "react-icons/fa";

const OrderPage = () => {
  const meal = useLoaderData();
  const { user } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      quantity: 1,
      address: "",
    },
  });

  const quantity = watch("quantity");
  const [totalPrice, setTotalPrice] = useState(meal?.price || 0);

  useEffect(() => {
    if (meal) setTotalPrice(meal.price * (quantity || 1));
  }, [quantity, meal]);

  if (!meal) return <p className="text-center mt-10">Meal not found!</p>;

  const onSubmit = async (data) => {
    const { quantity, address } = data;

    Swal.fire({
      title: `Your total price is ${totalPrice} BDT`,
      text: "Do you want to confirm the order?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, confirm",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const orderData = {
          foodId: meal._id,
          mealName: meal.foodName,
          price: meal.price,
          quantity,
          chefId: meal.chefId,
          userEmail: user.email,
          userAddress: address,
          orderStatus: "pending",
          paymentStatus: "Pending",
          orderTime: new Date().toISOString(),
        };

        try {
          const res = await fetch("http://localhost:3000/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(orderData),
          });
          const data = await res.json();

          if (data.insertedId) {
            Swal.fire("Success", "Order placed successfully!", "success");
            navigate("/");
          }
        } catch (err) {
          console.error(err);
          Swal.fire("Error", "Something went wrong", "error");
        }
      }
    });
  };

  return (
    <div className="max-w-3xl mx-auto mt-12 p-8 bg-gradient-to-tr from-white to-gray-50 shadow-2xl rounded-3xl border border-gray-200">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
          🛒 Confirm Your Order
        </h1>
        <p className="text-gray-500">
          Please fill in the quantity and delivery address to complete your
          order.
        </p>
      </div>

      {/* Auto-filled info cards with React Icons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-5 bg-white rounded-2xl shadow-md border-l-4 border-blue-500 flex items-center gap-3">
          <FaUtensils className="text-blue-500 text-xl" />
          <div>
            <p className="text-gray-400 text-sm">Meal Name</p>
            <p className="font-semibold text-gray-800">{meal.foodName}</p>
          </div>
        </div>

        <div className="p-5 bg-white rounded-2xl shadow-md border-l-4 border-green-500 flex items-center gap-3">
          <FaMoneyBillWave className="text-green-500 text-xl" />
          <div>
            <p className="text-gray-400 text-sm">Price</p>
            <p className="font-semibold text-gray-800">{meal.price} BDT</p>
          </div>
        </div>

        <div className="p-5 bg-white rounded-2xl shadow-md border-l-4 border-purple-500 flex items-center gap-3">
          <FaEnvelope className="text-purple-500 text-xl" />
          <div>
            <p className="text-gray-400 text-sm">Your Email</p>
            <p className="font-semibold text-gray-800">{user.email}</p>
          </div>
        </div>
      </div>

      {/* Order form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Quantity */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Quantity
          </label>
          <input
            type="number"
            min="1"
            {...register("quantity", { required: true, min: 1 })}
            className="input input-bordered w-full rounded-xl border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
          />
          {errors.quantity && (
            <p className="text-red-500 mt-1 text-sm">
              Quantity must be at least 1
            </p>
          )}
        </div>

        {/* Delivery Address */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Delivery Address
          </label>
          <textarea
            {...register("address", { required: true, minLength: 5 })}
            className="textarea textarea-bordered w-full rounded-xl border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200 transition"
            placeholder="Enter your delivery address"
          />
          {errors.address && (
            <p className="text-red-500 mt-1 text-sm">
              Please enter a valid address (min 5 characters)
            </p>
          )}
        </div>

        {/* Total Price */}
        <p className="text-xl font-semibold text-gray-800">
          Total Price: <span className="text-green-600">{totalPrice} BDT</span>
        </p>

        {/* Confirm Order Button */}
        <button
          type="submit"
          className="w-full bg-primary text-black py-3 rounded-2xl font-bold shadow-lg hover:shadow-2xl transition duration-300"
        >
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default OrderPage;
