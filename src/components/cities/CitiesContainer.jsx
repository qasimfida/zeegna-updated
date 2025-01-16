import React from "react";
import CitiesCard from "./CitiesCard";
import { CitiescardData } from "../../data/CitiesCardsData";

function CitiesContainer({ data = CitiescardData }) {
  return (
    <div className="bg-[#F7F7F7] poppin">
      <div>
        <div className="grid grid-cols-1 md:mt-[50px]">
          {data.map((item) => (
            <CitiesCard
              key={item.id}
              image={item.image}
              category={item.category || item.count}
              title={item.title}
              description={item.description}
              reverse={item.reverse}
              background={item.background || item.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CitiesContainer;
