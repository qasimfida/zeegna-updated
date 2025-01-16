import React, { useRef, useState } from "react";
import NewPopularData from "../../data/NewHomePopularData";
import PopularCard from "../popularserviceCard/PopularCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

<<<<<<< HEAD
function NewPopularContainer() {
=======
function NewPopularContainer({
  fontSize = "text-[24px]",
  marginBottom = "mb-[80px]",
}) {
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  return (
<<<<<<< HEAD
    <div className="bg-[#fffff] poppin mb-[80px]">
      <div className="xl:mx-[70px] max-sm:py-0">
        <div className="text-center max-sm:mt-10">
          <h2 className="font-semibold text-[27px] leading-[21px] block px-[15px]">
=======
    <div className={`bg-[#fffff] ${marginBottom} poppin py-[80px]`}>
      <div className="xl:mx-[70px] max-sm:py-0">
        {/* Header */}
        <div className="text-center max-sm:mt-10">
          <h2 className={`font-semibold ${fontSize} block px-[15px]`}>
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
            Popular services in your area
          </h2>
          <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-2"></div>
        </div>

<<<<<<< HEAD
=======
        {/* Swiper for Mobile */}
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
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
            {NewPopularData?.map((card) => (
              <SwiperSlide key={card.id} className="flex justify-center">
                <PopularCard
                  image={card.image}
                  title={card.title}
                  bgColor={card.bgColor}
<<<<<<< HEAD
=======
                  link={card.link}
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
                />
              </SwiperSlide>
            ))}
          </Swiper>

<<<<<<< HEAD
=======
          {/* Previous Button */}
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
          <div
            ref={prevRef}
            className={`swiper-button-back absolute left-4 top-[50%] lg:top-[47%] transform -translate-y-[100%] z-10 cursor-pointer p-[8px] rounded-full flex items-center justify-center ${
              currentIndex === 0
                ? "border border-[#A7A7A7] text-[#A7A7A7] cursor-not-allowed bg-white"
                : "border border-black bg-white"
            }`}
<<<<<<< HEAD
            onClick={currentIndex === 0 ? null : () => prevRef.current.click()}
          >
            <IoArrowBack size={22} />
          </div>
=======
            onClick={() => {
              if (currentIndex !== 0 && swiperRef.current) {
                swiperRef.current.swiper.slidePrev();
              }
            }}
          >
            <IoArrowBack size={22} />
          </div>

          {/* Next Button */}
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
          <div
            ref={nextRef}
            className={`swiper-button-forward absolute right-4 top-[50%] lg:top-[47%] transform -translate-y-[100%] z-20 cursor-pointer p-[8px] rounded-full flex items-center justify-center ${
              currentIndex === NewPopularData.length - 1
                ? "border border-[#A7A7A7] text-[#A7A7A7] cursor-not-allowed bg-white"
                : "border border-black bg-white"
            }`}
<<<<<<< HEAD
            onClick={
              currentIndex === NewPopularData.length - 1
                ? null
                : () => nextRef.current.click()
            }
=======
            onClick={() => {
              if (
                currentIndex !== NewPopularData.length - 1 &&
                swiperRef.current
              ) {
                swiperRef.current.swiper.slideNext();
              }
            }}
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
          >
            <IoArrowForward size={22} />
          </div>
        </div>

<<<<<<< HEAD
=======
        {/* Grid View for Larger Screens */}
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
        <div className="max-sm:hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] max-lg:gap-[14px] max-sm:gap-8 mt-[50px] max-sm:mt-[30px] max-lg:mx-[16px] max-sm:mx-0">
          {NewPopularData?.map((card) => (
            <PopularCard
              key={card.id}
              image={card.image}
              title={card.title}
              bgColor={card.bgColor}
<<<<<<< HEAD
=======
              link={card.link}
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewPopularContainer;
