import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { FaTrash, FaHeart } from "react-icons/fa";

const FavoriteMealsPage = () => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);

  const fetchFavorites = async () => {
    if (!user) return;
    try {
      const res = await fetch(
        `http://localhost:3000/favorites?userEmail=${user.email}`
      );
      const data = await res.json();
      setFavorites(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, [user]);

  const handleDelete = async (mealId) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You want to remove this meal from favorites?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        const res = await fetch(`http://localhost:3000/favorites/${mealId}`, {
          method: "DELETE",
        });
        const data = await res.json();

        if (data.success || data.deletedCount > 0) {
          Swal.fire("Deleted!", "Meal removed from favorites.", "success");
          setFavorites(favorites.filter((fav) => fav._id !== mealId));
        }
      } catch (err) {
        console.error(err);
        Swal.fire("Error", "Something went wrong", "error");
      }
    }
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">
        My Favorite Meals
      </h1>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-500 text-lg mt-6">
          No favorite meals yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favorites.map((meal, index) => (
            <div
              key={meal._id}
              className="relative border rounded-2xl shadow-lg overflow-hidden flex flex-col bg-white p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              {/* Badge inside card top */}
              <div className="flex items-center justify-center bg-primary text-black font-bold rounded-full w-12 h-12 text-lg mb-4 self-center shadow-lg">
                {index + 1}
              </div>

              <div className="flex flex-col flex-grow">
                <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4 text-gray-800">
                  <FaHeart className="text-black text-xl" /> {meal.mealName}
                </h2>

                <p className="text-gray-700 mb-3 text-md">
                  <span className="font-medium">Chef:</span> {meal.chefName}
                </p>
                <p className="text-gray-700 mb-3 text-md">
                  <span className="font-medium">Price:</span> {meal.price} BDT
                </p>
                <p className="text-gray-500 text-sm mb-5">
                  Added: {new Date(meal.addedTime).toLocaleString()}
                </p>

                <button
                  onClick={() => handleDelete(meal._id)}
                  className="flex items-center justify-center gap-2 btn btn-primary text-black rounded-lg font-medium mt-auto transition-colors duration-300 hover:bg-gray-500 hover:text-white"
                >
                  <FaTrash /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteMealsPage;
