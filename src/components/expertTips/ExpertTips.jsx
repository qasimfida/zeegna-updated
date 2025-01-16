import React from "react";
import KnowledgeData from "../../data/KnowledgeData";

import KnowledgeCard from "../knowledge/KnowledgeCard";

function ExpertTipsContainer() {
  return (
    <div className="bg-[#F7F7F7] poppin mb-[50px] md:mb-[80px]">
      <div className="mx-4 lg:mx-[70px] py-20 max-sm:py-[50px]">
        {/* Title Section */}
        <div className="text-center">
          <h2 className="font-semibold text-[27px] max-sm:text-[21px] md:w-[550px] mx-auto">
            Expert tips and resources for safe and independent living
          </h2>
          <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-2"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[50px] max-sm:mt-[30px]">
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
      </div>
    </div>
  );
}

export default ExpertTipsContainer;
