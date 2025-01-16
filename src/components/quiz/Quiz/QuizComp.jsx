import React from "react";
// import person from "../../../public/images/personPortrait.png";

const QuizComp = () => {
  return (
    <>
      <div className="flex items-center flex-col bg-[#ECECEC] w-auto md:w-[490px]">
        <img
          src="images/personPortrait.png"
          alt="Mira"
          className="object-cover pt-[49px]"
        />
        <div className="pb-[40px] px-[16px] sm:px-[33px] pt-[30px]">
          <h1 className="font-semibold text-[16px]">Why are we asking this?</h1>
          <p className="font-medium text-[16px] text-[#5E5E6F] pt-[20px]">
            Whether you’re completing this for yourself or someone else, select
            answers that best reflect the current situation. If you have
            multiple people in mind, you can take the questionnaire again later.
          </p>
          <p className="font-medium text-[16px] text-[#5E5E6F] pt-[20px]">
            We personalize each question to ensure you receive the most relevant
            recommendations.
          </p>
        </div>
      </div>
    </>
  );
};

export default QuizComp;
