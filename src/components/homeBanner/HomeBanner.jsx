import React from "react";

function HomeBanner({ marginB = "mb-0" }) {
  return (
    <div
      className={`bg-[#D2D4FF] ${marginB} poppin flex flex-col items-center md:flex-row justify-between mx-[70px] max-sm:mx-[16px] rounded-[30px]  md:p-[35px] px-[20px]   md:mt-[80px] max-sm:pt-[30px] max-sm:pb-0   max-sm:mt-[50px] md:h-[294px] `}
    >
      <div className="md:w-[58%]  md:text-left  flex-[%]">
        <h2 className="text-[24px] max-sm:text-[21px] font-semibold mb-[10px]  ">
          Create a plan for care that feels right for you
        </h2>
        <p className="text-[16px] font-medium max-sm:text-left leading-5	 ">
          Aging at home should feel safe, comfortable, and full of dignity.
          Whether you're planning for yourself or helping a loved one, our
          personalized care assessment is here to guide you. If you're not sure
          where to start, answer a few simple questions to uncover the care and
          support needed to enjoy your best days at home.
        </p>
        <button className="px-[21px] text-[16px] py-[13px] border-2 bg-black text-white rounded-full border-black font-medium  hover:text-black hover:bg-white md:mt-[30px] mt-[20px] max-sm:mb-[30px] max-sm:w-full ">
          Start your care assessment
        </button>
      </div>
      <div className="md:w-1/2 flex-[0_0_40%] ">
        <div className="flex justify-end items-end">
          <img
            src="/images/StarImage.png"
            alt="Older adult smiling"
            className="md:w-[540px] md:h-[294px]  sm:my-auto overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
