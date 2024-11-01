import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import imageOne from "../../../public/images/personManOne.png";
import imageTwo from "../../../public/images/personWomen.png";
import imageThree from "../../../public/images/personManTwo.png";
import imageFour from "../../../public/images/personManFour.png";
import imageFive from "../../../public/images/personManThree.png";
import "../../assets/css/slider.css";

const PartnerSlider = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className="container w-full pt-7 h-[35vh] m-auto p-0 flex items-center justify-center overflow-hidden">
      <Swiper
        grabCursor={true}
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={5}
        spaceBetween={0}
        pagination={false}
        onSlideChange={handleSlideChange}
        initialSlide={2}
        coverflowEffect={{
          rotate: 1,
          stretch: 0,
          depth: 50,
          modifier: 6,
          slideShadows: false,
        }}
      >
        <SwiperSlide className="flex justify-center items-center">
          <img
            src={imageOne}
            alt="person 1"
            style={{
              height: "auto",
              width: "auto",
              filter: activeIndex === 0 ? "grayscale(0)" : "grayscale(100%)",
              transform: activeIndex === 0 ? "scale(1.8)" : "scale(1)",
              transition: "transform 0.3s ease, filter 0.3s ease",
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img
            src={imageTwo}
            alt="person 2"
            style={{
              height: "auto",
              width: "auto",
              filter: activeIndex === 1 ? "grayscale(0)" : "grayscale(100%)",
              transform: activeIndex === 1 ? "scale(1.3)" : "scale(1)",
              transition: "transform 0.3s ease, filter 0.3s ease",
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img
            src={imageThree}
            alt="person 3"
            style={{
              height: "auto",
              width: "auto",
              filter: activeIndex === 2 ? "grayscale(0)" : "grayscale(100%)",
              transform: activeIndex === 2 ? "scale(0.9)" : "scale(0.8)",
              transition: "transform 0.3s ease, filter 0.3s ease",
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img
            src={imageFour}
            alt="person 4"
            style={{
              height: "auto",
              width: "auto",
              filter: activeIndex === 3 ? "grayscale(0)" : "grayscale(100%)",
              transform: activeIndex === 3 ? "scale(1.3)" : "scale(1)",
              transition: "transform 0.3s ease, filter 0.3s ease",
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img
            src={imageFive}
            alt="person 5"
            style={{
              height: "auto",
              width: "auto",
              filter: activeIndex === 4 ? "grayscale(0)" : "grayscale(100%)",
              transform: activeIndex === 4 ? "scale(1.8)" : "scale(1)",
              transition: "transform 0.3s ease, filter 0.3s ease",
            }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PartnerSlider;
