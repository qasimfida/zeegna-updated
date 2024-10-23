import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../assets/css/homeSlider.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

function HomeCareSlides({ activeTab, setActiveTab }) {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const tabs = [
    { title: "Home care" },
    { title: "Home maintenance" },
    { title: "Transportation" },
    { title: "Professional services" },
    { title: "Professional" },
    { title: "Home maintenance" },
    { title: "Transportation" },
    { title: "Legal matters" },
    { title: "Financial health" },
  ];

  const handleSlideChange = (swiper) => {
    setActiveTab(swiper.activeIndex);
    setCurrentIndex(swiper.activeIndex); 
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
    setCurrentIndex(index); 
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index); 
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="relative w-full mx-auto poppin">
      <Swiper
        ref={swiperRef}
        spaceBetween={0}
        slidesPerView="auto"
        pagination={true}
        cssMode={true}
        onSlideChange={handleSlideChange}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        {tabs.map((tab, index) => (
          <SwiperSlide key={index} className="flex items-center relative">
            <button
              onClick={() => handleTabClick(index)} 
              className={`px-3 max-sm:px-[10px] flex flex-col items-center transition-colors duration-300 relative`}
            >
              <span
                className={`flex items-center ${
                  activeTab === index
                    ? "text-[black] max-sm:text-[16px] text-[19px] font-semibold border-b-2 border-[#109088] mb-0"
                    : "text-black text-[19px] max-sm:text-[16px] font-medium hover:text-black"
                }`}
              >
                {tab.title}
              </span>
            </button>
            {index < tabs.length - 1 && (
              <div className="h-[15px] w-px bg-[#EAEAF1] mx-2 max-sm:mx-[10px]" />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div
        className={`swiper-button-back absolute left-0 top-[50%] transform -translate-y-[50%] z-10 cursor-pointer ${
          currentIndex === 0
            ? "text-[#A7A7A7] cursor-not-allowed"
            : "text-black"
        }`}
        onClick={currentIndex === 0 ? null : handlePrev}
      >
        <IoArrowBack size={22} />
      </div>

      <div
        className={`swiper-button-forward absolute right-0 top-[50%] transform -translate-y-[50%] z-10 cursor-pointer ${
          currentIndex === tabs.length - 1
            ? "text-[#A7A7A7] cursor-not-allowed"
            : "text-black"
        }`}
        onClick={currentIndex === tabs.length - 1 ? null : handleNext}
      >
        <IoArrowForward size={22} />
      </div>

      <div className="bottom-0 w-full absolute border-b-2 border-[#EAEAF1]"></div>
    </div>
  );
}

export default HomeCareSlides;
