import React from "react";
import DownArrow from "../../assets/icons/arrow/DownArrow";
import Typewriter from "../typeWriteing/TypeWriter";

function HomeSection() {
  return (
    <div className="">
      <section className="bg-gradient-to-b from-[#FFFDFD]  via-[#FFFDFD] to-[#F7E7E7]  max-sm:bg-gradient-to-b from-[#FFFDFD]  via-[#F7E7E7] to-[#F7E7E7]  poppin ">
        <div className=" mx-auto text-center max-sm:h-[740px] max-lg:h-[950px]">
          {/* Left Image and Text */}
          <div
            className="flex pt-[106px] pl-[29px] pr-[58px] h-[700px] justify-center relative pb-[36px] 
        max-sm:flex-col max-sm:h-auto max-sm:py-[90px] max-sm:px-[16px] max-sm:pb-[20px]"
          >
            <div className="max-sm:hidden absolute lg:w-[338px] max-lg:bottom-[-13%] left-[0] ml-[24px] mt-[55px] max-sm:relative max-sm:w-full max-sm:ml-0 max-sm:mt-0 max-sm:flex max-sm:flex-col max-sm:items-center">
              <div className="text-center text-sm text-gray-600 bg-[#FDE7FF] py-2.5	px-2.5 rounded-2xl max-sm:py-1	max-sm:px-1	 w-[173px] ml-[54px] mb-[8px]	max-sm:ml-0	">
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
                className="w-[285px]  ml-[17px] mr-[36px] mb-[61px] h-[284px] max-sm:w-[150px] max-sm:h-[150px] max-sm:ml-0 max-sm:mr-0 max-sm:mb-[20px] max-lg:w-[237px] max-lg:h-[237px]"
              />
            </div>
            <div className="text-center max-sm:w-full">
              {/* Heading */}
              <h1 className="text-[64px] xl:leading-[80px] font-semibold text-gray-800 mb-5 max-sm:text-[28px] poppin text-4xl max-lg:text-[48px]">
                Comfort. Choice. Home.
              </h1>
              <p className="text-2xl	font-medium	 mb-10 text-[#5E5E6F] max-sm:w-full	mx-auto max-sm:text-[19px] max-md:text-xl   leading-[38px]		">
                Find trusted vendors to help with{" "}
                <br className="hidden lg:block" />
                <span className="text-[#109088] max-sm:block font-semibold animate-fadeIn">
                  <Typewriter />
                </span>
                <br className="max-sm:hidden	" />
                to live the best of your days at home.
              </p>

              {/* Call to Action Button */}
              <button className="bg-[#1C1C1C] text-white py-[13px]	 px-9	 rounded-full font-medium  mb-10 max-sm:mb-0 hover:text-black hover:bg-white hover:border-black hover:border-2 max-sm:mb-0">
                Find the help you need
              </button>
            </div>

            {/* Content with Images */}
            <div className=" max-sm:hidden block lg:w-[317px] absolute max-lg:bottom-[-20%] right-0 mt-[56px] max-sm:relative max-sm:w-full max-sm:mt-[20px]">
              {/* Right Image and Text */}
              <div className="lg:w-[317px] flex flex-col items-end max-sm:items-center max-sm:w-full ">
                <img
                  src="images/HeroImage.png"
                  alt=""
                  className="lg:pl-[25px] pr-[23px] max-sm:p-0 max-sm:w-[150px] max-sm:h-[150px] max-lg:w-[260px] max-lg:h-[350px]"
                />
              </div>
            </div>
            {/* form  */}
            <div className=" py-[30px] bottom-0 max-sm:bottom-[-100%] mb-[-42px] xl:w-[1144px] xl:h-[150px] md:h-[223px] mx-auto bg-white  rounded-3xl shadow-md absolute left-0 right-0 max-sm:py-[30px] max-sm:px-[16px]  flex max-xl:mx-[30px] max-sm:mx-[16px] max-lg:bottom-[-47%]  items-center justify-around  max-md:mb-38 ">
              <div className="">
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between max-sm:justify-center">
                  {/* Left Section: Heading and Description */}
                  <div>
                    <div className="flex flex-col text-left max-sm:text-center gap-2 mb-4 lg:mb-0 xl:mr-[45px] ">
                      <p className="font-semibold text-black text-xl max-sm:text-[24px]">
                        Find help now
                      </p>
                      <p className="text-gray-500 text-base font-medium w-full lg:w-[238px]">
                        Find trusted local providers to support your care needs
                      </p>
                    </div>
                  </div>

                  {/* Middle Section: Dropdowns */}
                  <div className="md:flex gap-[30px] lg:items-end items-center w-full">
                    <div className="flex flex-col md:flex-row items-center lg:flex-row gap-4 mb-4 lg:mb-0 w-full lg:w-auto">
                      {/* First Dropdown */}
                      <div className="flex select-icon flex-col gap-2 w-full lg:w-[280px] md:w-[270px]">
                        <p className="text-left font-semibold text-[17px]">
                          Who needs help?
                        </p>
                        <select
                          className="border  border-gray-300 rounded-lg px-4 py-3 max-sm:h-[50px] text-gray-600 text-sm"
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
                            className="border border-gray-300 rounded-lg px-4 py-3 max-sm:h-[50px] text-gray-600 text-sm"
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
                        <button className="border-2 border-black text-black py-3 px-9 font-medium rounded-full hover:text-white hover:bg-black w-full max-lg:w-[146px] max-sm:h-[50px] max-sm:w-full max-lg:px-0 max-sm:px-9">
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
