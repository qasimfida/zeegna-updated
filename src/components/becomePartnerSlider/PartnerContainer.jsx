import React from "react";
import PartnerSlider from "./PartnerSlider";
import Netsales from "../netSales/Netsales";
import rating from "../../../public/images/rating.png";
import { Link } from "react-router-dom";

const PartnerContainer = () => {
  return (
    <div className="pt-[30px] pb-[50px] bg-[#eefff0] font-poppins">
      <div className="flex justify-start pl-[38px] w-full text-sm font-medium">
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
      <div className="flex flex-col items-center">
        <h1 className="text-[28px] sm:text-[48px] md:text-[64px] font-semibold font-poppins text-center">
          Grow your business
        </h1>
        <p className="text-[24px] font-medium text-[#5E5E6F] text-center">
          Join our network to help millions of seniors to age <br /> at home in
          good health and comfort
        </p>
        <div className="flex justify-between">
        <div className="relative right-[270px] top-[120px]">
            <img src={rating} className=""></img>
          </div>
        <button className="bg-black text-white py-[15px] px-[80px] rounded-full cursor-pointer mt-[30px] mb-[30px] hover:bg-white hover:text-black border-2 border-black">
          Start today
        </button>
        <div className="relative left-[270px] top-[120px]">
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



