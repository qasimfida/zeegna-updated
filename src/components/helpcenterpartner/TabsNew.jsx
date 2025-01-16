import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PartnerHelpData from "../../data/PartnerHelpData";
import FamilyHelpData from "../../data/FamilyHelpData";
import GettingStarted from "../../assets/icons/helpcentericons/GettingStarted";
import FindingHelp from "../../assets/icons/helpcentericons/FindingHelp";
import ChoosingProviders from "../../assets/icons/helpcentericons/ChoosingProviders";
import ServiceDetail from "../../assets/icons/helpcentericons/ServiceDetails";
import ProviderInteraction from "../../assets/icons/helpcentericons/ProviderInteraction";
import BookingServices from "../../assets/icons/helpcentericons/BookingServices";
import PaymentsFees from "../../assets/icons/helpcentericons/PaymentsFees";
import AccountProfile from "../../assets/icons/helpcentericons/AccountProfile";
import TrustSafety from "../../assets/icons/helpcentericons/TrustSafety";
import DropDownIcon from "../../assets/icons/dropdownIcon/DropDownIcon";

function Tabs() {
  const tabs = [
    {
      title: "Getting started",
      icon: <GettingStarted className="h-10 w-10 rounded-full p-10" />,
    },
    {
      title: "Finding help",
      icon: <FindingHelp className="h-10 w-10  rounded-full p-10" />,
    },
    {
      title: "Choosing providers",
      icon: <ChoosingProviders className="h-10 w-10  rounded-full p-10" />,
    },
    {
      title: "Service details",
      icon: <ServiceDetail className="h-10 w-10 rounded-full p-10" />,
    },
    {
      title: "Provider interaction",
      icon: <ProviderInteraction className="h-10 w-10  rounded-full p-10" />,
    },
    {
      title: "Booking service",
      icon: <BookingServices className="h-10 w-10 rounded-full p-10" />,
    },
    {
      title: "Payments & fees",
      icon: <PaymentsFees className="h-10 w-10 rounded-full p-10" />,
    },
    {
      title: "Account & profile",
      icon: <AccountProfile className="h-10 w-10 rounded-full p-10" />,
    },
    {
      title: "Trust & safety",
      icon: <TrustSafety className="h-10 w-10 rounded-full p-10" />,
    },
  ];
  const [isOpen, setIsOpen] = useState(true);

  const toggleTab = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();
  const data = location.pathname.includes("partner")
    ? PartnerHelpData
    : FamilyHelpData;

  return (
    <div className="w-full px-[16px] md:px-[70px] md:py-[40px] py-[30px] poppin flex flex-col md:flex-row md:gap-[50px]">
      <div className="w-[343px] h-fit  pt-[18px] px-[20px] border border-[#EAEAF1] rounded-3xl">
        <button
          type="button"
          className="flex items-center justify-between w-full pb-[18px] px-[15px] border-b border-[#EAEAF1]"
          onClick={toggleTab}
        >
          <span className="flex text-lg font-medium text-[16px] text-black text-left">
            Categories
          </span>
          <div
            className={`transform transition-transform duration-200 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <DropDownIcon />
          </div>
        </button>
        {isOpen && (
          <div className="px-4 pb-5 sm:px-6 sm:pb-6 pt-[20px]">
            {tabs.map((tab) => (
              <div className="flex gap-[10px] pb-[15px] items-center group">
                <div className="border-3 border-black bg-[#F9ECEC] hover:bg-[#F3B5B5] p-[17px] rounded-full group-hover:bg-[#F3B5B5]">
                  {tab.icon}
                </div>
                <h2 className="hover:font-bold font-semibold text-[16px] cursor-pointer text-[#5E5E6F] group-hover:font-bold group-hover:text-[#5E5E6F]">
                  {tab.title}
                </h2>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex items-center justify-center flex-col md:w-[840px]">
        {data.map((item) => (
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
    </div>
  );
}

export default Tabs;
