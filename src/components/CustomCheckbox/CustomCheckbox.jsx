import React from "react";
import { CheckIcon } from "@/svgs/icons";
import cls from "classnames";

export const CustomCheckbox = ({
  variant = "success",
  className,
  checked = false,
  setChecked,
  label = "",
  labelClass = "",
  color = "",
}) => {
  const tags = {
    success: "success",
    primary: "primary",
    warning: "warning",
    danger: "danger",
  };
  const colorVariant = `border-${tags[variant]}`;

  if (color === "default") {
    return (
      <div className={cls`flex gap-2 mt-6 items-center ${className}`}>
        <input
          type="checkbox"
          checked={checked}
          onChange={setChecked}
          className={`relative peer shrink-0 items-center flex
                 w-5 h-5 border-2 border-grey-100 appearance-none bg-white
                checked:bg-white checked:border-grey-100
                focus:outline-none focus:ring-offset-0  focus:ring-[none]
                disabled:border-steel-400 disabled:bg-steel-400`}
        />
        <label className={cls`text-sm font-medium text-grey-400 ${labelClass}`}>
          {label}
        </label>
        <CheckIcon colorClass={"primary !mt-[2px]"} />
      </div>
    );
  }
  return (
    <div className={cls`flex gap-2 mt-6 items-center ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={setChecked}
        className={cls`relative peer shrink-0 items-center flex
                appearance-none w-5 h-5 border-2 border-primary ${colorVariant} rounded-sm bg-white
                checked:bg-white checked:${colorVariant} 
                focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-[none]
                disabled:border-steel-400 disabled:bg-steel-400`}
      />
      <label className={cls`text-sm font-medium text-grey-400 ${labelClass}`}>
        {label}
      </label>
      <CheckIcon colorClass={tags[variant]} />
    </div>
  );
};
