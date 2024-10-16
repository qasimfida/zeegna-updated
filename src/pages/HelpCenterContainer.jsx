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

      <div className="max-w-screen-lg mx-auto poppin">
        <div className="flex justify-around m-10 p-4 bg-[#F7F7F7] rounded-full max-md:flex-col max-md:gap-10 max-md:bg-transparent ">
          <button
            onClick={() => handleButtonClick("families")}
            className={`rounded-full flex items-center justify-center gap-4 px-20 lg:w-96 text-base font-medium py-3.5 ${
              activeButton === "families"
                ? "bg-black text-white"
                : "bg-[#EAEAEA] text-black"
            }`}
          >
            Families
          </button>
          <button
            onClick={() => handleButtonClick("partners")}
            className={`rounded-full flex items-center justify-center gap-4 px-20  lg:w-96 text-base font-medium py-3.5 ${
              activeButton === "partners"
                ? "bg-black text-white"
                : "bg-[#EAEAEA] text-black"
            }`}
          >
            Partners
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
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

      <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 max-md:px-5 sm:px-6 lg:px-8 bg-[#E5FFEF] rounded-[40px] poppin">
        <div className="mb-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 mt-0 lg:px-8  flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row py-16 md:text-center ">
          <div className="max-md:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-semibold sm:text-5xl md:text-6xl">
              <span className="block xl:inline mt-2 md:text-center">
                Can't find what you
              </span>
              <span className="block xl:inline-block lg:mt-4 md:text-center">
                are looking for?
              </span>
            </h1>
            <p className="mt-3 text-xl text-[#5E5E6F] sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 xl:w-[50%]">
              Get the care you need to stay happy and healthy in your home
            </p>
            <div className="mt-10 md:flex max-md:justify-center max-md:items-center">
              <Link
                to={
                  activeButton === "families"
                    ? "/family-help-center"
                    : "/partner-help-center"
                }
                className="rounded-full flex items-center justify-center gap-4 px-20 lg:w-96 text-base font-medium py-3.5 max-sm:py-2 bg-[#1C1C1C] text-white"
              >
                Contact Support
              </Link>
            </div>
          </div>

          <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
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
