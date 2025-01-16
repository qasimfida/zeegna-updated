import React from "react";

function HelpCenterFaqsContainer({
  headingChange = " Got questions? We've answers",
  childern,
}) {
  return (
    <>
      <div className="max-w-7xl mx-auto py-20  px-5 poppin max-sm:px-[16px] max-sm:mt-[50px] max-sm:py-0">
        <div className="text-center">
<<<<<<< HEAD
          <h2 className="font-semibold text-[27px] max-sm:text-[21px]">
=======
          <h2 className="font-semibold test-[27px] max-sm:text-[24px]">
>>>>>>> b721efc6068edea2d6a10360c8ca969cfd1a22e9
            {headingChange}
          </h2>
          <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-2"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 mt-[50px] max-sm:gap-[10px] max-sm:mt-[36px] justify-items-center	content-center ">
          {childern}
        </div>
      </div>
    </>
  );
}

export default HelpCenterFaqsContainer;
