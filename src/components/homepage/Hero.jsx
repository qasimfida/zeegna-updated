import React from "react";

function HomeSection() {
  return (
    <div className="">
      <section className="bg-gradient-to-b from-[#FFFDFD] via-[#FFFDFD] to-[#F7E7E7] py-16 max-sm:py-0 max-sm:pb-16 px-4 relative xl-h-screen	poppin ">
        <div className=" mx-auto text-center">
          {/* Left Image and Text */}
          <div
            className="flex items-center pb-6 max-md:flex-col max-md:gap-10 max-sm:gap-7
        "
          >
            <div className=" flex flex-col items-center gap-3.5 mt-36 max-md:mt-6	max-sm:flex-row max-sm:items-start	">
              <div className="text-center text-sm text-gray-600 bg-[#FDE7FF] py-2.5	px-2.5 rounded-2xl max-sm:py-1	max-sm:px-1			">
                <p className="font-semibold max-sm:text-[12px]">
                  Kelly, Age 74
                </p>
                <p className="text-[13px] max-sm:text-[10px]">
                  Needs companion care
                </p>
              </div>
              <img
                src="images/HeroLeft.png"
                alt=""
                className="max-sm:w-[122px] max-sm:h-[122px]"
              />
            </div>
            <div>
              {/* Heading */}
              <h1 className="text-[64px] font-semibold text-gray-800 mb-5 max-sm:text-[28px] poppin max-md:text-4xl">
                Comfort. Choice. Home
              </h1>
              <p className="text-2xl	font-medium	 text-gray-600 mb-10 w-8/12 max-sm:w-full	mx-auto max-sm:text-lg max-md:text-xl	">
                Find trusted vendors to help with{" "}
                <span className="text-[#109088] font-semibold animate-fadeIn">
                  Personal Care ` `
                </span>
                to live the best of your days at home.
              </p>

              {/* Call to Action Button */}
              <button className="bg-[#1C1C1C] text-white py-3.5	 px-9	 rounded-full font-medium  mb-10 max-sm:mb-0">
                Find the help you need
              </button>
            </div>

            {/* Content with Images */}
            <div className="flex justify-center items-end  space-x-4 mt-36 max-md:mt-6 max-sm:flex-row">
              {/* Right Image and Text */}
              <div className="flex flex-col items-end">
                <img
                  src="images/HeroImage.png"
                  alt=""
                  className="max-sm:w-[192px] max-sm:h-[235px]"
                />
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="px-10	py-6	 w-10/12	   mx-auto bg-white p-6 rounded-3xl	 shadow-md absolute	bottom-[-14%]   max-sm:mb-12 left-[8%] max-sm:bottom-[-44%] max-sm:left-0 max-sm:py-4	max-sm:px-4 max-sm:w-full">
            <div>
              <div className="grid grid-cols-4 gap-4 items-end	justify-items-end  max-sm:grid-cols-1 max-sm:justify-items-center	">
                {/* Left Section: Heading and Description */}
                <div className="flex flex-col text-left		gap-2">
                  <p className="font-semibold text-black text-xl 	">
                    Find help now
                  </p>
                  <p className="text-gray-500 text-base font-medium	text-left		">
                    Find trusted local providers to support your care needs
                  </p>
                </div>

                {/* Middle Section: Dropdowns */}

                {/* First Dropdown Label */}
                <div className="flex flex-col gap-2 w-full	">
                  <p className=" text-left font-semibold	text-[17px]	">
                    Who needs help?
                  </p>
                  <select
                    className="border border-gray-300 rounded-lg px-4 py-3 text-gray-600 text-sm"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Myself
                    </option>
                    <option value="self">Self</option>
                    <option value="family">Family</option>
                    <option value="friend">Friend</option>
                  </select>
                </div>

                {/* Second Dropdown Label */}
                <div className="flex flex-col gap-2 w-full	">
                  <p className=" text-left font-semibold	text-[17px]	">
                    What kind of help do you need?
                  </p>
                  <select
                    className="border border-gray-300 rounded-lg px-4 py-3	 text-gray-600 text-sm"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Home care
                    </option>
                    <option value="self">Self</option>
                    <option value="family">Family</option>
                    <option value="friend">Friend</option>
                  </select>
                </div>

                {/* Right Section: Get Started Button */}
                <div>
                  <button className="border-2 border-black text-black py-3	 px-9	font-medium	 rounded-full">
                    Get started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeSection;
