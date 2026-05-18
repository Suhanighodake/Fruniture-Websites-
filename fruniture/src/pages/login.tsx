import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
          alt="Furniture"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-16 text-white">
          <h1 className="text-5xl font-bold leading-tight">
            Modern Furniture
            <br />
            For Modern Living
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-md">
            Discover elegant furniture crafted with comfort,
            style, and premium quality.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#f8f5f0] px-6">
        <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-2xl">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-800">
              Welcome Back
            </h2>

            <p className="text-gray-500 mt-2">
              Login to continue shopping
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-5">
              <label className="block mb-2 text-gray-700 font-medium">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black transition"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="block mb-2 text-gray-700 font-medium">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-black transition"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-4 top-4 text-gray-500"
                >
                  {showPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end mb-6">
              <button
                type="button"
                className="text-sm text-gray-600 hover:text-black"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-xl text-lg font-medium hover:bg-gray-800 transition"
            >
              Login
            </button>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 h-px bg-gray-300"></div>

              <p className="px-4 text-sm text-gray-400">
                OR
              </p>

              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Google Login */}
            <button
              type="button"
              className="w-full border border-gray-300 py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-100 transition"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />

              Continue with Google
            </button>

            {/* Register */}
            <p className="text-center text-gray-500 mt-8">
              Don’t have an account?{" "}
              <span className="text-black font-semibold cursor-pointer hover:underline">
                Register
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;