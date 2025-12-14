import React from "react";
import {
  FaClock,
  FaIdBadge,
  FaMoneyBillWave,
  FaStar,
  FaTruck,
  FaUserTie,
} from "react-icons/fa";
import { useLoaderData } from "react-router";
// import { useLoaderData } from "react-router";
// import {
//   FaMoneyBillWave,
//   FaStar,
//   FaTruck,
//   FaUserTie,
//   FaClock,
//   FaIdBadge,
// } from "react-icons/fa";

const MealsDetailsPage = () => {
  const card = useLoaderData();

  const {
    foodImage,
    price,
    rating,
    ingredients,
    deliveryArea,
    estimatedDeliveryTime,
    chefExperience,
    chefId,
  } = card;

  return (
    <div className="flex justify-center py-10">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden max-w-5xl w-full grid grid-cols-1 md:grid-cols-2">
        {/* Left Image Section */}
        <div className="h-full">
          <img
            src={foodImage}
            alt="Meal"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content Section */}
        <div className="p-8 border-l-2 border-dashed border-gray-300 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Ingredients
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">{ingredients}</p>

            <div className="space-y-3 text-gray-700">
              <div className="flex items-center gap-3">
                <FaMoneyBillWave className="text-green-500" />
                <span>Price: {price} BDT</span>
              </div>

              <div className="flex items-center gap-3">
                <FaStar className="text-yellow-500" />
                <span>Rating: {rating}</span>
              </div>

              <div className="flex items-center gap-3">
                <FaTruck className="text-blue-500" />
                <span>Delivery Area: {deliveryArea}</span>
              </div>

              <div className="flex items-center gap-3">
                <FaClock className="text-purple-500" />
                <span>Estimated Time: {estimatedDeliveryTime}</span>
              </div>

              <div className="flex items-center gap-3">
                <FaUserTie className="text-red-500" />
                <span>Chef Experience: {chefExperience}</span>
              </div>

              <div className="flex items-center gap-3">
                <FaIdBadge className="text-gray-500" />
                <span>Chef ID: {chefId}</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-8">
            <button className="btn btn-primary w-full rounded-full text-lg text-black">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealsDetailsPage;
