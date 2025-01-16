import React from "react";

function PlacingHelpSection() {
  return (
    <div className="max-w-7xl mx-auto py-20 max-sm:py-[50px]  text-center poppin">
      <h2 className="font-semibold  lg:text-[27px] max-sm:text-[21px] max-sm:mx-[16px]">
        Placing help at everyone's reach{" "}
      </h2>
      <div className="w-20 h-[3px] bg-black mx-auto mt-4"></div>

      <div className="flex items-center justify-center gap-[70px] mt-10 max-sm:mt-[30px] max-sm:gap-[20px] max-md:flex-col max-md:px-5 max-sm:px-[15px]">
        {/* Left Section */}

        <div class="max-w-lg bg-[#F9ECEC] shadow dark:border-gray-700 rounded-tr-full rounded-tl-full transform transition-transform duration-300 hover:-translate-y-1">
          <a href="#">
            <img
              class="rounded-tr-full rounded-tl-full"
              src="images/PlaceingLeft.png"
              alt=""
            />
          </a>
          <div class="p-5 max-sm:px-[15px] max-sm:py-[20px]">
            <a href="#">
              <h5 class="md:mb-2 text-2xl font-semibold tracking-tight text-[#1C1C1C] max-sm:text-[18px]">
                Receive care at home
              </h5>
            </a>
            <p class="mb-3 font-medium text-[#5E5E6F] text-xl max-sm:text-[16px]">
              Get the care you need to stay happy and healthy in your home
            </p>
            <a
              href="#"
              class="inline-flex max-sm:flex  max-sm:justify-center items-center text-base font-medium text-center text-white bg-[#1C1C1C] px-[38px] py-[13px] rounded-full focus:ring-4 focus:outline-none hover:bg-white hover:text-black border-2 border-black mt-4 max-sm:py-[8px]"
            >
              Find help
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div class="max-w-lg bg-[#E7F7ED] shadow dark:border-gray-700 rounded-br-full rounded-bl-full transform transition-transform duration-300 hover:translate-y-1">
          <div class="p-5 max-sm:px-[15px] max-sm:py-[20px]">
            <a href="#">
              <h5 class="md:mb-2 text-2xl font-semibold tracking-tight text-[#1C1C1C]  max-sm:text-[18px]">
                Reach more customers
              </h5>
            </a>
            <p class="mb-3 font-medium text-[#5E5E6F] text-xl max-sm:text-[16px]">
              Connect with older adults in need of home safety solutions
            </p>
            <a
              href="#"
              class="inline-flex max-sm:flex  max-sm:justify-center items-center text-base font-medium text-center text-white bg-[#1C1C1C] px-[38px] py-[13px] rounded-full focus:ring-4 focus:outline-none hover:bg-white hover:text-black border-2 border-black mt-4  max-sm:py-[8px]"
            >
              Get listed
            </a>
          </div>
          <a href="#">
            <img
              class="rounded-br-full rounded-bl-full"
              src="images/PlaceingRight.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default PlacingHelpSection;
