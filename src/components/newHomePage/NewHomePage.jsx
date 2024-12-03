import React from "react";
import Typewriter from "../typeWriteing/TypeWriter";

function NewHomePage() {
  return (
    <div className="">
      <section className="bg-[#FFFFFF]  poppin ">
        <div className=" mx-auto text-center ">
          <div
            className="flex md:pt-[150px] max-sm:pt-[50px] pl-[29px] pr-[58px]  justify-center relative md:pb-[175px] 
        max-sm:flex-col max-sm:h-auto max-sm:pb-[10px] max-sm:px-[16px] "
          >
            <div className="max-sm:hidden absolute lg:w-[338px] max-lg:bottom-[-13%] left-[0] ml-[24px] mt-[55px] max-sm:relative max-sm:w-full max-sm:ml-0 max-sm:mt-0 max-sm:flex max-sm:flex-col max-sm:items-center"></div>
            <div className="text-center max-sm:w-full">
              {/* Heading */}
              <h1 className="text-[64px] xl:leading-[80px] font-semibold text-gray-800 mb-5 max-sm:text-[27px] poppin text-4xl max-lg:text-[48px]">
                Comfort. Choice. Home.
              </h1>
              <p className="text-2xl	font-medium	 mb-10 max-sm:mb-[20px] text-[#5E5E6F] max-sm:w-full	mx-auto max-sm:text-[18px] max-md:text-xl   leading-[38px]		">
                Find vetted home experts to help with
                <br className="hidden lg:block" />
                <span className="text-[#109088] max-sm:block font-semibold animate-fadeIn">
                  <Typewriter />
                </span>
                <br className="max-sm:hidden	" />
                to live the best of your days at home.
              </p>
              <button className="bg-[#1C1C1C] text-white py-[13px]	 px-9	 rounded-full font-medium  mb-10 max-sm:mb-0 hover:text-black hover:bg-white border-black border-2 max-sm:mb-0">
                Find the help you need
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewHomePage;
