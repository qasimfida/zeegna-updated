import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckBox from "../QuizCheckBox";
import { FaChevronRight } from "react-icons/fa";

const Quiz = () => {
  const arr = [
    { details: "A clear understanding of your aging in place needs." },
    { details: "Customized aging in place plans tailored to your situation." },
    { details: "Actionable recommendations for home modifications." },
    {
      details: "Access to trusted contractors to implement your modifications.",
    },
    {
      details:
        "The option to download and share your results as a PDF with others.",
    },
  ];

  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const navigate = useNavigate();

  const handleCheckboxChange = (detail) => {
    setSelectedCheckboxes((prevSelected) => {
      if (prevSelected.includes(detail)) {
        return prevSelected.filter((item) => item !== detail);
      } else {
        return [...prevSelected, detail];
      }
    });
  };

  const isButtonDisabled = selectedCheckboxes.length === 0;

  const handleNext = () => {
    navigate("/quiz-2");
  };

  return (
    <div className="px-[16px] md:pl-[26px] font-poppins">
      <div className="pt-[49px]">
        <h1 className="font-bold text-[21px]">Home evaluation quiz</h1>
        <p className="md:pr-[70px] pt-[5px] font-medium text-[18px] text-[#5E5E6F]">
          Take the first step toward safe aging at home with this free home
          evaluation quiz. This simple assessment takes about 25 minutes to
          complete.
        </p>
      </div>
      {/* sec 2 */}
      <div className="pt-[30px] md:pt-[40px]">
        <h3 className="font-semibold text-[18px]">
          What will you gain from this questionnaire?
        </h3>
        <div>
          {arr.map((item, index) => (
            <CheckBox
              key={index}
              details={item.details}
              isSelected={selectedCheckboxes.includes(item.details)}
              onChange={() => handleCheckboxChange(item.details)}
            />
          ))}
        </div>
      </div>
      {/* sec 3 */}
      <div className="pt-[40px] md:pt-[60px] md:pb-[216px] flex justify-center md:justify-start">
        <DynamicNextButton
          value={"Let's get started"}
          onClick={handleNext}
          disabled={isButtonDisabled}
        />
      </div>
    </div>
  );
};

const DynamicNextButton = ({ value, onClick, disabled }) => {
  return (
    <button
      className={`rounded-full flex items-center gap-4 bg-black border-2 px-20 text-base font-medium py-3.5 text-white ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:text-black hover:border-[#1C1C1C] hover:bg-transparent"
      }`}
      onClick={onClick} // Use the passed onClick function
      disabled={disabled}
    >
      {value}
      <FaChevronRight />
    </button>
  );
};

export default Quiz;
