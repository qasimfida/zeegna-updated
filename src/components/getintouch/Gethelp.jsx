import React from "react";
import { Link } from "react-router-dom";
import img from "../../../public/images/getHelp.png";

const Gethelp = () => {
  return (
    <>
      <section className="sm:mx-8 mt-4 poppin">
        <div className="flex-col flex sm:flex-row justify-between gap-4 bg-[#e6fff0] sm:px-20 pl-2 rounded-2xl py-16">
          <div className="sm:w-[45%] w-auto flex flex-col items-start justify-center gap-3">
            <h1 className="text-4xl font-semibold">Get help now </h1>
            <p className="text-[#5E5E6F] text-xl font-medium">
              Search our knowledge base, read articles, and top FAQs to get the
              help you need, faster.
            </p>
            <Link to="/help-center">
              {" "}
              <button className="py-[10px] px-[30px] bg-black text-white cursor-pointer rounded-3xl">
                Visit help center
              </button>
            </Link>
          </div>
          <div className="sm:w-[45%] w-3/4">
            <img src={img} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Gethelp;
