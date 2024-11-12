import React from "react";
import { Link } from "react-router-dom";

import GuidingReview from "../components/guidingPageCompo/GuidingReview";
import GuidingPath from "../components/guidingPageCompo/GuidingPath";
import GuidingPlatform from "../components/guidingPageCompo/GuidingPlatform";

function GuidingHeroSection() {
  return (
    <>
      <div className=" poppin  relative max-sm:overflow-hidden pb-[50px] h-[700px] max-sm:h-[720px] bg-gradient-to-b from-[#FFF9C6]  via-[#FFF9C6] to-[#F3E677]  poppin  ">
        <div class="flex justify-start pt-[16px] lg:pt-[30px] pl-[38px] max-sm:pl-[16px] mb-[30px] lg:mb-[37px] w-full text-sm font-medium">
          <a class="hover:underline text-black" href="/">
            Home
          </a>
          <span class="mx-2">|</span>
          <a class="hover:underline text-gray-500" href="/become-partner">
            Guiding Principles
          </a>
        </div>
        <div class="mx-auto max-sm:mx-[16px]  lg:mt-[60px] flex flex-1 lg:w-full flex-col items-center justify-center text-center">
          <h1 class="max-w-[685px] font-display  max-sm:text-[28px] lg:text-[64px]  font-semibold 	z-10	">
            Elevating aging, <br /> one family at a time
          </h1>
          <p class="mx-auto mt-[30px] max-sm:px-[9px] max-sm:mt-[10px] lg:max-w-[775px] text-[20px] text-[#5E5E6F] font-medium	 max-sm:text-[19px]   z-10">
            At Zeegna, we're inspired by the strength and love of families who
            choose to support their loved ones age in their own homes. It's that
            resilience that fuels our mission to create something truly
            impactful - a future where aging is not a burden, but a source of
            wisdom, strength, and celebrated way of life
          </p>
          <img
            src="images/Ellipse.png"
            alt=""
            class="ellipse-2 absolute lg:left-[5%] lg:top-[15%] bottom-[181px]  w-[147px] sm:w-[73px] md:w-[84px] lg:w-[147px] !w-[88px] sm:!w-[88px] md:!w-[84px] lg:!w-[147px]     "
          />

          <img
            src="images/Ellipse2.png"
            alt=""
            class="ellipse-2 absolute lg:right-[7%] lg:top-[10%] max-sm:bottom-[29px] max-sm:left-[40%] w-[147px] sm:w-[73px] md:w-[84px] lg:w-[174px] !w-[106px] sm:!w-[106px] md:!w-[84px] lg:!w-[174px] "
          />
          <img
            src="images/Ellipse3.png"
            alt=""
            class="ellipse-3 absolute lg:left-[5%] lg:bottom-[25%] bottom-[81px]  w-[147px] sm:w-[73px] md:w-[84px] lg:w-[116px] !w-[120px] sm:!w-[120px] md:!w-[84px] lg:!w-[116px]  max-sm:right-[77%] "
          />
          <img
            src="images/Ellipse4.png"
            alt=""
            class="ellipse-4 absolute lg:right-[10%] lg:top-[68%] bottom-[99px]  w-[147px] sm:w-[73px] md:w-[84px] lg:w-[113px] !w-[113px] overflow-hidden sm:!w-[113px] md:!w-[84px] lg:!w-[113px]  max-sm:left-[77%]  "
          />
        </div>
      </div>
      <GuidingPlatform />
      <GuidingPath />
      <GuidingReview />
    </>
  );
}

export default GuidingHeroSection;
