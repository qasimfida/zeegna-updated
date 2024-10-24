import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginPageHeader from "../../layout/header/LoginPageHeader";
import Footer from "../../layout/footer/Footer";
import ShowIcon from "../../assets/icons/loginIcons/ShowIcon"; // Icon to show password
import HideIcon from "../../assets/icons/loginIcons/HideIcon";

function NewPassword() {
  const navigate = useNavigate();

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  return (
    <div className="bg-[#F7F7F7]">
      <LoginPageHeader />

      <div className="h-[757px] flex items-center justify-center w-full poppin ">
        <div className=" max-md:px-8 max:lg:py-6 max-w-[553px] flex flex-col items-center  max-sm:px-[16px] max-sm:pt-[50px]  max-sm:pb-[90px]">
          <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold text-center mb-2">
            Let's set a new password for you
          </h1>
          <p className="text-center text-[15px] sm:text-[16px] lg:text-[17px] text-[#5E5E6F] font-medium mb-8 sm:mb-10">
            Please enter new password
          </p>

          <form onSubmit={handlePasswordSubmit} className="lg:w-[470px]">
            {/* New Password Input */}
            <div className="mb-4 relative">
              <label
                htmlFor="new-password"
                className="block text-[17px] font-semibold text-black mb-2"
              >
                New password
              </label>
              <input
                type={showNewPassword ? "text" : "password"}
                id="new-password"
                className="shadow-sm text-sm rounded-[10px] w-full px-4 py-3.5 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
              <button
                type="button"
                className="absolute right-4 top-[57%] bottom-[57%] transform -translate-y-1/2 text-gray-400"
                onClick={toggleNewPasswordVisibility}
              >
                {showNewPassword ? <HideIcon /> : <ShowIcon />}
              </button>
            </div>

            <div className="mb-4 relative">
              <label
                htmlFor="confirm-password"
                className="block text-[17px] font-semibold text-black mb-2"
              >
                Confirm new password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirm-password"
                className="shadow-sm text-sm rounded-[10px] w-full px-4 py-3.5 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
              <button
                type="button"
                className="absolute right-4 top-[57%] bottom-[57%] transform -translate-y-1/2 text-gray-400"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? <HideIcon /> : <ShowIcon />}
              </button>
            </div>

            {/* Password Requirements */}
            <div className="p-2">
              <h2 className="text-sm font-medium text-[#7D7D84] mb-[5px]">
                Your password must:
              </h2>
              <ul className="list-disc pl-5 text-sm text-[#7D7D84]">
                <li>Have at least 8 characters</li>
                <li>Contain a special character</li>
                <li>Not be commonly used and easy to guess</li>
              </ul>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3.5 mt-8 mb-4 px-4 border-2 border-black rounded-full shadow-sm text-sm font-medium text-white bg-[#1C1C1C] hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save Password
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NewPassword;
