"use client";

import React, { useState } from "react";
import MultiSelect from "../MultiSelect";
import { SaveIcon } from "@/svgs/SaveIcon";
import { DeleteIcon } from "@/svgs/DeleteIcon";
import { AddPlusIcon } from "@/svgs/icons";
import { jobTypes } from "./data";

export const JobFilter = () => {
  const [selected, setSelected] = useState([]);

  const handleRemoveTag = (option) => {
    const isSelected = selected.some((current) => current.id === option.id);
    const newSelected = isSelected
      ? selected.filter((current) => current.id !== option.id)
      : [...selected, option];

    setSelected(newSelected);
  };

  return (
    <div className="flex-col sm:flex sm:flex-row overflow-hidden pb-2.5 px-5 mt-5 bg-white rounded-2xl w-full gap-4 relative min-h-28">
      <div className="flex flex-col  focus-within:z-10 w-full flex-1">
        <MultiSelect
          className="w-full sm:w-10/12 lg:w-9/12 xl:w-10/12 2xl:w-11/12 relative"
          options={jobTypes}
          label="All jobs (132)"
          onChange={setSelected}
          value={selected}
          position="relative"
        />
        {selected.length > 0 && (
          <div className="hidden sm:flex flex-wrap flex-col sm:flex-row gap-2.5 mt-4 w-full">
            {selected?.map((item, index) => {
              const { id, name } = item;
              return (
                <div
                  key={`-option-${index + 1}`}
                  className="h-8 px-3 py-1 rounded-3xl bg-gray-light flex justify-between sm:justify-start items-center text-sm gap-1 bg-grey-light text-primary"
                >
                  {name}
                  <DeleteIcon
                    onClick={() => handleRemoveTag(item)}
                    className="h-4 w-4 cursor-pointer text-warning-light"
                  />
                </div>
              );
            })}
            <button
              type="button"
              className="rounded-3xl flex items-center text-base font-medium text-primary py-1 px-2"
            >
              <span>
                <AddPlusIcon className="w-5 h-5" aria-hidden="true" />
              </span>
              Show More
            </button>
          </div>
        )}
      </div>
      <div className="flex  sm:px-0 pt-4 sm:py-7  focus-within:z-10 w-full sm:w-36 static sm:absolute right-5 top-0">
        <SaveIcon className="w-4 h-4 text-grey-400 mr-1.5" aria-hidden="true" />
        <p className="text-sm font-medium text-grey-400">Save this Search</p>
      </div>
      {selected.length > 0 && (
        <div className="flex sm:hidden flex-wrap sm:flex-row gap-1 mt-4 w-full">
          {selected?.map((item, index) => {
            const { id, name } = item;
            return (
              <div
                key={`-option-${index + 1}`}
                className="h-8 px-3 py-1 rounded-3xl bg-gray-light flex justify-between sm:justify-start items-center text-sm gap-1 bg-grey-light text-primary"
              >
                {name}
                <DeleteIcon
                  onClick={() => handleRemoveTag(item)}
                  className="h-4 w-4 cursor-pointer text-warning-light"
                />
              </div>
            );
          })}
          <button
            type="button"
            className="rounded-3xl flex items-center text-base font-medium text-primary py-1 px-2"
          >
            <span>
              <AddPlusIcon className="w-5 h-5" aria-hidden="true" />
            </span>
            View More
          </button>
        </div>
      )}
    </div>
  );
};
