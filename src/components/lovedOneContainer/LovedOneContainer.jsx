import React from "react";
import bgImg from "../../../public/images/lovedBg.png";
import CardLovedOne from "./CardLovedOne";

const LovedOneContainer = ({ service }) => {
  return (
    <>
      <div className="bg-[#F7F7F7] overflow-hidden">
        {/* cont one */}
        <div className="flex md:flex-row flex-col md:px-[70px] md:gap-[119px] md:pb-[160px] max-sm:mb-[30px]">
          <div className="w-auto max-sm:px-[16px] md:w-[600px] md:pt-[90px] pt-[50px]">
            <h2 className="font-semibold text-[27px] max-sm:text-[21px] max-sm:text-center">
              {service.section1.title}
            </h2>

            {service.section1.content.map((text, index) => (
              <p className="text-[#5E5E6F] text-[16px] font-medium mt-[40px]">
                {text}
              </p>
            ))}
          </div>
          <div className="max-sm:mx-[16px] max-sm:hidden">
            <img src={bgImg} alt="" />
          </div>
        </div>
        {/* cont two */}
        <div className="flex items-center flex-col pb-[50px] md:pb-[80px]">
          <h2 className="font-semibold text-[27px] text-center w-auto md:w-[832px] max-sm:text-[21px]">
            {service.section2.title}
          </h2>
          <div className="md:pt-[50px] pt-[30px] px-[16px] md:px-[70px] grid max-sm:grid-rows-4 md:grid-cols-2 gap-[30px] md:pb-[50px] pb-[30px]">
            {service.section2.subContents.map((text, index) => (
              <CardLovedOne
                key={index}
                heading={text.title}
                details={text.content}
              />
            ))}
          </div>
          <button className=" hover:bg-white hover:text-black border border-black px-[46px] py-[13px] rounded-full bg-black text-white">
            Find expert help
          </button>
        </div>
      </div>
    </>
  );
};

export default LovedOneContainer;
