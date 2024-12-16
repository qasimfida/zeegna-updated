import React from "react";
import cls from "classnames";

const variants = {
  success: {
    checked: "bg-success-300",
    outline: "border-success-300",
  },
  primary: {
    checked: "bg-primary",
    outline: "border-primary",
  },
  warning: {
    checked: "bg-warning-300",
    outline: "border-warning-300",
  },
  danger: {
    checked: "bg-danger-light",
    outline: "border-danger-light",
  },
  warning_light: {
    checked: "bg-warning-100",
    outline: "border-warning-100",
  },
  dark: {
    checked: "bg-grey-1800",
    outline: "border-grey-1800",
  },
};

const sizes = {
  xs: "w-1 h-1",
  sm: "w-3 h-3",
  md: "w-4 h-4",
  lg: "w-5 h-5",
};
const dotSizes = {
  md: "w-1 h-1",
  lg: "w-3 h-3",
};

export const Radio = ({
  checked,
  onChange,
  variant = "primary",
  size = "md",
  outlined = false,
}) => {
  const v = variants[variant] || variants["primary"];
  const s = sizes[size] || sizes["md"];
  const d = dotSizes[size] || dotSizes["md"];

  if (outlined)
    return (
      <div
        className={cls(
          `border-2 rounded-full flex items-center justify-center ${v["outline"]} ${s}`
        )}
        onClick={onChange}
      >
        <div
          className={cls(`rounded-full ${d}`, {
            [v["checked"]]: checked,
            "bg-white": !checked,
          })}
        ></div>
      </div>
    );
  return (
    <div
      className={cls(`border-2 rounded-full ${v["outline"]} ${s}`, {
        [v["checked"]]: checked,
        "bg-white": !checked,
      })}
      onClick={onChange}
    ></div>
  );
};
