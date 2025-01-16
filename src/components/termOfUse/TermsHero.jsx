import React from "react";
import Terms from "/images/terms.png";

import { Link, useLocation } from "react-router-dom";

const TermsHero = () => {
  return (
    <>
      <div className="max-w-[900px] mx-auto text-center max-sm:mx-[16px] max-sm:text-left pt-[90px] md:pt-[100px] pb-[120px] max-sm:pb-[60px]  md:mb-[40px] md:px-0 lg:px-[121.5px] poppin md:border-b">
        <div className="flex gap-[10px] md:gap-[15px] flex-col">
          <img
            src={Terms}
            alt="Terms"
            className=" mx-auto w-[27px] h-[27px]  "
          />

          <h2 className="font-semibold text-[27px] max-sm:text-[21px] text-center">
            Terms of use
          </h2>
          <p className="text-[#575757] text-[18px] font-medium  md:px-[40px] text-center">
            Understand the policies and conditions for using our services and
            platform securely
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsHero;
