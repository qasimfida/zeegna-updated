import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "../../assets/css/slider.css";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const BusinessSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  return (
    <div className="relative w-full">
      {/* Swiper */}
      <Swiper
        cssMode={true}
        navigation={{
          prevEl: ".swiper-button-fore",
          nextEl: ".swiper-button-back",
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        onSlideChange={handleSlideChange}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="w-[98%] mx-0 font-poppins"
      >
        {/* First Slide */}
        <SwiperSlide className=" text-start flex flex-col items-start justify-center md:justify-start md:pt-[81px] max-sm:px-1 max-sm:text-center">
          <h2 className=" text-[19px] font-semibold ">
            We have been able to reach more families in need of quality home
            care through Zeegna network. It's made connecting with clients
            simple and has been a key part of our growth.
          </h2>
          <div className=" w-full max-sm:text-center flex flex-col pt-[40px] gap-[3px] pb-[56px]">
            <p className="text-[#5E5E6F] text-[17px] font-semibold">Emily S, </p>
            <p className="text-[17px] font-semibold">Home Care Agency Owner</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className=" text-start flex flex-col items-start justify-center md:justify-start md:pt-[81px] max-sm:px-1 max-sm:text-center">
          <h2 className=" text-[19px] font-semibold ">
            We have been able to reach more families in need of quality home
            care through Zeegna network. It's made connecting with clients
            simple and has been a key part of our growth.
          </h2>
          <div className=" w-full max-sm:text-center flex flex-col pt-[40px] gap-[3px] pb-[56px]">
            <p className="text-[#5E5E6F] text-[17px] font-semibold">Emily S, </p>
            <p className="text-[17px] font-semibold">Home Care Agency Owner</p>
          </div>
        </SwiperSlide>

                <SwiperSlide className=" text-start flex flex-col items-start justify-center md:justify-start md:pt-[81px] max-sm:px-1 max-sm:text-center">
          <h2 className=" text-[19px] font-semibold ">
            We have been able to reach more families in need of quality home
            care through Zeegna network. It's made connecting with clients
            simple and has been a key part of our growth.
          </h2>
          <div className=" w-full max-sm:text-center flex flex-col pt-[40px] gap-[3px] pb-[56px]">
            <p className="text-[#5E5E6F] text-[17px] font-semibold">Emily S, </p>
            <p className="text-[17px] font-semibold">Home Care Agency Owner</p>
          </div>
        </SwiperSlide>

        {/* Second Slide */}
      </Swiper>


      {/* Custom Previous Button */}
      <div
        ref={prevRef}
        className={`absolute max-sm:left-[20px]  left-0 top-[100%] transform -translate-y-1/2 z-10 cursor-pointer p-3 rounded-full flex items-center justify-center ${
          currentIndex === 0
            ? "border border-[#A7A7A7] text-[#A7A7A7] cursor-not-allowed"
            : "border border-black"
        }`}
        onClick={currentIndex === 0 ? null : () => prevRef.current.click()}
      >
        <IoArrowBack size={22} />
      </div>

      {/* Custom Next Button */}
      <div
        ref={nextRef}
        className={` absolute max-sm:right-[20px] right-0 top-[100%] transform -translate-y-1/2 z-10 cursor-pointer p-3 rounded-full flex items-center justify-center ${
          currentIndex === 2
            ? "border border-[#A7A7A7] text-[#A7A7A7] cursor-not-allowed"
            : "border border-black"
        }`}
        onClick={currentIndex === 2 ? null : () => nextRef.current.click()}
      >
        <IoArrowForward size={22} />
      </div>
    </div>
  );
};

export default BusinessSlider;
