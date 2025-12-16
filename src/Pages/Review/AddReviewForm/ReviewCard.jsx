import React from "react";
import { FaStar, FaRegCommentDots } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  return (
    <div className="relative bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all p-6 max-w-md mx-auto mb-6">
      {/* Reviewer Image */}
      <div className="absolute -top-0 left-1/2 transform -translate-x-1/2 ">
        <img
          src={review.reviewerImage}
          alt={review.reviewerName}
          className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover mb-5"
        />
      </div>

      {/* Name & Rating */}
      <div className="mt-15 text-center">
        <p className="font-bold text-gray-800 text-lg">{review.reviewerName}</p>
        <div className="flex justify-center items-center gap-1 text-yellow-500 mt-1">
          {Array.from({ length: review.rating }).map((_, idx) => (
            <FaStar key={idx} />
          ))}
        </div>
      </div>

      {/* Comment Box */}
      <div className="flex items-start gap-3 mt-4 p-4 bg-gray-50 rounded-xl shadow-inner">
        <FaRegCommentDots className="text-gray-400 mt-1" />
        <p className="text-gray-700 text-sm">{review.comment}</p>
      </div>

      {/* Date */}
      <div className="text-right text-xs text-gray-400 mt-3 italic">
        {new Date(review.date).toLocaleString()}
      </div>
    </div>
  );
};

export default ReviewCard;
