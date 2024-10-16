import React from "react";
import { Link } from "react-router-dom";

import ReviewIcon from "../../assets/icons/guidingSectionIcons/ReviewStar";

function GuidingReview() {
  return (
    <>
      <blockquote className="flex flex-col items-center p-4 poppin">
        <p className="lg:w-5/12	 	 font-semibold text-center text-[30px] sm:text-lg md:text-xl xl:text-5xl md:text-2xl lg:text-3xl">
          "To care for those who once cared for us is one of the highest honors"
        </p>
        <div className="flex items-center flex-col gap-3 mt-6 md:mt-12 item-center">
          <img
            className="flex-shrink-0 w-24 h-24 border rounded-full border-black/10"
            src="images/Review.png"
            alt="Sebastiaan Kloos"
            loading="lazy"
          />
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-medium tracking-tight text-base text-[#5E5E6F]"
          >
            <p>Tia Walker, Business Consultant,</p>
            <p className="  text-center">Author & Speaker</p>
          </a>
        </div>
      </blockquote>
      <div class="relative mt-12 pb-12 flex w-full flex-col items-center sm:mt-24 bg-[#F7F7F7]">
        <div
          className="absolute mx-auto flex max-w-fit items-center justify-center space-x-2
          overflow-hidden rounded-full bg-white px-6 py-6 transition-all top-[-44px]
          "
        >
          <ReviewIcon />
        </div>

        <span class="mt-8 max-w-3xl	 text-center 	font-semibold   pt-8 text-[30px] sm:text-lg md:text-xl lg:text-4xl	">
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
