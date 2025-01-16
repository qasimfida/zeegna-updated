import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import ButtonInput from "./ButtonInput";

const QuizTwo = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Handle click event for the button inputs
  const handleButtonClick = () => {
    navigate("/quiz-3"); // Redirect to quiz-3
  };

  return (
    <div className="pt-[49px] px-[16px] md:pl-[26px] font-poppins pb-[50px] md:pb-[374px]">
      <h1 className="font-semibold text-[18px]">
        Do you know exactly what home modifications you are looking to do?
      </h1>
      <div className="flex flex-col pt-[16px] gap-[10px]">
        <ButtonInput
          text={"No, I don't know/Not sure"}
          onClick={handleButtonClick}
        />
        <ButtonInput
          text={"Yes, but I could observe other"}
          onClick={handleButtonClick}
        />
        <ButtonInput text={"Yes, and I am sure"} onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default QuizTwo;
