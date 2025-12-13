import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Meals from "../Pages/Meals/MealsPage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/login/Login";
import Register from "../Pages/Auth/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MealsPage from "../Pages/Meals/MealsPage";

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
]);
