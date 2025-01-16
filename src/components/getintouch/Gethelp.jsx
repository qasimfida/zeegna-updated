import React from "react";
import { Link } from "react-router-dom";
import img from "../../../public/images/getHelp.png";

const Gethelp = () => {
  return (
    <>
      <section className="max-sm:mx-[16px] max-sm:mt-[50px] lg:mx-[180px] md:mx-[50px] bg-[#E5FFEF] md:rounded-[40px] rounded-[30px] poppin md:mb-[80px] md-10 max-sm:mb-[50px]">
        <div className=" mt-0 flex lg:px-[40px] md:px-[50px] px-[15px] py-[50px] lg:py-[40px] justify-between lg:flex flex-col lg:flex-row md:text-center">
          <div className="max-md:text-center lg:text-left">
            <h1 className="text-[24px] font-semibold lg:w-[370px] max-sm:text-[24px]">
              Get help now
            </h1>
            <p className="mt-[10px]  text-[#5E5E6F] font-medium sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:w-[390px] md:text-[18px] max-sm:text-[16px]">
              Search our knowledge base, read articles, and top FAQs to get the
              help you need, faster.
            </p>
            <div className="mt-[30px] md:flex max-lg:justify-center max-lg:items-center">
              <Link
                to="/get-in-touch"
                className="rounded-full flex items-center justify-center gap-4 px-[58px] text-base font-medium py-3.5 max-sm:py-3 bg-[#1C1C1C] text-white max-sm:mb-[30px] hover:bg-white hover:text-black border border-black"
              >
                Visit help center
              </Link>
            </div>
          </div>

          <div className="">
            <img
              className="h-[250px] w-full object-cover max-sm:h-72  md:w-[460px] rounded-[20px]"
              src="images/getHelp.png"
              alt="Support"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Gethelp;
