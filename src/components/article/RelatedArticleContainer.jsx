import React from "react";

import RelatedArticleCard from "./RelatedArticleCard";
import RelatedArticleData from "../../data/RelatedArticleData";
RelatedArticleData;

function RelatedArticleContainer() {
  return (
    <>
      <div className="bg-[#F7F7F7] poppin">
        <div className=" lg:mx-[70px] mb-[80px] lg:mx-20  py-20 	">
          <div className="text-center">
            <h2 className="font-semibold text-[32px]">Related articles</h2>
            <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-2"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[50px] max-sm:mx-[16px]">
            {RelatedArticleData.map((card) => (
              <RelatedArticleCard
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
        </div>
      </div>
    </>
  );
}

export default RelatedArticleContainer;
