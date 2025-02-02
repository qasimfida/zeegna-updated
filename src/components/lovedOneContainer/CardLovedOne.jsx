import ThumbIcon from "../../assets/icons/thumbIcon/ThumbIcon";
import React from "react";

const CardLovedOne = ({ heading, details }) => {
  return (
    <div className="flex items-center justify-center flex-col md:w-[640px] w-auto">
      <ThumbIcon />
      <h2 className="text-[18px] font-semibold pt-[15px]">{heading}</h2>
      <p className="text-[16px] text-[#5E5E6F] font-medium text-center md:w-[467px] w-auto">
        {details}
      </p>
    </div>
  );
};

export default CardLovedOne;
