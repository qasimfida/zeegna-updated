import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // For redirection
import ExploreCard from "./ExploreCard";
import ExploreData from "../../data/ExploreData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard, Grid } from "swiper/modules";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

function ExploreContainer({
  title = "Explore help at home by city",
  description = "From home repairs to cleaning to specialized care and more, find trusted professionals to keep your home running smoothly in your city.",
  fontsize = "max-sm:text-[24px]",
  background = "bg-white max-sm:mb-12",
  marginTop = "mt-20 max-sm:mt-12 mb-20 ",
  padding = "pt-0",
  showDescription,
}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  const handleNext = () => {
    if (swiperRef?.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className={`${background} ${marginTop} poppin`}>
      <div className="lg:mx-[70px] max-sm:mx-[16px] md:mx-7">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="font-semibold text-xl md:text-[27px] text-[#1C1C1C]">
            {title}
          </h2>

          <div className="mx-auto w-24 h-1 bg-[#1C1C1C] mt-4"></div>
          {showDescription && (
            <p
              className={`font-medium ${padding} md:text-[18px] max-sm:text-[16px] text-[#575757] mt-5 lg:w-[846px] mx-auto leading-5`}
            >
              {description}
            </p>
          )}
        </div>

        <div className="block sm:hidden mt-12 relative">
          <Swiper
            direction="horizontal"
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={10}
            ref={swiperRef}
            grid={{
              rows: 2,
              fill: "row",
            }}
            loop={false}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            onSlideChange={handleSlideChange}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Grid]}
            className="h-full"
          >
            {ExploreData.map((card) => (
              <SwiperSlide key={card.id} className="flex justify-center">
                <ExploreCard
                  image={card.image}
                  title={card.title}
                  bgColor={card.bgColor}
                  onClick={() => navigate(`/cities/${card.id}`)} // Dynamic redirection
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div
            ref={prevRef}
            className={`swiper-button-back absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-2 rounded-full flex items-center justify-center ${
              currentIndex === 0
                ? "border border-[#A7A7A7] text-[#A7A7A7] cursor-not-allowed bg-white"
                : "border border-black bg-white"
            }`}
            onClick={handleNext}
          >
            <IoArrowBack size={22} />
          </div>
          <div
            ref={nextRef}
            className={`swiper-button-forward absolute right-0 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer p-2 rounded-full flex items-center justify-center ${
              currentIndex === ExploreData.length - 1
                ? "border border-[#A7A7A7] text-[#A7A7A7] cursor-not-allowed bg-white"
                : "border border-black bg-white"
            }`}
            onClick={handleNext}
          >
            <IoArrowForward size={22} />
          </div>
        </div>

        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12 max-sm:mt-5 max-sm:gap-2.5">
          {ExploreData.map((card) => (
            <ExploreCard
              key={card.id}
              image={card.image}
              title={card.title}
              bgColor={card.bgColor}
              onClick={() => navigate("/cities")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExploreContainer;
