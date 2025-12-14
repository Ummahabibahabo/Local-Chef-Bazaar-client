import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";

const SocialLogin = () => {
  const { signInGoogle } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location in social", location);
  const handleSignInGoogle = () => {
    signInGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-full px-6 py-6">
      {/* OR Center */}
      <div className="relative flex items-center justify-center mb-6">
        <span className="bg-white px-3 text-sm text-gray-500 font-medium z-10">
          OR
        </span>
        <div className="absolute left-0 right-0 h-px bg-gray-300"></div>
      </div>

      {/* Google Button */}
      <button
        onClick={handleSignInGoogle}
        className="btn w-full bg-white text-black border border-gray-300 hover:bg-gray-100 flex items-center justify-center gap-3"
      >
        <svg
          aria-label="Google logo"
          width="18"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff" />
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            />
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            />
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            />
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            />
          </g>
        </svg>

        <span className="font-medium">Continue with Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
