import React from "react";

function PlacingHelpSection() {
  return (
    <div className="max-w-7xl mx-auto py-20  text-center poppin">
      <h2 className="font-semibold text-3xl lg:text-[32px]">
        Placing help at everyone's reach{" "}
      </h2>
      <div className="w-20 h-[3px] bg-black mx-auto mt-4"></div>

      <div className="flex items-center justify-center gap-[70px] mt-10 max-md:flex-col max-md:px-5">
        {/* Left Section */}

        <div class="max-w-lg bg-[#F9ECEC] shadow dark:border-gray-700 rounded-tr-full rounded-tl-full transform transition-transform duration-300 hover:-translate-y-1">
          <a href="#">
            <img
              class="rounded-tr-full rounded-tl-full"
              src="images/PlaceingLeft.png"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
                Receive care at home
              </h5>
            </a>
            <p class="mb-3 font-medium text-[#5E5E6F] text-xl">
              Get the care you need to stay happy and healthy in your home
            </p>
            <a
              href="#"
              class="inline-flex items-center text-base font-medium text-center text-white bg-black px-[38px] py-[13px] rounded-full focus:ring-4 focus:outline-none hover:bg-white hover:text-black border-2 border-black mt-4"
            >
              Find help
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div class="max-w-lg bg-[#E7F7ED] shadow dark:border-gray-700 rounded-br-full rounded-bl-full transform transition-transform duration-300 hover:translate-y-1">
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
                Supercharge your business
              </h5>
            </a>
            <p class="mb-3 font-medium text-[#5E5E6F] text-xl">
              Grow your business by connecting with local families looking for
              care
            </p>
            <a
              href="#"
              class="inline-flex items-center text-base font-medium text-center text-white bg-black px-[38px] py-[13px] rounded-full focus:ring-4 focus:outline-none hover:bg-white hover:text-black border-2 border-black mt-4"
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
