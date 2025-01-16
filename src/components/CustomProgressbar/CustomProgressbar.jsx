import React from "react";

export const CustomProgressbar = ({ filled = 0 }) => {
  const progressStyle = {
    width: `${filled}%`,
    background: "#1ECA63",
  };

  return (
    <div className="flex flex-col w-full gap-3">
      <div className="w-full h-full flex flex-col">
        <h4 className="text-4xl text-grey-400 pt-2.5">
          You have completed {filled}% of Administrative Duties Checklist
        </h4>
      </div>
      <div className="gap-4 flex items-center">
        <div className="relative w-full h-2.5 rounded-3xl bg-success-500">
          <div
            className="absolute top-0 left-0 h-full rounded-3xl"
            style={progressStyle}
          ></div>
        </div>
        <div className="h-full flex items-end pr-2">
          <span className="text-sm font-medium text-grey-400">{filled}%</span>
        </div>
      </div>
    </div>
  );
};
