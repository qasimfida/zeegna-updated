"use client";

import React from "react";
import { workDetailsData } from "./data";
import cls from "classnames";
import { Icon } from "@/svgs";

export const KeyDetails = () => {
  return (
    <div className="px-5 pt-4 rounded-2xl flex flex-col  cursor-pointer ">
      <div className={`flex w-full items-center`}>
        <h4 className="text-sm font-semibold md:text-5xl text-grey-400">
          Key Details:
        </h4>
      </div>
      <div className="mt-2.5">
        <p className="text-sm md:text-base font-medium text-grey-400">
          The ideal candidate for this full-time, hybrid role should possess a
          minimum of 10 years of experience, with a strong preference for
          individuals holding either a Bachelor of Science in Nursing (BSN) or a
          Master of Science (MSN) degree. This opportunity is not open to recent
          graduates.
        </p>
        {workDetailsData?.map(({ data }, index) => {
          return (
            <div
              key={`${data.country}-option-${index + 1}`}
              className={cls`gap-4 pt-4 ${
                index === workDetailsData.length - 1 ? "pb-0" : "border-b "
              }  flex flex-col`}
            >
              {data.country && (
                <div className="flex justify-between items-center w-full">
                  <p className="text-sm font-semibold md:text-4xl text-grey-400">
                    {data.country}
                  </p>
                  <Icon
                    name="edit"
                    onClick={onEditClick}
                    className="min-w-8 min-h-8 hover:border-primary"
                    aria-hidden="true"
                  />
                </div>
              )}
              <div className="flex flex-col gap-2.5">
                {data.heading && (
                  <p className="text-sm font-semibold md:text-4xl text-grey-400 pb-2.5">
                    {data.heading}
                  </p>
                )}
                {data?.data?.map(({ name, value }, index) => {
                  const cls = `text-sm md:text-base ${
                    name.toLocaleLowerCase().includes("email") ||
                    name.toLocaleLowerCase().includes("website")
                      ? "text-primary-2600"
                      : "text-grey-500"
                  } font-medium ${
                    Array.isArray(value)
                      ? "flex items-center flex-wrap gap-2"
                      : ""
                  }`;

                  return (
                    <div key={`${name}-option-${index + 1}`} className={cls}>
                      <span className="text-grey-400">{name}: </span>
                      {renderProfileCardData(value)}
                    </div>
                  );
                })}
                {data.tags && (
                  <div className="flex flex-wrap w-full gap-2">
                    {renderTagsWithIcons(data.tags)}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
