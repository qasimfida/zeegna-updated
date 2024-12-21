import React from "react";
import { Link, useLocation } from "react-router-dom";

const AllServicesHero = () => {
  const location = useLocation();

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
          to="/services"
          className={`hover:underline ${
            location.pathname === "/services" ? "text-gray-500" : "text-black"
          }`}
        >
          All service categories
        </Link>
      </div>

      {/* Title Section */}
      <div className="text-center max-sm:mx-[16px] max-sm:text-left pb-[100px] poppin max-sm:pb-[60px]">
        <h2 className="font-semibold text-[27px] max-sm:text-center max-sm:text-[21px] mt-[20px] max-sm:mt-[38px] ">
          Explore Top Services for a Safe and Accessible Home
        </h2>
        <p className="text-[#5E5E6F] text-[18px] font-medium mt-[10px] max-sm:text-center">
          Get matched with local professionals to create a safe, accessible home
          for aging in place.
        </p>
      </div>
    </>
  );
};

export default AllServicesHero;
