import React from "react";

const FormInput = ({ type = "text", placeholder = "text" }) => {
  return (
    <input
      type={type}
      className="bg-transparent rounded-lg md:w-[49%] w-full pl-5 py-3 border border-[#DBDBE0] poppin placeholder:text-[#5E5E6F] placeholder:text-[14px] placeholder:font-medium"
      placeholder={placeholder}
    />
  );
};

export default FormInput;
