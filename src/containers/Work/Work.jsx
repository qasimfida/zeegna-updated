"use client";

import React, { useEffect, useRef, useState } from "react";
import { tabData } from "./data";
import { Icon } from "@/svgs";
import useElementWidth from "@/hooks/index";
import { usePageLayout } from "@/contexts/PageLayout";
import { workTabIconTypes } from "@/utils/data";
import { usePathname, useRouter } from "next/navigation";
import Invites from "@/components/Invites";
import Discover from "@/components/Discover";
import Applications from "@/components/Applications";
import { ArrowDownIcon } from "@/svgs/ArrowDownIcon";

export const Work = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("");
  const [visiableTabs, setVisiableTabs] = useState(tabData || []);
  const [hiddenTabs, setHiddenTabs] = useState(false);
  const [isShowMoreOpen, setIsShowMoreOpen] = useState(false);
  const pathname = usePathname();
  const { globalValue, resetGlobalValues } = usePageLayout();

  const observedDiv = useRef(null);
  const tabRef = useRef(null);
  const width = useElementWidth(observedDiv);
  const tabWidth = 145;

  const tabsCount = Math.floor(width / tabWidth);
  const handleTabClick = () => {
    if (isShowMoreOpen) {
      setIsShowMoreOpen(false);
    }
    resetGlobalValues();
  };

  useEffect(() => {
    const parts = pathname?.split("/");
    const lastPart = parts[parts.length - 1];
    setActiveTab(lastPart);
  }, [router, pathname]);

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
            href={`/work/${tab?.id}`}
            className={`flex items-center justify-center w-full ${
              isLastItem === tab?.id ? "border-r-0" : "border-r"
            } rounded-s-2xl h-11 gap-1 ${
              activeTab === tab?.id ? "text-primary" : "text-grey-400"
            } ${index === 0 ? "!justify-start" : ""} px-6`}
          >
            {workTabIconTypes[tab?.id]}
            <span className="hover:text-primary">
              <p className="text-sm font-medium ">{tab?.label}</p>
            </span>
          </a>
        </li>
      );
    });
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "discover":
        return <Discover tabName={activeTab} />;
      case "invites":
        return <Invites tabName={activeTab} />;
      default:
        return <Applications tabName={activeTab} />;
    }
  };
  return (
    <div
      ref={observedDiv}
      className="flex flex-col justify-between sm:auto static lg:sticky lg:top-[6rem] w-full"
    >
      {globalValue.hasTabbar && (
        <div className="bg-white rounded-2xl">
          <ul className="text-sm font-medium text-center text-grey-400  flex overflow-hidden ">
            {renderTabs()}
            {Math.floor(width / tabWidth) < tabData.length && (
              <li
                onClick={() => setIsShowMoreOpen(!isShowMoreOpen)}
                className="flex items-center min-w-30 px-4 py-2.5 text-sm font-medium focus-within:z-10"
              >
                <Icon
                  name={!isShowMoreOpen ? "dot" : "close"}
                  className="min-w-6 min-h-6"
                  aria-hidden="true"
                  filled
                />
              </li>
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
                    className="flex py-2 w-full px-2 border-b focus-within:z-10"
                  >
                    <a
                      onClick={() => handleTabClick(tab?.id)}
                      href={`/work/${tab?.id}`}
                      className={`flex items-center justify-between w-full  px-4 h-11 ${
                        activeTab === tab.id
                          ? "text-primary hover:text-primary"
                          : "text-grey-400"
                      }`}
                    >
                      <p className="hover:text-primary flex gap-1">
                        {workTabIconTypes[tab?.id]}
                        <span className="font-medium ">{tab?.label}</span>
                      </p>
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
