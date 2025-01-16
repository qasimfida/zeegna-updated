import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import NavigationButtons from "../navigationButtons/NavigationButtons";

function FundingMade6() {
  const [quillValue, setQuillValue] = useState("");

  const isNextDisabled = quillValue.trim() === "";

  return (
    <div className="pt-[50px] pb-[100px] md:pt-[100px] md:pb-[215px] max-sm:px-[16px] flex items-center justify-center poppin">
      <div className="w-full max-w-[600px]">
        {/* Question Title */}
        <h2 className="md:text-[18px] text-[16px] font-semibold leading-[28px] mb-[15px]">
          Are there any additional details or challenges about your funding
          or project needs?
        </h2>

        {/* React Quill Input */}
        <ReactQuill
          theme="snow"
          value={quillValue}
          onChange={setQuillValue}
          placeholder="Please enter your comments"
          className="bg-transparent mt-4 rounded-t-[15px] text-[14px] font-medium"
        />

        {/* Navigation Buttons */}
        <div className="mt-[40px] md:mt-[60px] flex justify-between items-center gap-4">
          <Link to="/question18">
            <button className="text-[#5E5E6F] text-[16px] font-medium">
              &lt; Previous
            </button>
          </Link>

          <Link to={isNextDisabled ? "#" : "/profile-setup"}>
            <button
              className={`rounded-full flex items-center justify-center gap-4 w-[200px] py-[12px] text-base font-medium text-white border-[#1C1C1C] ${
                isNextDisabled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#1C1C1C] border-2 hover:bg-white hover:text-black"
              }`}
              disabled={isNextDisabled}
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

export default FundingMade6;
