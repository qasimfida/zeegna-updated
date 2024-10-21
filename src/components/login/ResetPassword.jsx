import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginPageHeader from "../../layout/header/LoginPageHeader";

function ResetPassword() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/new-password");
  };

  return (
    <div className="bg-[#F7F7F7]">
      <LoginPageHeader />
      <div className="lg:min-h-[648px] flex  justify-center w-full poppin lg:mt-[90px]">
        <div className="px-8 py-6 max-w-[553px]">
          <h1 className="text-[32px] font-semibold text-center mb-2">
            Let's help reset your password
          </h1>
          <p className="text-center text-[17px] text-[#5E5E6F] font-medium mb-10">
            Please enter your email to receive a link
          </p>
          <form onSubmit={handleSubmit}>
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

            <button
              type="submit"
              className="w-full flex justify-center py-3.5 mt-[30px] mb-4 px-4 border-2 border-black rounded-full shadow-sm text-sm font-medium text-white bg-[#1C1C1C] hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
            <div className="text-center text-sm">
              <Link
                to="/login"
                className="inline-block text-[#2D7CD9] font-medium align-baseline hover:text-blue-800"
              >
                Cancel and return to login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
