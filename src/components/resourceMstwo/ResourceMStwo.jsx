import React, { useState, useEffect, useRef } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import ResourceMScard from "./ResourceMScard";
import KnowledgeData from "../../data/KnowledgeData";
import HomeModificationIcon from "../../assets/icons/resourceMSicons/HomeModificationIcon";
import HomeSafetyIcon from "../../assets/icons/resourceMSicons/HomeSafetyIcon";
import HomeAutomation from "../../assets/icons/resourceMSicons/HomeAutomation";
import HomeCareIcon from "../../assets/icons/resourceMSicons/HomeCareIcon";
import HomeMaintainIcon from "../../assets/icons/resourceMSicons/HomeMaintainIcon";
import ProfessionalServiceIcon from "../../assets/icons/resourceMSicons/ProfessionalServiceIcon";
import AllArticlesIcon from "../../assets/icons/resourceMSicons/AllArticlesIcon";
import MostPopularIcon from "../../assets/icons/resourceMSicons/MostPopularIcon";



const tabs = [
  {
    title: "All articles",
    icon: <AllArticlesIcon className="h-10 w-10 bg-black rounded-full p-10" />,
  },
  {
    title: "Most popular",
    icon: <MostPopularIcon className="h-10 w-10 bg-black rounded-full p-10" />,
  },
  {
    title: "Home Modifications",
    icon: (
      <HomeModificationIcon className="h-10 w-10 bg-black rounded-full p-10" />
    ),
  },
  {
    title: "Home Safety",
    icon: <HomeSafetyIcon className="h-10 w-10 bg-black rounded-full p-10" />,
  },
  {
    title: "Home automation",
    icon: <HomeAutomation className="h-10 w-10 bg-black rounded-full p-10" />,
  },
  {
    title: "Home care",
    icon: <HomeCareIcon className="h-10 w-10 bg-black rounded-full p-10" />,
  },
  {
    title: "Home maintenance",
    icon: <HomeMaintainIcon className="h-10 w-10 bg-black rounded-full p-10" />,
  },
  {
    title: "Professional services",
    icon: (
      <ProfessionalServiceIcon className="h-10 w-10 bg-black rounded-full p-10" />
    ),
  },
];

function ResourceMStwo() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const navigate = useNavigate();

  const cardsPerPage = 10;

  const [searchParams, setSearchParams] = useSearchParams();

  const generateMoreCards = () => {
    let extendedData = [];

    for (let i = 0; i < 100; i++) {
      let category = tabs[Math.floor(Math.random() * tabs.length)].title;
      extendedData.push({
        ...KnowledgeData[Math.floor(Math.random() * KnowledgeData.length)],
        category,
      });
    }

    return extendedData;
  };

  const generatedData = generateMoreCards();

  const [currentArticles, setCurrentArticles] = useState(KnowledgeData);

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

  const handleTabClick = (category) => {

    setSearchParams({ category });

    let filtered = generatedData.filter((card) => card.category === category);

   

    setCurrentArticles([...filtered]);

    console.log("currentArticles", currentArticles);
  };


  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const paginate = (data) => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    return data.slice(startIndex, startIndex + cardsPerPage);
  };

  return (
    <div className="pb-[80px] max-sm:pt-[20px] max-sm:pb-0 poppin relative">
      <Swiper
        className="md:pl-[100px] md:pr-[70px] !w-[90%] md:py-[20px] max-md:w-full md:shadow-sm md:rounded-[20px] md:border"
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
        slidesPerView={3}
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
            slidesPerView: 6,
          },
        }}
      >
        {tabs.map((tab, index) => (
          <SwiperSlide
            key={index}
            className="!w-fit mx-[46px] max-sm:mx-[12px]"
          >
            <button
              onClick={() => handleTabClick(tab.title)}
              className={`flex flex-col items-center text-[14px] font-semibold transition-colors duration-300 ${
                tab.title === searchParams.get("category")
                  ? "text-[#5E5E6F] font-bold"
                  : "text-[#5E5E6F]"
              }`}
            >
              <span
                className={`h-[45px] w-[45px] rounded-full flex items-center justify-center mb-2 ${
                  tab.title === searchParams.get("category")
                    ? "bg-[#F3B5B5]"
                    : "bg-[#F9ECEC]"
                }`}
              >
                {tab.icon}
              </span>
              <span
                className={`text-[14px] font-semibold ${
                  index < 3 ? "text-sm" : "text-base"
                }`}
              >
                {tab.title}
              </span>
            </button>
          </SwiperSlide>
        ))}

        {/* Left Arrow Button */}
        <div
          className={`max-md:hidden swiper-button-back absolute border p-2 rounded-full left-0 top-[50%] transform -translate-y-[50%] z-10 cursor-pointer ${
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
          className={`max-md:hidden swiper-button-forward absolute border p-2 border-black rounded-full right-0 top-[50%] transform -translate-y-[50%] z-10 cursor-pointer ${
            currentIndex === tabs.length - 1
              ? "text-[#A7A7A7] border-[#A7A7A7] cursor-not-allowed"
              : "text-black"
          }`}
          onClick={currentIndex === tabs.length - 1 ? null : handleNext}
          style={{ right: "20px" }}
        >
          <IoArrowForward size={22} />
        </div>
      </Swiper>

      <div className="pb-[40px] pt-[50px] max-sm:py-[40px] max-sm:pb-[50px] rounded-lg bg-white">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-[20px] max-sm:gap-[25px] px-[70px] max-md:px-[27px] max-sm:px-[16px] justify-center poppin">
          {currentArticles.map((card) => (
            <ResourceMScard
              key={card.id}
              image={card.image}
              title={card.title}
              chip={card.category}
              description={card.description}
              Icon={card.Icon}
              onClick={() => navigate(`/resources/${card.slug}`)}
            />
          ))}
        </div>
        <Pagination
          totalCards={currentArticles.length}
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
    <div className="flex justify-center mt-4 max-sm:mt-[25px] items-center lg:mt-[40px] gap-[10px]">
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

