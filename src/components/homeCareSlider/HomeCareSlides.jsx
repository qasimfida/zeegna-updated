import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import '../../assets/css/homeSlider.css';

function HomeCareSlides() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: "All articles" },
    { title: "Features" },
    { title: "Most popular" },
    { title: "Caregiver corner" },
    { title: "Personal care" },
    { title: "Home maintenance" },
    { title: "Transportation" },
    { title: "Legal matters" },
    { title: "Financial health" },
  ];

  return (
    <div className="relative w-full mx-auto poppin">
      <Swiper 
        spaceBetween={0} 
        slidesPerView="auto"
      >
        {tabs.map((tab, index) => (
            <SwiperSlide key={index} className="flex items-center relative">
            <button
              onClick={() => setActiveTab(index)}
              className={`px-3 flex flex-col items-center transition-colors duration-300 relative`}
            >
              <span
                className={`flex items-center ${
                  activeTab === index
                    ? "text-[black] font-semibold border-b-2 border-[#109088] mb-0"
                    : "text-black font-medium hover:text-black"
                }`}
              >
                {tab.title}
              </span>
            </button>
            {index < tabs.length - 1 && (
              <div className="h-[15px] w-px bg-[#EAEAF1] mx-2" /> 
            )}
          </SwiperSlide>
        ))}
      </Swiper>
     <div className=" bottom-0 w-full absolute border-b-2 border-[#EAEAF1]"></div>
    </div>
  );
}

export default HomeCareSlides;
