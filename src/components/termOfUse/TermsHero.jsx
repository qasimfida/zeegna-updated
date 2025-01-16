import React from "react";
import { Link, useLocation } from "react-router-dom";

const TermsHero = ({ heading, details }) => {
  return (
    <>
      <div className="flex justify-start w-full px-[40px] max-sm:px-[16px] max-sm:py-[16px] py-[20px] text-gray-500 text-sm font-medium">
        <Link
          to="/"
          className={`hover:underline ${
            location.pathname === "/" ? "text-gray-500" : "text-black"
          }`}
        >
          Home
        </Link>
        <span className="mx-2">|</span>
        <Link
          to="/terms-of-use"
          className={`hover:underline ${
            location.pathname === "/terms-of-use"
              ? "text-gray-500"
              : "text-black"
          }`}
        >
          Terms of use
        </Link>
      </div>

      <div className="text-center pb-[60px] pt-[16px] md:pb-[100px] md:pt-[80px] poppin">
        <h1 className="text-[27px] font-semibold">{heading}</h1>
        <p className="text-[18px] font-medium text-[#5E5E6F]">{details}</p>
      </div>
    </>
  );
};

export default TermsHero;
