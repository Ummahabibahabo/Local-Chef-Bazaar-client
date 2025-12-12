import React from "react";

const Login = () => {
  return (
    <div className="hero bg-base-200 min-h-screen flex flex-col py-5 px-4 gap-8">
      {/* Title Top */}
      <h1 className="text-5xl font-bold text-gray-800 text-center">
        Login now!
      </h1>

      {/* Card */}
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl rounded-2xl">
        <div className="card-body">
          <fieldset className="flex flex-col gap-4">
            {/* Email */}
            <label className="label font-semibold">Email</label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
              required
            />

            {/* Password */}
            <label className="label font-semibold">Password</label>
            <input
              type="password"
              className="input input-bordered w-full"
              placeholder="Enter your password"
              required
            />

            {/* Login Button */}
            <button className="btn btn-neutral mt-4 w-full">Login</button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
