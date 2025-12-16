import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const AddReviewForm = ({ foodId, foodName, onReviewAdded }) => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    if (!user) {
      Swal.fire("Error", "You must be logged in to submit a review", "error");
      return;
    }

    setLoading(true);

    const reviewData = {
      foodId,
      foodName,
      userEmail: user.email,
      reviewerName: user.displayName,
      reviewerImage: user.photoURL,
      rating: Number(data.rating),
      comment: data.comment,
      date: new Date().toISOString(),
    };

    try {
      const res = await fetch("http://localhost:3000/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reviewData),
      });
      const result = await res.json();

      if (result.insertedId) {
        Swal.fire("Success", "Review submitted successfully!", "success");
        onReviewAdded({
          ...reviewData,
          _id: result.insertedId,
          mealName: foodName,
          date: new Date().toISOString(),
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Something went wrong", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-6 space-y-4 p-4 border rounded-lg shadow-md"
    >
      <h3 className="text-xl font-semibold">Give Your Review for {foodName}</h3>

      <div>
        <label className="block mb-1">Rating (1-5)</label>
        <input
          type="number"
          min="1"
          max="5"
          {...register("rating", { required: true })}
          className="input input-bordered w-full"
        />
        {errors.rating && (
          <p className="text-red-500 text-sm">Rating is required</p>
        )}
      </div>

      <div>
        <label className="block mb-1">Comment</label>
        <textarea
          {...register("comment", { required: true })}
          className="textarea textarea-bordered w-full"
          placeholder="Write your review..."
        />
        {errors.comment && (
          <p className="text-red-500 text-sm">Comment is required</p>
        )}
      </div>

      <button
        type="submit"
        className="btn btn-primary text-black w-full"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit Review"}
      </button>
    </form>
  );
};

export default AddReviewForm;
