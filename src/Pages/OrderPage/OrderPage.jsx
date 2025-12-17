import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import {
  FaUtensils,
  FaMoneyBillWave,
  FaEnvelope,
  FaIdBadge,
} from "react-icons/fa";

const OrderPage = () => {
  const meal = useLoaderData();
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = UseAxiosSecure();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { quantity: 1, address: "" },
  });

  const quantity = watch("quantity");
  const [totalPrice, setTotalPrice] = useState(meal?.price || 0);

  useEffect(() => {
    if (meal && quantity) {
      setTotalPrice(meal.price * quantity);
    }
  }, [quantity, meal]);

  if (!meal) return <p className="text-center mt-10">Meal not found!</p>;

  const onSubmit = async (formData) => {
    if (!user) {
      Swal.fire("Please login first!");
      return;
    }

    const { quantity, address } = formData;

    const confirm = await Swal.fire({
      title: `Total Price: ${totalPrice} BDT`,
      text: "Do you want to confirm this order?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, confirm",
      cancelButtonText: "Cancel",
    });

    if (!confirm.isConfirmed) return;

    const orderData = {
      foodId: meal._id,
      mealName: meal.foodName,
      price: meal.price,
      quantity,
      totalPrice,
      chefId: meal.chefId,
      userEmail: user.email,
      userAddress: address,
      orderStatus: "pending",
      paymentStatus: "pending",
      orderTime: new Date().toISOString(),
    };

    const res = await axiosSecure.post("/orders", orderData);
    if (res.data.insertedId) {
      Swal.fire("Success", "Order placed successfully!", "success");
      navigate("/dashboard/my-orders");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-12 p-8 bg-gradient-to-tr from-white to-gray-50 shadow-2xl rounded-3xl border border-gray-200">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
          🛒 Confirm Your Order
        </h1>
        <p className="text-gray-500">
          Fill in quantity & delivery address to place your order
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-5 bg-white rounded-2xl shadow-md border-l-4 border-blue-500 flex items-center gap-3">
          <FaUtensils className="text-blue-500 text-xl" />
          <div>
            <p className="text-gray-400 text-sm">Meal</p>
            <p className="font-semibold">{meal.foodName}</p>
          </div>
        </div>

        <div className="p-5 bg-white rounded-2xl shadow-md border-l-4 border-green-500 flex items-center gap-3">
          <FaMoneyBillWave className="text-green-500 text-xl" />
          <div>
            <p className="text-gray-400 text-sm">Price</p>
            <p className="font-semibold">{meal.price} BDT</p>
          </div>
        </div>

        <div className="p-5 bg-white rounded-2xl shadow-md border-l-4 border-purple-500 flex items-center gap-3">
          <FaEnvelope className="text-purple-500 text-xl" />
          <div>
            <p className="text-gray-400 text-sm">Email</p>
            <p className="font-semibold">{user?.email}</p>
          </div>
        </div>

        <div className="p-5 bg-white rounded-2xl shadow-md border-l-4 border-orange-500 flex items-center gap-3">
          <FaIdBadge className="text-orange-500 text-xl" />
          <div>
            <p className="text-gray-400 text-sm">Chef ID</p>
            <p className="font-semibold">{meal.chefId}</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block mb-2 font-medium">Quantity</label>
          <input
            type="number"
            min="1"
            {...register("quantity", { required: true, min: 1 })}
            className="input input-bordered w-full"
          />
          {errors.quantity && (
            <p className="text-red-500 text-sm mt-1">
              Quantity must be at least 1
            </p>
          )}
        </div>

        <div>
          <label className="block mb-2 font-medium">Delivery Address</label>
          <textarea
            {...register("address", { required: true, minLength: 5 })}
            className="textarea textarea-bordered w-full"
            placeholder="Enter your delivery address"
          />
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">
              Address must be at least 5 characters
            </p>
          )}
        </div>

        <p className="text-xl font-semibold">
          Total Price: <span className="text-green-600">{totalPrice} BDT</span>
        </p>

        <button
          type="submit"
          className="w-full bg-primary text-black py-3 rounded-2xl font-bold shadow-lg hover:shadow-2xl transition"
        >
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default OrderPage;
