import React from "react";

function TrustProviderCard({ title, description, Icon }) {
  return (
    <div className="poppin">
      <div className="flex items-center   ">
        <div className="w-[60px] h-[60px] bg-[#A9EEB8] rounded-full flex items-center justify-center transition-transform duration-300 hover:-translate-y-1 cursor-pointer">
          <Icon />
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-[18px] text-[#FFFFFF] pt-2 max-sm:pt-[15px]">
          {title}
        </h4>
        <p className="font-medium text-[#FFFFFF] text-base opacity-70">
          {description}
        </p>
      </div>
    </div>
  );
}

export default TrustProviderCard;
