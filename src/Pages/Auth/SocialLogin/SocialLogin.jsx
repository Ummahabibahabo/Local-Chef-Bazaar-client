import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const { signInGoogle } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignInGoogle = async () => {
    try {
      const result = await signInGoogle();
      console.log("Google user:", result.user);
      navigate(location?.state || "/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full px-6 py-6">
      {/* OR */}
      <div className="relative flex items-center justify-center mb-6">
        <span className="bg-white px-3 text-sm text-gray-500 z-10">OR</span>
        <div className="absolute left-0 right-0 h-px bg-gray-300"></div>
      </div>

      {/* Google Button */}
      <button
        onClick={handleSignInGoogle}
        className="btn w-full bg-white text-black border border-gray-300 hover:bg-gray-100 flex items-center justify-center gap-3"
      >
        <FcGoogle size={22} />
        <span className="font-medium">Continue with Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
