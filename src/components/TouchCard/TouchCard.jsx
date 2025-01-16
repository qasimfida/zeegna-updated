import React from "react";
import PhoneIcon from "../../assets/icons/contacticons/PhoneIcon";
import "../../assets/css/input.css";

const TouchCard = ({
  heading,
  details,
  activeTab,
  tabIndex,
  icon,
  onClick,
}) => {
  return (
    <div
      className={`border border-[#e5dbdb] rounded-2xl p-[15px] cursor-pointer hover:bg-[#F8F8F8] ${
        activeTab === tabIndex ? "bg-[#F8F8F8] border-black" : ""
      }`}
      onClick={() => onClick(tabIndex)} // Trigger parent onClick handler
    >
      <div className="flex justify-between items-center">
        <div>{icon}</div>
        <input type="checkbox" checked={activeTab === tabIndex} readOnly />
      </div>
      <h2 className="text-[16px] font-semibold py-2">{heading}</h2>
      <p className="text-[13px] lg:text-[14px] text-[#5E5E6F] font-medium">
        {details}
      </p>
    </div>
  );
};

export default TouchCard;
