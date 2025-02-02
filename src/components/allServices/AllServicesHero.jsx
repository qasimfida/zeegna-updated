import React from "react";

const AllServicesHero = ({ service }) => {
  return (
    <>
      {/* Title Section */}
      <div className="max-w-[849px] mx-auto text-center max-sm:mx-[16px] max-sm:text-left mt-[90px] mb-[60px] md:mt-[100px] md:mb-[175px]    md:px-0 lg:px-[70px] poppin">
        <div className="flex flex-col items-center justify-center md:gap-[15px] gap-[10px]">
          <div className="px-[13px] py-[5px] leading-[20px] text-[14px] bg-[#F7F7F7] font-medium rounded-[30px] hover:bg-[#D4EADD] transition">
            {service.name}
          </div>
          <h2 className="font-semibold text-[27px] max-sm:text-[20px] text-center">
            Get expert help to make aging at home safer, easier, and stress-free
            with <span className="text-[#109088]">{service.name} </span> 
          </h2>
          <p className="text-[#5E6E6F] md:text-[18px] text-[16px] font-medium  mb-[25px] md:mb-[40px] text-center">
            Get help from vetted service providers in our network to simplify
            your aging journey and receive the support you need,
            when you need it
          </p>
        </div>
        <div className="md:flex max-sm:flex-col items-center md:gap-[10px]  justify-center">
          <button className="bg-[#1C1C1C] text-white py-[13px] border-2 px-9 rounded-full font-medium hover:text-black hover:bg-white hover:border-black max-sm:mb-[15px]   max-sm:w-full">
            Find expert help
          </button>

          <button className="bg-white text-black py-[13px] px-9 rounded-full font-medium border-2 border-black hover:text-white hover:bg-[#1C1C1C]  max-sm:w-full">
            Take care assessment quiz
          </button>
        </div>
      </div>
    </>
  );
};

export default AllServicesHero;
