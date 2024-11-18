import React from "react";

function GuidingPath() {
  return (
    <div className="bg-[#F7F7F7] pt-[80px]	poppin max-sm:pb-[50px] ">
      <div className="text-center">
        <h2 className="font-semibold text-[32px] max-sm:text-[24px] max-sm:mx-[16px]">
          Principles that guide our path
        </h2>
        <div className="mx-auto w-[100px] h-[3px] bg-[#1C1C1C] mt-2"></div>
      </div>
      {/* card 1 */}
      <div className=" poppin max-sm:mx-[16px]  ">
        <div className=" mx-auto flex md:px-[200px] md:pt-[70px] md:pb-[100px] gap-[122px] max-sm:gap-[30px] md:flex-row flex-col items-center">
          <div className="flex flex-col gap-[20px] max-sm:gap-[10px] max-sm:pt-[40px]">
            <h1 className="font-semibold text-[32px] max-sm:text-[19px]  text-[#1C1C1C]">
              Build with passion
            </h1>
            <p className="lg:mb-8 md:pl-0  md:pr-2   lg:w-[538px] text-[#5E5E6F] font-medium text-[20px] max-sm:text-[16px]	">
              Our passion is the driving force behind everything we do at
              ZyraHealth. We're passionate about creating something truly
              remarkable that's infused with a sense of purpose and enthusiasm.
              We strive to build superior experiences for those we serve, create
              work that is meaningful, and help make a positive
              impact on their lives.
            </p>
          </div>

          <div className="md:w-full h-auto">
            <img
              className="max-sm:w-[309px] max-sm:h-[360px] "
              alt="hero"
              src="images/GuidingPath1.png"
            />
          </div>
        </div>
      </div>
      {/* card 2 */}
      <div className="max-sm:mx-[16px] ">
        <div className=" mx-auto flex md:px-[200px]  md:pb-[100px] gap-[122px] max-sm:gap-[30px] md:flex-row flex-col-reverse	 items-center">
          <div className="md:w-full h-auto">
            <img
              className="max-sm:w-[309px] max-sm:h-[360px]"
              alt="hero"
              src="images/GuidingPath2.png"
            />
          </div>
          <div className="flex flex-col gap-[20px] max-sm:gap-[10px] max-sm:mt-[40px]">
            <h1 className="font-semibold text-[32px] max-sm:text-[24px] text-[#1C1C1C] ">
              Inspire for better
            </h1>
            <p className="lg:mb-8 md:pl-0  lg:pr-2   lg:w-[538px] text-[#5E5E6F] font-medium text-[20px] max-sm:text-[16px]	">
              We believe in raising the standard for how society approaches
              aging. Our vision is to build a future where aging at home is
              embraced as the natural, dignified choice with families and
              communities coming together to make that possible. We're striving
              to create a more compassionate world, where seniors are valued and
              families are empowered.
            </p>
          </div>
        </div>
      </div>

      {/* card 3 */}
      <div className="max-sm:mx-[16px]">
        <div className="mx-auto flex md:px-[200px] max-sm:gap-[30px] md:pb-[80px] gap-[122px] md:flex-row flex-col items-center">
          <div className="flex flex-col gap-[20px]  max-sm:gap-[10px] max-sm:mt-[40px]">
            <h1 className="font-semibold text-[32px] max-sm:text-[24px] text-[#1C1C1C]">
              Deliver for many
            </h1>
            <p className="md:mb-8 md:pl-0  md:pr-2 lg:w-[538px] text-[#5E5E6F] font-medium text-[20px] max-sm:text-[16px]		">
              We believe aging at home is a fundamental right, not a privilege.
              It's our vision to build a care system where every senior can age
              in the comfort of their home surrounded by people and places they
              love. We're dedicated to create a platform that is not just
              functional but truly impactful - accessible, inclusive, and built
              to support every family on this journey.
            </p>
          </div>
          <div className="md:w-full h-auto">
            <img
              className="max-sm:w-[309px] max-sm:h-[360px]"
              alt="hero"
              src="images/GuidingPath3.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuidingPath;
