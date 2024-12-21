import React from "react";
import HomeSafetyCard from "./HomeSafetyCard";
import HomeSafetyData from "../../data/HomeSafetyData";

function HomeSafetyContainer() {
  return (
    <div className="flex items-center justify-center max-sm:mx-[16px]">
      <div className="mx-auto pb-20 poppin max-sm:pb-[50px]">
        <div className="text-center max-sm:mt-[50px]">
          <h2 className="font-semibold text-xl md:text-[27px] xl:mt-[80px] max-sm:text-[21px] leading-[30px]">
            Top-rated home safety and accessibility solutions
          </h2>
          <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-2"></div>
        </div>
        <div className="lg:w-[958px] grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-3 gap-[10px] gap-x-[150px] mt-[50px] max-sm:mt-[30px] max-sm:gap-[10px] max-sm:px-[10px]">
          {HomeSafetyData.map((card) => (
            <HomeSafetyCard key={card.id} title={card.title} url={card.link} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeSafetyContainer;
