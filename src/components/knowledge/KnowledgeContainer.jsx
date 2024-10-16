import React from "react";

import KnowledgeData from "../../data/KnowledgeData";
import KnowledgeCard from "./KnowledgeCard";

function KnowledgeContainer() {
  return (
    <>
      <div className="bg-[#F7F7F7] poppin">
        <div className=" mx-4 lg:mx-20  py-20 mt-20	">
          <div className="text-center">
            <h2 className="font-semibold text-4xl">Your knowledge hub</h2>
            <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-2"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[50px]">
            {KnowledgeData.map((card) => (
              <KnowledgeCard
                key={card.id}
                image={card.image}
                title={card.title}
                description={card.description}
                Icon={card.Icon}
                bgColor={card.bgColor}
                chip={card.chip}
              />
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <button className="rounded-full bg-transparent border-[#1C1C1C] border-2 px-8 py-4 text-[#1C1C1C]">
              Read more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default KnowledgeContainer;
