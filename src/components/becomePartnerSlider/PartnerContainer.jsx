import React from "react";
import PartnerSlider from "./PartnerSlider";
import Netsales from "../netSales/Netsales";
import rating from "../../../public/images/rating.png";
import { Link } from "react-router-dom";
import PersonOne from "../../../public/images/personManOne.png";
import PersonTwo from "../../../public/images/personWomen.png";
import PersonThree from "../../../public/images/personManTwo.png";
import PersonFour from "../../../public/images/personManFour.png";
import PersonFive from "../../../public/images/personManThree.png";
// import Partner from "/images/Partner.png";
import Partner from "/images/Business.png";
// import Partner from "../../../public/images/Business.png";

const PartnerContainer = () => {
  return (
    <div className="  font-poppins">
      <div className="flex flex-col gap-[20px] items-center md:pt-[100px] max-sm:pt-[90px] max-sm:pb-[60px] px-[29px] md:pb-[120px]">
        <img src={Partner} alt="cityscape" className=" w-[70px] h-auto   " />
        <h1 className="text-[28px] md:leading-[80px] leading-[40px] sm:text-[48px] md:text-[64px] font-semibold font-poppins text-center max-sm:text-[27px]">
          Grow your business
        </h1>
        <p className="text-[20px] font-medium text-[#5E5E6F] text-center max-sm:text-[18px] md:w-[830px] ">
          Join a trusted network dedicated to transform homes into safer,
          smarter, and more accessible living spaces for families and seniors
        </p>
        <div className="flex justify-between">
          <button className=" border-2 border-[#1C1C1C] text-white bg-[#1C1C1C] font-medium rounded-full py-[13px] px-[80px]  cursor-pointer md:mt-[20px]  hover:bg-white hover:text-black font-poppins ">
          Join our Partner Network
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnerContainer;
