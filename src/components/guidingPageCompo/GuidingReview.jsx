import React from "react";
import { Link } from "react-router-dom";

import ReviewIcon from "../../assets/icons/guidingSectionIcons/ReviewStar";

function GuidingReview() {
  return (
    <>
      <div className="flex flex-col items-center gap-[30px] py-[80px] poppin">
        <p className="lg:w-[853px] text-center font-semibold max-sm:text-center text-[40px]  ">
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
      <div class="relative  pb-[80px] flex w-full flex-col items-center  bg-[#F7F7F7]">
        <div
          className="absolute mx-auto flex max-w-fit items-center justify-center space-x-2
          overflow-hidden rounded-full bg-white px-6 py-6 transition-all top-[-44px]
          "
        >
          <ReviewIcon />
        </div>

        <span class="pt-[113px]  max-w-3xl	 text-center 	font-semibold    text-[32px]  	">
          A future where every family thrives in the comfort of their home.
          Built together.
        </span>
        <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-0 sm:gap-x-4 text-base font-medium">
          <Link
            to="/help-center"
            className="flex flex-row items-center justify-center gap-x-2 text-black px-10 py-3.5 rounded-full border border-black"
          >
            Find help
          </Link>

          <Link
            to="/become-partner"
            className="flex flex-row items-center justify-center gap-x-2 rounded-full border border-teal-500 px-10 py-3 text-white bg-[#1C1C1C]"
          >
            Become a partner
          </Link>
        </div>
      </div>
    </>
  );
}

export default GuidingReview;
