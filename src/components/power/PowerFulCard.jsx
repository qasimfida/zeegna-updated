import React from "react";

function PowerFulCard({ title, description, Icon }) {
  return (
    <div className="text-center  poppin">
      <div className="flex items-center justify-center  ">
        <div className="w-16 h-16 bg-[#A9EEB8] rounded-full flex items-center justify-center transition-transform duration-300 hover:-translate-y-1 cursor-pointer">
          <Icon />
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-[19px] text-[#1C1C1C] pt-2 max-sm:pt-[15px]">
          {title}
        </h4>
        <p className="font-medium text-[#5E5E6F] text-base ">{description}</p>
      </div>
    </div>
  );
}

export default PowerFulCard;
