"use client";

import React, { useEffect, useRef, useState } from "react";
import { tabData } from "./data";
import { Icon } from "@/svgs";
import useElementWidth from "@/hooks/index";
import { usePageLayout } from "@/contexts/PageLayout";
import { employerstabIconTypes } from "@/utils/data";
import { usePathname, useRouter } from "next/navigation";
import { ArrowDownIcon } from "@/svgs/ArrowDownIcon";

export const EmployersDetails = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("");
  const [visiableTabs, setVisiableTabs] = useState(tabData || []);
  const [hiddenTabs, setHiddenTabs] = useState(false);
  const [isShowMoreOpen, setIsShowMoreOpen] = useState(false);
  const { globalValue } = usePageLayout();
  const pathname = usePathname();
  const parts = pathname?.split("/");
  const lastPart = parts[parts.length - 1];
  const secondlastPart = parts[parts.length - 2];

  const observedDiv = useRef(null);
  const tabRef = useRef(null);
  const width = useElementWidth(observedDiv);
  const tabWidth = 145;

  const tabsCount = Math.floor(width / tabWidth);
  const handleTabClick = () => {
    if (isShowMoreOpen) {
      setIsShowMoreOpen(false);
    }
  };

  useEffect(() => {
    setActiveTab(lastPart);
  }, [router, pathname, lastPart]);

  useEffect(() => {
    const isActiveTabVisible = tabData
      .slice(0, tabsCount)
      .some((tab) => tab.id === activeTab);
    let newVisibleTabs;
    let newHiddenTabs;

    if (isActiveTabVisible || tabsCount >= tabData.length) {
      newVisibleTabs = tabData.slice(0, tabsCount);
      newHiddenTabs = tabData.slice(tabsCount);
    } else {
      const activeTabIndex = tabData.findIndex((tab) => tab.id === activeTab);
      newVisibleTabs = [
        ...tabData.slice(0, tabsCount - 1),
        tabData[activeTabIndex],
      ].sort((a, b) => a.id - b.id);
      newHiddenTabs = [
        ...tabData.slice(0, activeTabIndex),
        ...tabData.slice(activeTabIndex + 1),
      ].filter((tab) => !newVisibleTabs.includes(tab));
    }
    setVisiableTabs(newVisibleTabs);
    setHiddenTabs(newHiddenTabs);
  }, [tabsCount, activeTab]);

  const renderTabs = () => {
    return visiableTabs?.map((tab, index) => {
      const isLastItem = visiableTabs[visiableTabs.length - 1]?.id;
      return (
        <li
          ref={tabRef}
          key={`${tab}-option-${index + 1}`}
          className={`flex items-center justify-center py-2.5   w-[180px] focus-within:z-10 `}
        >
          <a
            onClick={() => handleTabClick(tab?.id)}
            href={`/employers/${secondlastPart}/${tab?.id}`}
            className={`flex items-center justify-center w-full ${
              isLastItem === tab?.id ? "border-r-0" : "border-r"
            } rounded-s-2xl h-11 gap-1 ${
              activeTab === tab?.id ? "text-primary" : "text-grey-400"
            } ${index === 0 ? "!justify-start" : ""} px-6`}
          >
            {employerstabIconTypes[tab?.id]}
            <span className="hover:text-primary">
              <p className="text-sm font-medium ">{tab?.label}</p>
            </span>
          </a>
        </li>
      );
    });
  };

  const renderTabContent = () => {
    const activeTabComponent = tabData?.find(
      (tab) => tab.id === activeTab
    )?.component;

    return <div className="tab-content">{activeTabComponent}</div>;
  };

  return (
    <div
      ref={observedDiv}
      className="flex flex-col justify-between sm:auto static 2xl:sticky 2xl:top-[6rem]"
    >
      {globalValue.hasTabbar && (
        <div className="bg-white rounded-2xl">
          <ul className="text-sm font-medium text-center text-grey-400  flex overflow-hidden ">
            {renderTabs()}
            {Math.floor(width / tabWidth) < tabData.length && (
              <div
                className="flex items-center min-w-30 px-4 py-2.5 text-sm font-medium focus-within:z-10"
                onClick={() => setIsShowMoreOpen(!isShowMoreOpen)}
              >
                <Icon
                  name={!isShowMoreOpen ? "dot" : "close"}
                  className={`min-w-6 min-h-6 relative flex items-center`}
                  aria-hidden="true"
                  filled
                />
              </div>
            )}
          </ul>
          <ul
            className={`flex flex-col ${
              isShowMoreOpen ? "border-t" : "border-none"
            } items-center`}
          >
            {isShowMoreOpen &&
              hiddenTabs?.map((tab, index) => {
                return (
                  <li
                    ref={tabRef}
                    key={`${tab}-option-${index + 1}`}
                    className="flex py-2 justify-between  w-full px-2 border-b focus-within:z-10"
                  >
                    <a
                      onClick={() => handleTabClick(tab?.id)}
                      href={`/profile/${tab?.id}`}
                      className={`flex items-center justify-between w-full  px-4 h-11 ${
                        activeTab === tab.id
                          ? "text-primary hover:text-primary"
                          : "text-grey-400"
                      }`}
                    >
                      <div className="mr-1 flex gap-2">
                        {employerstabIconTypes[tab?.id]}
                        <p className="hover:text-primary">
                          <span className="font-medium ">{tab?.label}</span>
                        </p>
                      </div>
                      <ArrowDownIcon
                        className="transform -rotate-90"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      )}
      <div className="">{renderTabContent()}</div>
    </div>
  );
};
