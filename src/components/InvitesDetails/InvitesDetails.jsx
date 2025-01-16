"use client";

import React, { useEffect, useRef, useState } from "react";
import WorkDetailCard from "@/components/WorkDetailCard";
import { invitesData } from "@/containers/Work/data";
import InvitaionBanner from "@/components/InvitaionBanner";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { tabData } from "@/containers/Work/data";
import { similarJobCards } from "@/components/DiscoverDetails/data";
import { Icon } from "@/svgs";
import JobAppliedCard from "@/components/JobAppliedCard";
import JobRightbar from "@/components/JobRightbar";
import { usePageLayout } from "@/contexts/PageLayout";
import useElementWidth from "@/hooks";
import { workTabIconTypes } from "@/utils/data";
import { ArrowDownIcon } from "@/svgs/ArrowDownIcon";

export const InvitesDetails = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const { id } = params;

  useEffect(() => {
    const invite = invitesData?.filter((item) => item.id === Number(id));
    setData(invite);
  }, [id]);

  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const router = useRouter();

  const [activeTab, setActiveTab] = useState("");
  const [visiableTabs, setVisiableTabs] = useState(tabData || []);
  const [hiddenTabs, setHiddenTabs] = useState(false);
  const [isShowMoreOpen, setIsShowMoreOpen] = useState(false);
  const pathname = usePathname();
  const { globalValue, setGlobalValue, resetGlobalValues } = usePageLayout();

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
    const lastPart = parts[parts.length - 2];
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

  return (
    <div
      ref={observedDiv}
      className="flex flex-col justify-between sm:auto relative  rounded-2xl"
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
      <div className="mt-5">
        <InvitaionBanner
          invitation={type}
          type={type}
          respondBy={
            type === "applied"
              ? "Applied on: 6/15/2024"
              : type === "expired"
              ? "Expired on: 06/07/2023"
              : false
          }
        />
      </div>
      <div className="w-full flex flex-col lg:flex lg:flex-row gap-5 mt-5">
        <div className="flex self-start lg:sticky lg:top-[1.5rem] w-full lg:w-[350px] lg:order-2">
          <JobRightbar type={type} />
        </div>
        <div className="w-full lg:w-[calc(100%-23rem)] ">
          <WorkDetailCard />
        </div>
      </div>
      <div className="flex flex-col justify-between sm:auto relative bg-white rounded-2xl min-h-28 p-3 mt-5">
        <div className="flex justify-between w-full border-b pb-2.5 items-center">
          <h4 className="text-5xl text-grey-400">Similar Jobs</h4>
          <div className="flex gap-4 items-center"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2.5 pt-4">
          {[...similarJobCards, ...similarJobCards]?.map(
            ({ cardData }, index) => {
              return (
                <JobAppliedCard
                  className="!m-0 !w-full"
                  key={`option-${index + 1}`}
                  isInRightbar={false}
                  variant={"job"}
                  hasMessage={false}
                  cardData={cardData}
                ></JobAppliedCard>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};
