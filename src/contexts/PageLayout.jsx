"use client";
import { usePathname } from "next/navigation";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const PageLayout = createContext(false);

const PATHS_WITHOUT_RIGHTBAR = [
  "/messages",
  "/support",
  "/support/details",
  "/notifications",
  "/activities",
  "/tasks",
  "/settings/notifications",
  "/settings/change-password",
  "/work/discover",
  "/work/invites",
  "/work/applications",
];

export const PageLayoutProvider = ({ children }) => {
  const pathname = usePathname();
  const [globalValue, setGlobalValue] = useState({
    hasRightbar: true,
    hasTabbar: true,
    visibleDoc: "",
    checklist: false,
  });
  const resetGlobalValues = () =>
    setGlobalValue({
      hasRightbar: true,
      hasTabbar: true,
      visibleDoc: "",
    });

  const updateGlobalValues = useCallback((value) => {
    setGlobalValue((prev) => ({
      ...prev,
      hasRightbar: false,
    }));
  }, []);

  useEffect(() => {
    if (PATHS_WITHOUT_RIGHTBAR.includes(pathname)) {
      updateGlobalValues();
    }
  }, [pathname, updateGlobalValues]);

  const value = {
    globalValue,
    setGlobalValue: useCallback((a) => {
      setGlobalValue(a);
    }, []),
    resetGlobalValues: useCallback(() => {
      resetGlobalValues();
    }, []),
  };

  return <PageLayout.Provider value={value}>{children}</PageLayout.Provider>;
};

export const usePageLayout = () => useContext(PageLayout);
