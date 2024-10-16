import React from "react";

const FormInput = ({ type = "text", placeholder = "text" }) => {
  return (
    <input
      type={type}
      className="rounded-full md:w-[49%] w-full pl-5 py-3 border border-[#DBDBE0] poppin"
      placeholder={placeholder}
    />
  );
};

export default FormInput;
