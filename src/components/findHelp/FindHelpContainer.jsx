import React from "react";

import FindHelpCard from "./FindHelpCard";
import FindHelpData from "../../data/FindHelpData";

function FindHelpContainer() {
  return (
    <div className="  pt-[50px] pb-[215px] max-sm:pb-[100px]">
      <div className="md:px-2 md:mx-[70px]  poppin max-sm:pb-0">
        <div className="flex flex-col items-center justify-center text-center max-sm:px-[16px]">
          <div className="w-[80px] h-[80px] rounded-[30px] overflow-hidden mb-[40px] max-sm:mb-[20px]">
            <img
              src="images/women.png"
              alt="Mira"
              className="w-full h-full object-cover"
            />
          </div>

          <h2
            className={`font-semibold text-[18px] md:w-[615px] max-sm:pt-[50px] max-sm:pt-0 max-sm:text-[16px] leading-[30px]`}
          >
            Hi, my name is Mira. I'm going to help you to answer a few questions
            to better match you with the right care provider.
          </h2>
        </div>

        <div className="grid grid-cols-1 justify-center justify-items-center gap-[15px] mt-[40px] max-sm:mt-[30px] max-sm:gap-[15px] max-sm:px-[15px]">
          {FindHelpData.map((card) => (
            <FindHelpCard
              key={card.id}
              title={card.title}
              description={card.description}
              Icon={card.Icon}
              bgColor={card.bgColor}
              next={card.next}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FindHelpContainer;
