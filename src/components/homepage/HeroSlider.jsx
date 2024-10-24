import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import person from "/images/person.png";
import "../../assets/css/slider.css";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const HeroSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  return (
    <>
      <section className="w-full flex items-center justify-center sm:justify-between bg-[#F7F7F7] poppin">
        <div className="sm:flex flex-col gap-[10rem] pl-[48px]">
          <img className="w-[40px]" src="images/curveOne.png" />
          <img className="w-[40px]" src="images/curveTwo.png" />
          <img className="w-[40px]" src="images/curveThree.png" />
        </div>
        <div className="relative w-full sm:w-[65%] py-[80px] max-sm:pt-[60px]">
          <div className="flex items-center flex-col gap-[5px]">
            <h1 className="text-[32px] max-sm:px-[67px] max-sm:text-[24px] font-semibold text-center">
              Trusted by families like yours
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
            className="mt-[55px] max-sm:mt-[60]"
          >
            {/* Slides */}
            {Array(3)
              .fill()
              .map((_, index) => (
                <SwiperSlide
                  key={index}
                  className="text-center flex flex-col items-center"
                >
                  <h2 className="text-black text-[19px] max-sm:[17px] font-semibold text-wrap text-center">
                    We found the perfect caregiver for mom. She's kind and
                    incredibly helpful. The process of getting the care my mom
                    needed was simple, and now she's happy and well
                    taken care of. It feels wonderful to see her content.
                  </h2>
                  <img src={person} alt="person" className="pt-[30px]" />
                  <p className="text-[#5e5e6f] pt-[19px] pb-[35px] max-sm:pb-[60px] text-[16px]">
                    Sara R. Charlotte, NC
                  </p>
                </SwiperSlide>
              ))}
          </Swiper>
          {/* Buttons */}
          <div
            ref={prevRef}
            className={`swiper-button-back absolute left-2 top-[89%] lg:top-[47%] transform -translate-y-[100%] z-10 cursor-pointer p-[8px] rounded-full flex items-center justify-center ${
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
            className={`swiper-button-fore absolute right-2 top-[89%] lg:top-[47%] transform -translate-y-[100%] z-10 cursor-pointer p-[8px] rounded-full flex items-center justify-center ${
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
          <img className="w-[40px]" src="images/curveFour.png" />
          <img className="w-[40px]" src="images/curveTwo.png" />
          <img className="w-[40px]" src="images/curveFive.png" />
        </div>
      </section>
    </>
  );
};

export default HeroSlider;
