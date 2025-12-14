// MealsPage.jsx
import React, { useEffect, useState } from "react";
import MealsCards from "./MealsCards";
import { Link } from "react-router";

const MealsPage = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc"); // asc or desc

  useEffect(() => {
    fetch("http://localhost:3000/meals")
      .then((res) => res.json())
      .then((data) => {
        setMeals(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Meals sorted according to current sortOrder
  const sortedMeals = [...meals].sort((a, b) =>
    sortOrder === "asc" ? a.price - b.price : b.price - a.price
  );

  if (loading)
    return (
      <p className="text-center mt-10 text-lg font-semibold">
        Loading meals...
      </p>
    );

  return (
    <div>
      {/* Heading + Sort */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-8 mb-8 relative">
        {/* Sort Button on the left */}
        <button
          onClick={handleSort}
          className="absolute right-0 md:right-5 bg-primary hover:bg-teal-600 text-black font-semibold px-5 py-2 rounded-full transition"
        >
          Sort by Price ({sortOrder === "asc" ? "Low → High" : "High → Low"})
        </button>

        {/* Centered Heading */}
        <Link to="/details">
          {" "}
          <h1 className="text-4xl font-bold text-gray-800 text-center">
            Daily Meals
          </h1>
        </Link>
      </div>

      {/* Meals Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sortedMeals.map((meal) => (
          <MealsCards key={meal.chefId} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default MealsPage;
