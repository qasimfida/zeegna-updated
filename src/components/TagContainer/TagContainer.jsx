"use client";

import React from "react";
import { CloseIcon } from "@/svgs/icons";

export const TagContainer = ({
  item = {},
  variant = "primary",
  onClickHandler = () => console.log("Clicked"),
  onCloseHandler = () => console.log("Clicked"),
}) => {
  const { id, name } = item;
  return (
    <div
      key={id}
      className={`h-8 px-3 py-1 rounded-3xl cursor-pointer font-normal ${
        variant === "primary"
          ? "bg-primary text-white"
          : "bg-grey-light text-grey-400"
      } flex justify-between sm:justify-start items-center text-sm gap-1`}
      onClick={onClickHandler}
    >
      {name}
      {variant === "primary" && (
        <CloseIcon
          onClick={onCloseHandler}
          className="h-5 w-5 cursor-pointer"
        />
      )}
    </div>
  );
};
