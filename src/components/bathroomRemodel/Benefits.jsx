import React from "react";

function Benefits({ content, height = "h-[350px]", BtnPadding = "px-9" }) {
  return (
    <div className="flex flex-col max-sm:flex-col	 justify-center md:gap-[80px] md:flex-row w-full py-[80px] max-sm:py-[50px] max-sm:px-[15px] shadow-sm poppin">
      <div className="md:w-[657px]">
        <h4 className="mb-[20px] max-sm:mb-[20px] md:w-[580px] max-sm:text-[18px] text-[24px] font-semibold">
          {content.title}
        </h4>
        <p className="text-[#5E5E6F] text-[16px] font-medium max-sm:pb-[20px]">
          {content.description}
        </p>

        <button
          className={`bg-white text-black py-[13px] px-9  rounded-full font-medium border-2 border-black hover:text-white hover:bg-[#1C1C1C] mt-[30px] mb-[5px] max-sm:w-full max-sm:hidden`}
        >
          {content.button}
        </button>
      </div>

      {/* Timeline Section */}
      <div>
        <ol className="relative  max-w-[480px]">
          <div
            class={` ${height} mx-auto absolute  w-[1px]   max-sm:left-[26px] md:h-[300px] bg-[#B6B9CE] mt-2`}
          ></div>
          {content.bullets.map((bullet, index) => (
            <li
              key={index}
              className={`md:mb-10 mb-[20px] ml-6 ${
                index !== content.bullets.length - 1 ? "" : ""
              }`}
            >
              <span className="absolute flex items-center justify-center text-[18px] md:w-[50px] md:h-[50px] w-[40px] h-[40px] font-semibold bg-[#9AEBBF] rounded-full -left-[24px] max-sm:left-[6px] ring-white">
                {index + 1}
              </span>
              <h3 className="flex items-center md:ml-[50px] ml-[40px] mb-1 text-lg max-sm:text-[17px] font-semibold">
                {bullet.title}
              </h3>
              <p className="text-base md:ml-[50px] ml-[40px] text-[#5E5E6F] font-normal">
                {bullet.description}
              </p>
            </li>
          ))}
        </ol>
        <button
          className={`bg-white text-black py-[13px] ${BtnPadding}  px-9 rounded-full font-medium border-2 border-black hover:text-white hover:bg-[#1C1C1C] md:mt-[30px] md:mb-[5px] max-sm:w-full md:hidden`}
        >
          {content.button}
        </button>
      </div>
    </div>
  );
}

export default Benefits;
