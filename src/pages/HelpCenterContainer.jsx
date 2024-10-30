import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HelpCenterData, HelpCenterDataPartner } from "../data/HelpCenterData";
import { faqsData, HelpCenterFaqs } from "../data/FaqsData";
import HelpCenterCard from "../components/helpcenter/HelpCenterCard";
import FaqsContainer from "../components/faqs/FaqsContainer";
import HelpCenterHeroSection from "../components/helpcenter/HelpCenterHeroSection";
import FaqsCard from "../components/faqs/Faqs";
import HelpCenterFaqsContainer from "../components/helpcenter/HelpFaqsContainer";

const HelpCardsGrid = () => {
  const [activeData, setActiveData] = useState(HelpCenterData);
  const [activeFaqs, setActiveFaqs] = useState(faqsData);
  const [activeButton, setActiveButton] = useState("families");

  const handleButtonClick = (type) => {
    setActiveButton(type);
    if (type === "families") {
      setActiveData(HelpCenterData);
      setActiveFaqs(faqsData);
    } else if (type === "partners") {
      setActiveData(HelpCenterDataPartner);
      setActiveFaqs(HelpCenterFaqs);
    }
  };

  return (
    <>
      <HelpCenterHeroSection changeTheHeading="We're happy to help" />

      <div className="max-w-[1080px] mx-auto poppin flex items-center justify-center flex-col">
        <div className="flex justify-between md:m-10 max-sm:my-[30px] p-[15px] bg-[#F7F7F7] md:w-[750px] md:gap-[15px] rounded-full gap-[10px]   max-sm:mx-[16px] ">
          <button
            onClick={() => handleButtonClick("families")}
            className={`rounded-full flex items-center justify-center gap-4 md:px-20 lg:w-96 text-base font-medium md:py-3.5 py-[13px] px-[36px] ${
              activeButton === "families"
                ? "bg-black text-white"
                : "bg-[#EAEAEA] text-black"
            }`}
          >
            Families
          </button>
          <button
            onClick={() => handleButtonClick("partners")}
            className={`rounded-full flex items-center justify-center gap-4 md:px-20  lg:w-96 text-base font-medium md:py-3.5 py-[13px] px-[36px] ${
              activeButton === "partners"
                ? "bg-black text-white"
                : "bg-[#EAEAEA] text-black"
            }`}
          >
            Partners
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] max-sm:mx-[16px] max-sm:gap-[16px]">
          {activeData.map((card) => (
            <HelpCenterCard
              key={card.id}
              name={card.name}
              description={card.description}
              Icon={card.Icon}
            />
          ))}
        </div>

        <HelpCenterFaqsContainer
          headingChange="Top FAQs"
          childern={activeFaqs.map((faq) => (
            <FaqsCard
              key={faq.id}
              title={faq.title}
              description={faq.description}
            />
          ))}
        />
      </div>

      <section className="sm:mt-6 lg:mt-8 mt-12 max-sm:mx-[16px]  lg:mx-[80px] md:mx-[50px]  bg-[#E5FFEF] md:rounded-[40px] rounded-[30px] poppin">
        <div className="mb-10   mt-0   flex gap-3 lg:px-[80px] md:px-[50px] px-[15px] py-[50px] lg:py-[75px] justify-between lg:flex flex-col lg:flex-row  md:text-center ">
          <div className="max-md:text-center lg:text-left">
            <h1 className="text-[32px]  font-semibold lg:w-[370px] max-sm:text-[24px]">
              Can't find what you are looking for?
            </h1>
            <p className="mt-3 text-xl text-[#5E5E6F] sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:w-[390px] md:text-xl max-sm:text-[16px]">
              Get the care you need to stay happy and healthy in your home
            </p>
            <div className="mt-10 md:flex max-lg:justify-center max-lg:items-center">
              <Link
                to={
                  activeButton === "families"
                    ? "/family-help-center"
                    : "/partner-help-center"
                }
                className="rounded-full flex items-center justify-center gap-4 px-[58px]  text-base font-medium py-3.5 max-sm:py-3 bg-[#1C1C1C] text-white max-sm:mb-[30px] hover:bg-white hover:text-black border border-black"
              >
                Contact Support
              </Link>
            </div>
          </div>

          <div className=" lg:w-[540px] ">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-[20px]"
              src="images/Rectangle .png"
              alt="Support"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpCardsGrid;
