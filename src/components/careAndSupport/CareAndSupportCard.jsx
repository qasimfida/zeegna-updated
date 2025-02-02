import React from "react";
const CareAndSupportCard = ({
  image,
  category,
  title,
  description,
  reverse,
  padding = "py-[80px] max-sm:py-[50px]",
}) => {
  return (
    <div
      className={` flex flex-col items-center justify-center md:gap-[81px] ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } w-full  bg-white ${padding}  max-sm:px-[15px] px-[71px] `}
    >
      <div className="shrink-0 md:w-[560px] overflow-hidden">
        <img
          src={image}
          alt="card-image"
          className="h-full w-full  rounded-[10px] object-cover"
        />
      </div>

      <div className="md:w-[657px]">
        <p className="text-[#109088] font-medium max-sm:mt-[10px] text-[16px]">
          {category}
        </p>
        <h4 className="md:mb-[20px] max-sm:mb-[10px]  md:max-w-[514px]   max-sm:text-[18px] text-[24px] font-semibold">
          {title}
        </h4>
        <p className=" text-[#5E5E6F]  text-[16px] font-medium">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CareAndSupportCard;
