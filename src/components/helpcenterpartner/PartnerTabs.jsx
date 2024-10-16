import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import PaymentsFees from "../../assets/icons/helpcentericons/PaymentsFees";
import AccountProfile from "../../assets/icons/helpcentericons/AccountProfile";
import TrustSafety from "../../assets/icons/helpcentericons/TrustSafety";

import GettingStarted from "../../assets/icons/helpcentericons/Gettingstarted";
import ServiceListing from "../../assets/icons/helpcentericons/ServiceListing";
import ClientInteraction from "../../assets/icons/helpcentericons/ClientInteraction";
import MarketingVisibility from "../../assets/icons/helpcentericons/MarketingVisibility";
import SupportResources from "../../assets/icons/helpcentericons/SupportResources";
import LegalCompliance from "../../assets/icons/helpcentericons/LegalCompliance";

import FamilyHelpCard from "./FamilyPartnerCards";
import PartnerHelpData from "../../data/PartnerHelpData"; // Partner Help data array

function PartnerTabs() {
  const [activeTab, setActiveTab] = useState(0);

  // Tabs
  const tabs = [
    {
      title: "Getting started",
      icon: <GettingStarted className="h-10 w-10 bg-black rounded-full p-10" />,
      content: (
        <div className="gap-8 mx-10 max-sm:mt-4 max-sm:mx-0 justify-center poppin">
          {PartnerHelpData.map((card) => (
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
      icon: <AccountProfile className="h-10 w-10 bg-black rounded-full p-10" />,
      content: (
        <div className="gap-8 mx-10 max-sm:mt-4 max-sm:mx-0 justify-center poppin">
          {PartnerHelpData.map((card) => (
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
      title: "Service listings",
      icon: <ServiceListing className="h-10 w-10 bg-black rounded-full p-10" />,
      content: (
        <div className="gap-8 mx-10 max-sm:mt-4 max-sm:mx-0 justify-center poppin">
          {PartnerHelpData.map((card) => (
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
      title: "Client interaction",
      icon: (
        <ClientInteraction className="h-10 w-10 bg-black rounded-full p-10" />
      ),
      content: (
        <div className="gap-8 mx-10 max-sm:mt-4 max-sm:mx-0 justify-center poppin">
          {PartnerHelpData.map((card) => (
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
      icon: <PaymentsFees className="h-10 w-10 bg-black rounded-full p-10" />,
      content: (
        <div className="gap-8 mx-10 max-sm:mt-4 max-sm:mx-0 justify-center poppin">
          {PartnerHelpData.map((card) => (
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
      icon: <TrustSafety className="h-10 w-10 bg-black rounded-full p-10" />,
      content: (
        <div className="gap-8 mx-10 max-sm:mt-4 max-sm:mx-0 justify-center poppin">
          {PartnerHelpData.map((card) => (
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
      title: "Marketing & visibility",
      icon: (
        <MarketingVisibility className="h-10 w-10 bg-black rounded-full p-10" />
      ),
      content: (
        <div className="gap-8 mx-10 max-sm:mt-4 max-sm:mx-0 justify-center poppin">
          {PartnerHelpData.map((card) => (
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
      title: "Support & resources",
      icon: (
        <SupportResources className="h-10 w-10 bg-black rounded-full p-10" />
      ),
      content: (
        <div className="gap-8 mx-10 max-sm:mt-4 max-sm:mx-0 justify-center poppin">
          {PartnerHelpData.map((card) => (
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
      title: "Legal & compliance",
      icon: (
        <LegalCompliance className="h-10 w-10 bg-black rounded-full p-10" />
      ),
      content: (
        <div className="gap-8 mx-10 max-sm:mt-4 max-sm:mx-0 justify-center poppin">
          {PartnerHelpData.map((card) => (
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
    <div className="w-full mx-auto px-4 py-8 poppin">
      {/* Swiper for Tab Navigation */}
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          400: { slidesPerView: 3 },
          640: { slidesPerView: 5 },
          768: { slidesPerView: 7 },
          1024: { slidesPerView: 9 },
        }}
        onSlideChange={(swiper) => setActiveTab(swiper.activeIndex)}
        className="flex justify-evenly border-b border-gray-200 mb-4 pb-10"
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

      {/* Tab Content */}
      <div className="xl:p-4 rounded-lg bg-white">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}

export default PartnerTabs;
