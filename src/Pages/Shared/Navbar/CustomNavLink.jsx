import React from "react";

import { NavLink } from "react-router";

// const CustomNavLink = ({
//   to,
//   children,
//   activeColor = "text-blue-600",
//   inactiveColor = "text-gray-700 hover:text-blue-500",
// }) => {
//   return (
//     <NavLink
//       to={to}
//       className={({ isActive }) =>
//         isActive ? `${activeColor} underline mx-5` : inactiveColor
//       }
//     >
//       {children}
//     </NavLink>
//   );
// };

const CustomNavLink = ({
  to,
  children,
  activeColor = "text-blue-600",
  inactiveColor = "text-gray-700 hover:text-blue-500",
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `${activeColor} underline mx-5` : `${inactiveColor} mx-5`
      }
    >
      {children}
    </NavLink>
  );
};
export default CustomNavLink;
