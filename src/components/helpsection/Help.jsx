// src/components/HelpCard.jsx
import React from "react";

function HelpCard({ name, description, Icon, bgColor }) {
  return (
    <div className="flex items-center gap-3 border border-[#B6B9CE] rounded-2xl py-2.5	px-4 poppin	 w-full">
      {/* Profile Image */}
      <div className={`${bgColor} p-2.5 rounded-[13px] mr-4`}>
        <Icon />
      </div>
      {/* Name and Description */}
      <div className="flex-1 min-w-0">
        <p className="font-medium text-gray-900">{name}</p>
        <p className="text-sm text-gray-500 truncate">{description}</p>
      </div>
      {/* Checkbox */}
      <input
        type="checkbox"
        className="w-5 h-5 rounded bg-gray-100 border-gray-300 text-indigo-600 cursor-pointer"
      />
    </div>
  );
}

export default HelpCard;
