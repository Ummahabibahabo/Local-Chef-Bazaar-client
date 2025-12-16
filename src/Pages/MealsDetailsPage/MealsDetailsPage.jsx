import React, { useEffect, useState } from "react";
import {
  FaClock,
  FaIdBadge,
  FaMoneyBillWave,
  FaStar,
  FaTruck,
  FaUserTie,
  FaHeart,
} from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

import ReviewCard from "../Review/AddReviewForm/ReviewCard";
import AddReviewForm from "../Review/AddReviewForm/AddReviewForm";

const MealsDetailsPage = () => {
  const card = useLoaderData();
  const { user } = useAuth();
  const [reviews, setReviews] = useState([]);

  const {
    _id,
    foodName,
    foodImage,
    price,
    rating,
    ingredients,
    deliveryArea,
    estimatedDeliveryTime,
    chefExperience,
    chefId,
    chefName,
  } = card;

  // Favorite button state
  const [isFavorite, setIsFavorite] = useState(false);
  const [buttonText, setButtonText] = useState("Add to Favorite");

  // fetch reviews
  const fetchReviews = async () => {
    try {
      const res = await fetch(`http://localhost:3000/review/${_id}`);
      const data = await res.json();
      setReviews(data);
    } catch (error) {
      console.error("Failed to fetch reviews:", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [_id]);

  const handleReviewAdded = (newReview) => {
    setReviews((prev) => [newReview, ...prev]);
  };

  // Add to Favorite
  const handleAddToFavorite = async () => {
    if (!user) {
      Swal.fire("Login Required", "Please login first", "warning");
      return;
    }

    const favoriteData = {
      userEmail: user.email,
      mealId: _id,
      mealName: foodName,
      chefId,
      chefName,
      price,
      addedTime: new Date().toISOString(),
    };

    try {
      const res = await fetch("http://localhost:3000/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(favoriteData),
      });
      const data = await res.json();

      if (data.insertedId) {
        Swal.fire("Success", "Added to favorites ❤️", "success");
        setIsFavorite(true);
        setButtonText("Added");
      } else if (data.alreadyAdded) {
        Swal.fire("Info", "Already in favorites", "info");
        setIsFavorite(true);
        setButtonText("Added");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Something went wrong", "error");
    }
  };

  return (
    <div className="flex flex-col items-center py-10 px-4 md:px-0">
      {/* Meal Details Card */}
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden max-w-5xl w-full grid grid-cols-1 md:grid-cols-2">
        {/* Left Image */}
        <div className="h-full">
          <img
            src={foodImage}
            alt={foodName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="p-6 md:p-8 border-l-2 border-dashed border-gray-300 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {foodName}
            </h2>
            <h3 className="text-2xl font-semibold text-gray-700 mb-3">
              Ingredients
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{ingredients}</p>

            <div className="space-y-2 md:space-y-3 text-gray-700">
              <div className="flex items-center gap-2 md:gap-3">
                <FaMoneyBillWave className="text-green-500" />
                <span>Price: {price} BDT</span>
              </div>

              <div className="flex items-center gap-2 md:gap-3">
                <FaStar className="text-yellow-500" />
                <span>Rating: {rating}</span>
              </div>

              <div className="flex items-center gap-2 md:gap-3">
                <FaTruck className="text-blue-500" />
                <span>Delivery Area: {deliveryArea}</span>
              </div>

              <div className="flex items-center gap-2 md:gap-3">
                <FaClock className="text-purple-500" />
                <span>Estimated Time: {estimatedDeliveryTime}</span>
              </div>

              <div className="flex items-center gap-2 md:gap-3">
                <FaUserTie className="text-red-500" />
                <span>Chef Experience: {chefExperience}</span>
              </div>

              <div className="flex items-center gap-2 md:gap-3">
                <FaIdBadge className="text-gray-500" />
                <span>Chef ID: {chefId}</span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 md:mt-8 space-y-3">
            <Link
              to={`/order-page/${_id}`}
              state={{ meal: card }}
              className="btn btn-primary w-full rounded-full text-lg text-black"
            >
              Order Now
            </Link>

            <button
              onClick={handleAddToFavorite}
              className={`btn w-full rounded-full flex items-center justify-center gap-2 ${
                isFavorite ? "btn-error text-white" : "btn-outline btn-error"
              }`}
            >
              <FaHeart /> {buttonText}
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-10 w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Reviews</h2>

        {reviews.length === 0 && (
          <p className="text-gray-500 text-center">No reviews yet.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reviews.map((review) => (
            <ReviewCard key={review._id} review={review} />
          ))}
        </div>

        <div className="mt-6">
          <AddReviewForm
            foodId={_id}
            foodName={foodName}
            onReviewAdded={handleReviewAdded}
          />
        </div>
      </div>
    </div>
  );
};

export default MealsDetailsPage;
