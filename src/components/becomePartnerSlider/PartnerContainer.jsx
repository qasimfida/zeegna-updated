import React from "react";
import PartnerSlider from "./PartnerSlider";
import Netsales from "../netSales/Netsales";
import rating from "../../../public/images/rating.png";
import { Link } from "react-router-dom";

const PartnerContainer = () => {
  return (
    <div className="pt-[30px] max-sm:pt-[16px] pb-[50px] bg-[#eefff0] font-poppins">
      <div className="flex justify-start md:pl-[38px] max-sm:pl-[16px] w-full text-sm font-medium">
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
          to="/become-partner"
          className={`hover:underline ${
            location.pathname === "/resources" ? "text-black" : "text-gray-500"
          }`}
        >
          Become a Partner
        </Link>
      </div>
      <div className="flex flex-col items-center max-sm:pt-[50px]">
        <h1 className="text-[28px] sm:text-[48px] md:text-[64px] font-semibold font-poppins text-center max-sm:text-[28px]">
          Grow your business
        </h1>
        <p className="text-[24px] font-medium text-[#5E5E6F] text-center max-sm:text-[19px] max-sm:sm-[16px]">
          Join our network to help millions of seniors to age{" "}
          <br className="max-sm:hidden" /> at home in good health and comfort
        </p>
        <div className="flex justify-between">
          <div className="relative lg:right-[180px] xl:right-[250px] top-[120px] hidden md:block">
            <img src={rating} className=""></img>
          </div>
          <button className=" border-2 border-[#1C1C1C] text-white bg-[#1C1C1C] font-medium rounded-full py-[13px] px-[80px]  cursor-pointer mt-[30px] mb-[30px] hover:bg-white hover:text-black font-poppins ">
            Start today
          </button>
          <div className="relative lg:left-[180px] xl:left-[250px] top-[120px] hidden md:block">
            <Netsales />
          </div>
        </div>
      </div>
      <div className="">
        {/* <div className="hidden sm:flex justify-between">
          <div className="relative top-[60px] left-[54px]">
            <img src={rating} className=""></img>
          </div>
          <div className="relative top-[56px] right-[113px]">
            <Netsales />
          </div>
        </div> */}
        <PartnerSlider />
      </div>
    </div>
  );
};

export default PartnerContainer;
