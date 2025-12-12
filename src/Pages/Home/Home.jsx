import React from "react";
import Banner from "./Banner/Banner";
import DailyMealsPage from "./DailyMealspage/DailyMealsPage";
import CustomerReview from "./CustomerReview/CustomerReview";
import ExtraSection from "./ExtraSection/ExtraSection";
const latestDailyMealsPromise = fetch("http://localhost:3000/dailymeals").then(
  (res) => res.json()
);
const customerReviewPromise = fetch("http://localhost:3000/home-review").then(
  (res) => res.json()
);

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <DailyMealsPage
        latestDailyMealsPromise={latestDailyMealsPromise}
      ></DailyMealsPage>
      <CustomerReview
        customerReviewPromise={customerReviewPromise}
      ></CustomerReview>
      <ExtraSection></ExtraSection>
    </div>
  );
};

export default Home;
