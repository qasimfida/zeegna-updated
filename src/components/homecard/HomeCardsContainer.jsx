import React from "react";
import HomeCard from "./HomeCard";
import cardsData from "../../data/CardsData";

function HomeCardsContainer() {
  return (
    <>
      <div className=" mx-2 md:mx-20 pb-20 pt-[2.5rem]  poppin max-sm:pb-0 	">
        <div className="text-center max-sm:mt-72">
          <h2 className="font-semibold text-xl md:text-[32px] xl:mt-[114px] max-sm:pt-[50px] ">
            Right in the home you love
          </h2>
          <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-2"></div>
          <p className="font-medium text-sm md:text-xl text-[#575757] pt-4">
            Get professional, vetted help delivered to your home
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[50px]">
          {cardsData.map((card) => (
            <HomeCard
              key={card.id}
              title={card.title}
              description={card.description}
              Icon={card.Icon}
              bgColor={card.bgColor}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default HomeCardsContainer;
