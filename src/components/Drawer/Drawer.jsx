"use client";

import React, { useEffect, useRef } from "react";
import WorkFilters from "../WorkFilters";
import { useDrawer } from "@/contexts/Drawers";

export const Drawer = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDrawerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsDrawerOpen]);

  const { toggleFilter } = useDrawer();

  return (
    <div
      id="drawer-right-example"
      className={`fixed z-[999999] top-0 bg-black/50 left-0 h-full w-full min-h-screen min-w-screen  ${
        isDrawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
      onClick={() => toggleFilter(false)}
      tabIndex="-1"
      aria-labelledby="drawer-right-label"
    >
      <div
        className={`fixed overflow-y-auto h-screen w-full sm:max-w-[28rem] duration-300 transform ${
          isDrawerOpen ? "right-0" : "-right-[28rem]"
        }`}
        ref={dropdownRef}
        onClick={(e) => e.stopPropagation()}
      >
        <WorkFilters />
      </div>
    </div>
  );
};
