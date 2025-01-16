import React from "react";
import ButtonInput from "./ButtonInput";
import { useNavigate } from "react-router-dom";

const QuizThree = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/quiz-4");
  };

  return (
    <div className="pt-[49px] px-[16px] md:pl-[26px] md:pb-[251px]">
      <h1 className="text-[18px] font-semibold">
        Can you tell us who you're filling this form for?
      </h1>
      {/* Updated grid classes */}
      <div className="grid gap-[10px] md:grid-cols-2 pt-[15px] sm:grid-cols-1 grid-rows-1">
        <ButtonInput text="Myself" onClick={handleButtonClick} />
        <ButtonInput text="My mother" onClick={handleButtonClick} />
        <ButtonInput text="My aunt" onClick={handleButtonClick} />
        <ButtonInput text="Other" onClick={handleButtonClick} />
        <ButtonInput text="My spouse" onClick={handleButtonClick} />
        <ButtonInput text="My father" onClick={handleButtonClick} />
        <ButtonInput text="My uncle" onClick={handleButtonClick} />
      </div>
      <div className="pt-[50px] flex justify-center md:justify-start max-sm:pb-[50px]">
        <button className="text-[#5E5E6F] font-medium text-[16px]">
          &lt; Previous{" "}
        </button>
      </div>
    </div>
  );
};

export default QuizThree;
