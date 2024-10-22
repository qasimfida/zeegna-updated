import React from "react";
import PowerFulCard from "./PowerFulCard";
import PowerData from "../../data/PowerData";

function PowerFulContainer() {
  return (
    <>
      <div className="bg-[#F7F7F7] poppin">
        <div className="mx-20 max-sm:mx-6 max-sm:py-[50px]  py-[80px]">
          <div className="text-center ">
            <h2 className="font-semibold text-[32px] max-sm:text-3xl max-sm:text-[24px]">
              Simple in use, powerful in action
            </h2>
            <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-2"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-10 max-sm:gap-y-[30px] mt-[50px] max-sm:mt-[30px]">
            {PowerData.map((card) => (
              <PowerFulCard
                key={card.id}
                title={card.title}
                description={card.description}
                Icon={card.Icon}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PowerFulContainer;
