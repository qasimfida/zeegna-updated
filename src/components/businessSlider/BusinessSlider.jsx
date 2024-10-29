import React, { useRef } from "react";
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
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="w-[98%] mx-0 font-poppins"
      >
        {/* First Slide */}
        <SwiperSlide className="text-start flex flex-col items-start justify-center md:justify-start md:pt-[81px]">
          <h2 className="text-[19px] font-semibold text-wrap">
            We have been able to reach more families in need of quality home
            care through Zeegna network. It's made connecting with clients
            simple and has been a key part of our growth.
          </h2>
          <div className="flex flex-col pt-[40px] gap-[3px] pb-[56px]">
            <p className="text-[#5E5E6F] text-[17px] font-semibold">Emily S, </p>
            <p className="text-[17px] font-semibold">Home Care Agency Owner</p>
          </div>
        </SwiperSlide>

        {/* Second Slide */}
        <SwiperSlide className="text-start flex flex-col items-start justify-center md:justify-start md:pt-[81px]">
          <h2 className="text-[19px] font-semibold text-wrap">
            We have been able to reach more families in need of quality home
            care through Zeegna network. It's made connecting with clients
            simple and has been a key part of our growth.
          </h2>
          <div className="flex flex-col pt-[40px] gap-[3px] pb-[56px]">
            <p className="text-[#5E5E6F] text-[17px] font-semibold">Emily S, </p>
            <p className="text-[17px] font-semibold">Home Care Agency Owner</p>
          </div>
        </SwiperSlide>

        {/* Third Slide */}
        <SwiperSlide className="text-start flex flex-col items-start justify-center md:justify-start md:pt-[81px]">
          <h2 className="text-[19px] font-semibold text-wrap">
            We have been able to reach more families in need of quality home
            care through Zeegna network. It's made connecting with clients
            simple and has been a key part of our growth.
          </h2>
          <div className="flex flex-col pt-[40px] gap-[3px] pb-[56px]">
            <p className="text-[#5E5E6F] text-[17px] font-semibold">Emily S, </p>
            <p className="text-[17px] font-semibold">Home Care Agency Owner</p>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* buttons */}
      <div
        ref={prevRef}
        className=" swiper-button-back absolute left-0 top-[100%] transform -translate-y-1/2 z-10 cursor-pointer p-3 border border-black rounded-full flex items-center justify-center"
      >
        <IoArrowBack size={24} />
      </div>
      <div
        ref={nextRef}
        className=" swiper-button-back absolute right-0 top-[100%] transform -translate-y-1/2 z-10 cursor-pointer p-3 border border-black rounded-full flex items-center justify-center"
      >
        <IoArrowForward size={24} />
      </div>
    </div>
  );
};

export default BusinessSlider;
