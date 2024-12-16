"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/svgs";
import { ArrowDownIcon } from "@/svgs/ArrowDownIcon";
import { jobsByEmployeeData, jobsData, searchData, workData } from "./data";
import RightbarWrapper from "../RightbarWrapper";
import ProfileCompletion from "../ProfileCompletion";
import cls from 'classnames'


export const HomeRightbar = ({className}) => {
  return (
    <RightbarWrapper className={cls(`!min-h-max ${className} `)} >
      <ProfileCompletion />

      {/* <div className="flex items-center justify-between mb-1 mt-4">
        <h4 className="text-base font-semibold text-grey-400">
          Jobs by Employers
        </h4>
        <h4 className="text-base font-semibold text-primary underline">
          View all
        </h4>
      </div>

      <div className="mt-1.5 flex flex-col gap-1.5">
        {jobsByEmployeeData?.map(({ image, heading, subHeading }, index) => {
          return (
            <div
              key={`${heading}-option-${index + 1}`}
              className="flex items-center justify-between gap-1 bg-white rounded-2xl px-3 py-4 "
            >
              <div className="flex justify-center items-center gap-4">
                <div className="max-w-14 min-w-14">
                  <Image src={image} alt="Career Image" />
                </div>
                <div className="w-full text-left">
                  <h4 className="w-[182px] text-base font-semibold text-grey-400">
                    {heading}
                  </h4>
                  <h4 className="w-[182px] text-sm font-semibold text-grey-500">
                    {subHeading}
                  </h4>
                </div>
              </div>
              <div>
                <ArrowDownIcon className="transform -rotate-90" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between mb-1 mt-4">
        <h4 className="text-base font-semibold text-grey-400">Saved Jobs</h4>
        <h4 className="text-base font-semibold text-primary underline">
          View all
        </h4>
      </div>

      <div className="mt-1.5 flex flex-col gap-1.5">
        {jobsData?.map(({ image, heading, subHeading }, index) => {
          return (
            <div
              key={`${heading}-option-${index + 1}`}
              className="flex items-center justify-between gap-1 bg-white rounded-2xl px-3 py-4 "
            >
              <div className="flex justify-center items-center gap-4">
                <div className="max-w-14 min-w-14">
                  <Image src={image} alt="Career Image" />
                </div>
                <div className="w-full text-left">
                  <h4 className="text-base font-semibold text-grey-400 truncate w-[182px]">
                    {heading}
                  </h4>
                  <h4 className="w-[182px] text-sm font-semibold text-grey-500 truncate">
                    {subHeading}
                  </h4>
                </div>
              </div>
              <div>
                <ArrowDownIcon className="transform -rotate-90" />
              </div>
            </div>
          );
        })}
      </div> */}
    </RightbarWrapper>
  );
};
