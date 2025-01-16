import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonInput from "../questionnaire/InputButton";
import NavigationButtons from "../navigationButtons/NavigationButtons";

const QuestionnaireHeroSection = ({
  questionTitle = "Do you need professional installation for any products?",
  options = [],
  onOptionSelect,
  navigateToNext = "#",
  navigateToPrevious = "#",
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleButtonClick = (option) => {
    setSelectedOption(option);
    if (onOptionSelect) onOptionSelect(option);
  };

  const handleNextClick = () => {
    if (selectedOption !== null) {
      navigate(navigateToNext);
    }
  };

  const handlePreviousClick = () => {
    navigate(navigateToPrevious);
  };

  return (
    <div className="pt-[50px] pb-[100px] md:pt-[100px] md:pb-[215px] max-sm:px-[16px] flex items-center justify-center poppin">
      <div className="w-full max-w-[600px]">
        {/* Question Title */}
        <h2 className="md:text-[18px] text-[17px] font-semibold leading-[28px] mb-[15px]">
          {questionTitle}
        </h2>

        {/* Input Buttons */}
        <div className="grid grid-cols-1 justify-center gap-[10px]">
          {options.map((option, index) => (
            <ButtonInput
              key={index}
              value={option}
              onClick={() => handleButtonClick(option)}
              isSelected={selectedOption === option}
            />
          ))}

          {selectedOption === "Other" && (
            <div className="flex flex-col mt-[5px]">
              <input
                type="text"
                placeholder="Other (optional)"
                className="border border-gray-400 bg-[#F7F7F7] rounded-[10px] text-[14px] text-black font-medium px-4 py-[14px]"
              />
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <NavigationButtons
          previousLink={navigateToPrevious}
          nextDisabled={selectedOption === null}
          handleNextClick={handleNextClick}
          handlePreviousClick={handlePreviousClick}
        />
      </div>
    </div>
  );
};

export default QuestionnaireHeroSection;
