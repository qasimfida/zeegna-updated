import React, { useRef } from "react";
import { SearchIcon } from "@/svgs/icons";
import cls from "classnames";

export const Searchbar = ({ className, ...props }) => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="relative w-full" onClick={focusInput}>
      <input
        type="search"
        name="search"
        placeholder="Search messages"
        className={cls`pl-4 w-full pr-10 h-10 text-sm placeholder:text-grey-400 font-medium bg-white border border-grey-100 rounded-full focus:outline-none focus:border-primary ${className}`}
        autoComplete="off"
        ref={inputRef}
        {...props}
      />
      <span className="absolute inset-y-0 right-4 flex items-center">
        <SearchIcon className="w-4 h-4" />
      </span>
    </div>
  );
};
