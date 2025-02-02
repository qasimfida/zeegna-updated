import React from "react";
import KnowledgeCard from "../knowledge/KnowledgeCard";
import { useNavigate } from "react-router-dom";

function ExpertTipsContainer({ background, popularContent, title }) {
  const dataToDisplay = popularContent || [];

  const navigate = useNavigate();

  return (
    <div className={`${background ? background : "bg-[#F7F7F7]"} poppin`}>
      <div className="mx-4 lg:mx-[70px] pt-20 py-[30px] max-sm:py-[50px]">
        {/* Title Section */}
        <div className="text-center">
          <h2 className="font-semibold text-[27px] max-sm:text-[21px] md:w-[550px] mx-auto">
            {title} {/* Use the title prop */}
          </h2>
          <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-2"></div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[50px] max-sm:mt-[30px]">
          {dataToDisplay.map((card) => (
            <KnowledgeCard
              key={card.id}
              id={card.id}
              image={card.image}
              title={card.title}
              description={card.description}
              Icon={card.Icon}
              bgColor={card.bgColor}
              chip={card.chip}
              className={card.id}
            />
          ))}
        </div>

        {/* Read More Button */}
        <div className="flex justify-center md:mt-[50px] max-sm:mt-[30px]">
          <button className="rounded-full bg-transparent border-[#1C1C1C] border-2 px-[35.5px] py-[13px] text-[#1C1C1C] hover:bg-black hover:text-white font-medium" onClick={() => navigate("/resources")}>
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExpertTipsContainer;
