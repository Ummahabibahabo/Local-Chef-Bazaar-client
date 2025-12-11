import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Meals from "../Pages/Meals/Meals";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/meals",
        Component: Meals,
      },
    ],
  },
]);
