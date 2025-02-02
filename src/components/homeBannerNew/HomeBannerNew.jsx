import React from "react";

function HomeBannerNew({ marginB = "mb-0" }) {
  return (
    <div
      className={`bg-[#F7F7F7] ${marginB} poppin md:h-[319px] flex flex-col items-center md:flex-row justify-between mx-[70px] max-sm:mx-[16px] md:rounded-[30px] border rounded-[15px]  md:py-[30px] md:px-[40px] px-[20px]    max-sm:py-[40px]     `}
    >
      <div className="md:w-[55%]  md:text-left  flex-[%]">
        <h2 className="text-[24px] md:w-[71%] max-sm:text-[21px] font-semibold mb-[10px] leading-[36px]  ">
          Not sure where to begin? Let us help you find the right care.
        </h2>
        <p className="text-[16px] font-medium max-sm:text-left leading-5 max-sm:leading-[24px]	 ">
          If you're uncertain about what care or services are right for you or
          your loved one, our Home and Care Assessment is here to help. This
          virtual assessment will create a personalized plan with
          recommendations for home modifications, home care, and more, helping
          you live safely and independently at home.
        </p>
        <div className="flex items-center md:gap-[20px] max-sm:flex-col  ">
          <button className="px-[21px] text-[16px] py-[13px] border-[1px] bg-black text-white rounded-full border-black font-medium  hover:text-black hover:bg-white md:mt-[30px] mt-[30px]  max-sm:w-full ">
            Take Care Assessment
          </button>
          <button className="px-[21px] text-[16px] py-[13px] border-[1px] bg-white text-black rounded-full border-black font-medium max-sm:mb-[30px]  hover:text-white hover:bg-black md:mt-[30px] mt-[10px]  max-sm:w-full ">
            Learn more
          </button>
        </div>
      </div>
      <div className="md:w-1/2 flex-[0_0_40%] ">
        <div className="flex justify-end items-end">
          <img
            src="/images/HomeBannerNew.png"
            alt="Older adult smiling"
            className="md:w-[301px] md:h-[243px]  sm:my-auto overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeBannerNew;
