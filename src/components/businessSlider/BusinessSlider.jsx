import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "../../assets/css/sliderTouch.css";
import "../../assets/css/slider.css";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import bg1 from "../../../public/images/partnerBg.png";

const testimonials = [
  {
    image: bg1,
    text: "Joining Zeegna has been a great move for our remodeling business. We’ve connected with seniors looking to make their bathrooms more accessible, and the leads are solid. The best part? It’s brought in consistent projects, which have had a noticeable impact on our revenue.",
    name: "Sarah P.",
    title: "Bathroom Remodeling Specialist",
  },
  {
    image: bg1,
    text: "Zeenia has made finding clients for kitchen updates so much easier. The platform connects us with seniors who are ready to invest in remodeling, which means we’re not just staying busy, we’re bringing in steady income. It’s been a big win for our business.",
    name: "David R.",
    title: "Kitchen Renovation Expert",
  },
  {
    image: bg1,
    text: "Zeenia has helped us grow our home automation business in ways we didn’t expect. We’ve connected with families who are serious about upgrading their homes with smart and secure systems. The steady flow of projects has boosted our revenue and helped us expand.",
    name: "Carlos M.",
    title: "Home Automation Professional",
  },
];

const BusinessSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  return (
    <div className="relative w-full">
      <Swiper
        cssMode={true}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onSlideChange={handleSlideChange}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="swiper2 !w-full mx-0 font-poppins md:h-[310px]"
        grabCursor={true}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col md:flex-row items-start gap-[20px] md:gap-[60px] max-sm:!w-full max-sm:mx-[16px]"
          >
            <img
              src={testimonial.image}
              alt="testimonial"
              className="md:w-[529px] md:h-[310px] w-full"
            />
            <div className="text-start flex flex-col items-start justify-center  max-sm:text-center">
              <h2 className="md:text-[18px] text-[16px] font-medium text-black md:pb-[30px] pb-[15px]">
                {testimonial.text}
              </h2>
              <div className="w-full h-[1px] bg-[#EAEAF1] "></div>
              <div className="w-full text-center flex flex-col pt-[20px] md:pt-[30px] gap-[3px] pb-[20px] md:pb-[30px]">
                <p className="text-[#5E5E6F] text-[18px] font-semibold">
                  {testimonial.name}
                </p>
                <p className="text-[18px] font-semibold">{testimonial.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div
        ref={prevRef}
        className={`absolute left-0 md:left-[65%] top-[93%] md:top-[86%] p-[8px]   z-10 cursor-pointer  rounded-full flex items-center justify-center ${
          currentIndex === 0
            ? "border border-[#A7A7A7] text-[#A7A7A7] cursor-not-allowed"
            : "border border-black"
        }`}
      >
        <IoArrowBack size={22} />
      </div>
      <div
        ref={nextRef}
        className={`absolute right-0 md:right-[17%] top-[93%] md:top-[86%]  z-10 p-[8px] cursor-pointer   rounded-full flex items-center justify-center ${
          currentIndex === testimonials.length - 1
            ? "border border-[#A7A7A7] text-[#A7A7A7] cursor-not-allowed"
            : "border border-black"
        }`}
      >
        <IoArrowForward size={22} />
      </div>
    </div>
  );
};

export default BusinessSlider;
