import React, { useState } from "react";
import HelpCard from "../components/helpsection/Help";
import HelpCardsData from "../data/HelpSectionData";
import MessageIcon from "../assets/icons/helpsection/MessageIcon";
import HelpDropdownIcon from "../assets/icons/helpsection/HelpDropdown";
import LeftArrow from "../assets/icons/faqsDropDown/LeftArrow";
function HelpCardsContainer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-screen-sm mx-auto py-10 max-md:p-5">
      {/* Section Title */}
      <div className="max-w-screen-sm mx-auto py-10">
        <h2 className="text-center text-2xl font-semibold text-[#DBDBE0] mb-6">
          Section 2
        </h2>

        {/* Description */}
        <div className="flex items-center gap-2 justify-center">
          <p className="text-center text-gray-600  text-lg font-medium">
            Get professional, vetted help delivered to your home
          </p>
          <div className="relative inline-block group">
            <div className="inline-block text-[#109088]">
              <MessageIcon />
            </div>

            {/* Tooltip */}
            <div className="absolute hidden right-[0px] top-[16px] group-hover:block bg-gray-50 border border-gray-300 rounded-lg p-4 w-80 text-gray-600 mt-5">
              <p>Get professional, vetted help delivered to your home</p>
              <div className="absolute top-[1px] right-[11px] transform translate-x-1 -translate-y-3 w-5 h-5 bg-gray-50 border-t border-l border-gray-300 rotate-45"></div>
            </div>
          </div>
        </div>

        {/* Dropdown */}
        <h4 className="text-xl font-semibold mt-10 mb-4">Who needs help?</h4>
        <div className="border border-gray-300 rounded-full relative">
          <button
            className="w-full py-3 px-4 text-gray-600 text-left flex justify-between items-center"
            onClick={toggleFaq}
          >
            <span className="text-sm">Who needs help?</span>
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
          <h2 className="text-xl font-semibold mb-4">
            What kind of help do you need?
          </h2>

          <div className="mt-8 space-y-4">
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
        <div className="flex justify-center mt-10 poppin">
          <button className="rounded-full flex items-center gap-4 bg-transparent border-[#1C1C1C] border-2 px-20	text-base	font-medium py-3.5	 text-black">
            Next
            <LeftArrow />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HelpCardsContainer;
