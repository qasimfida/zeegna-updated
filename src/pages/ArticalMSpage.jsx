import React from "react";

import ResourcesHero from "../components/resources/ResourcesHero";
import ArticleContainer from "../components/article/ArticleTextContainer";
import FacebookIcon from "../assets/icons/resources/FacebookIcon";
import TwitterIcon from "../assets/icons/resources/Twitter";
import EmailIcon from "../assets/icons/resources/Email";
import LinkedinIcon from "../assets/icons/resources/Linkedin";
import RelatedArticleContainer from "../components/article/RelatedArticleContainer";
import StayConnectedSection from "../components/stayConnected/StayConnected";

const ArticalMSpage = () => {
  return (
    <>
      <ResourcesHero
        headingChange={
          <div className="text-start">
            <h1>
              10 things you should know when choosing a home health provider
            </h1>
          </div>
        }
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
        showAuthorInfo={true}
        showReadMore={false}
        showImg={true}
      />

      <div className="bg-white lg:w-[900px] md:px-[27px] lg:px-0 px-[16px] mx-auto poppin">
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
              className="p-2.5 rounded-full border border-gray-500 flex justify-center items-center cursor-pointer transition duration-300 hover:bg-blue-200  hover:-translate-y-1"
            >
              <FacebookIcon
                alt="Facebook Icon"
                className="text-gray-500 hover:text-white"
              />
            </div>
            <div
              onClick={() => redirectTo("https://www.linkedin.com")}
              className="p-2.5 rounded-full border border-gray-500 flex justify-center items-center cursor-pointer transition duration-300 hover:bg-blue-200 hover:-translate-y-1"
            >
              <LinkedinIcon
                alt="LinkedIn Icon"
                className="text-gray-500 hover:text-white"
              />
            </div>
            <div
              onClick={() => redirectTo("https://twitter.com")}
              className="p-2.5 rounded-full border border-gray-500 flex justify-center items-center cursor-pointer transition duration-300 hover:bg-blue-200  hover:-translate-y-1"
            >
              <TwitterIcon
                alt="Twitter Icon"
                className="text-gray-500 hover:text-white"
              />
            </div>
            <div
              onClick={() => redirectTo("mailto:example@example.com")}
              className="p-2.5 rounded-full border border-gray-500 flex justify-center items-center cursor-pointer transition duration-300 hover:bg-blue-200 hover:border-gray-600 hover:-translate-y-1"
            >
              <EmailIcon
                alt="Email Icon"
                className="text-gray-500 hover:text-white"
              />
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
            <button className="mt-[20px] rounded-full px-[30px] w-[150px] font-medium py-[13px] bg-[#1C1C1C] text-white  hover:text-black hover:bg-white hover:border-black hover:border-2">
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
            <button className="mt-[20px] rounded-full px-[30px] w-[150px] font-medium py-[13px] bg-[#1C1C1C] text-white hover:text-black hover:bg-white border-black border">
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
};

export default ArticalMSpage;
