import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HelpCard from "../helpsection/Help";
import FundMadeData from "../../data/FundMadeData";
import { FaChevronRight } from "react-icons/fa";

function FundMade() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Myself");
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [selectedCardLink, setSelectedCardLink] = useState("");
  const [isOtherChecked, setIsOtherChecked] = useState(false);
  const [otherText, setOtherText] = useState("");
  const [isChecked, setIsChecked] = useState(false); // State to manage radio button selection

  const navigate = useNavigate();

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleCardSelect = (id, link) => {
    setSelectedCardId(id);
    setSelectedCardLink(link);
  };

  const handleNextClick = () => {
    navigate("/funding-made-1");
  };

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const handleOtherChange = (e) => {
    setOtherText(e.target.value);
  };

  const handleOtherCheckbox = () => {
    setIsOtherChecked(!isOtherChecked);
    if (!isOtherChecked) {
      setOtherText("");
    }
  };

  return (
    <section>
      <div className="lg:max-w-[602px] mx-auto pt-[50px] max-sm:mx-[16px] poppin">
        {/* Section Title */}
        <div className="max-w-screen-sm mx-auto pb-[215px] max-sm:pb-[100px]">
          {/* Dropdown */}

          <div className="mt-6 poppin">
            <h2 className="text-[18px] font-semibold mb-[10px] max-sm:text-[17px]">
              What type of home modification are you looking to fund?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-[15px] justify-items-center content-center">
              {FundMadeData.map((card) => (
                <HelpCard
                  key={card.id}
                  id={card.id}
                  name={card.name}
                  description={card.description}
                  Icon={card.Icon}
                  bgColor={card.bgColor}
                  isSelected={selectedCardId === card.id}
                  onSelect={() => handleCardSelect(card.id, card.link)}
                  rounded={{ border: "border-[2px]", radius: "rounded-[4px]" }}
                />
              ))}
              {/* Other (please specify) */}
              <div className="w-full border border-[#B6B9CE] rounded-[10px] p-[15px] h-[109px] shadow-sm">
                <label className="flex items-center gap-[10px]">
                  <input
                    type="radio"
                    className={`w-[22px] h-[22px] border-[2px] border-[#B6B9CE] cursor-pointer appearance-none ${
                      isChecked ? "bg-[#109088]" : "bg-white"
                    }`}
                    aria-label="Select help card"
                    onChange={handleChange}
                  />
                  <span className="text-[14px] text-[#5E5E6F] font-medium">
                    Other (please specify):
                  </span>
                </label>

                <textarea
                  className="w-full mt-[5px] bg-white border-none outline-none"
                  placeholder=""
                  value={otherText}
                  onChange={handleOtherChange}
                  disabled={!isChecked}
                ></textarea>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <div className="flex justify-center mt-[60px] max-sm:mt-[40px] poppin">
            <DynamicNextButton
              onClick={handleNextClick}
              disabled={
                (!selectedCardId && !isChecked) || (isChecked && !otherText)
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const DynamicNextButton = ({ onClick, disabled }) => {
  return (
    <button
      className={`rounded-full flex items-center gap-4 bg-transparent border-[#1C1C1C] border-2 px-20 text-base font-medium py-3.5 text-black ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:text-white hover:bg-black"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      Next
      <FaChevronRight />
    </button>
  );
};

export default FundMade;
