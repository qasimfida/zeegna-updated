import React from "react";
import ButtonInput from "./ButtonInput";
import { useNavigate } from "react-router-dom";

const QuizFive = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/quiz-6");
  };

  return (
    <div className="pt-[49px] md:pl-[26px] px-[16px] font-poppins md:pb-[307px]">
      <h1 className="font-semibold text-[18px]">
        Is there an HOA that may need to provide permission for any
        modifications?
      </h1>
      <div className="grid grid-cols-1 pt-[15px] gap-[10px]">
        <ButtonInput onClick={handleButtonClick} text="Yes" />
        <ButtonInput onClick={handleButtonClick} text={"No"} />
        <ButtonInput onClick={handleButtonClick} text={"Not sure"} />
      </div>
      <div className="pt-[50px] flex justify-center md:justify-start max-sm:pb-[50px]">
        <button className="text-[#5E5E6F] font-medium text-[16px]">
          Previous
        </button>
      </div>
    </div>
  );
};

export default QuizFive;
