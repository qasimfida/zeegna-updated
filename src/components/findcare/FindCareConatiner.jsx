import React from "react";
import FindCare from "./FindCare";
import { FindCard } from "../../data/FindCareData";

function FindCareContainer() {
  return (
    <div className="bg-white poppin">
      <div className="mx-20 max-sm:mx-5 max-lg:mx-[27px] max-sm:py-[50px] py-[80px]">
        <div className="text-center">
<<<<<<< HEAD
          <h2 className="font-semibold text-[27px] max-sm:text-[21px]">
=======
          <h2 className="font-semibold text-[27px] max-sm:text-[24px]">
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
            Finding care just got simplified
          </h2>
          <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-2"></div>
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
