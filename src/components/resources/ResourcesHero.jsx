import React from "react";
import { Link } from "react-router-dom";
import TwitterIcon from "../../assets/icons/resources/Twitter";
import FacebookIcon from "../../assets/icons/resources/FacebookIcon";
import LinkedinIcon from "../../assets/icons/resources/Linkedin";
import EmailIcon from "../../assets/icons/resources/Email";
import LeftTick from "../../assets/icons/faqsDropDown/LeftTick";

function ResourcesHero({
  paraChange = "Got questions? We've answers",
  showSocialIcons = false,
  showReadMore = false,
}) {
  return (
    <div className="bg-[#F7F7F7] poppin">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        {/* Text Content */}
        <div className="col-span-1 md:col-span-5 md:mx-20 mx-4">
          <button className="rounded-full py-3 px-6 bg-[#F9ECEC]">
            Featured
          </button>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1C1C1C] pb-2 leading-[35px] md:leading-[40px]">
            10 things you should know when choosing a home health provider
          </h2>

          <div className="text-sm md:text-base text-[#5E5E6F] py-4">
            <p>{paraChange}</p>
          </div>

          {showSocialIcons && (
            <div className="flex space-x-4 items-center py-4 cursor-pointer">
              <Link
                to="#"
                className="p-2.5 rounded-full border border-gray-500 flex justify-center items-center"
              >
                <FacebookIcon alt="Facebook Icon" />
              </Link>
              <Link
                to="#"
                className="p-2.5 rounded-full border border-gray-500 flex justify-center items-center"
              >
                <LinkedinIcon alt="LinkedIn Icon" />
              </Link>
              <Link
                to="#"
                className="p-2.5 rounded-full border border-gray-500 flex justify-center items-center"
              >
                <TwitterIcon alt="Twitter Icon" />
              </Link>
              <Link
                to="#"
                className="p-2.5 rounded-full border border-gray-500 flex justify-center items-center"
              >
                <EmailIcon alt="Email Icon" />
              </Link>
            </div>
          )}

          {showReadMore && (
            <Link
              to="/article"
              className="flex items-center mt-2 py-2 gap-4 bg-transparent text-[#109088] text-sm md:text-base font-semibold"
            >
              Read more
              <LeftTick />
            </Link>
          )}
        </div>

        {/* Image Section */}
        <div className="col-span-1 md:col-span-7 text-base	font-medium">
          <img
            src="images/resources.png"
            className="w-full h-auto"
            alt="Resources"
          />
        </div>
      </div>
    </div>
  );
}

export default ResourcesHero;
