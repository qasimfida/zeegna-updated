import React from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

function QuestionaireHeader({
  progress = 10,
  showProgressBar = true,
  styles = "",
}) {
  const calculateWidth = (progress) => {
    const minWidth = 16;
    const maxWidth = progress > 10 ? `${progress}%` : `${minWidth}px`;
    return maxWidth;
  };

  return (
    <header className={`border-b poppin ${styles}`}>
      {/* Header Content */}
      <div className="flex justify-between  items-center md:px-[37px] px-[16px] py-[12px] md:py-[22px] bg-white">
        {/* Left Text */}
        <Link to="/" className="flex">
          <span className="text-[#1C2024] font-bold text-[24px] leading-[1.5] tracking-wide">
            zeegna
          </span>
        </Link>

        {/* Right Percentage */}
        {showProgressBar && (
          <span className="text-[#5E5E6F] text-[20px] font-semibold leading-[1.5] tracking-wide">
            {progress === 100 ? (
              <FaCheck className="text-[#109088]" />
            ) : (
              `${progress}%`
            )}
          </span>
        )}
      </div>

      {/* Progress Bar */}
      {showProgressBar && (
        <div className="h-[1px] bg-white relative">
          <div
            className="h-[2px] bg-[#109088] transition-all duration-300"
            style={{ width: calculateWidth(progress) }}
          >
            {/* Tick Icon */}
            {progress === 100 && (
              <FaCheck
                className="absolute hidden bottom-[50%] text-[#109088]"
                style={{ transform: "translateX(50%)" }}
              />
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default QuestionaireHeader;
