import React from "react";

function FindCare({ title, description, count, bgColor }) {
  return (
    <div className="text-center poppin ">
      <div className="flex items-center justify-center w-full  ">
        <div
          className={`${bgColor} w-16 h-16  rounded-full flex items-center justify-center`}
        >
          <h4 className="text-black text-2xl font-semibold">{count}</h4>
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-lg text-[#1C1C1C] pt-2">{title}</h4>
        <p className="font-medium text-[#5E5E6F] text-base">{description}</p>
      </div>
    </div>
  );
}

export default FindCare;
