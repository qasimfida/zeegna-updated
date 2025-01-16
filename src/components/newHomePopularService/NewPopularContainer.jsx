import React, { useRef, useState } from "react";
import NewPopularData from "../../data/NewHomePopularData";
import PopularCard from "../popularserviceCard/PopularCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function NewPopularContainer({
  fontSize = "text-[24px]",
  marginBottom = "mb-[80px]",
  paddin = "md:py-[80px] py-[50px]",
  title = "Top services for your home and well-being",
  popularContent,
}) {
  const navigate = useNavigate();

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  const dataToDisplay = popularContent || NewPopularData;

  return (
    <div className={`${marginBottom} poppin ${paddin}`}>
      <div className="xl:mx-[70px] max-sm:py-0">
        {/* Header */}
        <div className="text-center ">
          <h2 className={`font-semibold ${fontSize} block px-[15px]`}>
            {title}
          </h2>
          <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-2"></div>
        </div>

        {/* Swiper for Mobile */}
        <div className="block sm:hidden max-sm:mt-[20px] mt-[50px] relative">
          <Swiper
            className="max-sm:!w-[90%]"
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
            {dataToDisplay.map((card) => (
              <SwiperSlide key={card.id} className="flex justify-center">
                <PopularCard
                  image={card.image}
                  title={card.title}
                  bgColor={card.bgColor}
                  price={card.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Previous Button */}
          <div className="relative top-[50px] pb-[50px]">
            <div
              ref={prevRef}
              className={`swiper-button-back absolute left-4 bottom-[0px] lg:top-[47%] transform -translate-y-[100%] z-10 cursor-pointer p-[8px] rounded-full flex items-center justify-center ${
                currentIndex === 0
                  ? "border border-[#A7A7A7] text-[#A7A7A7] cursor-not-allowed bg-white"
                  : "border border-black bg-white"
              }`}
              onClick={() => {
                if (currentIndex !== 0 && swiperRef.current) {
                  swiperRef.current.swiper.slidePrev();
                }
              }}
            >
              <IoArrowBack size={22} />
            </div>

            {/* Next Button */}
            <div
              ref={nextRef}
              className={`swiper-button-forward absolute right-4 bottom-0 lg:top-[47%] transform -translate-y-[100%] z-20 cursor-pointer p-[8px] rounded-full flex items-center justify-center ${
                currentIndex === dataToDisplay.length - 1
                  ? "border border-[#A7A7A7] text-[#A7A7A7] cursor-not-allowed bg-white"
                  : "border border-black bg-white"
              }`}
              onClick={() => {
                if (
                  currentIndex !== dataToDisplay.length - 1 &&
                  swiperRef.current
                ) {
                  swiperRef.current.swiper.slideNext();
                }
              }}
            >
              <IoArrowForward size={22} />
            </div>
          </div>
        </div>

        {/* Grid View for Larger Screens */}
        <div className="max-sm:hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] max-lg:gap-[14px] max-sm:gap-8 mt-[50px] max-sm:mt-[30px] max-lg:mx-[16px] max-sm:mx-0">
          {dataToDisplay.map((card) => (
            <PopularCard
              key={card.id}
              image={card.image}
              title={card.title}
              price={card.price}
              bgColor={card.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewPopularContainer;
