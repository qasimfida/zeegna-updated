"use client";

import React from "react";
import Input from "@/components/Input";
import { LinkedInLogoIcon } from "@/svgs/LinkedInLogoIcon";
import {
  MegaPhoneIcon,
  CopyIcon,
  FacebookIcon,
  TwitterLogoIcon,
  EnvolupeClosedIcon,
  MegaPhoneIconSmall,
} from "@/svgs/icons";

export const Referal = () => {
  return (
    <div className="flex flex-col items-center justify-center sm:items-start sm:justify-start sm:flex sm:flex-row sm:auto relative bg-white rounded-2xl min-h-28 mt-5">
      <div className="w-full sm:w-[45%] px-5 py-4 sm:py-[50px] order-2 sm:order-1">
        <p className="text-5xl text-grey-400 w-8/12">
          Spread the Love. Help your peers find their perfectly matching job.
        </p>
        <p className="text-sm font-medium text-grey-800 my-2.5">
          Your unique referal code
        </p>
        <div className="w-full md:w-[75%]">
          <Input
            readOnly={true}
            placeholder="ZXADHJSD154"
            hasIcon
            icon={<CopyIcon />}
            clipboard={true}
          />
        </div>
        <div className="flex flex-wrap mt-4 gap-[5px] ">
          <div className="h-9 w-9 border border-grey-1800 rounded-full flex items-center justify-center">
            <FacebookIcon />
          </div>
          <div className="h-9 w-9 border border-grey-1800 rounded-full flex items-center justify-center">
            <LinkedInLogoIcon />
          </div>
          <div className="h-9 w-9 border border-grey-1800 rounded-full flex items-center justify-center">
            <TwitterLogoIcon />
          </div>
          <div className="h-9 w-9 border border-grey-1800 rounded-full flex items-center justify-center">
            <EnvolupeClosedIcon />
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 order-1 sm:order-2 hidden sm:block">
        <MegaPhoneIcon className="w-full" />
      </div>
      <div className="w-full sm:w-1/2 order-1 sm:order-2 block sm:hidden">
        <MegaPhoneIconSmall className="w-full" />
      </div>
    </div>
  );
};
