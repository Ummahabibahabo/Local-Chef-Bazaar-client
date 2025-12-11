import React from "react";
import Banner from "./Banner/Banner";
import DailyMealsPage from "./DailyMealspage/DailyMealsPage";
const latestDailyMealsPromise = fetch("http://localhost:3000/dailymeals").then(
  (res) => res.json()
);

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <DailyMealsPage
        latestDailyMealsPromise={latestDailyMealsPromise}
      ></DailyMealsPage>
    </div>
  );
};

export default Home;
