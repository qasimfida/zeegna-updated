import React from "react";
import ButtonInput from "./ButtonInput";
import { useNavigate } from "react-router-dom";

const QuizFour = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/quiz-5");
  };
  return (
    <div className="px-[16px] md:pl-[26px] pt-[49px] font-poppins  md:pb-[251px]">
      <h1 className="font-semibold text-[18px]">
        What type of home does your mother live in?
      </h1>
      <div className="grid grid-cols-1 gap-[10px] pt-[15px]">
        <ButtonInput onClick={handleButtonClick} text="Apartment/Condo" />
        <ButtonInput onClick={handleButtonClick} text="Single Family Home" />
        <ButtonInput onClick={handleButtonClick} text="Townhome" />
        <ButtonInput onClick={handleButtonClick} text="Other" />
      </div>
      <div className="pt-[50px] flex justify-center md:justify-start max-sm:pb-[50px]">
        <button className="text-[#5E5E6F] font-medium text-[16px]">
          Previous{" "}
        </button>
      </div>
    </div>
  );
};

export default QuizFour;
