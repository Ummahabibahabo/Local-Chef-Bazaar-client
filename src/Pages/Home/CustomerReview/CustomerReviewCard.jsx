import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const CustomerReviewCard = ({ review }) => {
  const { comment, date, rating, reviewerImage, reviewerName } = review;
  console.log(review);
  return (
    <div className="bg-white shadow p-6 rounded-xl w-[350px] border border-gray-200">
      {/* Quote Icon */}
      <FaQuoteRight className="text-4xl text-orange-200" />

      {/* Review Text */}
      <p className="text-gray-600 mt-3 italic">{comment}</p>

      {/* Divider with dashed border */}
      <div className="flex items-center border-t border-dashed border-gray-400 my-4 gap-3 pt-3">
        {/* User Image */}
        <div className="w-12 h-12 rounded-full overflow-hidden border border-orange-300">
          <img
            src={reviewerImage}
            alt={reviewerName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* User Info */}
        <div>
          <h3 className="text-[#03373D] font-bold">{reviewerName}</h3>
          <p className="text-gray-500 text-sm">{date}</p>
        </div>
      </div>

      {/* Rating */}
      <p className="text-orange-500 text-sm font-semibold">⭐ {rating} / 5</p>
    </div>
  );
};

export default CustomerReviewCard;
