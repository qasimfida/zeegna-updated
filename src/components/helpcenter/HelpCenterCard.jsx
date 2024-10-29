import React from "react";

function HelpCenterCard({ name, description, Icon }) {
  return (
    <div
      className={` rounded-xl border border-[#EAEAF1] flex flex-col items-center py-[30px]	px-[20px] poppin		 bg-[#F7F7F7]`}
    >
      <div className="p-2.5 rounded-full mr-4 bg-[#A9EEB8]">
        <Icon />
      </div>
      <div className="flex items-center flex-col">
        <h2 className="mt-2 font-semibold text-[19px] text-black ">{name}</h2>
        <p className="sm:mt-1  text-[16px]	text-center font-medium  text-[#5E5E6F]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default HelpCenterCard;
