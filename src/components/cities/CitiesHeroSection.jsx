import React from "react";
import { Link, useLocation } from "react-router-dom";

const CitiesHeroSection = () => {
  const location = useLocation(); // Hook to get the current route

  return (
    <>
      {/* Breadcrumb Section */}
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
          to="/cities"
          className={`hover:underline ${
            location.pathname === "/cities" ? "text-gray-500" : "text-black"
          }`}
        >
          Cities
        </Link>
        <span className="mx-2">|</span>
        <Link
          to="/cities"
          className={`hover:underline ${
            location.pathname === "/cities" ? "text-gray-500" : "text-black"
          }`}
        >
          Charlotte, NC
        </Link>
      </div>

      {/* Title Section */}
      <div className="text-center max-sm:mx-[16px] max-sm:text-left pb-[100px] max-sm:pb-[60px]">
        <h2 className="font-semibold text-[32px] max-sm:text-[21px] mt-[20px] ">
          Home modification services in Charlotte, NC
        </h2>
        <p className="text-[#5E5E6F] text-[18px] font-medium mt-[10px]">
          Connect with pros specializing in home safety and accessibility
          upgrades for seniors
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col max-sm:flex-col-reverse	 items-center justify-center md:gap-[80px] md:flex-row w-full bg-[#F7F7F7] py-[80px] max-sm:py-[50px] max-sm:px-[15px] shadow-sm md:mb-[80px]">
        <div className="md:w-[657px]">
          <h4 className="mb-[20px] max-sm:my-[15px] md:w-[580px] max-sm:text-[18px] text-[24px] font-semibold">
            Find the right home modification experts in Charlotte, NC
          </h4>
          <p className="text-[#5E5E6F] text-[16px] font-medium">
            Take our comprehensive home evaluation quiz to uncover potential
            safety risks and find solutions tailored to each room—bathroom
            remodels for better accessibility, kitchen upgrades for ease of use,
            stair adjustments for safer mobility, grab bar installations for
            added stability, and more. We’ll match you with trusted local
            experts who can help create a secure, comfortable, and accessible
            home for you to age with confidence.
          </p>
        </div>

        {/* Image Section */}
        <div className="shrink-0 md:w-[560px] overflow-hidden">
          <img
            src="images/cities1.png"
            alt="Home Modification Experts"
            className="h-full w-full rounded-[10px] object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default CitiesHeroSection;
