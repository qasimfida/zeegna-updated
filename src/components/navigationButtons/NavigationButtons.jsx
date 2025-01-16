import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const NavigationButtons = ({
  previousLink = "#",
  nextDisabled = false,
  handleNextClick,
}) => {
  return (
    <div className="mt-[40px] md:mt-[60px] flex justify-between items-center gap-4">
      {/* Previous Button */}
      <Link to={previousLink}>
        <button className="text-[#5E5E6F] text-[16px] font-medium">
          &lt; Previous
        </button>
      </Link>

      {/* Next Button */}
      <button
        onClick={handleNextClick}
        disabled={nextDisabled}
        className={`rounded-full flex items-center justify-center gap-4 w-[200px] py-[12px] text-base font-medium text-white border-[#1C1C1C] bg-[#1C1C1C] border-2 hover:bg-white hover:text-black ${
          nextDisabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Next
        <FaChevronRight />
      </button>
    </div>
  );
};

export default NavigationButtons;
