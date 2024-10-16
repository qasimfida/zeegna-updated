import React from "react";
import { Link, useLocation } from "react-router-dom";

function HelpCenterHeroSection({
  changeTheHeading = "Got questions? We've answers",
  changeTheText = "Explore our help center to find the answers you need",
  extraThings,
}) {
  const location = useLocation();

  return (
    <section>
      <div className="relative items-center bg-[#F7F7F7] w-full px-5 py-12 md:px-12 lg:px-16 poppin lg:py-24">
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
              location.pathname === "/help-center"
                ? "text-gray-500"
                : "text-black"
            }`}
          >
            Help Center
          </Link>
          {extraThings}
        </div>

        <div className="flex w-full mx-auto text-left">
          <div className="relative inline-flex items-center mx-auto align-middle">
            <div className="text-center">
              <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter md:text-5xl lg:text-5xl lg:max-w-5xl">
                {changeTheHeading}
              </h1>
              <p className="max-w-xl mx-auto mt-8 text-2xl leading-relaxed text-gray-500">
                {changeTheText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HelpCenterHeroSection;
