import React from "react";
import HomeCardNew from "./HomeCardsNew";
import cardsData from "../../data/CardsData";
import NewCardsData from "../../data/NewCardsData";

function NewHomeCardsContainer({
  textSize = "md:text-[27px] max-sm:text-[24px]",
}) {
  return (
    <div className="bg-[#F7F7F7]  pt-[80px]">
      <div className="md:px-2 md:mx-[70px] pb-20 poppin max-sm:pb-0">
        <div className="text-center max-sm:px-[16px]">
          <h2
            className={`font-semibold ${textSize}    max-sm:pt-[50px]  leading-[30px] `}
          >
            Home mods for safer, smarter living
          </h2>
          <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-2"></div>
          <p className="font-medium text-[16px] md:text-[18px] text-[#575757] pt-4 max-sm:pt-[20px]">
            Get professional, vetted help delivered to your home
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[50px] max-sm:mt-[30px] max-sm:gap-[10px] max-sm:px-[15px]">
          {NewCardsData.map((card) => (
            <HomeCardNew
              key={card.id}
              title={card.title}
              description={card.description}
              Icon={card.Icon}
              bgColor={card.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewHomeCardsContainer;
