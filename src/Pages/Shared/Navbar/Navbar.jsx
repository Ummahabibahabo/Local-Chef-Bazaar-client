// import React, { useState } from "react";
// import { Link } from "react-router";
// import { PiBowlSteamBold } from "react-icons/pi";
// import useAuth from "../../../hooks/useAuth";

import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";
import CustomNavLink from "./CustomNavLink";
import { PiBowlSteamBold } from "react-icons/pi";

// const Navbar = () => {
//   const { user, logOut, loading } = useAuth();
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="navbar bg-white shadow-md px-6 py-4 rounded-xl flex justify-between items-center">
//       {/* Logo */}
//       <Link to="/" className="flex items-center gap-2">
//         <PiBowlSteamBold className="text-3xl text-primary" />
//         <span className="text-xl font-bold text-gray-800">LocalChefBazaar</span>
//       </Link>

//       {/* User Section */}
//       <div className="relative">
//         {!loading && user ? (
//           <>
//             <img
//               key={user.photoURL} // 🔥 force re-render
//               onClick={() => setOpen(!open)}
//               src={
//                 user?.photoURL
//                   ? user.photoURL
//                   : "https://i.ibb.co/ZYW3VTp/brown-brim.png"
//               }
//               alt="user"
//               className="w-10 h-10 rounded-full cursor-pointer border"
//             />

//             {open && (
//               <div className="absolute top-14 right-0 bg-white shadow-lg rounded-xl w-44 p-4 z-50">
//                 <p className="text-sm font-semibold mb-2 text-center">
//                   {user.displayName || "User"}
//                 </p>

//                 <Link
//                   to="/dashboard"
//                   className="block text-center w-full mb-2 py-2 rounded-lg hover:bg-primary hover:text-white"
//                   onClick={() => setOpen(false)}
//                 >
//                   Dashboard
//                 </Link>

//                 <button
//                   onClick={logOut}
//                   className="btn btn-sm w-full bg-primary text-black"
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </>
//         ) : (
//           <Link
//             to="/login"
//             className="btn bg-primary text-black font-semibold px-6"
//           >
//             Login
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

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
      {/* Logo */}
      <div className="navbar-start">
        <Link to="/" className="flex items-center gap-2">
          <PiBowlSteamBold className="text-3xl text-primary" />
          <span className="text-xl font-bold">LocalChefBazaar</span>
        </Link>
      </div>

      {/* Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-6">{links}</ul>
      </div>

      {/* User */}
      <div className="navbar-end relative">
        {user ? (
          <>
            <img
              onClick={() => setOpen(!open)}
              src={user.photoURL || "https://i.ibb.co/ZYW3VTp/brown-brim.png"}
              alt="user"
              className="w-10 h-10 rounded-full cursor-pointer border"
            />

            {open && (
              <div className="absolute top-14 right-0 bg-white shadow-lg rounded-xl w-44 p-4 z-50">
                <p className="text-sm font-semibold text-center mb-2">
                  {user.displayName || "User"}
                </p>

                <Link
                  to="/dashboard"
                  onClick={() => setOpen(false)}
                  className="block text-center py-2 rounded hover:bg-primary hover:text-white"
                >
                  Dashboard
                </Link>

                <button
                  onClick={logOut}
                  className="btn btn-sm w-full mt-2 bg-primary text-black"
                >
                  Logout
                </button>
              </div>
            )}
          </>
        ) : (
          <Link to="/login" className="btn bg-primary text-black">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
