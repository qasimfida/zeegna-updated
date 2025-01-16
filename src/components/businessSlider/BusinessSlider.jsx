import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "../../assets/css/sliderTouch.css";
// import './swiper/swiper-bundle.min.css';

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
      {/* Slider starts here */}
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
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="swiper2 w-[98%] mx-0 font-poppins"
        grabCursor={true}
        onInit={(swiper) => {
          swiper.wrapperEl.style.cursor = "grab";
        }}
      >
        <SwiperSlide className=" !w-[100%] text-start flex flex-col items-start justify-center md:justify-start max-sm:px-1 max-sm:text-center">
          <h2 className=" md:text-[18px] text-[16px] font-medium text-black md:pb-[20px]">
            Joining Zeegna has been a great move for our remodeling business.
            We’ve connected with seniors looking to make their bathrooms more
            accessible, and the leads are solid. The best part? It’s brought in
            consistent projects, which have had a noticeable impact on our
            revenue.
          </h2>
          <div className="w-full h-[1px] bg-[#EAEAF1] max-sm:mt-[15px]"></div>
          <div className=" w-full max-sm:text-center flex text-center flex-col  pt-[20px] md:pt-[40px]gap-[3px] md:pb-[56px]">
            <p className="text-[#5E5E6F] text-[17px] font-semibold">Sarah P.</p>
            <p className="text-[18px] font-semibold">
              Bathroom Remodeling Specialist
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="!w-[100%] text-start flex  flex-col items-start justify-center md:justify-start max-sm:px-1 max-sm:text-center ">
          <h2 className=" md:text-[18px] text-[16px] font-medium  md:pb-[20px]">
            Zeegna has made finding clients for kitchen updates so much easier.
            The platform connects us with seniors who are ready to invest in
            remodeling, which means we’re not just staying busy, we’re bringing
            in steady income. It’s been a big win for our business.
          </h2>
          <div className="w-full h-[1px] bg-[#EAEAF1] max-sm:mt-[15px]"></div>
          <div className=" w-full max-sm:text-center flex text-center flex-col  pt-[20px] md:pt-[40px] gap-[3px] max-sm:pb-[50px] md:pb-[56px]">
            <p className="text-[#5E5E6F] text-[17px] font-semibold">David R.</p>
            <p className="text-[17px] font-semibold">
              Kitchen Renovation Expert
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="!w-[100%] text-start flex flex-col items-start justify-center md:justify-start max-sm:px-1 max-sm:text-center">
          <h2 className=" md:text-[18px] text-[16px] font-medium md:pb-[20px]">
            Zeegna has helped us grow our home automation business in ways we
            didn’t expect. We’ve connected with families who are serious about
            upgrading their homes with smart and secure systems. The steady flow
            of projects has boosted our revenue and helped us expand.
          </h2>
          <div className="w-full h-[1px] bg-[#EAEAF1] max-sm:mt-[15px]"></div>
          <div className=" w-full max-sm:text-center flex text-center flex-col pt-[20px] md:pt-[40px] gap-[3px] max-sm:pb-0 md:pb-[56px]">
            <p className="text-[#5E5E6F] text-[17px] font-semibold">
              Carlos M.
            </p>
            <p className="text-[17px] font-semibold">
              Home Automation Professional
            </p>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* slider ends */}

      {/* Custom Previous Button */}
      <div
        ref={prevRef}
        className={`absolute max-sm:left-[20px] md:left-[160px] xl:left-[210px] top-[100%] transform -translate-y-3/4 z-10 cursor-pointer p-3 rounded-full flex items-center justify-center ${
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
        className={` absolute max-sm:right-[20px] md:right-[195px] xl:right-[235px]  top-[100%] transform -translate-y-3/4 z-10 cursor-pointer p-3 rounded-full flex items-center justify-center ${
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
