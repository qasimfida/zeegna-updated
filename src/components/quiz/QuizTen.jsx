import React from "react";
import ButtonInput from "./ButtonInput";

const QuizTen = () => {
  return (
    <div className="pt-[49px] px-[16px] md:pl-[26px] md:pb-[251px]">
      <h1 className="text-[18px] font-semibold">
        Who is this home consultation for?
      </h1>
      {/* Updated grid classes */}
      <div className="grid gap-[10px] md:grid-cols-2 pt-[15px] sm:grid-cols-1 grid-rows-1">
        <ButtonInput text="Myself" />
        <ButtonInput text="My mother" />
        <ButtonInput text="My aunt" />
        <ButtonInput text="Other" />
        <ButtonInput text="My spouse" />
        <ButtonInput text="My father" />
        <ButtonInput text="My uncle" />
      </div>
      <div className="pt-[50px] flex justify-center md:justify-start max-sm:pb-[50px]">
        <button className="text-[#5E5E6F] font-medium text-[16px]">
          Previous{" "}
        </button>
      </div>
    </div>
  );
};

export default QuizTen;
