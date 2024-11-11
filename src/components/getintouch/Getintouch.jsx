import React from "react";

const Getintouch = () => {
  return (
    <>
      <section className="flex flex-col px-9 bg-[#F7F7F7] poppin">
        <div className="pt-[20px]">
          <h3 className="text-base font-bold text-black">
            Home | <span className="text-[#747474]">Get in touch</span>
          </h3>
        </div>
        <div className="flex items-center justify-center flex-col gap-2 py-[80px]">
          <h1 className="text-[32px] font-semibold text-black">Get in touch</h1>
          <p className="text-[20px] text-[#5E5E6F] font-medium">
            Select a topic to get the help you need
          </p>
        </div>
      </section>
    </>
  );
};

export default Getintouch;
