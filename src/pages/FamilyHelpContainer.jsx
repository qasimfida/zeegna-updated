import React from "react";
import { Link } from "react-router-dom";
import HelpCenterHeroSection from "../components/helpcenter/HelpCenterHeroSection";
// import FamilyTabs from "../components/helpcenterpartner/FamilyTabs";
import CrossIcon from "../assets/icons/faqsDropDown/CrossIcon";
import TickIcon from "../assets/icons/faqsDropDown/TickIcon";
import NewTabs from "../components/helpcenterpartner/TabsNew";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

function FamilyPartnerHelp() {
  return (
    <>
      <HelpCenterHeroSection
        changeTheHeading="Family help center"
        changeTheText="Your guide to finding the right care and support"
        extraThings={
          <>
            <span className="mx-2">|</span>
            <Link
              to="/family-help-center"
              className="hover:underline text-gray-500"
            >
              Family help center
            </Link>
          </>
        }
      />
      <NewTabs />
      <div className="flex flex-col items-center max-sm:gap-[20px] md:mx-[70px] max-sm:rounded-[30px]  justify-center mx-auto p-10	bg-[#DEFFED] rounded-[40px]  mb-20 max-sm:text-center max-sm:py-[50px] max-sm:px-[5px] max-sm:mx-[16px] max-sm:mb-[50px]  poppin">
        <h1 className="text-[24px]	 tracking-tight font-semibold  ">
          Did you find the help you were looking for?
        </h1>

        <div className="mt-[20px] flex  md:items-center gap-4 ">
          <Link to="/no-page">
            <button className="rounded-full flex items-center gap-4 bg-transparent border-[#1C1C1C] border-2 px-[45px] text-base font-medium py-[13px] text-black hover:bg-[#1C1C1C] hover:text-white">
              No
              <RxCross2 />
            </button>
          </Link>

          <Link to="/yes-page">
            <button className="rounded-full flex items-center gap-4 px-[45px] py-[13px] text-base font-medium text-black border-[#1C1C1C] border-2 hover:bg-[#1C1C1C] hover:text-white">
              Yes
              <FaCheck />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default FamilyPartnerHelp;
