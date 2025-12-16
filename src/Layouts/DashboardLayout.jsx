import React from "react";
import { PiBowlSteamBold } from "react-icons/pi";
import { Link, Outlet } from "react-router";
import { MdRateReview } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open min-h-screen">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      {/* ================= RIGHT CONTENT ================= */}
      <div className="drawer-content flex flex-col bg-base-200">
        {/* Top Navbar */}
        <nav className="navbar bg-base-100 shadow px-4">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-4" className="btn btn-square btn-ghost">
              <FiMenu size={22} />
            </label>
          </div>

          <div className="flex-1">
            <h2 className="text-xl font-semibold">Dashboard</h2>
          </div>
        </nav>

        {/* Page Content */}
        <div className="p-6">
          <Outlet></Outlet>
        </div>
      </div>

      {/* ================= LEFT SIDEBAR ================= */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

        <aside className="w-64 bg-base-100 shadow-lg">
          {/* Logo */}
          <div className="px-6 py-5 border-b">
            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-bold text-primary"
            >
              <PiBowlSteamBold size={30} />
              LocalFoodBazar
            </Link>
          </div>

          {/* Menu */}
          <ul className="menu px-4 py-4 gap-2 font-medium">
            <li>
              <Link
                to="/dashboard/my-reviews"
                className="flex items-center gap-2 rounded-lg hover:bg-primary hover:text-white"
              >
                <MdRateReview size={18} />
                My Reviews
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayout;
