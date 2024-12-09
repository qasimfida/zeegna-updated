import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "../../assets/css/sliderMS.css";

import ResourceseData from "../../data/ResourcesData";
// import EndLife from "../../assets/icons/homeLove/End-of-LifePlanning";
// import FreeFallIcon from "../../assets/icons/resourceMSicons/FreeFallIcon";
// import BathroomSafetyicon from "../../assets/icons/resourceMSicons/BathroomSafetyicon";
// import Ketchenicon from "../../assets/icons/resourceMSicons/Ketchenicon";
// import Stairicon from "../../assets/icons/resourceMSicons/Stairicon";
// import Enterwayicon from "../../assets/icons/resourceMSicons/Enterwayicon";
// import AllResources from "../../assets/icons/resources/AllResources";
// import Popular from "../../assets/icons/resources/PopularIcon";
// import Star from "../../assets/icons/resources/StarIcon";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import ResourceMScard from "./ResourceMScard";

function ResourceMStwo() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const cardsPerPage = activeTab === 0 ? 21 : 5;

  const handleSlideChange = (swiper) => {
    setActiveTab(swiper.activeIndex);
    setCurrentIndex(swiper.activeIndex);
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  const handleTabClick = (index) => {
    if (index !== activeTab) {
      const increment = 90 / tabs.length;
      setProgress((prev) => {
        const newProgress = (index + 1) * increment;
        return Math.min(newProgress, 90);
      });

      setActiveTab(index);
      setCurrentPage(1);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);

    const increment = 100 / tabs.length;
    setProgress((prev) => Math.min(prev + increment, 100));
  };

  const paginate = (data) => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    return data.slice(startIndex, startIndex + cardsPerPage);
  };

  const getFilteredData = () => {
    if (activeTab === 0) {
      return ResourceseData;
    }

    const tabChips = [
      "Features",
      "Most popular",
      "Fall-free living",
      "Bathroom safety",
      "kitchen accessibility",
      "stair modification",
      "Entryway adjustments",
    ];

    return ResourceseData.filter(
      (card) => card.chip === tabChips[activeTab - 1]
    );
  };

  const tabs = [
    {
      title: "All articles",
      icon: <AllResources className="h-10 w-10 bg-black rounded-full p-10" />,
    },
    {
      title: "Features",
      // icon: <Star className="h-10 w-10 bg-[red] rounded-full p-10" />,
    },
    {
      title: "Most popular",
      icon: <Popular className="h-10 w-10 bg-[red] rounded-full p-10" />,
    },
    {
      title: "Fall-free living",
      // icon: <FreeFallIcon className="h-10 w-10 bg-[red] rounded-full p-10" />,
    },
    {
      title: "Bathroom safety",
      icon: (
        // <BathroomSafetyicon className="h-10 w-10 bg-[red] rounded-full p-10" />
      ),
    },
    {
      title: "kitchen accessibility",
      // icon: <Ketchenicon className="h-10 w-10 bg-[red] rounded-full p-10" />,
    },
    {
      title: "stair modification",
      // icon: <Stairicon className="h-10 w-10 bg-[red] rounded-full p-10" />,
    },
    {
      title: "Entryway adjustments",
      // icon: <Enterwayicon className="h-10 w-10 bg-[red] rounded-full p-10" />,
    },
    {
      title: "End of life planning",
      // icon: <EndLife className="h-10 w-10 bg-[red] rounded-full p-10" />,
    },

    {
      title: "End of life planning",
      icon: <EndLife className="h-10 w-10 bg-[red] rounded-full p-10" />,
    },

    {
      title: "End of life planning",
      icon: <EndLife className="h-10 w-10 bg-[red] rounded-full p-10" />,
    },
  ];

  const filteredData = getFilteredData();

  return (
    <div className=" py-8 poppin relative">
      <Swiper
        className=" md:pl-[100px] md:pr-[70px] !w-[92%] max-md:w-full "
        cssMode={true}
        ref={swiperRef}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        slidesPerView={8}
        mousewheel={true}
        pagination={false}
        onSlideChange={handleSlideChange}
        breakpoints={{
          400: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 6,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {tabs.map((tab, index) => (
          <SwiperSlide
            key={index}
            className="!w-fit"
            // style={{
            //   width: index < 3 ? 'calc(100% / 8)' : 'calc(100% / 6)',
            // }}
          >
            <button
              onClick={() => handleTabClick(index)}
              className={`pb-[20px] flex flex-col items-center text-[14px] font-semibold transition-colors duration-300 ${
                activeTab === index
                  ? "text-[#5E5E6F] font-bold"
                  : "text-[#5E5E6F]"
              }`}
            >
              <span
                className={`h-[55px] w-[55px] rounded-full flex items-center justify-center mb-2 ${
                  activeTab === index ? "bg-[#F3B5B5]" : "bg-[#F9ECEC]"
                }`}
              >
                {tab.icon}
              </span>
              <span
                className={`text-[14px] font-semibold ${
                  index < 3 ? "text-sm" : "text-base"
                }`} // Larger text for non-small slides
              >
                {tab.title}
              </span>
            </button>
          </SwiperSlide>
        ))}

        {/* Left Arrow Button */}
        <div
          className={`max-md:hidden swiper-button-back absolute border p-2 rounded-full left-0 top-[35%] transform -translate-y-[50%] z-10 cursor-pointer ${
            currentIndex === 0
              ? "text-[#A7A7A7] border-[#A7A7A7] cursor-not-allowed"
              : "text-black border-black"
          }`}
          onClick={currentIndex === 0 ? null : handlePrev}
          style={{ left: "20px" }}
        >
          <IoArrowBack size={22} />
        </div>

        {/* Right Arrow Button */}
        <div
          className={`max-md:hidden swiper-button-forward absolute border p-2 border-black rounded-full right-0 top-[35%] transform -translate-y-[50%] z-10 cursor-pointer ${
            currentIndex === tabs.length - 1
              ? "text-[#A7A7A7] border-[#A7A7A7] cursor-not-allowed"
              : "text-black"
          }`}
          onClick={currentIndex === tabs.length - 1 ? null : handleNext}
          style={{ right: "20px" }} // Adjusting the right positioning of the button
        >
          <IoArrowForward size={22} />
        </div>
      </Swiper>

      <div className="py-[30px] rounded-lg bg-white">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-[20px] px-[70px] max-md:px-[27px] max-sm:px-[16px] justify-center poppin">
          {paginate(filteredData).map((card) => (
            <ResourceMScard
              key={card.id}
              image={card.image}
              title={card.title}
              chip={card.chip}
              description={card.description}
              Icon={card.Icon}
            />
          ))}
        </div>
        <Pagination
          totalCards={filteredData.length}
          cardsPerPage={cardsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

function Pagination({ totalCards, cardsPerPage, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  if (totalPages === 1) return null;

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex justify-center mt-4 items-center lg:mt-[40px] gap-[10px]">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`w-[40px] h-[40px] border rounded-full flex items-center justify-center ${
          currentPage === 1 ? "disabled border-[#EAEAF1] text-[#5E5E6F]" : ""
        }`}
      >
        <IoArrowBack size={22} />
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          className={`w-[40px] h-[40px] rounded-full ${
            currentPage === index + 1
              ? "text-[#5E5E6F] border-[#5E5E6F] border rounded-full"
              : "border-[#EAEAF1] text-[#5E5E6F] border rounded-full"
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`w-[40px] h-[40px] border rounded-full flex items-center justify-center ${
          currentPage === totalPages
            ? "disabled border-[#EAEAF1] text-[#5E5E6F]"
            : ""
        }`}
      >
        <IoArrowForward size={22} />
      </button>
    </div>
  );
}

export default ResourceMStwo;
