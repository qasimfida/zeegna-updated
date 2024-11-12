import React from "react";
import person from "../../../public/images/Rectangle113.png";
import BusinessSlider from "../businessSlider/BusinessSlider";

const BusinessResults = () => {
  return (
    <>
      <div className="w-full py-[80px] max-sm:pl[16px] max-md:pl[57px] lg:px-[150px] font-poppins">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-[32px] font-semibold text-center">
            Trusted by providers, proven by results
          </h1>
          <div className="w-[100px] border border-black h-[2px]"></div>
        </div>

        <div className="pt-[53px] flex flex-col items-center md:items-start md:flex-row">
          <img
            src={person}
            alt=""
            className="h-auto flex-shrink-0 mb-6 md:mb-0"
          />

          <div className="slider flex-grow min-w-0 lg:ml-[121px] ml-[20px] w-full md:w-auto">
            <BusinessSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessResults;
