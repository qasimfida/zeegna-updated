import React from "react";
import HomeHeroData from "../../data/HomeHeroData";
import { BsArrowRight } from "react-icons/bs";

const HomeHeroComp = () => {
  const firstTwoCards = HomeHeroData.slice(0, 2);
  const lastTwoCards = HomeHeroData.slice(2);

  return (
    <div className="flex max-sm:mx-[16px] md:px-[70px] gap-[20px] max-sm:pb-[50px] flex-col poppin md:flex-row md:pb-[80px]  cursor-pointer">
      <div className="flex flex-col md:flex-row gap-[20px]">
        {firstTwoCards.map(
          ({ id, Icon, heading, details, text, bgColor, iconBg }) => (
            <div
              key={id}
              className={`p-[20px] max-sm:p-[15px] flex flex-col ${bgColor} rounded-xl  transition-transform transform hover:scale-105 hover:shadow-lg md:h-[329px] md:w-[310px]`}
            >
              <div
                className={`flex justify-center  ${iconBg} w-[60px] h-[60px] rounded-full  items-center mb-[8px] md:mb-[36px]`}
              >
                <Icon />
              </div>
              <h1 className="text-[21px] max-sm:text-[18px] text-white font-semibold pb-[7px]">
                {heading}
              </h1>
              <p className="text-[16px]  font-medium text-white ">{details}</p>
              <div className="flex items-center gap-2 md:pt-[20px] pt-[15px]">
                <button className="text-[14px] text-white font-semibold">
                  {text}
                </button>
                <BsArrowRight className="text-white w-[20px] h-[20px]" />
              </div>
            </div>
          )
        )}
      </div>

      <div className="flex flex-col gap-[20px] cursor-pointer ">
        {lastTwoCards.map(
          ({ id, Icon, heading, details, text, bgColor, backGround }) => (
            <div
              key={id}
              className={`px-[20px] py-[20px] max-sm:px-[15px] flex flex-col ${bgColor} rounded-xl pb-[20px] transition-transform transform hover:scale-105 hover:shadow-lg`}
            >
              <div className="md:flex-row flex justify-between flex-col-reverse gap-[8px] md:gap-0">
                <div className="md:w-[85%]">
                  <h1 className="text-[21px]  font-semibold max-sm:text-[18px] pb-[4px] ">
                    {heading}
                  </h1>
                  <p className="text-[16px] font-medium  ">{details}</p>
                </div>

                <div
                  className={`flex justify-center w-[60px] h-[60px] rounded-full un items-center ${backGround}`}
                >
                  <Icon />
                </div>
              </div>

              <div className="flex items-center gap-2  md:pt-[10px] pt-[15px]">
                <button className="text-[14px] font-semibold">{text}</button>
                <BsArrowRight className="text-black w-[20px] h-[20px]" />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default HomeHeroComp;
