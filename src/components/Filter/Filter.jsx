"use client";

import { Icon } from "@/svgs";

export const Filter = ({ name = "Job Type", isOpen, setIsOpen, children }) => {
  return (
    <div className="relative  border-b">
      <div className="mb-5">
        <div
          className="w-full pt-5 flex items-center justify-between"
          onClick={() => setIsOpen(!isOpen)}
        >
          <label
            htmlFor={`${name && name.toLowerCase()}-label`}
            className="text-base font-medium text-primary cursor-pointer"
          >
            {name}
          </label>
          <Icon
            name={isOpen ? "up" : "down"}
            className="min-w-6 min-h-6"
            aria-hidden="true"
          />
        </div>
        {isOpen && (
          <div className="z-10 w-full mt-4 flex flex-col gap-2.5">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};
