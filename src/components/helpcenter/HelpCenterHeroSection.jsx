import React from "react";
import { Link, useLocation } from "react-router-dom";

function HelpCenterHeroSection({
  changeTheHeading = "Got questions? We've answers",
  changeTheText = "Explore our help center to find the answers you need",
  extraThings,
}) {
  const location = useLocation();

  return (
    <section className="items-center w-full ">
      <div className="flex justify-start  w-full px-[40px] max-sm:px-[16px] max-sm:py-[16px] py-[20px] text-gray-500 text-sm font-medium">
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
          to="/help-center"
          className={`hover:underline ${
            location.pathname === "/help-center"
              ? "text-gray-500"
              : "text-black"
          }`}
        >
          Help Center
        </Link>
        {extraThings}
      </div>
      <div className="relative  px-5 py-12 md:px-12 lg:px-16 max-sm:px-[16px] poppin lg:pt-[60px] max-sm:pt-[28px] lg:pb-[80px]">
        <div className="flex w-full mx-auto text-left">
          <div className="relative inline-flex items-center mx-auto align-middle">
            <div className="text-center">
              <h1 className="max-w-5xl text-[21px] font-semibold  sm:text-[27px]  lg:max-w-5xl">
                {changeTheHeading}
              </h1>
              <p className="max-w-xl max-sm:w-full mx-auto mt-[10px] text-[18px] max-sm:text-[16px] font-medium text-[#5E5E6F]">
                {changeTheText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HelpCenterHeroSection;
