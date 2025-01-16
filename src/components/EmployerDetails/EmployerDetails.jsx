"use client";

import React from "react";
import { Icon } from "@/svgs";
import Button from "@/components/Button";

export const EmployerDetails = () => {
  return (
    <div className="bg-white rounded-2xl w-full order-3 lg:order-2">
      <div className="flex flex-col items-center gap-4 bg-white rounded-2xl p-5">
        <div className="flex justify-between w-full border-b pb-4 items-center">
          <h4 className="text-5xl font-semibold text-grey-400">
            Employer Details
          </h4>
        </div>
        <div className="flex flex-col w-full items-start gap-2.5">
          <p className=" text-base font-medium text-grey-400 flex  gap-1.5 cursor-pointer">
            <span>
              <Icon
                name="tower"
                className="min-w-6 min-h-6 hover:border-primary"
              />
            </span>
            <span className="text-base font-medium  flex items-center">
              Integrated Real Estate Group
            </span>
          </p>
          <p className=" text-base font-medium text-grey-400 flex  gap-1.5 cursor-pointer">
            <span>
              <Icon
                name="profilesmall"
                className="min-w-6 min-h-6 !border !border-grey-100 hover:border-primary"
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
                className="min-w-6 min-h-6 hover:border-primary"
              />
            </span>
            <span className="text-base font-medium flex items-center">
              Headquartered in Conroe, TX
            </span>
          </p>
        </div>
        <div className="w-full">
          <Button
            className="!h-11 px-4"
            variant="darkOutlined"
            color="dark"
            size="lg"
          >
            View Employer
          </Button>
        </div>
      </div>
    </div>
  );
};
