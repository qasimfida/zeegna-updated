import React from "react";
import { Link } from "react-router-dom";

import ReviewIcon from "../../assets/icons/guidingSectionIcons/ReviewStar";

function GuidingReview() {
  return (
    <>
      <div className="flex flex-col items-center gap-[30px] py-[80px] max-sm:py-[50px] lg:mb-[80px] poppin max-sm:mx-[16px]">
        <p className="lg:w-[853px] text-center font-semibold max-sm:text-center text-[40px] max-sm:text-[28px]  ">
          "To care for those who once cared for us is one of the highest honors"
        </p>
        <div className="flex items-center flex-col gap-[30px]  item-center">
          <img
            className="flex-shrink-0 w-[100px] h-[100px] border rounded-full border-black/10"
            src="images/Review.png"
            alt="Sebastiaan Kloos"
            loading="lazy"
          />
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-medium  text-base text-[#5E5E6F]"
          >
            <p>Tia Walker, Business Consultant,</p>
            <p className="  text-center">Author & Speaker</p>
          </a>
        </div>
      </div>
      <div class="relative  pb-[80px] max-sm:pb-[50px] flex w-full flex-col items-center  bg-[#F7F7F7] max-sm:mb-[50px] mb-[80px] ">
        <div
          className="absolute mx-auto flex max-w-fit items-center justify-center space-x-2
          overflow-hidden rounded-full bg-white px-6 py-6 transition-all top-[-44px] 
          "
        >
          <ReviewIcon />
        </div>

        <span class="pt-[113px] max-sm:pt-[100px]  max-w-3xl	 text-center 	font-semibold max-sm:mx-[16px]    text-[32px] max-sm:text-[28px]  	">
          A future where every family thrives in the comfort of their home.
          Built together.
        </span>
        <div class="mt-[40px] max-sm:gap-[10px] grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-0 sm:gap-x-4 text-base font-medium max-sm:px-[16px] max-sm:w-full ">
          <Link
            to="/help-center"
            className="flex flex-row items-center justify-center gap-x-2 text-black px-10 py-3.5 rounded-full border border-black hover:text-white hover:bg-[#1C1C1C] max-sm:w-full"
          >
            Find help
          </Link>

          <Link
            to="/become-partner"
            className="flex flex-row items-center justify-center gap-x-2 rounded-full border border-[#1C1C1C] px-10 py-3 text-white bg-[#1C1C1C] hover:text-black hover:bg-white"
          >
            Become a partner
          </Link>
        </div>
      </div>
    </>
  );
}

export default GuidingReview;
