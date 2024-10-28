import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ResourcesCard from "./ResourcesCard";
import ResourceseData from "../../data/ResourcesData";
import Personilize from "../../assets/icons/homeLove/HomeMaintance";
import PersonalCare from "../../assets/icons/homeLove/PersonalCareIcon";
import EndLife from "../../assets/icons/homeLove/End-of-LifePlanning";
import Professional from "../../assets/icons/homeLove/ProfessionalServices";
import Heart from "../../assets/icons/homeLove/WellNess";
import AllResources from "../../assets/icons/resources/AllResources";
import Popular from "../../assets/icons/resources/PopularIcon";
import Star from "../../assets/icons/resources/StarIcon";
import Transportation from "../../assets/icons/resources/Transportation";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [progress, setProgress] = useState(0);
  const cardsPerPage = activeTab === 0 ? 21 : 5;

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
   
    const increment = 100 / (tabs.length);
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
      "Caregiver corner",
      "Personal care",
      "Home maintenance",
      "Transportation",
      "Legal matters",
      "End of life planning",
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
      icon: <Star className="h-10 w-10 bg-[red] rounded-full p-10" />,
    },
    {
      title: "Most popular",
      icon: <Popular className="h-10 w-10 bg-[red] rounded-full p-10" />,
    },
    {
      title: "Caregiver corner",
      icon: <Heart className="h-10 w-10 bg-[red] rounded-full p-10" />,
    },
    {
      title: "Personal care",
      icon: <PersonalCare className="h-10 w-10 bg-[red] rounded-full p-10" />,
    },
    {
      title: "Home maintenance",
      icon: <Personilize className="h-10 w-10 bg-[red] rounded-full p-10" />,
    },
    {
      title: "Transportation",
      icon: <Transportation className="h-10 w-10 bg-[red] rounded-full p-10" />,
    },
    {
      title: "Legal matters",
      icon: <Professional className="h-10 w-10 bg-[red] rounded-full p-10" />,
    },
    {
      title: "End of life planning",
      icon: <EndLife className="h-10 w-10 bg-[red] rounded-full p-10" />,
    },
  ];

  const filteredData = getFilteredData();

  return (
    <div className="w-full py-8 poppin">
      <Swiper
        className="w-full"
        spaceBetween={5}
        slidesPerView={3}
        breakpoints={{
          400: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 5,
          },
          768: {
            slidesPerView: 7,
          },
          1024: {
            slidesPerView: 9,
          },
        }}
      >
        {tabs.map((tab, index) => (
          <SwiperSlide
            key={index}
            className="!mr-0 flex items-center justify-center"
          >
            <button
              onClick={() => handleTabClick(index)}
              className={`pb-[20px] flex flex-col items-center text-[14px] font-semibold transition-colors duration-300 ${
                activeTab === index
                  ? " text-[#5E5E6F] font-bold"
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
              <span>{tab.title}</span>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
      <Box sx={{ width: '100%' }}>
        <LinearProgress variant="determinate" value={progress} 
            sx={{ 
              height: "2px",
              backgroundColor: '#E0E0E0', 
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#109088',
              },
            }}
        />
      </Box>

      <div className="py-[30px] rounded-lg bg-white">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-[20px] px-[70px] max-md:px-[27px] max-sm:px-[16px] justify-center poppin">
          {paginate(filteredData).map((card) => (
            <ResourcesCard
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
          className={`w-[40px] h-[40px] rounded ${
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

export default Tabs;
