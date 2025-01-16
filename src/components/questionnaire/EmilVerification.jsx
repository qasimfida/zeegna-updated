import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

function EmailVerification() {
  const [code, setCode] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleCodeChange = (e) => {
    const value = e.target.value;
    setCode(value);
    setIsValid(value.length === 4 && /^[0-9]+$/.test(value));
  };

  return (
    <div className="pt-[50px] pb-[100px] md:pt-[50px] md:pb-[215px] max-sm:px-[16px] flex items-center justify-center poppin">
      <div className="w-full max-w-[700px] flex flex-col items-center">
        <h1 className="text-[21px] font-semibold text-center mb-2">
          Email verification
        </h1>
        <p className="text-center text-[18px] text-[#5E5E6F] font-medium mb-10 max-sm:text-[16px]">
          We sent you an email at{" "}
          <span className="text-[#2D7CD9]">xyz@gmail.com.</span> Please check
          your email for a link to set your password and complete your profile
          setup.
        </p>
        <div className="mb-4 md:w-[500px] w-full">
          <label
            htmlFor="code"
            className="block text-sm font-semibold md:text-[18px]  mb-2"
          >
            One-time authentication code
          </label>
          <input
            type="text"
            id="code"
            value={code}
            onChange={handleCodeChange}
            className="text-[14px] text-[#5E5E6F] rounded-[10px] w-full px-[15px] py-[15px] border border-[#B6B9CE] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter 4 digit code"
            maxLength={4}
            required
          />
        </div>

        <div className="mt-[40px] md:w-[500px] md:mt-[60px] w-full flex justify-between items-center gap-4">
          <Link to="/profile-setup">
            <button className="text-[#5E5E6F] text-[16px] font-medium">
              &lt; Previous
            </button>
          </Link>

          <Link to={isValid ? "/find-help" : "#"}>
            <button
              className={`rounded-full flex items-center justify-center gap-4 w-[200px] py-[12px] text-base font-medium text-white border-[#1C1C1C] ${
                isValid
                  ? "bg-[#1C1C1C] border-2 hover:bg-white hover:text-black"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!isValid}
            >
              Next
              <FaChevronRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmailVerification;
