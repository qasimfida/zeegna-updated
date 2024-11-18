import React from "react";
import { Link } from "react-router-dom";
import img from "../../../public/images/getHelp.png";

const Gethelp = () => {
  return (
    <>
      <section className="sm:mx-8 max-sm:mx-[16px]  poppin mb-[80px] max-sm:mb-[50px]">
        <div className="flex-col flex sm:flex-row justify-between gap-4 bg-[#e6fff0] sm:px-20 md:pl-2 rounded-[40px] py-16 max-sm:py-[50px]">
          <div className="sm:w-[45%] w-auto flex flex-col items-start max-sm:items-center justify-center gap-[10px] max-sm:text-center">
            <h1 className="text-[32px] font-semibold max-sm:text-[24px] max-sm:text-center">
              Get help now{" "}
            </h1>
            <p className="text-[#5E5E6F] text-[20px] font-medium max-sm:text-[16px] max-sm:text-center max-sm:mx-[16px]">
              Search our knowledge base, read articles, and top FAQs to get the
              help you need, faster.
            </p>
            <Link to="/help-center">
              {" "}
              <button className="py-[10px] mt-[10px] px-[30px] bg-black hover:bg-transparent hover:text-black hover:border-black border-[1px] font-medium text-white cursor-pointer rounded-3xl">
                Visit help center
              </button>
            </Link>
          </div>
          <div className="sm:w-[45%]  max-sm:mx-[16px] max-sm:mt-[16px] ">
            <img src={img} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Gethelp;
