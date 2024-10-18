import React from "react";

const KnowledgeCard = ({ image, title, description, chip }) => {
  const maxLength = 131;
  const trimmedDescription =
    description.length > maxLength
      ? description.slice(0, maxLength) + "..."
      : description;

  return (
    <div className="w-[420px] h-[450px] bg-white border border-gray-200 rounded-lg border-[#EAEAF1] relative group cursor-pointer poppin">
      <a href="#">
        <img className="rounded-t-lg" src={image} alt={title} />
      </a>

      <div className="pl-[15px] pr-[25px] py-3">
        <a
          href="#"
          className="inline-flex items-center px-[7px] py-[5px] text-sm font-normal	 text-center text-[#5E5E6F] bg-[#E9FFDC] rounded-full"
        >
          {chip}
        </a>
      </div>

      <div className="pl-[15px] pr-[25px] ">
        <a href="#">
          <h5 className="mb-2 text-[17px] font-semibold text-[#5E5E6F] ">
            {title}
          </h5>
        </a>

        <p className="mb-3 font-normal	 text-base text-[#5E5E6F] ">
          {trimmedDescription}
        </p>

        <div className="flex gap-4 border-t-2 pt-[5px] pb-[15px] border-[#EAEAF1]">
          <p className="text-[#5E5E6F] font-base font-regular">By ZyraHealth</p>
          <p className="text-[#5E5E6F]">APR 8, 2024</p>
          <p className="text-[#5E5E6F]">5 min</p>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeCard;
