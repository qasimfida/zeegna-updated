"use client";

import React from "react";
import { BreifcaseIcon } from "@/svgs/BreifcaseIcon";
import { PointerIcon } from "@/svgs/PointerIcon";
import { Icon } from "@/svgs";
import Button from "../Button";

export const JobSearch = () => {
  return (
    <div className="flex-col sm:flex sm:flex-row overflow-hidden py-2.5 px-5 mt-5 bg-white rounded-2xl">
      <div className="flex items-center w-full focus-within:z-10 ">
        <div className="flex items-center w-full border-b sm:border-b-0 sm:border-r pr-3 h-11 gap-2.5">
          <BreifcaseIcon className="w-4 h-4 text-primary" aria-hidden="true" />
          <p className="text-sm font-medium text-grey-400">
            Please select or type job title
          </p>
        </div>
      </div>
      <div className="flex items-center w-full   focus-within:z-10 ">
        <div className="flex items-center  w-full sm:px-3  h-11 gap-2.5">
          <PointerIcon className="w-4 h-4 text-primary" aria-hidden="true" />
          <p className="text-sm font-medium text-grey-400">
            Please select or type location
          </p>
        </div>
        <div className="hidden sm:block">
          <Icon name="magnify" className=" min-w-10 min-h-10" filled />
        </div>
      </div>
      <div className="block sm:hidden mt-2.5">
        <Button
          variant="primaryContained"
          size="xl"
          className="w-full sm:w-52 justify-center"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};
