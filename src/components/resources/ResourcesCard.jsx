import React from "react";
import DotIcon from "../../assets/icons/doticon/DotIcon";

const ResourcesCard = ({
  image,
  title,
  description,
  chip,
  id,
  className,
  bgColor,
}) => {
  const maxLength = 131;
  const trimmedDescription =
    description.length > maxLength
      ? description.slice(0, maxLength) + "..."
      : description;

  return (
    <div
      className={` xl:h-[450px]  bg-white border shadow-sm rounded-[15px] border-[#EAEAF1] relative group cursor-pointer poppin overflow-hidden ${className}`}
    >
      <a href="/article-ms">
        <img
          className="rounded-t-lg text-[#5E5E6F] transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-4"
          src={image}
          alt={title}
        />
      </a>
      <div className="xl:h-[250px] max-sm:h-auto">
        <div className={`pl-[15px] pt-[15px] pb-[5px] pr-[25px] py-3`}>
          <a
            href="/article-ms"
            className={`inline-flex items-center px-[7px] py-[5px] text-sm font-normal text-center text-[#5E5E6F] rounded-full ${
              chip === "Features"
                ? "bg-[#F9ECEC]"
                : chip === "Most popular"
                ? "bg-[#E9FFDC]"
                : chip === "Personal care"
                ? "bg-[#DCF0FF]"
                : "bg-[#E9FFDC]"
            }`}
          >
            {chip}
          </a>
        </div>

        <div className="pl-[15px] pr-[25px] ">
          <a href="/article-ms" className="leading-[23px]">
            <h5
              className={`mb-2 text-[17px] font-semibold text-[#5E5E6F]  hover:text-[#109088] ${
                id == 4 ? "pb-[27px]" : "pb-0"
              }`}
            >
              {title}
            </h5>
          </a>

          <p className="pb-[5px] font-medium	 text-base text-[#5E5E6F]">
            {trimmedDescription}
          </p>

          <div className="flex items-center gap-4 border-t-[1px] pt-[10px] pb-[15px] border-[#EAEAF1]">
            <p className="text-[#5E5E6F] text-[14px] font-regular">
              By Zeegna Team
            </p>
            <DotIcon />
            <p className="text-[#5E5E6F] text-[14px] font-regular">
              APR 8, 2024
            </p>
            <DotIcon />
            <p className="text-[#5E5E6F] text-[14px] font-regular">5 min</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesCard;
