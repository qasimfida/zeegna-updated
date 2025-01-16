import React from "react";
import ButtonInput from "./ButtonInput";
import { useNavigate } from "react-router-dom";

const QuizSeven = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/quiz-8");
  };

  return (
    <div className="px-[16px] md:pl-[26px] pt-[49px] font-poppins  md:pb-[251px]">
      <h1 className="font-semibold text-[18px]">
        Does the home have a yard or outdoor space?
      </h1>
      <div className="grid grid-cols-1 gap-[10px] pt-[15px]">
        <ButtonInput
          onClick={handleButtonClick}
          text={"Yes, and it's used often"}
        />
        <ButtonInput
          onClick={handleButtonClick}
          text={"Yes, but it's rarely used"}
        />
        <ButtonInput onClick={handleButtonClick} text={"No"} />
        <ButtonInput onClick={handleButtonClick} text={"Not sure"} />
      </div>
      <div className="pt-[50px] flex justify-center md:justify-start max-sm:pb-[50px]">
        <button className="text-[#5E5E6F] font-medium text-[16px]">
          Previous{" "}
        </button>
      </div>
    </div>
  );
};

export default QuizSeven;
