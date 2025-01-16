import React, { useRef, useState } from "react";
import KnowledgeData from "../../data/KnowledgeData";
import KnowledgeCard from "./KnowledgeCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
<<<<<<< HEAD
import {useNavigate} from 'react-router-dom';

function KnowledgeContainer() {

  const navigate = useNavigate();

=======

function KnowledgeContainer() {
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  return (
    <>
      <div className="bg-[#F7F7F7] poppin">
        <div className="mx-4 lg:mx-[70px] py-20 max-sm:py-[50px] ">
          <div className="text-center">
<<<<<<< HEAD
            <h2 className="font-semibold text-[27px] max-sm:text-[21px]">
=======
            <h2 className="font-semibold text-[27px] max-sm:text-[24px]">
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
              Your knowledge hub
            </h2>
            <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-2"></div>
          </div>

          {/* Slider for mobile screens */}
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
              {KnowledgeData.map((card) => (
                <SwiperSlide key={card.id} className="flex justify-center">
                  <KnowledgeCard
                    image={card.image}
                    title={card.title}
                    description={card.description}
                    Icon={card.Icon}
                    bgColor={card.bgColor}
                    chip={card.chip}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div
              ref={prevRef}
              className={`swiper-button-back absolute left-0 bottom-[-30%] transform -translate-y-[100%] z-10 cursor-pointer p-[8px] rounded-full flex items-center justify-center ${
                currentIndex === 0
                  ? "border border-[#A7A7A7] text-[#A7A7A7] cursor-not-allowed bg-white"
                  : "border border-black bg-white"
              }`}
              onClick={
                currentIndex === 0 ? null : () => prevRef.current.click()
              }
            >
              <IoArrowBack size={22} />
            </div>
            <div
              ref={nextRef}
              className={`swiper-button-forward absolute right-0 bottom-[-30%] transform -translate-y-[100%] z-20 cursor-pointer p-[8px] rounded-full flex items-center justify-center ${
                currentIndex === KnowledgeData.length - 1
                  ? "border border-[#A7A7A7] text-[#A7A7A7] cursor-not-allowed bg-white"
                  : "border border-black bg-white"
              }`}
              onClick={
                currentIndex === KnowledgeData.length - 1
                  ? null
                  : () => nextRef.current.click()
              }
            >
              <IoArrowForward size={22} />
            </div>
          </div>

          {/* Grid layout for tablet and desktop */}
          <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[50px] max-sm:mt-[30px]">
            {KnowledgeData.map((card) => (
              <KnowledgeCard
                key={card.id}
                id={card.id}
                image={card.image}
                title={card.title}
                description={card.description}
                Icon={card.Icon}
                bgColor={card.bgColor}
                chip={card.chip}
                className={card.id === 4 ? "pb-2.5" : ""}
              />
            ))}
          </div>

          <div className="flex justify-center mt-[50px]">
<<<<<<< HEAD
            <button className="rounded-full bg-transparent border-[#1C1C1C] border-2 px-[35.5px] py-[13px] text-[#1C1C1C] hover:bg-black hover:text-white font-medium" onClick={() => navigate("/resources")}>
=======
            <button className="rounded-full bg-transparent border-[#1C1C1C] border-2 px-[35.5px] py-[13px] text-[#1C1C1C] hover:bg-black hover:text-white font-medium">
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
              Read more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default KnowledgeContainer;
