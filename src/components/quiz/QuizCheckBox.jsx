import React from "react";
import "../../assets/css/checkbox.css";

const CheckBox = ({ details, isSelected, onChange }) => {
  return (
    <div className="flex pt-[16px] justify-between">
      <input type="checkbox" checked={isSelected} onChange={onChange} />
      <p className="w-[88%] md:w-[96%] text-[16px] md:text-[18px] font-medium">
        {details}
      </p>
    </div>
  );
};

export default CheckBox;
