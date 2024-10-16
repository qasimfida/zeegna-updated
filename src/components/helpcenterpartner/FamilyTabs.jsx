import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ChoosingProviders from "../../assets/icons/helpcentericons/Choosingproviders";
import ServiceDetail from "../../assets/icons/helpcentericons/Servicedetails";
import BookingServices from "../../assets/icons/helpcentericons/BookingServices";
import ProviderInteraction from "../../assets/icons/helpcentericons/ProviderInteraction";
import PaymentsFees from "../../assets/icons/helpcentericons/PaymentsFees";
import AccountProfile from "../../assets/icons/helpcentericons/AccountProfile";
import TrustSafety from "../../assets/icons/helpcentericons/TrustSafety";
import FindingHelp from "../../assets/icons/helpcentericons/Findinghelp";
import GettingStarted from "../../assets/icons/helpcentericons/Gettingstarted";

import FamilyHelpCard from "./FamilyPartnerCards";
import FamilyHelpData from "../../data/FamilyHelpData";

function FamilyTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Getting started",
      icon: <GettingStarted className="h-10 w-10 bg-black rounded-full p-2" />,
      content: (
        <div className="grid gap-8 mx-10 max-sm:mt-4 max-sm:mx-0 justify-center poppin">
          {FamilyHelpData.map((card) => (
            <FamilyHelpCard
              key={card.id}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Finding Help",
      icon: <FindingHelp className="h-10 w-10 bg-black rounded-full p-2" />,
      content: (
        <div className="grid gap-8 mx-10 max-sm:mt-4 max-sm:mx-0 justify-center">
          {FamilyHelpData.map((card) => (
            <FamilyHelpCard
              key={card.id}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Choosing providers",
      icon: (
        <ChoosingProviders className="h-10 w-10 bg-black rounded-full p-2" />
      ),
      content: (
        <div className="grid gap-8 mx-10 max-sm:mt-4 max-sm:mx-0 justify-center">
          {FamilyHelpData.map((card) => (
            <FamilyHelpCard
              key={card.id}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Service details",
      icon: <ServiceDetail className="h-10 w-10 bg-black rounded-full p-2" />,
      content: (
        <div className="grid gap-8 mx-10 max-sm:mt-4 max-sm:mx-0 justify-center">
          {FamilyHelpData.map((card) => (
            <FamilyHelpCard
              key={card.id}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Provider interaction",
      icon: (
        <ProviderInteraction className="h-10 w-10 bg-black rounded-full p-2" />
      ),
      content: (
        <div className="grid gap-8 mx-10 max-sm:mt-4 max-sm:mx-0 justify-center">
          {FamilyHelpData.map((card) => (
            <FamilyHelpCard
              key={card.id}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Booking service",
      icon: <BookingServices className="h-10 w-10 bg-black rounded-full p-2" />,
      content: (
        <div className="grid gap-8 mx-10 max-sm:mt-4 max-sm:mx-0 justify-center">
          {FamilyHelpData.map((card) => (
            <FamilyHelpCard
              key={card.id}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Payments & fees",
      icon: <PaymentsFees className="h-10 w-10 bg-black rounded-full p-2" />,
      content: (
        <div className="grid gap-8 mx-10 max-sm:mt-4 max-sm:mx-0 justify-center">
          {FamilyHelpData.map((card) => (
            <FamilyHelpCard
              key={card.id}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Account & profile",
      icon: <AccountProfile className="h-10 w-10 bg-black rounded-full p-2" />,
      content: (
        <div className="grid gap-8 mx-10 max-sm:mt-4 max-sm:mx-0 justify-center">
          {FamilyHelpData.map((card) => (
            <FamilyHelpCard
              key={card.id}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Trust & safety",
      icon: <TrustSafety className="h-10 w-10 bg-black rounded-full p-2" />,
      content: (
        <div className="grid gap-8 mx-10 max-sm:mt-4 max-sm:mx-0 justify-center">
          {FamilyHelpData.map((card) => (
            <FamilyHelpCard
              key={card.id}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="w-full mx-auto px-4 py-8">
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          400: { slidesPerView: 3 },
          640: { slidesPerView: 5 },
          768: { slidesPerView: 7 },
          1024: { slidesPerView: 9 },
        }}
      >
        {tabs.map((tab, index) => (
          <SwiperSlide key={index}>
            <button
              onClick={() => setActiveTab(index)}
              className={`py-2 px-4 flex flex-col items-center transition-colors duration-300 ${
                activeTab === index
                  ? "text-[#5E5E6F] font-semibold"
                  : "text-sm font-semibold text-black hover:text-indigo-500"
              }`}
            >
              <span
                className={`h-[60px] w-[60px] rounded-full flex items-center justify-center mb-2 ${
                  activeTab === index ? "bg-[#F3B5B5]" : "bg-[#F9ECEC]"
                }`}
              >
                {tab.icon}
              </span>
              <span>{tab.title}</span>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="xl:p-4 rounded-lg bg-white">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}

export default FamilyTabs;
