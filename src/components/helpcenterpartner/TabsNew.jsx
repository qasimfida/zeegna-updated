import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PartnerHelpData from "../../data/PartnerHelpData";
import FamilyHelpData from "../../data/FamilyHelpData"; 
import ChoosingProviders from "../../assets/icons/helpcentericons/ChoosingProviders";
import ServiceDetail from "../../assets/icons/helpcentericons/ServiceDetails";
import BookingServices from "../../assets/icons/helpcentericons/BookingServices";
import ProviderInteraction from "../../assets/icons/helpcentericons/ProviderInteraction";
import PaymentsFees from "../../assets/icons/helpcentericons/PaymentsFees";
import AccountProfile from "../../assets/icons/helpcentericons/AccountProfile";
import TrustSafety from "../../assets/icons/helpcentericons/TrustSafety";
import FindingHelp from "../../assets/icons/helpcentericons/FindingHelp";
import GettingStarted from "../../assets/icons/helpcentericons/GettingStarted";
import "../../assets/css/scrollBar.css";

function Tabs() {
  const [activeTab, setActiveTab] = useState(0); 
  const location = useLocation();
  const tabs = [
    { title: "Getting started", icon: <GettingStarted /> },
    { title: "Finding help", icon: <FindingHelp /> },
    { title: "Choosing providers", icon: <ChoosingProviders /> },
    { title: "Service details", icon: <ServiceDetail /> },
    { title: "Provider interaction", icon: <ProviderInteraction /> },
    { title: "Booking service", icon: <BookingServices /> },
    { title: "Payments & fees", icon: <PaymentsFees /> },
    { title: "Account & profile", icon: <AccountProfile /> },
    { title: "Trust & safety", icon: <TrustSafety /> },
    { title: "Trust & safety", icon: <TrustSafety /> },
    { title: "Trust & safety", icon: <TrustSafety /> },
    { title: "Trust & safety", icon: <TrustSafety /> },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index); 
  };

  const getPartnerData = () => {
    return PartnerHelpData;
  };
  const getFamilyData = () => {
    return FamilyHelpData;
  };
  const data = location.pathname.includes("partner") ? PartnerHelpData : FamilyHelpData;
  return (
    <div className="w-full py-[40px] poppin">
      <Swiper
        className="items-center justify-center flex flex-row w-full pb-[20px] container overflow-x-scroll"
        spaceBetween={5}
        slidesPerView={3}
        breakpoints={{
          400: { slidesPerView: 3 },
          640: { slidesPerView: 5 },
          768: { slidesPerView: 7 },
          1024: { slidesPerView: 9 },
        }}
      >
        {tabs.map((tab, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center w-full ">
            <button
              onClick={() => handleTabClick(index)}
              className={`pb-[20px] flex flex-col items-center font-semibold transition-colors duration-300 ${
                activeTab === index
                  ? "text-[#5E5E6F] font-bold"
                  : "text-[#5E5E6F]"
              }`}
            >
              <span
                className={`h-[55px] w-[55px] rounded-full flex items-center justify-center mb-2 ${
                  activeTab === index ? "bg-[#F3B5B5]" : "bg-[#F9ECEC]"
                }`}
              >
                {tab.icon}
              </span>
              <span className="text-[13px] text-[#5E5E6F] font-semibold">{tab.title}</span>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center justify-center flex-col  py-[40px]">
        {data.map((item) => (
          <div key={item.id} className="px-[16px] md:px-[300px] py-[20px] flex flex-col gap-[10px] ">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
