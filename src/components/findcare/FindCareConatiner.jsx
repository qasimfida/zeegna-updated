import React from "react";
import FindCare from "./FindCare";
import { FindCard } from "../../data/FindCareData";

function FindCareContainer({
  headingText,
  description = "Personalized care that fits your life, simple and fast",
  fontSize = "",
}) {
  return (
    <div className="poppin md:py-[80px] max-sm:py-[50px]">
      <div className={`mx-20 max-sm:mx-[16px]  max-lg:mx-[27px]`}>
        <div className="text-center">
          <h2
            className={`font-semibold text-[27px] ${fontSize} max-sm:text-[21px]`}
          >
            {headingText}
          </h2>
          <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-2"></div>
          <p className="font-medium text-[16px] md:text-[18px] text-[#575757] pt-4 max-sm:pt-0">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-24 gap-y-10 max-sm:gap-y-[30px] mt-[50px] max-sm:mt-[30px]">
          {FindCard.map((card) => (
            <FindCare
              key={card.id}
              title={card.title}
              description={card.description}
              count={card.count}
              bgColor={card.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FindCareContainer;
