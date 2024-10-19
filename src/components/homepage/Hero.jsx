import React from "react";
import DownArrow from "../../assets/icons/arrow/DownArrow";
import Typewriter from "../typeWriteing/TypeWriter";

function HomeSection() {
  return (
    <div className="">
      <section className="bg-gradient-to-b from-[#FFFDFD] via-[#FFFDFD] to-[#F7E7E7] poppin ">
        <div className=" mx-auto text-center">
          {/* Left Image and Text */}
          <div
            className="flex pt-[106px] pl-[29px] pr-[58px] h-[700px] justify-center relative pb-[36px] 
        "
          >
            <div className="absolute w-[338px] left-[0] ml-[24px] mt-[55px]">
              <div className="text-center text-sm text-gray-600 bg-[#FDE7FF] py-2.5	px-2.5 rounded-2xl max-sm:py-1	max-sm:px-1	 w-[173px] ml-[54px] mb-[8px]		">
                <p className="font-semibold max-sm:text-[12px] leading-[21px]">
                  Kelly, Age 74
                </p>
                <p className="text-[13px] max-sm:text-[10px] leading-[26px]">
                  Needs companion care
                </p>
              </div>
              <img
                src="images/HeroLeft.png"
                alt=""
                className="w-[285px]  ml-[17px] mr-[36px] mb-[61px] h-[284px] "
              />
            </div>
            <div className=" text-center">
              {/* Heading */}
              <h1 className="text-[64px] leading-[80px] font-semibold text-gray-800 mb-5 max-sm:text-[28px] poppin max-md:text-4xl">
                Comfort. Choice. Home.
              </h1>
              <p className="text-2xl	font-medium	 mb-10 text-[#5E5E6F] max-sm:w-full	mx-auto max-sm:text-lg max-md:text-xl   leading-[38px]		">
                Find trusted vendors to help with{" "}
                <span className="text-[#109088] font-semibold animate-fadeIn">
                  <Typewriter />
                </span>
                <br />
                to live the best of your days at home.
              </p>

              {/* Call to Action Button */}
              <button className="bg-[#1C1C1C] text-white py-[13px]	 px-9	 rounded-full font-medium  mb-10 max-sm:mb-0 hover:text-black hover:bg-white hover:border-black hover:border-2">
                Find the help you need
              </button>
            </div>

            {/* Content with Images */}
            <div className="block w-[317px] absolute right-0 mt-[56px]">
              {/* Right Image and Text */}
              <div className="w-[317px] flex flex-col items-end">
                <img
                  src="images/HeroImage.png"
                  alt=""
                  className="pl-[25px] pr-[23px]"
                />
              </div>
            </div>

            {/* Form Section */}
            <div className=" py-[30px] bottom-0 mb-[-42px] xl:w-[1144px] xl:h-[150px] md:h-[223px] mx-auto bg-white  rounded-3xl shadow-md absolute left-0 right-0 max-sm:mb-12 max-sm:py-4 max-sm:px-4  flex max-xl:mx-[30px] max-sm:mx-[16px] items-center justify-around  max-md:mb-38">
              <div className="">
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between max-sm:justify-center">
                  {/* Left Section: Heading and Description */}
                  <div>
                    <div className="flex flex-col text-left gap-2 mb-4 lg:mb-0 xl:mr-[45px] ">
                      <p className="font-semibold text-black text-xl">
                        Find help now
                      </p>
                      <p className="text-gray-500 text-base font-medium w-full lg:w-[238px]">
                        Find trusted local providers to support your care needs
                      </p>
                    </div>
                  </div>

                  {/* Middle Section: Dropdowns */}
                  <div className="md:flex gap-[30px] md:items-end w-full">
                    <div className="flex flex-col md:flex-row items-center lg:flex-row gap-4 mb-4 lg:mb-0 w-full lg:w-auto">
                      {/* First Dropdown */}
                      <div className="flex select-icon flex-col gap-2 w-full lg:w-[280px] md:w-[270px]">
                        <p className="text-left font-semibold text-[17px]">
                          Who needs help?
                        </p>
                        <select
                          className="border  border-gray-300 rounded-lg px-4 py-3 text-gray-600 text-sm"
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
                      <div className="w-full sm:w-full lg:w-[280px] md:w-[271px]">
                        {/* Second Dropdown */}
                        <div className="flex select-icon flex-col gap-2 ">
                          <p className="text-left font-semibold text-[17px]">
                            What kind of help do you need?
                          </p>
                          <select
                            className="border border-gray-300 rounded-lg px-4 py-3 text-gray-600 text-sm"
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
                      </div>
                    </div>

                    {/* Right Section: Get Started Button */}
                    <div>
                      <div className="text-center lg:text-right w-full">
                        <button className="border-2 border-black text-black py-3 px-9 font-medium rounded-full hover:text-white hover:bg-black w-full">
                          Get started
                        </button>
                      </div>
                    </div>
                  </div>
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
