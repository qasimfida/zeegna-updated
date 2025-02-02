import React from "react";

function BannerTwo({ content }) {
  return (
    <div className="bg-[#F9FF8C] poppin flex flex-col items-center md:flex-row justify-between mx-[70px] max-sm:mx-[16px] rounded-[30px]  md:p-10 px-[20px]   md:my-[80px] max-sm:pt-[30px] max-sm:pb-0  max-sm:mb-[50px] max-sm:mt-[50px] md:h-[326px] ">
      <div className="md:w-[58%]  md:text-left  flex-[%]">
        <h2 className="text-[24px] max-sm:text-[21px] font-semibold mb-[10px]  ">
          {content.title}
        </h2>
        <p className="text-[16px] text-[#575757] font-medium max-sm:text-left leading-5">
          {content.description}
        </p>
        <button className="px-[21px] text-[16px] py-[13px] border-2 bg-black text-white rounded-full border-black font-medium  hover:text-black hover:bg-white md:mt-[30px] mt-[20px] max-sm:mb-[30px] max-sm:w-full ">
          Take home evaluation quiz
        </button>
      </div>
      <div className="md:w-1/2 flex-[0_0_40%] ">
        <div className="flex justify-end items-end">
          <img
            src="/images/bannerImage.png"
            alt="Older adult smiling"
            className="md:w-[377.31px] md:h-[317.98px] md:mt-[12.39px] sm:my-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default BannerTwo;
