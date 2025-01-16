import React from "react";
import AccessCard from "./AccessCard";

import BecomePartnerData from "../../data/BecomePartnerData";

const AccessContainer = () => {
  return (
    <div className="bg-[#fffff] poppin">
      <div className=" lg:mx-[70px] max-sm:mx-[16px] md:mx-[27px] pb-20 py-24   max-sm:py-[50px] ">
        <div className="text-center ">
          <h2 className="font-semibold max-sm:px-[30px] text-[21px] md:text-[27px]">
            Exclusive access to jobs in your area
          </h2>
          <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-2"></div>
          <p className="pt-4 max-sm:pt-[20px] text-[18px] text-[#5E5E6F] font-medium text-center max-sm:text-[16px]">
            Be part of solution millions of families searching for
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] mt-[30px] md:mt-[50px]">
          {BecomePartnerData?.map((card) => (
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
