import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FamilyHelpData from "../../data/FamilyHelpData";
import ChoosingProviders from "../../assets/icons/helpcentericons/ChoosingProviders";
import ServiceDetail from "../../assets/icons/helpcentericons/ServiceDetails";
import BookingServices from "../../assets/icons/helpcentericons/BookingServices";
import ProviderInteraction from "../../assets/icons/helpcentericons/ProviderInteraction";
import PaymentsFees from "../../assets/icons/helpcentericons/PaymentsFees";
import AccountProfile from "../../assets/icons/helpcentericons/AccountProfile";
import TrustSafety from "../../assets/icons/helpcentericons/TrustSafety";
import FindingHelp from "../../assets/icons/helpcentericons/FindingHelp";
import GettingStarted from "../../assets/icons/helpcentericons/GettingStarted";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [progress, setProgress] = useState(0);
  const [familyHelpData, setFamilyHelpData] = useState([]);
  const [loading, setLoading] = useState(true);

  const cardsPerPage = activeTab === 0 ? 5 : 5;

  const tabs = [
    { title: "Getting started", icon: <GettingStarted /> },
    { title: "Finding help", icon: <FindingHelp /> },
    { title: "Choosing providers", icon: <ChoosingProviders /> },
    { title: "Service details", icon: <ServiceDetail /> },
    { title: "Provider interaction", icon: <ProviderInteraction /> },
    { title: "Booking service", icon: <BookingServices /> },
    { title: "Payments & fees", icon: <PaymentsFees /> },
    { title: "Account & profile", icon: <AccountProfile /> },
    { title: "Trust & safety", icon: <TrustSafety /> },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("family-help-data");
        const data = await response.json();
        setFamilyHelpData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
    setCurrentPage(1);
    setProgress((index + 1) * (90 / tabs.length));
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    setProgress((prev) => Math.min(prev + 100 / tabs.length, 100));
  };

  const paginate = (data) => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    return data.slice(startIndex, startIndex + cardsPerPage);
  };

  const getFilteredData = () => {
    if (activeTab === 0) {
      return familyHelpData;
    }
    return [];
  };

  const paginatedData = paginate(getFilteredData());

  if (loading) {
    return <LinearProgress />;
  }

  return (
    <div className="w-full py-[40px]  poppin">
      <Swiper
        className="items-center justify-center flex flex-row w-full pb-[20px]"
        spaceBetween={5}
        slidesPerView={3}
        breakpoints={{
          400: { slidesPerView: 3 },
          640: { slidesPerView: 5 },
          768: { slidesPerView: 7 },
          1024: { slidesPerView: 9 },
        }}
      >
        {tabs.map((tab, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center w-full"
          >
            <button
              onClick={() => handleTabClick(index)}
              className={`pb-[20px] flex flex-col items-center font-semibold transition-colors duration-300 ${
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
              <span className="text-[14px] text[#5E5E6F] font-semibold">
                {tab.title}
              </span>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      <Box sx={{ width: "100%" }}>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: "2px",
            backgroundColor: "#E0E0E0",
            "& .MuiLinearProgress-bar": { backgroundColor: "#109088" },
          }}
        />
      </Box>

      <div>
        {paginatedData.map((data) => (
          <familyHelpData
            key={data.id}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>

      <Pagination
        totalCards={getFilteredData().length}
        cardsPerPage={cardsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

function Pagination({ totalCards, cardsPerPage, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalCards / cardsPerPage);
  if (totalPages === 1) return null;
}

export default Tabs;
