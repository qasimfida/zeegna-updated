import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginPageHeader from "../../layout/header/LoginPageHeader";
import ShowIcon from "../../assets/icons/loginIcons/ShowIcon";
import HideIcon from "../../assets/icons/loginIcons/HideIcon";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="bg-[#F7F7F7]">
      <LoginPageHeader />

      <div className="lg:pb-[192px] flex max-md:items-center justify-center w-full poppin lg:py-[90px]">
        <div className="px-8  max-w-[552px] max-sm:px-[16px] max-sm:pt-[50px] max-sm:pb-[90px]">
          <h1 className="text-[32px] font-semibold text-center mb-2 max-sm:text-[24px]">
            We're happy to see you again
          </h1>
          <p className="text-center text-[17px] text-[#5E5E6F] font-medium mb-10 max-sm:text-[17px]">
            Please enter your details to login
          </p>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-[#5E5E6F] mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm text-sm rounded-[10px] w-full px-4 py-3.5 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-[#5E5E6F] mb-2"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="shadow-sm text-sm rounded-[10px] w-full px-4 py-3.5 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="absolute right-4 top-[55%] bottom-[55%] transform -translate-y-1/2 text-gray-400"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <HideIcon /> : <ShowIcon />}
              </button>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="!h-5 !w-5 !rounded-md border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-[#5E5E6F]"
                >
                  Remember me
                </label>
              </div>
              <Link
                to="/reset-password"
                className="text-sm text-[#2D7CD9] hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Forgot Password?
              </Link>
            </div>
            <button
              onClick={handleLoginClick}
              type="submit"
              className="w-full flex justify-center py-3.5 mt-8 mb-4 px-4 border-2 border-black rounded-full shadow-sm text-sm font-medium text-white bg-[#1C1C1C] hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
            <div className="text-center text-sm">
              Don't have an account yet?{" "}
              <Link
                to="/signup"
                className="inline-block text-[#2D7CD9] align-baseline hover:text-blue-800"
              >
                Get started
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
