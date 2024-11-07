import React, { useRef, useState } from "react";
import ExploreCard from "./ExploreCard";
import ExploreData from "../../data/ExploreData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

function ExploreContainer() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  return (
    <div className="bg-white poppin mb-[80px] max-sm:mb-[50px] ">
      <div className=" xl:mx-[70px]  max-sm:mx-0  max-lg:mx-[27px]">
        <div className="text-center mt-[80px] max-sm:mt-[50px] max-sm:px-[16px]">
          <h2 className="font-semibold text-xl md:text-[32px] text-[#1C1C1C] max-sm:text-[24px] ">
            Explore help at home by city
          </h2>
          <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-4"></div>
          <p className="font-medium text-sm md:text-xl text-[#575757] mt-[20px] lg:w-[846px] mx-auto leading-5 max-sm:text-[16px]">
            From home repairs to cleaning to specialized care and more, find
            trusted professionals to keep your home running smoothly in your
            city.
          </p>
        </div>

        {/* Mobile Slider with two rows */}
        <div className="block sm:hidden mt-[50px] relative">
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
            pagination={false}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Mousewheel, Keyboard]}
            slidesPerView={1}
            grid={{
              rows: 2,
              fill: "row",
            }}
            spaceBetween={10}
          >
            {ExploreData.map((card) => (
              <SwiperSlide key={card.id} className="flex justify-center">
                <ExploreCard
                  image={card.image}
                  title={card.title}
                  bgColor={card.bgColor}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div
            ref={prevRef}
            className={`swiper-button-back absolute left-4 top-[61%] transform -translate-y-[100%] z-10 cursor-pointer p-[8px] rounded-full flex items-center justify-center ${
              currentIndex === 0
                ? "border border-[#A7A7A7] text-[#A7A7A7] cursor-not-allowed bg-white"
                : "border border-black bg-white"
            }`}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <IoArrowBack size={22} />
          </div>
          <div
            ref={nextRef}
            className={`swiper-button-forward absolute right-4 top-[61%] transform -translate-y-[100%] z-20 cursor-pointer p-[8px] rounded-full flex items-center justify-center ${
              currentIndex === ExploreData.length - 1
                ? "border border-[#A7A7A7] text-[#A7A7A7] cursor-not-allowed bg-white"
                : "border border-black bg-white"
            }`}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <IoArrowForward size={22} />
          </div>
        </div>

        {/* Grid for tablet and desktop */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] mt-[50px] max-sm:mt-[20px] max-sm:gap-[10px]">
          {ExploreData.map((card) => (
            <ExploreCard
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

export default ExploreContainer;
