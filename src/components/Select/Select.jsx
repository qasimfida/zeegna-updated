"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@/svgs/ChevronDownIcon";
import { CloseIcon } from "@/svgs/CloseIcon";
import { ChevronUpIcon } from "@/svgs/ChevronUpIcon";
import cls from "classnames";

export const Select = ({
  options = [],
  onChange,
  value,
  className,
  placeholder = "Select",
  label,
  variant = "",
  selectClass = "",
  ...props
}) => {
  const [selected, setSelected] = useState(value || {});
  useEffect(() => {
    if (value) {
      setSelected(value);
    }
  }, [value]);

  const ref = useRef();
  const clearInput = (e) => {
    e.stopPropagation();
    setSelected([]);
    if (onChange) {
      onChange({});
    }
  };

  const handleClick = () => {
    if (ref?.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Listbox
      value={selected}
      onChange={onChange || setSelected}
      ref={ref}
      as="div"
      className={"w-full"}
    >
      {({ open }) => (
        <>
          <div className={cls`relative ${className}`} {...props}>
            <div className="flex items-center relative w-full">
              <Listbox.Button
                onClick={handleClick}
                className={`relative w-full rounded-[1.875rem] cursor-default bg-white py-1.5 pl-4 h-11 pr-10 text-left text-primary lg:text-grey-400 ring-1 ring-grey-100 focus:outline-none focus:ring-grey-500 sm:leading-6  text-sm flex items-center ${selectClass}`}
              >
                {variant === "simple" && !Boolean(selected.name) && (
                  <label
                    className={`text-grey-500 transition-[top] ease-in duration-300 z-10 bg-white px-1  absolute ${
                      variant !== "simple" &&
                      (Boolean(selected.name) || Boolean(open))
                        ? " text-xs -top-2  "
                        : "text-sm top-2.5  "
                    }`}
                  >
                    {label || placeholder}
                  </label>
                )}
                {Boolean(selected.name) && (
                  <span className="block truncate pl-1">{selected.name}</span>
                )}
                {variant === "simple"
                  ? ""
                  : selected.name && (
                      <div
                        onClick={clearInput}
                        className="text-grey-400 h-7 w-7 absolute right-7  flex items-center"
                      >
                        <CloseIcon className="h-4 w-4" />
                      </div>
                    )}
                <span className="pointer-events-none absolute  right-0 ml-4 flex items-center pr-5">
                  {open ? (
                    <ChevronUpIcon className="text-grey-400" />
                  ) : (
                    <ChevronDownIcon className="text-grey-400" />
                  )}
                </span>
              </Listbox.Button>
            </div>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-50 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-grey-500 focus:outline-none focus:ring-grey-100 sm:text-sm">
                {options.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      cls(
                        active ? "bg-gray-200" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9 text-sm"
                      )
                    }
                    value={person}
                  >
                    {({ selected }) => (
                      <div className="flex items-center">
                        <span
                          className={cls(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate"
                          )}
                        >
                          {person.name}
                        </span>
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export const SuggestionDropdown = ({
  options = [],
  label = "Select option",
  className = "",
  inputClass = "",
  labelClass = "",
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);
  const ref = useRef(null);
  const inputRef = useRef(null);

  const filteredOptions =
    inputValue === ""
      ? options
      : options.filter((option) =>
          option.name.toLowerCase().includes(inputValue.toLowerCase())
        );

  const clearInput = () => {
    setInputValue("");
    setSelectedOption(null);
    setIsFocused(true);
  };

  const handleSelectOption = (option) => {
    setInputValue(option.name);
    setSelectedOption(option);
    setIsFocused(false);
  };

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

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFocused(true);
    if (inputRef?.current) {
      inputRef.current.focus();
    }
    setTimeout(() => {
      if (ref?.current) {
        ref.current.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "nearest",
        });
      }
    }, 100);
  };

  return (
    <div
      className={cls`relative w-full mt-4 ${className}`}
      ref={dropdownRef}
      onClick={handleClick}
    >
      <div className="flex items-center relative w-full ">
        <label
          onClick={handleClick}
          className={cls(
            ` ml-4 text-grey-400 font-medium transition-[top] ease-in duration-300 z-10 bg-white max-h-[1.5rem] px-1 absolute ${
              inputValue || Boolean(isFocused)
                ? " text-xs -top-2  "
                : "text-sm   "
            }`,
            labelClass
          )}
        >
          {label || placeholder}
        </label>
        <div
          className={`relative rounded-[1.875rem] w-full ${
            isFocused ? "ring-1 ring-grey-500" : "ring-1 ring-grey-200"
          } flex items-center`}
        >
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={handleClick}
            className={cls(
              `w-full h-11 px-5 rounded-[1.875rem] font-medium text-sm text-left text-grey-400 placeholder:font-medium placeholder:text-sm focus:outline-none ring-1 ring-grey-200 placeholder:text-grey-400 `,
              inputClass
            )}
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
      {isFocused && (
        <ul
          className="absolute z-50 mt-1 w-full bg-white border border-gray-100 rounded-md shadow-lg max-h-56 overflow-auto"
          ref={ref}
        >
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <li
                key={option.id}
                className={`py-2 px-4 hover:bg-gray-100 cursor-pointer text-sm text-grey-400 ${
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
