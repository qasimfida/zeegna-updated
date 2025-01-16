import React from "react";
import ButtonInput from "./ButtonInput";
import { useNavigate } from "react-router-dom";

const QuizEight = () => {
  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate("/quiz");
  };

  return (
    <div className="pt-[49px] md:pl-[26px] px-[16px] font-poppins md:pb-[195px]">
      <h1 className="font-semibold text-[18px]">
        How soon are you looking to implement these modifications, if any?
      </h1>
      <div className="grid grid-cols-1 pt-[15px] gap-[10px]">
        <ButtonInput
          onClick={handleBtnClick}
          text={"As soon as possible, critical"}
        />
        <ButtonInput onClick={handleBtnClick} text={"Within a month"} />
        <ButtonInput onClick={handleBtnClick} text={"Within 2 months "} />
        <ButtonInput onClick={handleBtnClick} text={"Within 3 months"} />
        <ButtonInput
          onClick={handleBtnClick}
          text={"Not sure, currently exploring"}
        />
      </div>
      <div className="pt-[50px] flex justify-center md:justify-start max-sm:pb-[50px]">
        <button className="text-[#5E5E6F] font-medium text-[16px]">
          Previous{" "}
        </button>
      </div>
    </div>
  );
};

export default QuizEight;
