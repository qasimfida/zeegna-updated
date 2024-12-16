import React from "react";
import HomeHeroData from "../../data/HomeHeroData";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const HomeHeroComp = () => {
  const firstTwoCards = HomeHeroData.slice(0, 2);
  const lastTwoCards = HomeHeroData.slice(2);

  return (
    <div className="flex max-sm:mx-[16px] md:px-[70px] gap-[20px] flex-col poppin md:flex-row md:pb-[80px] max-sm:pt-[50px] cursor-pointer">
      <div className="flex flex-col md:flex-row gap-[20px]">
        {firstTwoCards.map(({ id, Icon, heading, details, text, bgColor }) => (
          <div
            key={id}
            className={`px-[20px] max-sm:px-[15px] flex flex-col ${bgColor} rounded-xl pb-[20px]`}
          >
            <div className="flex justify-start md:justify-end pt-[20px] pb-[8px] md:pb-[72px]">
              <Icon />
            </div>
            <h1 className="text-[21px] max-sm:text-[18px] font-semibold pb-[10px]">
              {heading}
            </h1>
            <p className="text-[16px] md:w-[270px] font-medium text-[#5E5E6F] pb-[14px]">
              {details}
            </p>
            <div className="flex items-center gap-2">
              <button className="text-[14px] font-semibold">{text}</button>
              <ArrowRightIcon width={12} />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-[20px] cursor-pointer ">
        {lastTwoCards.map(({ id, Icon, heading, details, text, bgColor }) => (
          <div
            key={id}
            className={`px-[20px] py-[20px] max-sm:px-[15px] flex flex-col ${bgColor} rounded-xl pb-[20px]`}
          >
            <div className="md:flex-row flex justify-between flex-col-reverse gap-[8px] md:gap-0">
              <h1 className="text-[21px]  font-semibold max-sm:text-[18px] pb-[5px]">
                {heading}
              </h1>
              <Icon />
            </div>
            <p className="text-[16px] font-medium text-[#5E5E6F] pb-[6px]">
              {details}
            </p>
            <div className="flex items-center gap-2">
              <button className="text-[14px] font-semibold">{text}</button>
              <ArrowRightIcon width={12} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeHeroComp;
