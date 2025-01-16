"use client";

import cls from "classnames";

export const tags = {
  INFO: "info",
  TAG: "tag",
  SUCCESS: "success",
  PRIMARY: "primary",
  WARNING: "warning",
  DANGER: "danger",
};
const COLORS = {
  success: "border-success text-success",
  info: "border-primary-400 text-primary-400",
  tag: "text-grey-400",
  primary: "border-primary-light text-primary",
  warning: "border-warning text-warning",
  danger: "border-danger text-danger",
  dark: "border-grey-1800 text-dark-1800",
};
const VARIANTS = {
  outlined: "border-2 hover:bg-primary hover:text-white hover:border-primary",
  successOutlined:
    "border-2 hover:bg-success hover:text-white hover:border-success",
  primaryOutlined:
    "border-2 hover:bg-primary hover:text-white hover:border-primary",
  primaryContained: " bg-primary text-white hover:bg-primary-light",
  darkContained: " bg-grey-1800 text-white hover:bg-grey-1100",
  darkOutlined:
    " bg-white text-grey-1800 hover:text-white hover:bg-grey-1800 border border-grey-1800 w-40 flex justify-center",
  tag: "border",
  tagOutlined: "bg-grey-light !text-grey-400",
  tagFilled: "bg-primary-300",
  filled: "text-primary",
  contained: "bg-primary text-white",
  text: "border-0",
  transparent:
    " hover:text-white hover:bg-grey-1800 border  w-40 flex justify-center",
};
const SIZES = {
  xs: "h-5 p-2",
  sm: "h-8 px-9 font-normal text-xs",
  md: "h-8 text-sm font-normal px-1.5",
  lg: "w-full h-10 text-base font-semibold justify-center",
  xl: "h-10 px-6 text-base font-semibold",
  large: "px-5 py-2.5 text-base font-medium ",
  xxl: "h-11 px-16 text-base font-semibold",
};

export const Button = ({
  color = "primary",
  variant = "contained",
  size = "md",
  children,
  className,
  ...rest
}) => {
  let classes = cls` ${SIZES[size]} ${COLORS[color]} ${VARIANTS[variant]}`;
  return (
    <button
      type="button"
      className={`rounded-3xl flex items-center ${classes} ${
        variant === tags.TAG ? "gap-2" : ""
      } ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
