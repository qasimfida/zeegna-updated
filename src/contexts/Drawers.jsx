"use client";
import React, { createContext, useCallback, useContext, useState } from "react";
import Drawer from "@/components/Drawer";

const DrawerContext = createContext(false);

export const DrawerProvider = ({ children }) => {
  
  const [filtersOpen, toggleFilter] = useState(0);

  const value = {
   
    filtersOpen,
    
    toggleFilter: useCallback((value) => {
      return toggleFilter(value);
    }, []),
  };
  return (
    <DrawerContext.Provider value={value}>
      {children}
      <Drawer isDrawerOpen={filtersOpen} setIsDrawerOpen={toggleFilter} />
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => useContext(DrawerContext);
