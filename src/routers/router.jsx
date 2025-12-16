import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Meals from "../Pages/Meals/MealsPage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/login/Login";
import Register from "../Pages/Auth/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MealsPage from "../Pages/Meals/MealsPage";
import PrivateRoute from "./PrivateRoute";
import MealsDetailsPage from "../Pages/MealsDetailsPage/MealsDetailsPage";
import OrderPage from "../Pages/OrderPage/OrderPage";
import DashboardLayout from "../Layouts/DashboardLayout";
import MyReview from "../Pages/Dashboard/UserDashboard/MyReview";
import FavoriteMealsPage from "../Pages/Dashboard/UserDashboard/FavoriteMealsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/mealspage",
        Component: MealsPage,
      },
      {
        path: "/meals-details/:id",
        element: (
          <PrivateRoute>
            <MealsDetailsPage></MealsDetailsPage>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/meals/${params.id}`),
      },
      {
        path: "/order-page/:id",
        element: (
          <PrivateRoute>
            <OrderPage />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/meals/${params.id}`),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "my-reviews",
        Component: MyReview,
      },
      {
        path: "favorites-meals",
        Component: FavoriteMealsPage,
      },
    ],
  },
]);
