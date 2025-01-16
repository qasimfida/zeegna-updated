import React, { useState } from "react";
import HelpCard from "../components/helpsection/Help";
import HelpCardsData from "../data/HelpSectionData";
import HelpDropdownIcon from "../assets/icons/helpsection/HelpDropdown";
import LeftArrow from "../assets/icons/faqsDropDown/LeftArrow";
function HelpCardsContainer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="bg-[#F7F7F7]">
      <div className="lg:max-w-[602px] mx-auto py-[50px] max-sm:mx-[16px]  poppin ">
        {/* Section Title */}
        <div className="max-w-screen-sm mx-auto">
          <div className="text-center">
            <h2 className="font-semibold text-[24px] md:text-[32px]">
              Find help
            </h2>

            <p className="mt-2 text-[18px] font-medium max-sm:text-[16px] text-[#5E5E6F]">
              Answer a few questions to better match you with the
              right care provider
            </p>
          </div>

          {/* Dropdown */}
          <h4 className="text-[19px] font-semibold mt-10 mb-2 max-sm:text-[17px]">
            Who needs help?
          </h4>
          <div className="border border-gray-300 rounded-[10px] relative h-[50px]">
            <button
              className="w-full py-3 px-4 text-gray-600 text-left flex justify-between items-center"
              onClick={toggleFaq}
            >
              <span className="text-sm font-medium text-[#5E5E6F]">Myself</span>
              <span
                className={`transform transition-transform ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                <HelpDropdownIcon />
              </span>
            </button>

            {isOpen && (
              <ul className="absolute w-full border border-gray-300 rounded-lg mt-2 bg-white z-10 poppin">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Myself
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Family Member
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Someone Else
                </li>
              </ul>
            )}
          </div>

          <div className="mt-6 poppin">
            <h2 className="text-[19px] font-semibold mb-[10px]  max-sm:text-[17px]">
              What kind of help do you need?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-[15px]   justify-items-center	content-center">
              {HelpCardsData.map((card) => (
                <HelpCard
                  key={card.id}
                  name={card.name}
                  description={card.description}
                  Icon={card.Icon}
                  bgColor={card.bgColor}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-[60px] mb-[200px] max-sm:mt-[40px] max-sm:mb-[100px] poppin">
            <button className="rounded-full flex items-center gap-4 bg-transparent border-[#1C1C1C] border-2 px-20	text-base	font-medium py-3.5	 text-black hover:text-white hover:bg-black">
              Next
              <LeftArrow />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HelpCardsContainer;
