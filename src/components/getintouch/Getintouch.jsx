import React from "react";
import Intouch from "/images/Intouch.png";

const Getintouch = () => {
  return (
    <>
      <section className="flex flex-col px-9 max-sm:px-[16px]   poppin">
        <div className="max-w-[900px] mx-auto text-center max-sm:mx-[16px] max-sm:text-left pt-[90px] md:pt-[100px] pb-[80px] max-sm:pb-[60px]   md:px-0 lg:px-[121.5px] poppin">
          <div className="flex gap-[10px] md:gap-[15px] flex-col justify-center">
            <img
              src={Intouch}
              alt="HelpCenter"
              className=" mx-auto w-[27px] h-[27px]  "
            />

            <h2 className="font-semibold text-[27px] max-sm:text-[21px] text-center">
              Get in touch
            </h2>
            <p className="text-[#575757] text-[18px] font-medium  md:px-[40px] text-center">
              Select a topic to get the help you need
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Getintouch;
