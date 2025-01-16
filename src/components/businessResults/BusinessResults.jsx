import React from "react";
import bg from "../../../public/images/partnerBg.png";
import BusinessSlider from "../businessSlider/BusinessSlider";

const BusinessResults = () => {
  return (
    <>
      <div className="bg-[#F7F7F7] w-full md:py-[80px] py-[50px] max-sm:pl[16px] max-md:pl[57px] font-poppins">
        <div className="flex flex-col items-center gap-3">
          <h1 className=" text-[24px] md:text-[27px] max-sm:px-[16px] font-semibold text-center">
            Trusted by providers, proven by results
          </h1>
          <div className="w-[100px] border border-black h-[2px]"></div>
        </div>

        <div className="gap-[20px] px-[16px] md:px-[70px] md:pt-[53px] pt-[30px] flex flex-col items-center md:items-start md:flex-row">
          <img src={bg} alt="" className="md:w-[529px] md:h-[310px]" />

          <div className="slider flex-grow min-w-0 lg:ml-[60px] w-full md:w-auto">
            <BusinessSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessResults;
