import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import curve from "/images/curveOne.png";
import curveOne from "/images/curveTwo.png";
import curveTwo from "/images/curveThree.png";
import curveThree from "/images/curveFour.png";
import curveFour from "/images/curveFive.png";
import "../../assets/css/slider.css";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import curve1_green from "/images/curve1_green.png";
import curve2_green from "/images/curve2_green.png";
import curve3_green from "/images/curve3_green.png";
import curve4_green from "/images/curve4_green.png";
import curve5_green from "/images/curve5_green.png";
import curve6_green from "/images/curve6_green.png";

const HeroSlider = ({
  content = {},
  fontSize = "text-[27px]  max-sm:text-[24px]",
  title = "Trusted by families like yours",
  MarginTop = "mt-[55px] max-sm:!mt-[50px]",
  PaddingBottom = "max-sm:pb-[60px]",
  top = "top-[89%]",
  img,
  textSize = "text-[18px]",
  bg = "bg-[#F7F7F7]",
}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  return (
    <>
      <section
        className={`w-full flex items-center justify-center sm:justify-between  poppin ${bg}`}
      >
        <div className="sm:flex flex-col gap-[10rem] pl-[48px]">
          <img className="w-[40px]" src={img ? curve : curve1_green} />
          <img className="w-[40px]" src={img ? curveOne : curve2_green} />
          <img className="w-[40px]" src={img ? curveTwo : curve3_green} />
        </div>
        <div className="relative w-full sm:w-[65%] py-[80px] max-sm:py-[50px] max-sm:pt-[50px]">
          <div className="flex items-center flex-col gap-[5px]">
            <h1
              className={` max-sm:px-[30px]  ${fontSize} font-semibold text-center`}
            >
              {title}
            </h1>

            <div className="w-[100px] h-[2px] border border-black"></div>
          </div>
          {/* Swiper */}
          <Swiper
            cssMode={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
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
            className={` ${MarginTop}`}
          >
            {/* Slides */}
            {content.map((_, index) => (
              <SwiperSlide
                key={index}
                className="text-center flex flex-col items-center"
              >
                <p
                  className={`text-black md:px-[5rem] ${textSize}  font-medium text-wrap text-center`}
                >
                  {_.testimonial}
                </p>
                <img
                  src={_.image}
                  alt="person"
                  className="pt-[30px] w-[70px]"
                />
                <p
                  className={`text-[#5e5e6f] pt-[19px] pb-[35px] ${PaddingBottom}  text-[16px]`}
                >
                  {_.name}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Buttons */}
          <div
            ref={prevRef}
            className={`swiper-button-back absolute left-2 ${top}  max-sm:left-[20px]  lg:top-[47%] transform -translate-y-[100%] z-10 cursor-pointer p-[8px] rounded-full flex items-center justify-center ${
              currentIndex === 0
                ? "border border-[#A7A7A7] text-[#A7A7A7] cursor-not-allowed"
                : "border border-black"
            }`}
            onClick={currentIndex === 0 ? null : () => prevRef.current.click()}
          >
            <IoArrowBack size={22} />
          </div>
          <div
            ref={nextRef}
            className={`swiper-button-fore absolute right-2 ${top}   max-sm:right-[20px] lg:top-[47%] transform -translate-y-[100%] z-10 cursor-pointer p-[8px] rounded-full flex items-center justify-center ${
              currentIndex === 2
                ? "border border-[#A7A7A7] text-[#A7A7A7] cursor-not-allowed"
                : "border border-black"
            }`}
            onClick={currentIndex === 2 ? null : () => nextRef.current.click()}
          >
            <IoArrowForward size={22} />
          </div>
        </div>

        <div className="sm:flex flex-col gap-[10rem] pr-[48px]">
          <img className="w-[40px]" src={img ? curveFour : curve4_green} />
          <img className="w-[40px]" src={img ? curveOne : curve5_green} />
          <img className="w-[40px]" src={img ? curveThree : curve6_green} />
        </div>
      </section>
    </>
  );
};

export default HeroSlider;
