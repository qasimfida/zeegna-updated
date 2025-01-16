import React from "react";
import CityScape from "../../../public/images/cityscape.png";

const CitiesHeroSection = ({ cityname, image }) => {
  return (
    <>
      {/* Title Section */}
      <div className="mx-auto text-center max-sm:mx-[16px] max-sm:text-left mt-[100px] mb-[120px] max-sm:pb-[60px] relative pt-[42px] md:px-0 lg:px-[121.5px]">
        <img
          src={CityScape}
          alt="cityscape"
          className="absolute left-1/2 transform -translate-x-1/2 top-0"
        />

        <h2 className="font-semibold text-[27px] max-sm:text-[21px] text-center">
          Find essential home support services in {cityname}
        </h2>
        <p className="text-[#5E6E6F] text-[18px] font-medium mt-[10px] mb-[40px] md:px-[40px] text-center max-w-[800px] mx-auto">
          From home care to maintenance, find tailored solutions to help you
          live independently and comfortably in your home
        </p>

        <button className="bg-[#1C1C1C] text-white py-[13px] border-2 px-9 rounded-full font-medium hover:text-black hover:bg-white hover:border-black mt-[5px] mb-[5px] ml-[5px] mr-[5px] max-sm:w-full">
          Find trusted help near me
        </button>

        <button className="bg-white text-black py-[13px] px-9 rounded-full font-medium border-2 border-black hover:text-white hover:bg-[#1C1C1C] mt-[5px] mb-[5px] ml-[5px] mr-[5px] max-sm:w-full">
          Take home evaluation quiz
        </button>
      </div>

      {/* Content Section */}
      <div className="flex flex-col max-sm:flex-col-reverse	 items-center justify-center md:gap-[80px] md:flex-row w-full bg-[#F7F7F7] py-[80px] max-sm:py-[50px] max-sm:px-[15px] shadow-sm">
        <div className="md:w-[657px]">
          <h4 className="mb-[20px] max-sm:my-[15px] md:w-[580px] max-sm:text-[18px] text-[24px] font-semibold">
            Reliable home care and support services for seniors in {cityname}
          </h4>
          <p className="text-[#5E5E6F] text-[16px] font-medium">
            Your home is more than just a place. It is where cherished memories
            are made, where you feel secure, and where you find comfort every
            day. As life evolves, staying in your home shouldn’t mean giving up
            your independence or peace of mind. That is why we are here to make
            aging at home safe, comfortable, and stress-free with personalized
            support tailored to your unique needs.
          </p>
        </div>

        {/* Image Section */}
        <div className="shrink-0 md:w-[560px] overflow-hidden">
          <img
            src={image}
            alt="Home Modification Experts"
            className="h-full w-full rounded-[10px] object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default CitiesHeroSection;
