import React from "react";
import { Link } from "react-router-dom";

import ResourcesHero from "../components/resources/ResourcesHero";
import ArticleContainer from "../components/article/ArticleTextContainer";
import FacebookIcon from "../assets/icons/resources/FacebookIcon";
import TwitterIcon from "../assets/icons/resources/Twitter";
import EmailIcon from "../assets/icons/resources/Email";
import LinkedinIcon from "../assets/icons/resources/Linkedin";
import RelatedArticleContainer from "../components/article/RelatedArticleContainer";
import StayConnectedSection from "../components/stayConnected/StayConnected";

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
      <div className="bg-white lg:w-[900px] md:px-[27px] lg:px-0 px-[16px] mx-auto poppin">
        {/* Author Info */}
        <div className="flex py-[30px] max-sm:flex-col mb-[40px] justify-between border-b lg:py-10 md:py-[30px]  md:mb-[30px] md:py-2 ">
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

        {/* Article Text */}
        <ArticleContainer />

        {/* Social Media Share */}
        <div className="flex space-x-4 items-center justify-center cursor-pointer border-t pt-10 max-sm:flex-col max-sm:gap-4">
          <span className="text-[17px] font-bold text-black">
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
              onClick={() => redirectTo("mailto:example@example.com")}
              className="p-2.5 rounded-full border border-gray-500 flex justify-center items-center cursor-pointer"
            >
              <EmailIcon alt="Email Icon" />
            </div>
          </div>
        </div>
      </div>

      {/* Small Screen Card */}
      <div className="sm:hidden pt-[40px] pb-[50px] mx-[16px]">
        <div className="max-w-sm bg-[#DEFFED] border border-gray-200 rounded-[30px]">
          <div className="p-5 text-center">
            <h1 className="text-[24px] font-semibold">Receive care at home</h1>
            <p className="mt-[10px] text-[16px] font-medium text-[#5E5E6F] ">
              Get the care you need to stay happy and healthy in your home
            </p>
            <button className="mt-[20px] rounded-full px-[30px] w-[150px] font-medium py-[13px] bg-[#1C1C1C] text-white">
              Get started
            </button>
          </div>
          <img
            className="rounded-b-[30px] rounded-t-none w-full"
            src="images/new-major.png"
            alt="Care"
          />
        </div>
      </div>

      {/* Large Screen Section */}
      <section className="hidden sm:flex lg:py-[80px] max-lg:py-[70px] sm:px-[30px] lg:w-[999px] max-lg:w-[780px] mx-auto">
        <div className="lg:w-[999px] h-full max-lg:w-[780px]  mx-auto bg-[#E5FFEF] rounded-[40px] flex items-center">
          <div className="w-full lg:w-1/2 p-10 max-lg:p-[20px] flex flex-col justify-center">
            <h1 className="text-[24px] font-semibold">Receive care at home</h1>
            <p className="mt-[10px] text-[20px] font-medium text-[#5E5E6F] w-[330px]">
              Get the care you need to stay happy and healthy in your home
            </p>
            <button className="mt-[20px] rounded-full px-[30px] w-[150px] font-medium py-[13px] bg-[#1C1C1C] text-white">
              Get started
            </button>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              className="h-full w-full object-cover rounded-r-[20px]"
              src="images/Major.png"
              alt="Support"
            />
          </div>
        </div>
      </section>

      <RelatedArticleContainer />
      <StayConnectedSection />
    </>
  );
}

export default ArticlePage;
