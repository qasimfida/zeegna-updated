"use client";

import React, { useEffect, useRef, useState } from "react";
import JobSearch from "@/components/JobSearch";
import JobFilter from "@/components/JobFilter";
import WorkCard from "@/components/WorkCard";
import Button from "../Button";
import Input from "../Input";
import { CalendarIcon } from "@/svgs/CalendarIcon";
import { ChevronUpIcon } from "@/svgs/ChevronUpIcon";
import { ChevronDownIcon } from "@/svgs/ChevronDownIcon";
import { PointerIcon } from "@/svgs/PointerIcon";
import { BurgerMenu } from "@/svgs/BurgerMenu";
import { CloseIcon } from "@/svgs/CloseIcon";

const options = [
  {
    id: 1,
    name: "North Carolina Board of Nursing",
    avatar:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    name: "Board of Nursing",
    avatar:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    name: "Carolina Board",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
  },
];

export const FilterInput = ({
  placeholder = "Filter",
  readOnly,
  icon = null,
  handleDrawerClick = () => console.log("clicked"),
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelectOption = (option) => {
    setInputValue(option.name);
    setSelectedOption(option);
  };

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFocused(true);
    handleDrawerClick();
  };

  const clearInput = () => {
    setInputValue("");
    setSelectedOption(null);
    setIsFocused(true);
  };
  return (
    <div ref={dropdownRef} className="w-full lg:w-auto" onClick={handleClick}>
      <div className="flex items-center relative truncate overflow-hidden ">
        {!selectedOption && (
          <label
            onClick={handleClick}
            className={`truncate ml-10 text-grey-1000 transition-[top] ease-in duration-300 z-10  max-h-[1.5rem] px-1 absolute text-sm pr-8 max-w-full`}
          >
            {placeholder || "Select"}
          </label>
        )}
        {!selectedOption && icon && (
          <div className="ml-4 text-grey-1000 transition-[top] ease-in duration-300 z-10  max-h-[1.5rem] px-1 absolute">
            {icon || <BurgerMenu />}
          </div>
        )}
        <div
          className={`relative rounded-[1.875rem] w-full  flex items-center`}
        >
          <input
            readOnly={readOnly}
            type="select"
            onFocus={handleClick}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full md:xl-w-[170px] text-sm truncate pl-4 pr-16 font-medium h-8 min-h-8 max-h-8 px-2.5  text-grey-400 border border-grey-100 rounded-full bg-white focus:outline-none"
          />
          {inputValue && (
            <div
              onClick={clearInput}
              className="text-grey-400 h-7 w-7 absolute right-7 flex items-center"
            >
              <CloseIcon className="h-4 w-4" />
            </div>
          )}
          {isFocused ? (
            <ChevronUpIcon className="text-grey-400 absolute right-0 mr-5 pointer-events-none" />
          ) : (
            <ChevronDownIcon className="text-grey-400 absolute right-0 mr-5 pointer-events-none" />
          )}
        </div>
      </div>
      {isFocused && !readOnly && (
        <ul className="absolute z-50 mt-1 w-[90%] sm:w-[250px] bg-white border border-gray-100 rounded-md shadow-lg max-h-56 overflow-auto">
          {options.length > 0 ? (
            options.map((option) => (
              <li
                key={option.id}
                className={`py-2 px-4 hover:bg-gray-100 cursor-pointer text-sm ${
                  selectedOption && selectedOption.id === option.id
                    ? "bg-gray-200"
                    : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleSelectOption(option);
                  setIsFocused(false);
                }}
              >
                {option.name}
              </li>
            ))
          ) : (
            <li className="py-6 px-4 text-gray-700 cursor-default">
              No options
            </li>
          )}
        </ul>
      )}
    </div>
  );
};
