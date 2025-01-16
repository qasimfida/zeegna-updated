import React from "react";
import ButtonInput from "./ButtonInput";
import { useNavigate } from "react-router-dom";

const QuizSix = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/quiz-7");
  };
  return (
    <div className="px-[16px] md:pl-[26px] pt-[49px] font-poppins  md:pb-[251px]">
      <h1 className="font-semibold text-[18px]">
        Is the home single-story or multi-story?
      </h1>
      <div className="grid grid-cols-1 gap-[10px] pt-[15px]">
        <ButtonInput onClick={handleButtonClick} text={"Single story"} />
        <ButtonInput onClick={handleButtonClick} text={"Multi story"} />
        <ButtonInput onClick={handleButtonClick} text={"Not sure"} />
      </div>
      <div className="pt-[50px] flex justify-center md:justify-start max-sm:pb-[50px]">
        <button className="text-[#5E5E6F] font-medium text-[16px]">
          Previous{" "}
        </button>
      </div>
    </div>
  );
};

export default QuizSix;
