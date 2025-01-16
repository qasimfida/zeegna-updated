"use client";

import React from "react";
import { ArrowRightIcon, ImageIcon } from "@/svgs/icons";
import Button from "../Button";
import cls from "classnames";

export const CareerCard = ({ className, ...rest }) => {
  return (
    <div
      className={cls`flex flex-col items-center w-full mb-5 text-center bg-white px-8 py-5 rounded-2xl ${className} `}
      {...rest}
    >
      <div className="flex items-center flex-col w-full mb-4">
        <ImageIcon aria-hidden="true" fill />
      </div>
      <h4 className="text-4xl text-grey-400 mb-1">
        Your career belongs to you
      </h4>
      <p className="text-sm font-medium text-grey-400 mb-2.5">
        Fast track your way to a better, <br /> more fulfilling job.
      </p>
      <Button color="primary" variant="outlined" size="xl">
        <p className="mr-2">Find your Fit</p>
        <ArrowRightIcon aria-hidden="true" />
      </Button>
    </div>
  );
};
