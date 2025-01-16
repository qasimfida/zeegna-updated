import cls from "classnames";
import React from "react";

export const UploadCloudIcon = ({ className, ...props }) => {
  return (
    <svg
    width="37"
    height="28"
    viewBox="0 0 37 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cls`text-primary ${className}`}
    {...props}
    >
      <path
        d="M9.24907 23.4991C-2.00093 24.7491 -0.750931 10.9991 9.24907 12.2491C5.49907 -1.5009 26.7491 -1.5009 25.4991 8.4991C37.9991 4.7491 37.9991 24.7491 26.7491 23.4991M11.7491 16.3969L17.9991 8.4991M17.9991 8.4991L24.8741 16.3969M17.9991 8.4991L17.9991 26.3969"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
