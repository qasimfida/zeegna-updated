"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@/svgs/ChevronDownIcon";
import cls from "classnames";
import { ChevronUpIcon } from "@/svgs/ChevronUpIcon";
import CustomCheckbox from "../CustomCheckbox";

export const MultiSelect = ({
  options = [],
  onChange,
  value = [],
  position = "absolute",
  className,
  placeholder = "Select",
  label,
  variant = "internal",
  ...props
}) => {
  const [selected, setSelected] = useState(value);
  const ref = useRef(null);

  const toggleSelection = (option, e) => {
    if (e === "child") {
      const isSelected = selected.some((current) => current.id === option.id);
      const newSelected = isSelected
        ? selected.filter((current) => current.id !== option.id)
        : [...selected, option];

      setSelected(newSelected);
      if (onChange) {
        onChange(newSelected);
      }
    } else {
      setSelected(option);
      if (onChange) {
        onChange(option);
      }
    }
  };

  useEffect(() => {
    setSelected(value);
  }, [value]);

  const handleClick = () => {
    setTimeout(() => {
      if (ref?.current) {
        ref.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 100);
  };
  return (
    <div className={cls`relative ${className}`} {...props}>
      <Listbox
        ref={ref}
        as="div"
        value={selected}
        onChange={(a) => toggleSelection(a, "parent")}
        multiple
      >
        {(listProps) => {
          const { open, close } = listProps;
          return (
            <>
              <div className={cls`relative ${className}`} {...props}>
                <div className="flex items-center relative w-full mt-4">
                  <Listbox.Button
                    onClick={handleClick}
                    className="relative w-full rounded-[1.875rem] cursor-default bg-white py-1.5 pl-4 h-11 pr-10 text-left text-grey-400 ring-1 ring-grey-200 focus:outline-none focus:ring-grey-500 sm:leading-6 text-sm"
                  >
                    <label
                      className={`text-grey-400 font-medium transition-[top] ease-in duration-300 z-10 bg-white px-1  absolute ${
                        Boolean(selected.length) || Boolean(open)
                          ? " text-xs -top-2 "
                          : "text-sm top-2.5"
                      }`}
                    >
                      {label || placeholder}
                    </label>
                    <span className="block truncate pl-1">
                      {selected.length ? `(${selected.length}) Selected` : ""}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-4 flex items-center pr-5">
                      {Boolean(open) ? (
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
                  <Listbox.Options
                    className={`${position} z-50 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`}
                  >
                    {options.map((option) => (
                      <Listbox.Option
                        key={option.id}
                        className={({ active }) =>
                          cls(
                            active ? "bg-gray-200" : "text-gray-900",
                            "relative cursor-default select-none py-2 p-3"
                          )
                        }
                        value={option}
                      >
                        {(prop) => {
                          const { selected, active } = prop;
                          return (
                            <>
                              <CustomCheckbox
                                className="!mt-0"
                                label={option.name}
                                variant="primary"
                                checked={selected}
                                setChecked={() => {
                                  toggleSelection(option, "child");
                                }}
                              />
                            </>
                          );
                        }}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          );
        }}
      </Listbox>
    </div>
  );
};
