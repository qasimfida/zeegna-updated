"use client";

import React from "react";
import cls from "classnames";

export const RightbarWrapper = ({ children, className }, props) => {
  return (
    <div className={cls`w-full flex flex-col  gap-5 ${className} `} {...props}>
      {children}
    </div>
  );
};
