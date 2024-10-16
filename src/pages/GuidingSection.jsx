import React from "react";
import { Link } from "react-router-dom";

import GuidingReview from "../components/guidingPageCompo/GuidingReview";
import GuidingPath from "../components/guidingPageCompo/GuidingPath";
import GuidingPlatform from "../components/guidingPageCompo/GuidingPlatform";

function GuidingHeroSection() {
  return (
    <>
      <div className="bg-gradient-to-t from-lime-200 to-yellow-200 poppin  ">
        <div className="flex justify-start w-full px-5 py-2 text-gray-500 text-sm font-medium">
          <Link
            to="/"
            className={`hover:underline ${
              location.pathname === "/" ? "text-gray-500" : "text-black"
            }`}
          >
            Home
          </Link>
          <span className="mx-2">|</span>
          <Link
            to="/help-center"
            className={`hover:underline ${
              location.pathname === "/guiding-section"
                ? "text-gray-500"
                : "text-black"
            }`}
          >
            Guiding Principles
          </Link>
        </div>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative flex flex-1 w-full flex-col items-center justify-center text-center  xl:h-screen">
          <h1 class="max-w-6xl font-display  max-sm:text-3xl  md:text-5xl xl:text-6xl font-semibold tracking-normal	z-10	">
            Elevating aging,
            <div class="relative whitespace-nowrap sm:text-3xl md:text-5xl xl:text-6xl ">
              one family at a time
            </div>
          </h1>
          <h2 class="mx-auto mt-12 max-w-xl text-xl	 max-sm:text-lg  leading-7 z-10">
            We're inspired by the strength and love of families who choose to
            support their loved ones age in their own homes. It's that
            resilience that fuels our mission to create something truly
            impactful - a future where aging is not a burden, but a source of
            wisdom, strength, and celebrated way of life
          </h2>
          <img
            src="images/Ellipse.png"
            alt=""
            class="ellipse-2 absolute left-[5%] top-[12%]  w-[147px] sm:w-[73px] md:w-[84px] lg:w-[147px] !w-[73px] sm:!w-[73px] md:!w-[84px] lg:!w-[147px] z-0 sm:top-[14%] max-sm:top-[2%] sm:right-[70%]  max-sm:opacity-50"
          />

          <img
            src="images/Ellipse2.png"
            alt=""
            class="ellipse-2 absolute left-[77%] top-[11%]  w-[147px] sm:w-[73px] md:w-[84px] lg:w-[147px] !w-[73px] sm:!w-[73px] md:!w-[84px] lg:!w-[147px] z-0  max-sm:opacity-50"
          />
          <img
            src="images/Ellipse3.png"
            alt=""
            class="ellipse-3 absolute left-[2%] top-[60%]  w-[147px] sm:w-[73px] md:w-[84px] lg:w-[147px] !w-[73px] sm:!w-[73px] md:!w-[84px] lg:!w-[147px] z-0 max-sm:right-[77%]  max-sm:opacity-50"
          />
          <img
            src="images/Ellipse4.png"
            alt=""
            class="ellipse-4 absolute right-[13%] top-[68%]  w-[147px] sm:w-[73px] md:w-[84px] lg:w-[147px] !w-[73px] sm:!w-[73px] md:!w-[84px] lg:!w-[147px] z-0 max-sm:left-[77%] max-sm:opacity-50 "
          />
          <img
            src="images/Ellipse5.png"
            alt=""
            class="ellipse-5 absolute right-[76%;] top-[91%] max-md-top-[87%]   sm:w-[73px] md:w-[84px]  !w-[73px] sm:!w-[73px] md:!w-[84px]  z-0 max-sm:top-[90%] max-lg-top-[80%]  max-sm:opacity-50 "
          />
          <img
            src="images/Ellipse6.png"
            alt=""
            class="ellipse-6 absolute left-[50%] top-[86%]  w-[147px]   lg:w-[147px]  md:!w-[117px] lg:!w-[147px] z-0 sm:!w-[119px] sm:w-[119px]  max-sm:top-[83%]  max-sm:opacity-50  "
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
