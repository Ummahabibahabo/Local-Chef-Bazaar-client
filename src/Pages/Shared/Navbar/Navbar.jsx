import React from "react";
import { Link } from "react-router";
import CustomNavLink from "./CustomNavLink";
import { PiBowlSteamBold } from "react-icons/pi";

const Navbar = () => {
  const links = (
    <>
      <CustomNavLink to="/">Home</CustomNavLink>
      <CustomNavLink to="/meals">Meals</CustomNavLink>
    </>
  );

  return (
    <div className="navbar bg-white shadow-md px-6 py-4 rounded-xl">
      {/* LEFT SIDE */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <PiBowlSteamBold className="text-3xl text-primary" />
          <span className="text-xl font-bold text-gray-800">
            LocalChefBazaar
          </span>
        </Link>
      </div>

      {/* CENTER MENU */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-6 text-base font-medium">
          {links}
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="navbar-end">
        <Link
          to="/login"
          className="btn bg-primary text-black font-semibold px-6"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
