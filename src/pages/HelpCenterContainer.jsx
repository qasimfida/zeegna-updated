import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { HelpCenterData, HelpCenterDataPartner } from "../data/HelpCenterData";
import { faqsData, HelpCenterFaqs } from "../data/FaqsData";
import HelpCenterCard from "../components/helpcenter/HelpCenterCard";
import FaqsContainer from "../components/faqs/FaqsContainer";
import HelpCenterHeroSection from "../components/helpcenter/HelpCenterHeroSection";
import FaqsCard from "../components/faqs/Faqs";
import HelpCenterFaqsContainer from "../components/helpcenter/HelpFaqsContainer";
import BecomePartnerFaqData from "../data/contents/BecomePartnerFaqData";

const HelpCardsGrid = () => {
  const [activeData, setActiveData] = useState(HelpCenterData);
  const [activeFaqs, setActiveFaqs] = useState(faqsData);
  const [activeButton, setActiveButton] = useState("families");
  const navigate = useNavigate();

  const handleButtonClick = (type) => {
    setActiveButton(type);
    if (type === "families") {
      setActiveData(HelpCenterData);
      setActiveFaqs(faqsData);
    } else if (type === "partners") {
      setActiveData(HelpCenterDataPartner);
      setActiveFaqs(BecomePartnerFaqData);
    }
  };

  console.log(activeData);
  return (
    <div className="bg-white">
      <HelpCenterHeroSection changeTheHeading="We're happy to help" />

      <div className="md:max-w-[1080px] mx-auto poppin flex items-center justify-center flex-col max-sm:mx-[16px]">
        <div className="flex justify-between md:m-10 max-sm:my-[30px] p-[15px] bg-[#F7F7F7] md:w-[750px] md:gap-[15px] rounded-full gap-[10px] max-sm:w-full ">
          <button
            onClick={() => handleButtonClick("families")}
            className={`rounded-full flex items-center justify-center gap-4 md:px-20 lg:w-96 text-base font-medium md:py-3.5 py-[13px] px-[42px] ${
              activeButton === "families"
                ? "bg-black text-white"
                : "bg-[#EAEAEA] text-black"
            }`}
          >
            Families
          </button>
          <button
            onClick={() => handleButtonClick("partners")}
            className={`rounded-full flex items-center justify-center gap-4 md:px-20 lg:w-96 text-base font-medium md:py-3.5 py-[13px] px-[42px] ${
              activeButton === "partners"
                ? "bg-black text-white"
                : "bg-[#EAEAEA] text-black"
            }`}
          >
            Partners
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]  max-sm:gap-[16px]">
          {activeData.map((card) => (
            <HelpCenterCard
              key={card.id}
              name={card.name}
              description={card.description}
              Icon={card.Icon}
              link={card.link}
            />
          ))}
        </div>

        <HelpCenterFaqsContainer
          headingChange="Top frequently asked questions"
          childern={activeFaqs.map((faq) => (
            <FaqsCard
              key={faq.id}
              title={faq.title}
              description={faq.description}
            />
          ))}
        />
      </div>

      <section className="max-sm:mx-[16px] max-sm:mt-[50px] lg:mx-[180px] md:mx-[50px] bg-[#E5FFEF] md:rounded-[40px] rounded-[30px] poppin md:mb-[80px] md-10 max-sm:mb-[50px]">
        <div className=" mt-0 flex gap-3 lg:px-[40px] md:px-[50px] px-[15px] py-[50px] lg:py-[40px] justify-between lg:flex flex-col lg:flex-row md:text-center">
          <div className="max-md:text-center lg:text-left">
            <h1 className="text-[24px] font-semibold lg:w-[370px] max-sm:text-[24px]">
              Can't find what you are looking for?
            </h1>
            <p className="mt-[10px] font-medium  text-[#5E5E6F] sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:w-[390px] md:text-[18px] max-sm:text-[16px]">
              Get the care you need to stay happy and healthy in your home
            </p>
            <div className="mt-[30px] md:flex max-lg:justify-center max-lg:items-center">
              <Link
                to="/get-in-touch"
                className="rounded-full flex items-center justify-center gap-4 px-[58px] text-base font-medium py-3.5 max-sm:py-3 bg-[#1C1C1C] text-white max-sm:mb-[30px] hover:bg-white hover:text-black border border-black"
              >
                Contact Support
              </Link>
            </div>
          </div>

          <div className="">
            <img
              className="h-[250px] w-full object-cover max-sm:h-72  md:w-[460px] rounded-[20px]"
              src="images/Rectangle .png"
              alt="Support"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCardsGrid;
