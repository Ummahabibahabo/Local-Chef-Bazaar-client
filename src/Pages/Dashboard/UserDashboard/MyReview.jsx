import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { FaStar, FaTrash, FaEdit } from "react-icons/fa";

const MyReview = () => {
  const { user } = useAuth();
  const [reviews, setReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null);

  useEffect(() => {
    if (!user?.email) return;
    fetch(`http://localhost:3000/my-reviews/${user.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This review will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/review/${id}`, { method: "DELETE" }).then(
          () => {
            setReviews(reviews.filter((r) => r._id !== id));
            Swal.fire("Deleted!", "Your review has been deleted.", "success");
          }
        );
      }
    });
  };

  const handleUpdate = async () => {
    const { _id, rating, comment } = selectedReview;
    const res = await fetch(`http://localhost:3000/review/${_id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rating, comment }),
    });

    if (res.ok) {
      setReviews((prev) =>
        prev.map((r) => (r._id === _id ? selectedReview : r))
      );
      Swal.fire("Success", "Review updated successfully!", "success");
      setSelectedReview(null);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">My Reviews</h2>
      {reviews.length === 0 && (
        <p className="text-gray-500">You have not added any reviews yet.</p>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <div key={review._id} className="bg-white shadow-lg rounded-xl p-5">
            <h3 className="text-lg font-semibold mb-1">🍽 {review.foodName}</h3>
            <div className="flex items-center gap-1 text-yellow-500 mb-2">
              {Array.from({ length: review.rating }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="text-gray-700 mb-2">{review.comment}</p>
            <p className="text-xs text-gray-400 mb-4">
              {new Date(review.date).toLocaleString()}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setSelectedReview(review)}
                className="btn btn-sm btn-outline btn-black"
              >
                <FaEdit /> Update
              </button>
              <button
                onClick={() => handleDelete(review._id)}
                className="btn btn-sm btn-outline btn-error"
              >
                <FaTrash /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedReview && (
        <dialog className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-3">Update Review</h3>
            <label className="block mb-2">Rating (1-5)</label>
            <input
              type="number"
              min="1"
              max="5"
              value={selectedReview.rating}
              onChange={(e) =>
                setSelectedReview({
                  ...selectedReview,
                  rating: Number(e.target.value),
                })
              }
              className="input input-bordered w-full mb-3"
            />
            <label className="block mb-2">Comment</label>
            <textarea
              value={selectedReview.comment}
              onChange={(e) =>
                setSelectedReview({
                  ...selectedReview,
                  comment: e.target.value,
                })
              }
              className="textarea textarea-bordered w-full mb-4"
            />
            <div className="modal-action">
              <button onClick={handleUpdate} className="btn btn-primary">
                Save
              </button>
              <button onClick={() => setSelectedReview(null)} className="btn">
                Cancel
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default MyReview;
