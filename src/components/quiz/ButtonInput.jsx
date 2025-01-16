import React from "react";

const ButtonInput = ({ text, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="py-[10px] rounded-[8px] border-2 text-[17px] font-medium text-[#5E5E6F] hover:text-white hover:bg-[#5E5E6F]"
      >
        {text}
      </button>
    </>
  );
};

export default ButtonInput;
