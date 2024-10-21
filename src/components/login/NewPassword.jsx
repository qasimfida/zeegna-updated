import React from "react";
import { useNavigate } from "react-router-dom";
import LoginPageHeader from "../../layout/header/LoginPageHeader";

function NewPassword() {
  const navigate = useNavigate();

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    navigate("/");
  };

  return (
    <div className="bg-[#F7F7F7]">
      <LoginPageHeader />

      <div className="min-h-[100vh] flex items-center justify-center w-full poppin ">
        <div className=" max-md:px-8 py-6 max-w-[553px] flex flex-col items-center md:mt-[90px]">
          <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold text-center mb-2">
            Let's set a new password for you
          </h1>
          <p className="text-center text-[15px] sm:text-[16px] lg:text-[17px] text-[#5E5E6F] font-medium mb-8 sm:mb-10">
            Please enter new password
          </p>

          <form onSubmit={handlePasswordSubmit} className="lg:w-[470px]">
            {/* New Password Input */}
            <div className="mb-4">
              <label
                htmlFor="new-password"
                className="block text-sm font-semibold text-[#5E5E6F] mb-2"
              >
                New password
              </label>
              <input
                type="password"
                id="new-password"
                className="shadow-sm text-sm rounded-[10px] w-full px-4 py-3.5 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter a new password"
                required
              />
            </div>

            {/* Confirm Password Input */}
            <div className="mb-4">
              <label
                htmlFor="confirm-password"
                className="block text-sm font-semibold text-[#5E5E6F] mb-2"
              >
                Confirm new password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="shadow-sm text-sm rounded-[10px] w-full px-4 py-3.5 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Confirm your password"
                required
              />
            </div>

            {/* Password Requirements */}
            <div className="max-w-md mx-auto p-2">
              <h2 className="text-sm font-semibold text-gray-700">
                Your password must:
              </h2>
              <ul className="list-disc pl-5 text-sm text-gray-600">
                <li>Have at least 8 characters</li>
                <li>Contain a special character</li>
                <li>Not be commonly used and easy to guess</li>
              </ul>
            </div>

            {/* Save Password Button */}
            <button
              type="submit"
              className="w-full flex justify-center py-3.5 mt-8 mb-4 px-4 border-2 border-black rounded-full shadow-sm text-sm font-medium text-white bg-[#1C1C1C] hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewPassword;
