import React from "react";
import CareAndSupportCard from "./CareAndSupportCard";
import CareAndSupportData from "../../data/CareAndSupportData";

function CareAndSupportContainer({ data = CareAndSupportData }) {
  return (
    <div className="bg-[#F7F7F7] poppin">
      <div>
        <div className="grid grid-cols-1 md:mb-[80px] mb-[50px] ">
          {data.map((item) => (
            <CareAndSupportCard
              key={item.id}
              image={item.image}
              category={item.category || item.count}
              title={item.title}
              description={item.description}
              reverse={item.reverse}
              padding={item.padding}
              background={item.background || item.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CareAndSupportContainer;
