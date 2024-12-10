import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import TwitterIcon from "../../assets/icons/resources/Twitter";
import FacebookIcon from "../../assets/icons/resources/FacebookIcon";
import LinkedinIcon from "../../assets/icons/resources/Linkedin";
import EmailIcon from "../../assets/icons/resources/Email";
import LeftTick from "../../assets/icons/faqsDropDown/LeftTick";

function ResourcesHero({
  paraChange = "Tips to create a safe and comfortable home for aging gracefully",
  headingChange = "Your guide to aging at home",
  showSocialIcons = false,
  showReadMore = false,
  showAuthorInfo = false,
  showImg = false,
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

  return (
    <div className="poppin pb-[60px] md:pb-[100px]">
      <div className="pl-[16px] md:[34px]  flex justify-start w-full pt-[20px] pb-[50px] text-gray-500 text-sm font-medium">
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
          to="/new-resources"
          className={`hover:underline ${
            location.pathname === "/new-resources" ? "text-gray-500" : ""
          }`}
        >
          Resources
        </Link>

        {/* Render extraThings (third link) */}
        {extraThings && <span className="mx-2">|</span>}
        {extraThings}
      </div>

      <div className="px-[16px] md:px-[300px] mx-auto max-sm:flex flex-col-reverse md:items-center max-sm:pb-[40px]">
        <div className="mx-4 md:ml-[34px] md:mx-0">
          {/* Heading Section */}
          <div className="text-center text-[21px] font-semibold md:text-[27px] md:font-semibold">
            <h1>{headingChange}</h1>
            <p className="text-sm md:text-[16px] font-normal md:font-medium text-[#5E5E6F] lg:py-4 md:py-[10px] max-sm:pt-[25px]">
              {paraChange}
            </p>
          </div>

          {/* Social Icons and Author Info Section */}
          <div className="flex md:flex-row md:items-center md:justify-between flex-col items-center gap-[20px]">
            {showSocialIcons && (
              <div className="flex space-x-4 items-center py-4">
                <Link
                  to="#"
                  className="p-2.5 rounded-full border border-gray-500 flex justify-center items-center transition duration-300 hover:bg-blue-200 hover:-translate-y-1"
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

            {showAuthorInfo && (
              <div className="flex max-sm:flex-col justify-between">
                <div className="flex items-center">
                  <img
                    src="/images/image (3).png"
                    alt="Author"
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-base text-[#5E5E6F]">
                      By Kamala Harris
                    </p>
                    <p className="text-[#B6B9CE]">Chief Editor</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Image Section */}
          {showImg && (
            <div className="my-6">
              <img
                src="/images/ArticleHero.png"
                alt="Article Hero"
                className="w-full h-auto rounded-lg"
              />
            </div>
          )}

          {/* Read More Link */}
          {showReadMore && (
            <Link
              to="/article-ms"
              className="flex items-center gap-2 bg-transparent text-[#109088] text-sm md:text-base font-semibold"
            >
              Read more
              <LeftTick />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResourcesHero;
