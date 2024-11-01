import React, { useRef, useState } from "react";
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

const images = [
  { src: [imageOne], index: 1, id: "img1", alt: "person 1", },
  { src: [imageTwo], index: 2, id: "img2", alt: "person 2" },
  { src: [imageThree], index: 3, alt: "person 3" },
  { src: [imageFour], index: 4, alt: "person 4" },
  { src: [imageFive], index: 5, alt: "person 5" },
];
const PartnerSlider = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };
  return (
    <>
      <div className="container w-full pt-7 h-[45vh] max-w-[1154px] m-auto p-0">
        <Swiper
        effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"4"}
          spaceBetween={0}
          pagination={false}
          onSlideChange={handleSlideChange}
          initialSlide={2}
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className={`relative w-full`}
            >
              {index}
              <img
                className={`h-[250px] object-cover rounded-lg transition-all duration-300 ${
                  activeIndex === index ? "grayscale-0 active" : "grayscale"
                }`}
                src={image.src}
                alt={image.alt}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default PartnerSlider;
