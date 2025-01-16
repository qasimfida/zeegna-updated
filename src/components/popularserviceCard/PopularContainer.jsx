import React, { useRef, useState } from "react";
import PopularData from "../../data/PopularData";
import PopularCard from "./PopularCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

function PopularContainer() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  return (
    <div className="bg-[#fffff] poppin mb-[80px]">
      <div className="xl:mx-[70px] max-sm:py-0">
        <div className="text-center max-sm:mt-10">
          <h2 className="font-semibold text-xl md:text-[32px] sm:block hidden">
            Popular services
          </h2>
          <h2 className="font-semibold text-[24px] sm:hidden block px-[15px]">
            Popular services in your area
          </h2>
          <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-2"></div>
        </div>

        <div className="block sm:hidden mt-[50px] relative">
          <Swiper
            ref={swiperRef}
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
            pagination={false}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Mousewheel, Keyboard]}
            slidesPerView={1}
          >
            {PopularData?.map((card) => (
              <SwiperSlide key={card.id} className="flex justify-center">
                <PopularCard
                  image={card.image}
                  title={card.title}
                  bgColor={card.bgColor}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div
            ref={prevRef}
            className={`swiper-button-back absolute left-4 top-[50%] lg:top-[47%] transform -translate-y-[100%] z-10 cursor-pointer p-[8px] rounded-full flex items-center justify-center ${
              currentIndex === 0
                ? "border border-[#A7A7A7] text-[#A7A7A7] cursor-not-allowed bg-white"
                : "border border-black bg-white"
            }`}
            onClick={currentIndex === 0 ? null : () => prevRef.current.click()}
          >
            <IoArrowBack size={22} />
          </div>
          <div
            ref={nextRef}
            className={`swiper-button-forward absolute right-4 top-[50%] lg:top-[47%] transform -translate-y-[100%] z-20 cursor-pointer p-[8px] rounded-full flex items-center justify-center ${
              currentIndex === PopularData.length - 1 
                ? "border border-[#A7A7A7] text-[#A7A7A7] cursor-not-allowed bg-white"
                : "border border-black bg-white"
            }`}
            onClick={
              currentIndex === PopularData.length - 1
                ? null
                : () => nextRef.current.click()
            }
          >
            <IoArrowForward size={22} />
          </div>
        </div>

        <div className="max-sm:hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] max-lg:gap-[14px] max-sm:gap-8 mt-[50px] max-sm:mt-[30px] max-lg:mx-[16px] max-sm:mx-0">
          {PopularData?.map((card) => (
            <PopularCard
              key={card.id}
              image={card.image}
              title={card.title}
              bgColor={card.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularContainer;
