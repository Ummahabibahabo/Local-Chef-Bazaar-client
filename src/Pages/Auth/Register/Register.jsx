import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleRegistration = (data) => {
    console.log("after register", data);
  };
  return (
    <div className="hero bg-base-200 min-h-screen flex flex-col py-5 px-4 gap-8">
      {/* Title Top */}
      <h1 className="text-5xl font-bold text-gray-800 text-center">
        Register now!
      </h1>

      {/* Card */}
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl rounded-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit(handleRegistration)}>
            <div className="flex flex-col gap-4">
              <label className="label font-semibold">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input input-bordered w-full"
                placeholder="Enter your email"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500">Email is required</p>
              )}

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
              {errors.password?.type === "required" && (
                <p className="text-red-500">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500">
                  Password must be at least 6 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500">
                  password must have at least one lowcase,at least one upper
                  case and number
                </p>
              )}

              <button type="submit" className="btn btn-neutral mt-4 w-full">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
