import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import ResourcesHero from "../components/resources/ResourcesHero";
import ArticleContainer from "../components/article/ArticleTextContainer";
import FacebookIcon from "../assets/icons/resources/FacebookIcon";
import TwitterIcon from "../assets/icons/resources/Twitter";
import EmailIcon from "../assets/icons/resources/Email";
import LinkedinIcon from "../assets/icons/resources/Linkedin";
import RelatedArticleContainer from "../components/article/RelatedArticleContainer";
import StayConnectedSection from "../components/stayConnected/StayConnected";
import KnowledgeData from "../data/KnowledgeData";
import ArticleData from "../data/ArticleData";
import ArticleCard from "../components/article/ArticleCard";
import new_major_image from "/images/knowledge6.png";

const ArticalMSpage = () => {
  const { slug } = useParams();

  const article = KnowledgeData.find((item) => item.slug === slug);

  return (
    <>
      <div className="md:pt-[100px] pt-[90px]  px-[16px] md:px-[300px] mx-auto max-sm:flex flex-col md:items-center ">
        <div className="flex items-center justify-center mb-[10px]">
          <a
            href="/article-ms"
            class=" px-[19px] py-[5px] text-sm font-normal text-center text-[#5E5E6F] rounded-full bg-[#F9ECEC]"
          >
            <p>{article.category}</p>
          </a>
        </div>

        <div className="md:mx-4 md:ml-[34px] md:mx-0">
          {/* Heading Section */}
          <div className="text-center text-[21px] font-semibold md:text-[27px] md:font-semibold">
            <h1>{article.title}</h1>

            <div className="flex items-center justify-center text-center text-[#5E5E6F] mt-[25px] md:mt-[10px] text-[14px]">
              <span>by {article.author}</span>
              <span className="mx-2">•</span>
              <span>{article.date}</span>
              <span className="mx-2">•</span>
              <span>{article.duration}</span>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 items-center justify-center cursor-pointer  pt-[20px] max-sm:flex-col max-sm:gap-4">
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
      <div className="md:mt-[40px] mt-[30px] flex items-center justify-center">
        <img
          src="/images/blogs/articles/article1.png"
          alt="Article Hero"
          className="md:w-[840px] md:h-[500px] rounded-lg max-sm:px-[16px]"
        />
      </div>

      <div className="bg-white lg:w-[840px] md:px-[27px] lg:px-0 px-[16px] mx-auto poppin">
        {/* Article Text */}

        <div class="mx-auto mb-[30px] md:mt-[40px] mt-[30px] md:w-[840px] poppin bg-[#FDF5F5] p-[20px] rounded-[15px]">
          <div class="text-[17px]">
            <div class="mx-auto  poppin">
              <h2 class="font-semibold text-[18px] pb-[10px]">Key Takeaways</h2>
              <div class="text-[#5E5E6F] text-[16px] leading-6 font-medium">
                {" "}
                {article.key_takeaways}
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: article.content }} />

        {/* Social Media Share */}
      </div>
      <div className="flex border-t justify-center md:w-[800px] mx-auto pt-[40px] items-center max-sm:flex-col gap-[20px] max-sm:mx-[16px]">
        <p className="text-[17px] font-semibold">Share this article:</p>
        <div className="flex space-x-4  items-center justify-center   ">
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

      <section className="container mx-auto px-4 md:py-16 max-sm:pt-[40px] max-sm:pb-[50px] lg:py-20">
        <div className="bg-green-50 rounded-3xl mx-auto max-w-[999px]">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full  md:pl-[33px]  flex flex-col md:h-[327px] max-sm:px-[20px] max-sm:pt-[50px] justify-center max-sm:items-center">
              <h1 className="md:text-2xl text-[21px] font-semibold">
                Receive care at home
              </h1>
              <p className="mt-3 md:text-lg text-[16px] max-sm:text-center font-medium text-gray-600 lg:max-w-sm">
                Get the care you need to stay happy and healthy in your home
              </p>
              <div className="w-full mt-5">
                <button className="px-8 py-3 rounded-full bg-[#1C1C1C] text-white border border-black font-medium transition-colors duration-200 max-sm:mb-[20px] hover:bg-white hover:text-gray-900 max-sm:w-full">
                  Get started
                </button>
              </div>
            </div>

            <div className="w-full ">
              <img
                className="w-full h-full object-cover rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none"
                src={new_major_image}
                alt="Support"
              />
            </div>
          </div>
        </div>
      </section>

      <RelatedArticleContainer />
      <StayConnectedSection />
    </>
  );
};

export default ArticalMSpage;
