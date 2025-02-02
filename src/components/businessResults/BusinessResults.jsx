import React from "react";
// import bg from "../../../public/images/partnerBg.png";
import BusinessSlider from "../businessSlider/BusinessSlider";

const BusinessResults = () => {
  return (
    <div className="bg-[#F7F7F7] w-full md:py-[80px] py-[50px] font-poppins">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-[24px] md:text-[27px] font-semibold text-center max-sm:px-[16px]">
          Trusted by providers, proven by results
        </h1>
        <div className="w-[100px] border border-black h-[2px]"></div>
      </div>
      <div className="px-[16px] md:px-[70px] md:pt-[50px] pt-[30px] flex flex-col items-center md:items-start md:flex-row">
        <BusinessSlider />
      </div>
    </div>
  );
};

export default BusinessResults;
