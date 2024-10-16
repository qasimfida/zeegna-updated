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
    <div className="relative w-full sm:w-[90%] h-[65vh]">
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
        className="w-[80%] h-[60vh] mb-6 mt-3"
      >
        {/* First Slide */}
        <SwiperSlide className="text-start flex flex-col items-start justify-center gap-4">
          <h2 className="text-lg font-semibold text-wrap w-[63%]">
            We have been able to reach more families in need of quality home
            care through Zeegna network. It's made connecting with clients
            simple and has been a key part of our growth.
          </h2>
          <div className="flex flex-col gap-3">
            <p className="text-[#5E5E6F]">Emily S, </p>
            <p>Home Care Agency Owner</p>
          </div>
        </SwiperSlide>

        {/* Second Slide */}
        <SwiperSlide className="text-start flex flex-col items-start justify-center gap-4">
          <h2 className="text-lg font-semibold text-wrap w-[63%]">
            We have been able to reach more families in need of quality home
            care through Zeegna network. It's made connecting with clients
            simple and has been a key part of our growth.
          </h2>
          <div className="flex flex-col gap-3">
            <p className="text-[#5E5E6F]">Emily S, </p>
            <p>Home Care Agency Owner</p>
          </div>
        </SwiperSlide>

        {/* Third Slide */}
        <SwiperSlide className="text-start flex flex-col items-start justify-center gap-4">
          <h2 className="text-lg font-semibold text-wrap w-[63%]">
            We have been able to reach more families in need of quality home
            care through Zeegna network. It's made connecting with clients
            simple and has been a key part of our growth.
          </h2>
          <div className="flex flex-col gap-3">
            <p className="text-[#5E5E6F]">Emily S, </p>
            <p>Home Care Agency Owner</p>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* buttons */}
      <div
        ref={prevRef}
        className=" swiper-button-back absolute left-[50px] top-[98%] transform -translate-y-1/2 z-10 cursor-pointer p-3 border border-black rounded-full flex items-center justify-center"
      >
        <IoArrowBack size={24} />
      </div>
      <div
        ref={nextRef}
        className=" swiper-button-back absolute right-[50px] top-[98%] transform -translate-y-1/2 z-10 cursor-pointer p-3 border border-black rounded-full flex items-center justify-center"
      >
        <IoArrowForward size={24} />
      </div>
    </div>
  );
};

export default BusinessSlider;
