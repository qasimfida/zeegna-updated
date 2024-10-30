import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // import useLocation for pathname checking
import TwitterIcon from "../../assets/icons/resources/Twitter";
import FacebookIcon from "../../assets/icons/resources/FacebookIcon";
import LinkedinIcon from "../../assets/icons/resources/Linkedin";
import EmailIcon from "../../assets/icons/resources/Email";
import LeftTick from "../../assets/icons/faqsDropDown/LeftTick";

function ResourcesHero({
  paraChange = "When it comes to aging or managing long-term health issues, home health care can be an absolute lifesaver. But what exactly is home health care? Put simply, it’s professional care provided in the comfort of your own home...",
  showSocialIcons = false,
  showReadMore = false,
  extraThings,
}) {
  const [isMdScreen, setIsMdScreen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const truncatedText =
    "When it comes to aging or managing long-term health issues, home health care can...";

  return (
    <div className="bg-[#F7F7F7] poppin">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[50px] justify-items-end max-sm:flex flex-col-reverse	 md:items-center lg:h-[460px]  max-sm:pb-[40px]">
        <div className="mx-4 md:ml-[34px] md:mx-0">
          <div className="flex justify-start w-full pt-[20px] pb-[50px] text-gray-500 text-sm font-medium">
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
              to="/resources"
              className={`hover:underline ${
                location.pathname === "/resources"
                  ? "text-gray-500"
                  : "text-black"
              }`}
            >
              Resources
            </Link>

            {/* Conditionally render the new "Featured articles" link on other pages */}
            {location.pathname !== "/resources" && (
              <>
                <span className="mx-2">|</span>
                <Link
                  to="/article"
                  className={`hover:underline ${
                    location.pathname === "/article"
                      ? "text-gray-500"
                      : "text-black"
                  }`}
                >
                  Featured articles
                </Link>
              </>
            )}

            {extraThings}
          </div>
          <button className="rounded-[30px] py-[5px] px-[18px] bg-[#F9ECEC] text-[#5E5E6F] text-[14px] font-normal mb-[10px]">
            Featured
          </button>

          <h2 className="text-2xl lg:text-[32px] md:text-[19px] font-semibold text-[#1C1C1C] pb-2 leading-[35px] max-md:leading-[25px]">
            10 things you should know when choosing a home health provider
          </h2>

          <div className="text-sm md:text-[16px] font-medium text-[#5E5E6F] lg:py-4 md:py-[10px] leading-[25px]">
            <p>{isMdScreen ? truncatedText : paraChange}</p>
          </div>

          {showSocialIcons && (
            <div className="flex space-x-4 items-center py-4">
              <Link
                to="#"
                className="p-2.5 rounded-full border border-gray-500 flex justify-center items-center transition duration-300 hover:bg-blue-200  hover:-translate-y-1"
              >
                <FacebookIcon
                  alt="Facebook Icon"
                  className="text-gray-500 hover:text-white"
                />
              </Link>
              <Link
                to="#"
                className="p-2.5 rounded-full border border-gray-500 flex justify-center items-center transition duration-300 hover:bg-blue-200 hover:-translate-y-1"
              >
                <LinkedinIcon
                  alt="LinkedIn Icon"
                  className="text-gray-500 hover:text-white"
                />
              </Link>
              <Link
                to="#"
                className="p-2.5 rounded-full border border-gray-500 flex justify-center items-center transition duration-300 hover:bg-blue-200 hover:-translate-y-1"
              >
                <TwitterIcon
                  alt="Twitter Icon"
                  className="text-gray-500 hover:text-white"
                />
              </Link>
              <Link
                to="#"
                className="p-2.5 rounded-full border border-gray-500 flex justify-center items-center transition duration-300 hover:bg-blue-200 hover:-translate-y-1"
              >
                <EmailIcon
                  alt="Email Icon"
                  className="text-gray-500 hover:text-white"
                />
              </Link>
            </div>
          )}

          {showReadMore && (
            <Link
              to="/article"
              className="flex items-center gap-2 bg-transparent text-[#109088] text-sm md:text-base font-semibold"
            >
              Read more
              <LeftTick />
            </Link>
          )}
        </div>

        {/* Image Section */}
        <div className="max-sm:ml-4 md:mx-0">
          <img
            src="images/resources.png"
            className="w-full h-auto lg:h-[460px] lg:w-[670px] md:h-[260px] md:w-[370px]"
            alt="Resources"
          />
        </div>
      </div>
    </div>
  );
}

export default ResourcesHero;
