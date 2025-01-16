"use client";

import React from "react";
import { CheckIcon, ProfileIcon } from "@/svgs/icons";
import classnames from "classnames";

const colors = {
  bio: "bg-primary-800/50",
  credentials: "bg-primary-900/50",
  education: "bg-danger-100/50",
  experience: "bg-warning-500/50",
  resume: "bg-success-400/50",
  skills: "bg-primary-1000/50",
};

export const ProfileInfoTile = ({
  icon = <ProfileIcon />,
  label = "Bio",
  isAdded = true,
  onClick = () => console.log("clicked"),
  className,
}) => {
  const cls = isAdded
    ? "px-3 py-2 bg-primary"
    : "px-7 py-2 bg-grey-1000 hover:bg-grey-1100";
  const bgColor = `${colors[label.toLowerCase()]}`;
  return (
    <div
      className={classnames(
        `flex items-center rounded-2xl cursor-pointer text-grey-400 ring-grey-100 shadow-sm bg-white justify-between px-4 py-2.5 ring-1 hover:ring-black hover:shadow-lg ${className}`
      )}
    >
      <div className="flex items-center">
        <button
          className={`border rounded-3xl h-9 w-9 flex items-center justify-center min-h-9 min-w-9 mr-2.5 text-grey-400 ${
            label === "Bio" ? "pl-1" : ""
          } ${bgColor}`}
        >
          {icon}
        </button>

        {label && <p className="text-sm text-grey-400 font-medium">{label}</p>}
      </div>

      <button
        className={`text-sm font-medium text-white rounded-3xl focus:outline-none flex items-center ${cls}`}
        onClick={onClick}
      >
        {isAdded ? "Added" : "Add"}
        {isAdded && icon && (
          <CheckIcon className="w-3 h-3 ml-1.5" aria-hidden="true" />
        )}
      </button>
    </div>
  );
};
