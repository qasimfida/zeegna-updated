import React from "react";
import { Link } from "react-router-dom";
import HelpCenterHeroSection from "../components/helpcenter/HelpCenterHeroSection";
import TickIcon from "../assets/icons/faqsDropDown/TickIcon";
import CrossIcon from "../assets/icons/faqsDropDown/CrossIcon";
import PartnerTabs from "../components/helpcenterpartner/PartnerTabs";
import Header from "../layout/header/Header";

function PartnerHelpContainer() {
  return (
    <>
      <HelpCenterHeroSection
        changeTheHeading="Partner help center"
        changeTheText="All you need to connect with families in need"
        extraThings={
          <>
            <span className="mx-2">|</span>
            <Link
              to="/partner-help-center"
              className="hover:underline text-gray-500"
            >
              Partner help center
            </Link>
          </>
        }
      />
      <PartnerTabs />
      <div className=" flex flex-col items-center justify-center max-w-2xl mx-auto p-10	bg-[#DEFFED] rounded-[40px] mb-20 max-sm:w-[18rem] poppin">
        <h1 className="text-2xl	 tracking-tight font-semibold sm:text md:text-">
          Did you find the help you were looking for?
        </h1>

        <div className="mt-10 flex max-sm:flex-col md:items-center gap-4 poppin">
          <Link to="/no-page">
            {" "}
            <button className="rounded-full flex items-center gap-4 bg-transparent border-[#1C1C1C] border-2 px-10 text-base font-medium py-[13px] text-black">
              No
              <CrossIcon />
            </button>
          </Link>

          <Link to="/yes-page">
            {" "}
            <button className="rounded-full flex items-center gap-4 bg-black px-10 text-base font-medium py-[13px] text-white border-[#1C1C1C] border-2">
              Yes
              <TickIcon />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default PartnerHelpContainer;
