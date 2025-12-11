import React from "react";
import { FaClock, FaStar } from "react-icons/fa";

const DailyMealsCard = ({ Card }) => {
  const {
    chefName,
    deliveryTime,
    description,
    image,
    mealName,
    price,
    rating,
  } = Card;
  return (
    <div className="card bg-base-100 shadow-md rounded-xl hover:bg-primary transition-all duration-500 hover:animate-[shake_0.3s_ease-in-out] ">
      {/* Image */}
      <figure>
        <img
          src={image}
          alt={mealName}
          className="h-50 w-full object-cover rounded-t-xl"
        />
      </figure>

      {/* Body */}
      <div className="card-body space-y-3">
        {/* Title + Chef + Rating */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold">{mealName}</h2>
            <p className="text-sm text-gray-500">By {chefName}</p>
          </div>

          {/* Rating with Icon */}
          <div className="flex items-center gap-1 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow">
            <FaStar className="text-white" />
            {rating}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm">{description}</p>

        {/* Price + Delivery Time (More beautiful) */}
        <div className="flex justify-between items-center pt-3 border-t">
          {/* Price */}
          <p className="text-lg font-bold text-green-600">${price}</p>

          {/* Delivery Time */}
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <FaClock />
            <span>{deliveryTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyMealsCard;
