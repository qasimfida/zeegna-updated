import React from "react";
import FlowerIcon from "../../assets/icons/guidingSectionIcons/Flower";
import FlowerLeft from "../../assets/icons/guidingSectionIcons/FlowerLeft";

function GuidingPlatform() {
  return (
    <>
      <div className="bg-zinc-50 overflow-hidden pt-12 poppin">
        <div className="text-center">
          <h2 className="font-semibold text-4xl">A platform with a purpose</h2>
          <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-2"></div>
        </div>
        <div className="flex flex-col items-center justify-center py-12">
          <div className="flex items-center justify-center space-x-4">
            <FlowerLeft />

            <p className="text-center text-xl sm:text-2xl font-medium text-gray-700 xl:w-7/12	leading-5	">
              We're driven to enable families help their loved ones age at home
              with good health, dignity, and comfort.
            </p>

            <FlowerIcon />
          </div>

          <div className="w-full my-6 border-t border-gray-200"></div>

          <div className="text-center text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
            To deliver on this mission, we bring together services, resources,
            and tools to help families find support, make informed decisions,
            and thrive in the comfort of their home.
          </div>
        </div>
        <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24  flex flex-col justify-center">
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
