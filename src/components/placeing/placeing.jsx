import React from "react";

function PlacingHelpSection() {
  return (
    <div className="max-w-7xl mx-auto py-20 mt-20 text-center poppin">
      <h2 className="font-semibold text-3xl lg:text-4xl">
        Placing help at everyone's reach
      </h2>
      <div className="w-20 h-[3px] bg-black mx-auto mt-4"></div>

      <div className="flex items-center justify-around gap-10 mt-10 max-md:flex-col max-md:px-5">
        {/* Left Section */}

        <div class="max-w-lg	 bg-[#FBF1F1]  shadow  dark:border-gray-700 rounded-tr-full	rounded-tl-full">
          <a href="#">
            <img
              class="rounded-tr-full	rounded-tl-full"
              src="images/PlaceingLeft.png"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Receive care at home
              </h5>
            </a>
            <p class="mb-3 font-normal text-[#5E5E6F]  text-xl">
              Get the care you need to stay happy and healthy in your home
            </p>
            <a
              href="#"
              class="inline-flex items-center  text-sm font-medium text-center text-white bg-black px-9 py-3 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
            >
              Find help
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div class="max-w-lg	 bg-[#FBF1F1]   shadow  dark:border-gray-700 rounded-br-full rounded-bl-full">
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
                Supercharge your business
              </h5>
            </a>
            <p class="mb-3 font-normal text-[#5E5E6F]  text-xl	">
              Grow your business by connecting with local families
              looking for care
            </p>
            <a
              href="#"
              class="inline-flex items-center  text-sm font-medium text-center text-white bg-black px-9 py-3 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
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
