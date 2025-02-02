import React from "react";
import { Link } from "react-router-dom";
import HelpCenterHeroSection from "../components/helpcenter/HelpCenterHeroSection";
import TickIcon from "../assets/icons/faqsDropDown/TickIcon";
import CrossIcon from "../assets/icons/faqsDropDown/CrossIcon";
import PartnerTabs from "../components/helpcenterpartner/PartnerTabs";
import Tabs from "../components/helpcenterpartner/TabsNew";
import Header from "../layout/header/Header";
import PartnerHelpData from "../data/PartnerHelpData";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

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
              to="/help-center/partner"
              className="hover:underline text-gray-500"
            >
              Partner help center
            </Link>
          </>
        }
      />

      <div class="md:border-b border-[#EAEAF1] mb-[30px]"></div>

      <div className="mx-auto flex items-center justify-center max-sm:px-[16px] flex-col md:w-[840px]">
        {PartnerHelpData.map((item) => (
          <div
            key={item.id}
            className="px-[0px] md:px-[50px] py-[20px] flex flex-col gap-[10px]"
          >
            <h2 className="text-xl max-sm:text-[18px] font-semibold">
              {item.title}
            </h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center max-sm:gap-[20px] md:mx-[70px] max-sm:rounded-[30px] justify-center mx-auto p-10	bg-[#DEFFED] rounded-[40px] mb-20 max-sm:text-center max-sm:py-[50px] max-sm:px-[5px] max-sm:mx-[16px] max-sm:mb-[50px]  poppin">
        <h1 className="text-2xl	 tracking-tight font-semibold sm:text md:text-">
          Did you find the help you were looking for?
        </h1>

        <div className="md:mt-10 flex  md:items-center gap-4 ">
          <Link to="/no-page">
            {" "}
            <button className="rounded-full flex items-center gap-[7px] max-sm:px-[32px] bg-transparent border-[#1C1C1C] border-2 px-[45px] text-base font-medium py-[13px] text-black hover:bg-[#1C1C1C] hover:text-white">
              No
              <RxCross2 />
            </button>
          </Link>

          <Link to="/yes-page">
            <button className="rounded-full flex items-center gap-[7px] max-sm:px-[32px] px-[45px] py-[13px] text-base font-medium text-black border-[#1C1C1C] border-2 hover:bg-[#1C1C1C] hover:text-white">
              Yes
              <FaCheck />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default PartnerHelpContainer;
