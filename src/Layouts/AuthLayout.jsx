import React from "react";
import { PiBowlSteamBold } from "react-icons/pi";
import { Link, Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto p-5">
      <Link
        className="flex items-center gap-2 text-xl font-bold px-2 hover:bg-primary p-3 rounded-xl"
        to="/"
      >
        <PiBowlSteamBold size={28} />
        LocalFoodBazar
      </Link>

      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
