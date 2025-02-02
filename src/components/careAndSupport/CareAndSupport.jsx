import React from "react";

import CareAndSupportContainer from "./CareAndSupportContainer";
import CareAndSupportData from "../../data/CareAndSupportData";

const CareAndSupport = () => {
  return (
    <>
      <div className="flex items-center justify-center max-sm:mx-[16px]">
        <div className="mx-auto  poppin">
          <div className="text-center max-sm:mt-[50px] max-w-[832px]">
            <h2 className="font-semibold text-xl md:text-[27px] xl:mt-[80px] max-sm:text-[21px] leading-[40px]">
              We provide care and support for you and your family through
              life’s key milestones
            </h2>
            <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-2"></div>
            <p className="font-medium text-base md:text-xl text-[#575757] pt-[20px] max-sm:pt-[20px]  mx-auto">
              Our platform helps families navigate life’s transitions with
              trusted care and services, making it easier to age safely and
              comfortably at home
            </p>
          </div>
        </div>
      </div>
      <CareAndSupportContainer />
    </>
  );
};

export default CareAndSupport;
