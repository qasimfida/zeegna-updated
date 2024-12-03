import React from "react";
const CitiesCard = ({
  image,
  category,
  title,
  description,
  reverse,
  background,
}) => {
  return (
    <div
      className={` flex flex-col items-center justify-center md:gap-[156px] ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } w-full  bg-white py-[80px] max-sm:py-[50px] max-sm:px-[15px] shadow-sm  `}
      style={{ backgroundColor: background }}
    >
      <div className="shrink-0 md:w-[560px] overflow-hidden">
        <img
          src={image}
          alt="card-image"
          className="h-full w-full  rounded-[10px] object-cover"
        />
      </div>

      <div className="md:w-[533px]">
        <h4 className="mb-[20px] max-sm:my-[15px] md:w-[580px]  max-sm:text-[18px] text-[24px] font-semibold">
          {title}
        </h4>
        <p className=" text-[#5E5E6F]  text-[16px] font-medium">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CitiesCard;
