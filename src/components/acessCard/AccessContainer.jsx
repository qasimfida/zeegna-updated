import React from "react";
import AccessCard from "./AccessCard";
import AccessData from "../../data/AccessData";

const AccessContainer = () => {
  return (
    <div className="bg-[#fffff] poppin">
      <div className=" lg:mx-[70px] max-sm:mx-[16px] md:mx-[27px] pb-20 py-24  max-sm:py-0 max-sm:pt-[30px] max-sm:pb-[50px] ">
        <div className="text-center">
          <h2 className="font-semibold text-xl md:text-[32px]">
            Exclusive access to jobs in your area
          </h2>
          <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] mt-[50px]">
          {AccessData?.map((card) => (
            <AccessCard
              key={card.id}
              image={card.image}
              title={card.title}
              para={card.para}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccessContainer;
