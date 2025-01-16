import React from "react";
import { Link, useLocation } from "react-router-dom";
import HelpCenter from "/images/HelpCenter.png";

function HelpCenterHeroSection({
  changeTheHeading = "Got questions? We've answers",
  changeTheText = "Explore our help center to find the answers you need",
  extraThings,
}) {
  const location = useLocation();

  const showBorder =
    location.pathname === "/family-help-center" ||
    location.pathname === "/partner-help-center";

  return (
    <section className="items-center w-full md:px-[70px]">
      <div className="max-w-[900px] mx-auto text-center max-sm:mx-[16px] max-sm:text-left  pt-[90px] md:pt-[100px] md:pb-[80px] md:px-0 poppin">
        <div className="flex gap-[10px] md:gap-[15px] flex-col">
          <img
            src={HelpCenter}
            alt="HelpCenter"
            className="mx-auto w-[27px] h-[27px] "
          />

          <h2 className="font-semibold text-[27px] max-sm:text-[21px] text-center">
            {changeTheHeading}
          </h2>
          <p className="text-[#575757] text-[18px] font-medium md:px-[40px] text-center">
            {changeTheText}
          </p>
        </div>
      </div>

      {showBorder && <div className="md:border-b border-[#EAEAF1]"></div>}
    </section>
  );
}

export default HelpCenterHeroSection;
