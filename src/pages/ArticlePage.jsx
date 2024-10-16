import React from "react";
import { Link } from "react-router-dom";

import ResourcesHero from "../components/resources/ResourcesHero"; // Ensure this path is correct
import ArticleContainer from "../components/article/ArticleTextContainer";
import FacebookIcon from "../assets/icons/resources/FacebookIcon";
import TwitterIcon from "../assets/icons/resources/Twitter";
import EmailIcon from "../assets/icons/resources/Email";
import LinkedinIcon from "../assets/icons/resources/Linkedin";
import RelatedArticleContainer from "../components/article/RelatedArticleContainer";

const redirectTo = (url) => {
  window.open(url, "_blank");
};

function ArticlePage() {
  return (
    <>
      <ResourcesHero
        paraChange={
          <div className="flex items-center text-gray-600 text-sm">
            <span>By ZyraHealth</span>
            <span className="mx-2">•</span>
            <span>APR 8, 2024</span>
            <span className="mx-2">•</span>
            <span>5 min</span>
          </div>
        }
        showSocialIcons={true}
        showReadMore={false}
      />
      <div className="p-6 bg-white max-w-4xl mx-auto poppin">
        {/* Author Info */}
        <div className="flex items-center max-sm:flex-col mb-4 justify-between border-b py-10 max-md:py-2">
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

          <div className="flex justify-between items-center mb-4">
            <span></span>

            <div className="text-blue-500 space-x-4">
              <Link to="/resources" className="hover:underline">
                Resources
              </Link>
              <span>|</span>
              <Link to="/featured-articles" className="hover:underline">
                Featured Articles
              </Link>
            </div>
          </div>
        </div>

        {/* Article Text */}
        <ArticleContainer />
        <div className="flex space-x-4 items-center justify-center py-4 cursor-pointer border-t pt-10 max-sm:flex-col max-sm:gap-4 ">
          <span className="text-lg font-bold text-[#5E5E6F]">
            Share this article:
          </span>
          <div className="flex space-x-4 items-center justify-center">
            <div
              onClick={() => redirectTo("https://www.facebook.com")}
              className="p-2.5 rounded-full border border-gray-500 flex justify-center items-center cursor-pointer"
            >
              <FacebookIcon alt="Facebook Icon" />
            </div>
            <div
              onClick={() => redirectTo("https://www.linkedin.com")}
              className="p-2.5 rounded-full border border-gray-500 flex justify-center items-center cursor-pointer"
            >
              <LinkedinIcon alt="LinkedIn Icon" />
            </div>
            <div
              onClick={() => redirectTo("https://twitter.com")}
              className="p-2.5 rounded-full border border-gray-500 flex justify-center items-center cursor-pointer"
            >
              <TwitterIcon alt="Twitter Icon" />
            </div>
            <div
              onClick={() => redirectTo("mailto:example@example.com")} // Adjust email address as needed
              className="p-2.5 rounded-full border border-gray-500 flex justify-center items-center cursor-pointer"
            >
              <EmailIcon alt="Email Icon" />
            </div>
          </div>
        </div>

        <section className="md:mt-6 lg:mt-8 mt-12 max-w-5xl mx-auto bg-[#E5FFEF] rounded-[40px]">
          <div className="mb-10 mx-auto max-w-7xl sm:mt-12 mt-0 items-center justify-center flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row md:text-center">
            <div className="max-md:text-center lg:text-left lg:w-[40%] mx-auto max-md:flex max-md:justify-center max-md:flex-col max-md:items-center">
              <h1 className="text-2xl tracking-tight font-semibold max-sm:text-xl max-md:mt-2 max-md:text-1xl">
                Receive care at home
              </h1>
              <p className="mt-3 text-xl text-[#5E5E6F] sm:mt-5 max-sm:text-lg md:mt-5 md:text-xl lg:mx-0 xl:w-[50%]">
                Get the care you need to stay happy and healthy in your home
              </p>
              <div className="mt-10 max-md:flex max-md:justify-center max-md:items-center">
                <button className="rounded-full flex items-center justify-center gap-4 px-10 text-base font-medium py-3.5 max-sm:py-2 bg-[#1C1C1C] text-white">
                  Get started
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="lg:inset-y-0 lg:right-0 lg:w-1/2">
              <img
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-[20px rounded-l-none]"
                src="images/Major.png"
                alt="Support"
              />
            </div>
          </div>
        </section>
      </div>
      <RelatedArticleContainer />
    </>
  );
}

export default ArticlePage;
