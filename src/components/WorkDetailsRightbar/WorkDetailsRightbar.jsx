"use client";

import React, { useState } from "react";
import RightbarWrapper from "@/components/RightbarWrapper";
import { ClockSuccessIcon } from "@/svgs/ClockSuccessIcon";
import ProgressBar from "../ProgressBar";
import { Icon } from "@/svgs";

export const WorkDetailsRightbar = () => {
  const progress = 70;

  return (
    <RightbarWrapper>
      <div className="bg-white rounded-2xl flex px-4 py-5 gap-2.5">
        <div className="w-8">
          <ClockSuccessIcon />
        </div>
        <p className="text-sm font-medium text-grey-400 text-justify">
          The job posting was made 5 days ago and the application deadline is
          set for
          <span className="text-sm font-medium text-primary ml-1">
            December 24, 2024
          </span>
        </p>
      </div>
      <div className="flex items-center gap-4 bg-white rounded-2xl mt-5 p-5">
        <ProgressBar type="circular" progress={progress} />
        <p className="text-base font-semibold text-grey-400">
          {`This job matches ${progress}% of your profile`}
        </p>
      </div>
      <div className="flex flex-col items-center gap-4 bg-white rounded-2xl mt-5 p-5">
        <div className="flex justify-between w-full border-b pb-4 items-center">
          <h4 className="text-base font-semibold text-primary">
            Employer Details
          </h4>
          <div></div>
        </div>
        <div className="flex flex-col w-full pb-2.5 sm:pb-4 border-b items-start gap-2.5">
          <p className=" text-base font-medium text-grey-400 flex  gap-1.5 cursor-pointer">
            <span>
              <Icon
                name="tower"
                className="min-w-8 min-h-8 hover:border-primary"
              />
            </span>
            <span className="text-base font-medium  flex items-center">
              Integrated Real Estate Group
            </span>
          </p>
          <p className=" text-base font-medium text-grey-400 flex  gap-1.5 cursor-pointer">
            <span>
              <Icon
                name="profile"
                className="min-w-8 min-h-8 hover:border-primary"
              />
            </span>
            <span className="text-base font-medium flex items-center">
              500-1000 employees
            </span>
          </p>
          <p className=" text-base font-medium text-grey-400 flex  gap-1.5 cursor-pointer">
            <span>
              <Icon
                name="pointer"
                className="min-w-8 min-h-8 hover:border-primary"
              />
            </span>
            <span className="text-base font-medium flex items-center">
              Headquartered in Conroe, TX
            </span>
          </p>
        </div>
        <div>
          <p className="text-base font-medium text-grey-400 border-b pb-5">
            The Director of Memory Care (DMC) is responsible for the overall
            supervision and quality of nursing and supportive services in Memory
            Care. The DMC is responsible for the procurement of appropriate
            supplies and equipment while operating within the departmental
            budget. He/She is also responsible for the coordination and
            direction of the memory care staff includes <br></br>
            <span className="text-base font-semibold text-primary underline">
              Show more
            </span>
          </p>
          <div className="mt-4 flex flex-col items-center gap-4">
            <button
              type="button"
              className="rounded-3xl bg-primary flex text-base font-medium text-white  py-2.5 leading-6 hover:bg-primary-light w-full items-center justify-center"
            >
              Apply now
            </button>
            <button
              type="button"
              className="rounded-3xl flex text-base font-medium text-primary border-2 border-primary  py-2.5 leading-6 hover:bg-primary-light w-full items-center justify-center"
            >
              Share
            </button>
          </div>
        </div>
      </div>
    </RightbarWrapper>
  );
};
