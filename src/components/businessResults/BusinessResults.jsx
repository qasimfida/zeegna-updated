import React from "react";
import person from "../../../public/images/Rectangle113.png";
import BusinessSlider from "../businessSlider/BusinessSlider";

const BusinessResults = () => {
  return (
    <>
      <div className="py-[80px]">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-4xl font-semibold text-center">
            Trusted by providers, proven by results
          </h1>
          <div className="w-[100px] border border-black h-[2px]"></div>
        </div>

        <div className="pt-[53px] md:pl-[150px] flex flex-col md:flex-row items-center">
          <img
            src={person}
            alt=""
            className="w-[75%] md:w-[330px] h-auto flex-shrink-0 mb-6 md:mb-0"
          />

          <div className="slider flex-grow min-w-0 md:ml-4 w-full md:w-auto">
            <BusinessSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessResults;
