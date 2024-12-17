import React from "react";
import PrivacyCard from "./PrivacyCard";
import PrivacyData from "../../data/PrivacyData";
import { Link, useLocation } from "react-router-dom";

const PrivacyContainer = () => {
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
          to="/privacy"
          className={`hover:underline ${
            location.pathname === "/privacy" ? "text-gray-500" : "text-black"
          }`}
        >
          Privacy policy
        </Link>
      </div>

      {/* Title Section */}
      <div className="text-center max-sm:mx-[16px] max-sm:text-left pb-[100px] poppin max-sm:pb-[60px]">
        <h2 className="font-semibold text-[27px] max-sm:text-center max-sm:text-[21px] mt-[20px] max-sm:mt-[38px]">
          Privacy policy
        </h2>
        <p className="text-[#5E5E6F] text-[18px] font-medium mt-[10px] max-sm:text-center">
          Your privacy matters to us - learn how we protect and handle your
          personal information
        </p>
      </div>

      {/* Privacy Cards */}
      {PrivacyData.map((item) => (
        <PrivacyCard
          key={item.id}
          heading={item.title}
          text={item.description}
        />
      ))}
    </>
  );
};

export default PrivacyContainer;
