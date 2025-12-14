import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registerUser, updateUserProfile, setUser } = useAuth(); // setUser add korte paro
  const location = useLocation();
  const navigate = useNavigate();
  console.log("in register", location);

  const handleRegistration = (data) => {
    const profileImg = data.photo[0];

    //  Register user
    registerUser(data.email, data.password)
      .then((result) => {
        const currentUser = result.user;

        //  Upload image
        const formData = new FormData();
        formData.append("image", profileImg);
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host_KEY
        }`;

        axios.post(image_API_URL, formData).then((res) => {
          const imageUrl = res.data.data.url;

          //  Update profile
          const userProfile = {
            displayName: data.name, // corrected typo
            photoURL: imageUrl,
          };

          updateUserProfile(userProfile)
            .then(() => {
              console.log("User profile updated successfully");
              navigate(location?.state || "/");

              //  Update local user state instantly
              setUser({
                ...currentUser,
                displayName: data.name,
                photoURL: imageUrl,
              });
            })
            .catch((error) => console.log(error));
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero bg-base-200 min-h-screen flex flex-col py-5 px-4 gap-8">
      <h1 className="text-5xl font-bold text-gray-800 text-center">
        Register now!
      </h1>

      <div className="card bg-base-100 w-full max-w-sm shadow-2xl rounded-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit(handleRegistration)}>
            <div className="flex flex-col gap-4">
              {/* Name */}
              <label className="label font-semibold">Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="input input-bordered w-full"
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-red-500">Name is required</p>}

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

              {/* Profile Image */}
              <label className="label font-semibold">Profile Image</label>
              <input
                type="file"
                accept="image/*"
                className="file-input file-input-neutral w-full"
                {...register("photo", { required: true })}
              />
              {errors.photo && (
                <p className="text-red-500">Profile image is required</p>
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
                  Password must contain one uppercase, one lowercase, and one
                  number
                </p>
              )}

              {/* Confirm Password */}
              <label className="label font-semibold">Confirm Password</label>
              <input
                type="password"
                {...register("confirmPassword", { required: true })}
                className="input input-bordered w-full"
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && (
                <p className="text-red-500">Confirm password is required</p>
              )}

              <button type="submit" className="btn bg-primary mt-4 w-full">
                Register
              </button>
            </div>

            <p className="text-center p-5">
              Already have an account?{" "}
              <Link
                state={location.state}
                className="text-blue-400 underline"
                to="/login"
              >
                Login
              </Link>
            </p>

            <SocialLogin />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
