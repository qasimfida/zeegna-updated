import React from "react";
import KnowledgeData from "../../data/KnowledgeData";
import KnowledgeCard from "./KnowledgeCard";

function KnowledgeContainer() {
  return (
    <>
      <div className="bg-[#F7F7F7] poppin">
        <div className="mx-4 lg:mx-[70px] py-20 md:mt-20">
          <div className="text-center">
            <h2 className="font-semibold text-[32px]">Your knowledge hub</h2>
            <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-2"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[50px]">
            {KnowledgeData.map((card) => (
              <KnowledgeCard
                key={card.id}
                id={card.id}
                image={card.image}
                title={card.title}
                description={card.description}
                Icon={card.Icon}
                bgColor={card.bgColor}
                chip={card.chip}
                className={card.id === 4 ? "pb-2.5" : ""}
              />
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <button className="rounded-full bg-transparent border-[#1C1C1C] border-2 px-[35.5px] py-[13px] text-[#1C1C1C] hover:bg-black hover:text-white font-medium">
              Read more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default KnowledgeContainer;
