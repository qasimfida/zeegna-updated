import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";

const SwiperSlider = () => {
  useEffect(() => {
    const swiper = new Swiper(".fraction-slide-carousel", {
      loop: true,
      navigation: {
        nextEl: ".fraction-slide-carousel .swiper-button-next",
        prevEl: ".fraction-slide-carousel .swiper-button-prev",
      },
      pagination: {
        el: ".fraction-slide-carousel .swiper-pagination",
        type: "fraction",
        formatFractionCurrent: (number) => number,
      },
    });
  }, []);

  return (
    <div className="w-full relative">
      <div className="swiper fraction-slide-carousel swiper-container relative">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
              <span className="text-3xl font-semibold text-indigo-600">
                Slide 1
              </span>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
              <span className="text-3xl font-semibold text-indigo-600">
                Slide 2
              </span>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
              <span className="text-3xl font-semibold text-indigo-600">
                Slide 3
              </span>
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center gap-8 lg:justify-start justify-center">
          <button
            id="slider-button-left"
            className="swiper-button-prev group p-2 flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full -translate-y-8 left-5 hover:bg-indigo-600"
            data-carousel-prev
          >
            <svg
              className="h-5 w-5 text-indigo-600 group-hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M10.0002 11.9999L6 7.99971L10.0025 3.99719"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            id="slider-button-right"
            className="swiper-button-next group p-2 flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full -translate-y-8 right-5 hover:bg-indigo-600"
            data-carousel-next
          >
            <svg
              className="h-5 w-5 text-indigo-600 group-hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M5.99984 4.00012L10 8.00029L5.99748 12.0028"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Pagination */}
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default SwiperSlider;
