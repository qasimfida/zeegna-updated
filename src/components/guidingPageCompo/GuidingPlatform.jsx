import React from "react";
import FlowerIcon from "../../assets/icons/guidingSectionIcons/Flower";
import FlowerLeft from "../../assets/icons/guidingSectionIcons/FlowerLeft";

function GuidingPlatform() {
  return (
    <>
      <div className="bg-zinc-50 overflow-hidden pt-[80px] max-sm:pt-[50px] poppin">
        <div className="text-center">
          <h2 className="font-semibold text-[32px] max-sm:text-[24px]">
            A platform with a purpose
          </h2>
          <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-2"></div>
        </div>
        <div className="flex flex-col items-center justify-center pt-[50px] max-sm:pt-[30px] max-sm:mx-[23px] max-sm:text-center relative">
          <div className="flex  justify-center  border-b border-gray-200 ">
            <div className="w-full absolute lg:left-[22%] max-sm:left-0 top-[15%]">
              <FlowerLeft />
            </div>

            <p className="text-center text-[20px] max-sm:text-[16px]  font-medium text-[#5E5E6F] xl:w-7/12 max-sm:w-[77%]	 pb-[35px] max-sm:pb-[20px]	">
              We're driven to enable families help their loved ones age at home
              with good health, dignity, and comfort.
            </p>
            <div className="w-full absolute lg:left-[73%] max-sm:left-[85%] top-[15%] ">
              <FlowerIcon />
            </div>
          </div>

          <div className="w-full mt-[35px] max-sm:mt-[20px] "></div>

          <div className="text-center text-lg max-sm:text-[16px] font-medium text-[#5E5E6F]  lg:max-w-[884px]">
            To deliver on this mission, we bring together services, resources,
            and tools to help families find support, make informed decisions,
            and thrive in the comfort of their home.
          </div>
        </div>
        <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-[90px] lg:py-24 space-y-24  flex flex-col justify-center">
          <div className="flex flex-col sm:flex-row mx-auto">
            <a href="#_">
              <img
                src="images/Guiding1.png"
                className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="img-1"
              />
            </a>
            <a href="#_">
              <img
                src="images/Guiding2.png"
                className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="img-2"
              />
            </a>
            <a href="#_">
              <img
                src="images/Guiding3.png"
                className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="img-3"
              />
            </a>
            <a href="#_">
              <img
                src="images/Guiding4.png"
                className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="img-4"
              />
            </a>
            <a href="#_">
              <img
                src="images/Guiding5.png"
                className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="img-4"
              />
            </a>
            <a href="#_">
              <img
                src="images/Guiding6.png"
                className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="img-4"
              />
            </a>
            <a href="#_">
              <img
                src="images/Guiding7.png"
                className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="img-4"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default GuidingPlatform;
