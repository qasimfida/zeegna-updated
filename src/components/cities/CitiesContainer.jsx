import React from "react";
import CitiesCard from "./CitiesCard";
import CitiescardData from "../../data/CitiesCardsData";

function CitiesContainer() {
  return (
    <div className="bg-[#F7F7F7] poppin">
      <div className=" ">
        <div className="grid grid-cols-1  mt-[50px] max-sm:mt-[30px]">
          {CitiescardData.map((card) => (
            <CitiesCard
              key={card.id}
              image={card.image}
              category={card.category}
              title={card.title}
              description={card.description}
              reverse={card.reverse}
              background={card.background}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CitiesContainer;
