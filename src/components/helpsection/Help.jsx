// src/components/HelpCard.jsx
import React from "react";

function HelpCard({ name, description, Icon, bgColor }) {
  return (
    <div className="flex items-center  cursor-pointer border border-[#B6B9CE] rounded-[15px] p-[14px] poppin hover:bg-[#EFEFEF]	 w-full ">
      {/* Profile Image */}
      <div className={`${bgColor} p-2.5 rounded-[13px] mr-[15px]`}>
        <Icon />
      </div>
      {/* Name and Description */}
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-[#1C1C1C] text-[19px]">{name}</p>
        <p className="text-[16px] text-[#5E5E6F]  ">{description}</p>
      </div>
      {/* Checkbox */}
      <input
        type="checkbox"
        className="w-[22px] h-[22px] rounded-full text-black border-[#B6B9CE] border-2 cursor-pointer !appearance-none !checked:bg-[#109088] "
      />
    </div>
  );
}

export default HelpCard;
