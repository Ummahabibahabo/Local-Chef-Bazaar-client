import React, { useState } from "react";
import { Link } from "react-router";
import CustomNavLink from "./CustomNavLink";
import { PiBowlSteamBold } from "react-icons/pi";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [open, setOpen] = useState(false);
  const links = (
    <>
      <CustomNavLink to="/">Home</CustomNavLink>
      <CustomNavLink to="/mealspage">Meals</CustomNavLink>
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
      <div className="navbar-end relative">
        {user ? (
          <>
            {/* User Image */}
            <img
              onClick={() => setOpen(!open)}
              src={user.photoURL || "https://i.ibb.co/ZYW3VTp/brown-brim.png"}
              alt="user"
              className="w-10 h-10 rounded-full cursor-pointer border"
            />

            {/* Click Toggle Dropdown */}
            {open && (
              <div className="absolute top-14 right-0 bg-white shadow-lg rounded-xl w-40 p-4 z-50">
                <p className="text-sm font-semibold mb-3 text-center">
                  {user.displayName || "User"}
                </p>

                <button
                  onClick={logOut}
                  className="btn btn-sm w-full bg-primary text-black"
                >
                  Logout
                </button>
              </div>
            )}
          </>
        ) : (
          <Link
            to="/login"
            className="btn bg-primary text-black font-semibold px-6"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
