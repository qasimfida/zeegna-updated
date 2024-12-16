import React from "react";
import { ArrowDownIcon, DocumentsMinusIcon } from "@/svgs/icons";
import cls from "classnames";

const colors = [
  "bg-primary-800/50",
  "bg-primary-900/50",
  "bg-danger-100/50",
  "bg-warning-500/50",
  "bg-success-400/50",
  "bg-primary-1000/50",
];

export const TaskCard = ({
  task,
  toggleAccordion,
  className,
  openAccordion,
  handleAction,
  actionButton,
  ...props
}) => {
  const { question, id, icon, answer } = task;
  return (
    <div
      className={cls(
        `w-[calc(100%-2px)] m-auto bg-white px-5 py-4 border rounded-2xl mt-2.5 mb-2.5  hover:ring-1 sm:hover:ring-black sm:hover:shadow-xl sm:ease-in sm:cursor-pointer ${className}`
      )}
      {...props}
    >
      <div
        onClick={() => toggleAccordion(id)}
        className={`flex justify-between items-center flex-wrap lg:flex-nowrap gap-1 lg:gap-4  ${
          openAccordion === id ? "" : ""
        }  cursor-pointer`}
      >
        <div
          className={`border rounded-3xl h-10 w-10 flex items-center justify-center min-h-[2.5rem] min-w-[2.5rem] order-1 text-grey-400 ${colors[id]}`}
        >
          {icon ? icon : <DocumentsMinusIcon />}
        </div>
        <div className=" text-left order-3 lg:order-2 w-full ">
          <h4 className="text-base font-medium text-grey-400">
            <span>{question}</span>
            <span className="text-grey-500">{` ${answer}`}</span>
          </h4>
        </div>
        <div
          className="text-grey-400 order-2 lg:order-3"
          onClick={handleAction}
        >
          {actionButton || <ArrowDownIcon className="transform -rotate-90" />}
        </div>
      </div>
    </div>
  );
};
