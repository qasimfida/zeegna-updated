import React from "react";
import ButtonInput from "./ButtonInput";
import CheckBox from "./QuizCheckBox";

const QuizNine = () => {
  const arr = [
    { details: "A clear understanding of your aging in place needs." },
    { details: "Customized aging in place plans tailored to your situation." },
    { details: "Actionable recommendations for home modifications." },
    {
      details: "Access to trusted contractors to implement your modifications.",
    },
    {
      details:
        "The option to download and share your results as a PDF with others.",
    },
  ];
  return (
    <div className="pt-[49px] md:pl-[26px] px-[16px] font-poppins md:pb-[307px]">
      <h1 className="font-semibold text-[18px]">Home Expert Consultation</h1>
      <p className="text-[#5E5E6F] text-[18px] font-medium md:pr-[142px] pt-[5px]">
        Take the next step toward safe and comfortable aging at home with a
        professional consultation. Choose from a virtual or in-person session
        tailored to your needs.
      </p>
      <h1 className="font-semibold text-[18px] pt-[5px]">Session Details:</h1>
      <p className="text-[#5E5E6F] text-[18px] font-medium">Cost: $300</p>
      <p className="text-[#5E5E6F] text-[18px] font-medium">
        Duration: 45 minutes
      </p>
      <p className="text-[#5E5E6F] text-[18px] font-medium">
        Format: Virtual or In-Person (based on your preference)
      </p>
      <div className="pt-[30px] md:pt-[40px]">
        <h3 className="font-semibold text-[18px]">
          What will you gain from this questionnaire?
        </h3>
        <div>
          {arr.map((item, index) => (
            <CheckBox key={index} details={item.details} />
          ))}
        </div>
      </div>
      {/* sec 3 */}
      <div className="pt-[40px] md:pt-[60px] md:pb-[216px] flex justify-center md:justify-start max-sm:pb-[50px]">
        <button className="px-[21px] py-[13px] bg-[#1C1C1C] text-white rounded-full text-[16px] font-medium">
          Let's get started
        </button>
      </div>
    </div>
  );
};

export default QuizNine;
