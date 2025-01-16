import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineStars } from "react-icons/md";

const PopularCard = ({ image, title, onClick, price }) => {
  const handleCardClick = () => {
    window.location.href = link;
  };

  return (
    <div
      className="max-w-xl bg-white border rounded-lg border-[#EAEAF1] relative group cursor-pointer poppin max-sm:mx-0 xl:mx-0 overflow-hidden"
      onClick={onClick}
    >
      <img
        className="rounded-t-lg transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-4 max-w-full"
        src={image}
        alt={title}
      />

      <div className="p-[15px]">
        <h5 className="text-base  font-semibold text-[#1C1C1C] mb-[5px]">
          {title}
        </h5>
        <div className=" flex items-center justify-between">
          <div className="flex items-center justify-center gap-[5px]">
            <MdOutlineStars className="text-[#5E5E6F]" />
            <p className="text-[#5E5E6F] text-[14px] font-medium">{price}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-[12px] text-[#5E5E6F] font-medium leading-5	">
              find help
            </p>
            <div className="transition-transform duration-300 hover:translate-x-2">
              <FaArrowRight className="text-[#109088]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
