import React, { use } from "react";
import DailyMealsCard from "./DailyMealsCard";

const DailyMealsPage = ({ latestDailyMealsPromise }) => {
  const DailyMealsCards = use(latestDailyMealsPromise);
  // console.log(DailyMealsCards);
  return (
    <div>
      <h1 className=" mb-5 text-4xl font-bold text-center">Daily Meals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {DailyMealsCards.map((Card) => (
          <DailyMealsCard key={Card._id} Card={Card}></DailyMealsCard>
        ))}
      </div>
    </div>
  );
};

export default DailyMealsPage;
