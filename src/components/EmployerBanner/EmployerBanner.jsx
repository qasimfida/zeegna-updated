"use client";

import Image from "next/image";
import { BagIcon, StarBadgeIcon } from "@/svgs/icons";
import feature from "../../../public/images/feature.png";

export const EmployerBanner = () => {
  return (
    <div className="px-5 py-4 border border-100 bg-primary-2400 rounded-t-2xl flex flex-col lg:flex lg:flex-row justify-between">
      <div className="flex  justify-start lg:justify-between items-center gap-3">
        <div className="flex items-center justify-center max-w-20 min-w-20 max-h-20 min-h-20 rounded-[10px] bg-white border border-grey-100">
          {
            <Image
              className="w-full rounded-[10px]"
              src={feature}
              alt="Career Image"
              style={{ objectFit: "cover" }}
            />
          }
        </div>
        <div>
          <p className={`text-4xl text-grey-400`}>Bayada Home Care Charlotte</p>
          <div className="flex items-center">
            <p className={`text-sm text-grey-400 font-medium mr-1`}>Part of</p>
            <p className={`text-base text-grey-400 underline font-medium`}>
              Bayada Home Care
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap items-start lg:items-center justify-start lg:justify-center ml-4 mt-5 lg:mt-0 gap-5">
        <button className="flex flex-wrap rounded-full gap-2 h-8 items-center bg-primary-2500 text-grey-400 text-sm font-normal px-2 min-w-max ">
          <BagIcon />0 Jobs on ZyraHealth
        </button>
        <p className="text-sm font-semibold text-primary flex items-center gap-2.5 mb-1">
          <StarBadgeIcon className="min-w-8 max-w-8 min-h-8 max-h-8 min-w-max" />
          Trusted Partner
        </p>
      </div>
    </div>
  );
};
