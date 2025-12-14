import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signInUser } = useAuth();

  const handleLogin = (data) => {
    console.log("login data", data);
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen flex flex-col py-5 px-4 gap-8">
      {/* Title Top */}
      <h1 className="text-5xl font-bold text-gray-800 text-center">
        Login now!
      </h1>

      {/* Card */}
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl rounded-2xl">
        <div className="card-body">
          {/* Form Added */}
          <form onSubmit={handleSubmit(handleLogin)}>
            <fieldset className="flex flex-col gap-4">
              {/* Email */}
              <label className="label font-semibold">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input input-bordered w-full"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500">Email is required</p>
              )}

              {/* Password */}
              <label className="label font-semibold">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                })}
                className="input input-bordered w-full"
                placeholder="Enter your password"
              />
              {errors.password?.type === "minLength" && (
                <p className="text-red-500">
                  Password must be 6 character or longer
                </p>
              )}
              {errors.password?.type === "required" && (
                <p className="text-red-500">Password is required</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500">
                  Password must be one lowercase and one uppercase and at least
                  one number
                </p>
              )}

              {/* Login Button */}
              <button type="submit" className="btn bg-primary mt-4 w-full">
                Login
              </button>
            </fieldset>
            <p className="text-center p-5 ">
              New to this website please{" "}
              <Link className="text-blue-400 underline" to="/register">
                {" "}
                Register
              </Link>
            </p>
            <SocialLogin></SocialLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
