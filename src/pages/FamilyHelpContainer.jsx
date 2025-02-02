import React from "react";
import { Link, useParams } from "react-router-dom";
import HelpCenterHeroSection from "../components/helpcenter/HelpCenterHeroSection";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import familyData from "../data/contents/HelpCenter/familyData";

function FamilyPartnerHelp() {
  const { category } = useParams();

  const contents = {
    "getting-started": familyData.getting_started,
    "choosing-providers": familyData.choosing_providers,
    "service-details": familyData.service_details,
    "provider-interaction": familyData.provider_interaction,
    "booking-services": familyData.booking_services,
    "payments-fees": familyData.payments_fees,
    "account-profile": familyData.account_profile,
    "trust-safety": familyData.trust_safety,
    "finding-help": familyData.finding_help,
    "booking-service": familyData.booking_service,
  };

  return (
    <>
      <HelpCenterHeroSection
        changeTheHeading="Family help center"
        changeTheText="Your guide to finding the right care and support"
        extraThings={
          <>
            <span className="mx-2">|</span>
            <Link
              to="/help-center/family"
              className="hover:underline text-gray-500"
            >
              Family help center
            </Link>
          </>
        }
      />

      <div class="md:border-b border-[#EAEAF1] mb-[30px]"></div>

      <div className="mx-auto flex items-center justify-center flex-col max-sm:px-[16px] md:w-[840px] poppin">
        <div dangerouslySetInnerHTML={{ __html: contents[category] }} />
      </div>

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
