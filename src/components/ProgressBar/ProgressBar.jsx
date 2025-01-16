import React from "react";
import cls from "classnames";

const variants = {
  success: {
    bg: "bg-success-light",
    bar: "bg-success",
    text: "text-success",
  },
  primary: {
    bg: "bg-success-light",
    bar: "bg-primary",
    text: "text-primary",
  },
  warning: {
    bg: "bg-warning-light",
    bar: "bg-warning",
    text: "text-warning",
  },
};

export const ProgressBar = ({
  progress,
  variant = "primary",
  unit = "%",
  hasLabel = true,
  className,
  type = "",
}) => {
  const progressWidth = Math.min(progress, 100);

  const v = variants[variant] || variants["primary"];

  if (type === "circular") {
    return (
      <div className="relative">
        <svg className=" w-24 h-24 " viewBox="0 0 100 100">
          <g transform={`rotate(-90 50 50)`}>
            <circle
              className="text-gray-200 stroke-current"
              strokeWidth="10"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
            ></circle>
            <circle
              className="text-success progress-ring__circle stroke-current"
              strokeWidth="10"
              strokeLinecap="round"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              strokeDasharray="251.2"
              strokeDashoffset={`calc(251.2 - (251.2 * ${progress}) / 100)`}
            ></circle>
          </g>

          <text
            className="text-grey-400 text-[1.5rem]"
            x="50"
            y="50"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            {progress}%
          </text>
        </svg>
      </div>
    );
  }
  return (
    <div
      className={`"text-base flex items-center gap-4 font-semibold w-full ${v["text"]} ${className}`}
    >
      <div className={cls`w-full rounded-full h-[.625rem] ${v["bg"]} `}>
        <div
          className={cls`h-full rounded-full  ${v["bar"]}`}
          style={{ width: `${progressWidth}%` }}
        ></div>
      </div>
      {hasLabel && `${progress}${unit}`}
    </div>
  );
};
