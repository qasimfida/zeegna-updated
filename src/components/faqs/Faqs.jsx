import React, { useState } from "react";
import DropdownIcon from "../../assets/icons/faqsDropDown/DropdownIcon";

function FaqsCard({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="transition-all duration-200 bg-white border border-[#B6B9CE]  cursor-pointer  rounded-[10px] poppin	lg:w-[750px] w-full">
      <button
        type="button"
        className="flex items-center justify-between w-full px-[17px] py-[17px] max-sm:p-6"
        onClick={toggleFaq}
      >
        <span className="flex text-[17px] font-semibold text-[#1c1c1c] ">
          {title}
        </span>
        <div
          className={`transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <DropdownIcon />
        </div>
      </button>
      {isOpen && (
        <div className="px-4 pb-5 sm:px-6 sm:pb-6 text-[#5E5E6F] text-[16px] font-medium">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}

export default FaqsCard;
