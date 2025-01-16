import React from "react";

const ButtonInput = ({ value, onClick, isSelected }) => {
  return (
    <input
      type="button"
      className={`py-[10px] px-4 border max-sm:h-[72px] border-[#DBDBE0] rounded-[10px] text-[17px] font-medium cursor-pointer transition ${
        isSelected
          ? "bg-[#EFEFEF] border-black text-black"
          : "text-[#5E5E6F] hover:bg-[#EFEFEF]"
      }`}
      value={value}
      onClick={onClick}
    />
  );
};

export default ButtonInput;
