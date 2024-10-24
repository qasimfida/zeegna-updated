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

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 20;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const paginate = (data) => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    return data.slice(startIndex, startIndex + cardsPerPage);
  };

  const tabs = [
    {
      title: "All articles ",
      icon: <AllResources className="h-10 w-10 bg-black rounded-full p-10" />,
      content: (
        <div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 gap-[20px]  justify-center poppin px-[70px] max-sm:px-[16px] max-md:px-[27px]">
            {paginate(ResourceseData).map((card) => (
              <ResourcesCard
                key={card.id}
                image={card.image}
                title={card.title}
                chip={card.chip}
                description={card.description}
                Icon={card.Icon}
                bgColor={card.bgColor}
              />
            ))}
          </div>
          <Pagination
            totalCards={ResourceseData.length}
            cardsPerPage={cardsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      ),
    },
    {
      title: "Features",
      icon: <Star className="h-10 w-10 bg-[red] rounded-full p-10" />,
      content: (
        <div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-3  gap-[20px] px-[70px] max-md:px-[27px] max-sm:px-[16px]  justify-center poppin">
            {paginate(ResourceseData).map((card) => (
              <ResourcesCard
                key={card.id}
                image={card.image}
                title={card.title}
                chip={card.chip}
                description={card.description}
                Icon={card.Icon}
                bgColor={card.bgColor}
              />
            ))}
          </div>
          <Pagination
            totalCards={ResourceseData.length}
            cardsPerPage={cardsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      ),
    },
    {
      title: "Most popular",
      icon: <Popular className="h-10 w-10 bg-[red] rounded-full p-10" />,
      content: (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-3  gap-[20px] px-[70px] max-md:px-[27px] max-sm:px-[16px] justfiy-center poppin">
          {ResourceseData.map((card) => (
            <ResourcesCard
              key={card.id}
              image={card.image}
              title={card.title}
              chip={card.chip}
              description={card.description}
              Icon={card.Icon}
              bgColor={card.bgColor}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Caregiver corner",
      icon: <Heart className="h-10 w-10 bg-[red] rounded-full p-10" />,
      content: (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-3  gap-[20px] px-[70px] max-md:px-[27px] max-sm:px-[16px] justfiy-center poppin">
          {ResourceseData.map((card) => (
            <ResourcesCard
              key={card.id}
              image={card.image}
              title={card.title}
              chip={card.chip}
              description={card.description}
              Icon={card.Icon}
              bgColor={card.bgColor}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Personal care",
      icon: <PersonalCare className="h-10 w-10 bg-[red] rounded-full p-10" />,
      content: (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-3  gap-[20px] px-[70px] max-md:px-[27px] max-sm:px-[16px] justfiy-center poppin">
          {ResourceseData.map((card) => (
            <ResourcesCard
              key={card.id}
              image={card.image}
              title={card.title}
              chip={card.chip}
              description={card.description}
              Icon={card.Icon}
              bgColor={card.bgColor}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Home maintenance",
      icon: <Personilize className="h-10 w-10 bg-[red] rounded-full p-10" />,
      content: (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-3  gap-[20px] px-[70px] max-md:px-[27px] max-sm:px-[16px] justfiy-center poppin">
          {ResourceseData.map((card) => (
            <ResourcesCard
              key={card.id}
              image={card.image}
              title={card.title}
              chip={card.chip}
              description={card.description}
              Icon={card.Icon}
              bgColor={card.bgColor}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Transportation",
      icon: <Transportation className="h-10 w-10 bg-[red] rounded-full p-10" />,
      content: (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-3  gap-[20px] px-[70px] max-md:px-[27px] max-sm:px-[16px] justfiy-center poppin">
          {ResourceseData.map((card) => (
            <ResourcesCard
              key={card.id}
              image={card.image}
              title={card.title}
              chip={card.chip}
              description={card.description}
              Icon={card.Icon}
              bgColor={card.bgColor}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Legal matters",
      icon: <Professional className="h-10 w-10 bg-[red] rounded-full p-10" />,
      content: (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-3  gap-[20px] px-[70px] max-md:px-[27px] max-sm:px-[16px] justfiy-center poppin">
          {ResourceseData.map((card) => (
            <ResourcesCard
              key={card.id}
              image={card.image}
              title={card.title}
              chip={card.chip}
              description={card.description}
              Icon={card.Icon}
              bgColor={card.bgColor}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Financial health",
      icon: <EndLife className="h-10 w-10 bg-[red] rounded-full p-10" />,
      content: (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-3  gap-[20px] px-[70px] max-md:px-[27px] max-sm:px-[16px] justfiy-center poppin">
          {ResourceseData.map((card) => (
            <ResourcesCard
              key={card.id}
              image={card.image}
              title={card.title}
              chip={card.chip}
              description={card.description}
              Icon={card.Icon}
              bgColor={card.bgColor}
            />
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="w-full   py-8 poppin">
      <Swiper
        spaceBetween={10}
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
          <SwiperSlide key={index} className="!mr-0 !w-[150px]">
            <button
              onClick={() => setActiveTab(index)}
              className={`pb-[20px] w-[110px] flex flex-col items-center text-[14px] font-semibold transition-colors duration-300  ${
                activeTab === index
                  ? "border-b-2 border-[#109088] text-[#5E5E6F] font-bold"
                  : "text-gray-500 hover:text-indigo-500"
              }`}
            >
              <span
                className={`h-[55px] w-[55px] rounded-full flex items-center justify-center mb-2 ${
                  activeTab === index ? "bg-[#F3B5B5]" : "bg-[#F9ECEC]"
                }`}
              >
                {tab.icon}
              </span>
              <span className="w-[150px]">{tab.title}</span>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="py-[30px] rounded-lg bg-white ">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}

function Pagination({ totalCards, cardsPerPage, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  if (totalPages === 1) return null;

  return (
    <div className="flex justify-center mt-4">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`mx-1 px-4 py-2 rounded ${
            currentPage === index + 1 
              ? "bg-indigo-500 text-white"
              : "bg-gray-300 text-black"
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
