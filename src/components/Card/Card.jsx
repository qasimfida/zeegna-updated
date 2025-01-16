"use client";

import React from "react";
import { Icon } from "@/svgs";
import { GlobeIcon, LinkedInIcon, TwitterIcon } from "@/svgs/icons";

export const Card = ({
  title = "",
  hasIcon = true,
  heading = "",
  icon = (
    <Icon name="edit" className="min-w-8 min-h-8" aria-hidden="true" filled />
  ),
  options = [],
  subTitle = "Add Subtitle",
  onAddClick = () => {
    console.log("add");
  },
  onEditClick = () => {
    console.log("edit");
  },
  description = "",
  children,
  leftIcon = null,
  hasEditIcon = true,
}) => {
  if (description) {
    return (
      <div
        className="p-5 mt-4 bg-white rounded-2xl flex flex-col gap-4 shadow-sm  hover:ring-1 hover:ring-black hover:shadow-xl ease-in cursor-pointer "
        onClick={onAddClick}
      >
        <div className="flex justify-between w-full border-b pb-2.5 items-center">
          <h4 className={`text-5xl text-grey-400`}>{title}</h4>
          <div></div>
        </div>
        <div className="flex flex-col justify-center items-center py-5">
          {icon && (
            <div className="pb-2.5">
              <Icon
                name="add"
                className="min-w-10 min-h-10 color-white"
                aria-hidden="true"
                filled
              />
            </div>
          )}
          <h4 className="text-4xl text-grey-400 pb-1">{subTitle}</h4>

          <p className="text-base text-grey-400 font-medium text-center">
            {description}
          </p>
        </div>
      </div>
    );
  }

  if (options.length > 0) {
    return (
      <div className=" p-5 mt-4 bg-white rounded-2xl flex flex-col gap-4  hover:ring-1 hover:ring-black hover:shadow-xl ease-in cursor-pointer ">
        <div className="flex justify-between w-full border-b pb-2.5 items-center">
          <h4 className={`text-5xl text-grey-400`}>{title}</h4>

          {hasIcon && icon && <span onClick={onEditClick}>{icon}</span>}
        </div>
        <div>
          <div className="flex justify-between w-full items-center">
            {heading && (
              <h4 className="text-4xl text-grey-400 pb-2.5">{heading}</h4>
            )}
            {hasEditIcon && (
              <Icon
                name="edit"
                className="min-w-8 min-h-8 color-white hover:border-primary "
                aria-hidden="true"
                onClick={onEditClick}
              />
            )}
          </div>
          <div className="flex flex-col gap-2.5 overflow-auto">
            {options.map((option, index) => {
              let IconComponent;

              if (option.name.toLowerCase() === "website") {
                IconComponent = <GlobeIcon />;
              } else if (option.name.toLowerCase() === "linkedin") {
                IconComponent = <LinkedInIcon />;
              } else if (option.name.toLowerCase() === "twitter") {
                IconComponent = <TwitterIcon />;
              }

              return (
                <p
                  className={`text-base text-grey-500 font-medium${
                    IconComponent ? " flex items-center" : ""
                  }`}
                  key={`${title}-option-${index + 1}`}
                >
                  {IconComponent && IconComponent}
                  <span
                    className={`text-grey-400 font-medium ${
                      IconComponent ? "ml-1" : ""
                    }
                      `}
                  >
                    {option.name}:{" "}
                  </span>
                  {option.value}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className=" p-5 mt-4 bg-white rounded-2xl flex flex-col hover:ring-1 hover:ring-black hover:shadow-xl ease-in cursor-pointer ">
      <div
        className={`flex ${
          leftIcon ? "justify-start" : "justify-between"
        } w-full border-b pb-2.5 items-center`}
      >
        {leftIcon && <span className="mr-3">{leftIcon}</span>}
        <h4 className={`text-5xl text-grey-400`}>{title}</h4>

        {hasIcon && !leftIcon && icon && (
          <span onClick={onEditClick}>{icon}</span>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};
