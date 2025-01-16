import React from "react";
import PartnerSlider from "./PartnerSlider";
import Netsales from "../netSales/Netsales";
import rating from "../../../public/images/rating.png";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import PersonOne from "../../../public/images/personManOne.png"
import PersonTwo from "../../../public/images/personWomen.png"
import PersonThree from "../../../public/images/personManTwo.png"
import PersonFour from "../../../public/images/personManFour.png"
import PersonFive from "../../../public/images/personManThree.png"
=======
import PersonOne from "../../../public/images/personManOne.png";
import PersonTwo from "../../../public/images/personWomen.png";
import PersonThree from "../../../public/images/personManTwo.png";
import PersonFour from "../../../public/images/personManFour.png";
import PersonFive from "../../../public/images/personManThree.png";
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9

const PartnerContainer = () => {
  return (
    <div className="pt-[30px] max-sm:pt-[16px] pb-[50px] font-poppins">
<<<<<<< HEAD
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
=======
      <div className="flex flex-col items-center md:pt-[150px] max-sm:pt-[50px] px-[29px] md:pb-[175px]">
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
        <h1 className="text-[28px] sm:text-[48px] md:text-[64px] font-semibold font-poppins text-center max-sm:text-[28px]">
          Grow your business
        </h1>
        <p className="text-[24px] font-medium text-[#5E5E6F] text-center max-sm:text-[19px] max-sm:sm-[16px]">
          Join our network to help millions of seniors to age{" "}
          <br className="max-sm:hidden" /> at home in good health and comfort
        </p>
        <div className="flex justify-between">
          <button className=" border-2 border-[#1C1C1C] text-white bg-[#1C1C1C] font-medium rounded-full py-[13px] px-[80px]  cursor-pointer mt-[30px] mb-[30px] hover:bg-white hover:text-black font-poppins ">
            Start today
          </button>
        </div>
      </div>
<<<<<<< HEAD
      <div className="">
        {/* <img src={PersonOne} alt="" />
        <img src={PersonTwo} alt="" />
        <img src={PersonThree} alt="" />
        <img src={PersonFour} alt="" />
        <img src={PersonFive} alt="" /> */}
        <PartnerSlider />
      </div>
=======
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
    </div>
  );
};

export default PartnerContainer;
