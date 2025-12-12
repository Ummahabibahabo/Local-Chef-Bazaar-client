import React from "react";
import { Link, NavLink } from "react-router";
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
    <div className="navbar bg-white shadow-sm p-5 rounded-xl">
      {/* LEFT SIDE */}
      <div className="navbar-start">
        {/* MOBILE DROPDOWN */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </div>

          {/* MENU for mobile */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        {/* LOGO */}
      </div>

      {/* MIDDLE LINKS (LARGE SCREEN) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="navbar-end">
        <a className="btn bg-primary text-black font-bold">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
