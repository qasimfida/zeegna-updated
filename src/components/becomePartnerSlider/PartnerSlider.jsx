import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import imageOne from "../../../public/images/personManOne.png";
import imageTwo from "../../../public/images/personWomen.png";
import imageThree from "../../../public/images/personManTwo.png";
import imageFour from "../../../public/images/personManFour.png";
import imageFive from "../../../public/images/personManThree.png";
import "../../assets/css/slider.css";

const images = [imageOne, imageTwo, imageThree, imageFour, imageFive];

const PartnerSlider = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className="container w-full h-[50vh] m-auto p-0 flex items-center justify-center">
      <Swiper
        grabCursor={true}
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={20}
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
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className={`${
              index === activeIndex
                ? "flex justify-center items-end mb-6"
                : index === 0
                ? "flex justify-end items-end h-full"
                : index === 4
                ? "flex justify-start items-end"
                : "flex justify-center items-end"
            }`}
          >
            <img
              src={image}
              alt={`person ${index + 1}`}
              style={{
                height: "auto",
                width: "auto",
                filter:
                  activeIndex === index ? "grayscale(0)" : "grayscale(100%)",
                transform: activeIndex === index ? "scale(1.2)" : "scale(1)",
                transition: "transform 0.3s ease, filter 0.3s ease",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PartnerSlider;
