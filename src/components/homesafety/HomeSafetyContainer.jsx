import React from "react";
import HomeSafetyCard from "./HomeSafetyCard";
import HomeSafetyData from "../../data/HomeSafetyData";

function HomeSafetyContainer() {
  return (
    <div className="flex items-center justify-center max-sm:mx-[16px]">
      <div className="mx-auto pb-20 poppin max-sm:pb-[50px]">
        <div className="text-center max-sm:mt-[50px]">
          <h2 className="font-semibold text-xl md:text-[27px] xl:mt-[80px] max-sm:text-[21px] leading-[30px]">
            Your all-in-one platform for home support services
          </h2>
          <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-2"></div>
          <p className="font-medium text-base md:text-xl text-[#575757] pt-4 max-sm:pt-[20px] max-w-[800px] mx-auto">
            Find everything you need, from home repairs and personal care to
            smart technology and legal planning, all in one place
          </p>
        </div>
        <div className="mx-auto lg:w-[958px] grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-3 gap-[10px] gap-x-[150px] mt-[50px] max-sm:mt-[30px] max-sm:gap-[10px] max-sm:px-[10px]">
          {HomeSafetyData.map((card) => (
            <HomeSafetyCard key={card.id} title={card.title} url={card.link} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeSafetyContainer;
