import React from "react";
import { useNavigate } from "react-router-dom";

function HelpCard({
  id,
  name,
  description,
  Icon,
  bgColor,
  isSelected,
  onSelect,
  link,
  rounded = { border: "border-[2px]", radius: "rounded-full" },
}) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (link) {
      navigate(link);
    } else {
      onSelect(id, !isSelected);
    }
  };

  const { border, radius } = rounded;

  return (
    <div
      className={`cursor-pointer border border-[#B6B9CE] EFEFEF  rounded-[15px] p-[15px] poppin hover:bg-[#EFEFEF] w-full ${
        isSelected ? "bg-[#EFEFEF]" : ""
      }`}
      onClick={handleCardClick}
    >
      {/* Mobile Layout */}
      <div className="flex items-center justify-between sm:hidden">
        <div className="flex items-center">
          <div className={`${bgColor} p-2 rounded-[13px] mr-[15px]`}>
            <Icon width="20px" height="20px" />
          </div>

          <p className="font-semibold text-[#1C1C1C] text-[18px]">{name}</p>
        </div>

        <input
          type="radio"
          className={`w-[20px] h-[20px] ${radius} ${border} cursor-pointer !appearance-none ${
            isSelected ? "bg-[#B6B9CE]" : ""
          }`}
          aria-label="Select help card"
          checked={isSelected}
          readOnly
        />
      </div>
      <p className="text-[16px] text-[#5E5E6F] sm:hidden">{description}</p>

      {/* Desktop Layout */}
      <div className="hidden sm:flex items-center">
        <div className={`${bgColor} p-2.5 rounded-[13px] mr-[15px]`}>
          <Icon />
        </div>
        {/* Name and Description */}
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-[#1C1C1C] text-[18px] mb-[2px]">
            {name}
          </p>
          <p className="text-[16px] text-[#5E5E6F]">{description}</p>
        </div>
        {/* Radio Button */}
        <input
          type="radio"
          className={`w-[20px] h-[20px] ${radius} ${border} border-[#B6B9CE] cursor-pointer !appearance-none ${
            isSelected ? "bg-[#109088]" : ""
          }`}
          aria-label="Select help card"
          checked={isSelected}
          readOnly
        />
      </div>
    </div>
  );
}

export default HelpCard;
