"use client";

import React, { useEffect, useRef, useState } from "react";
import { tabData } from "./data";
import { usePageLayout } from "@/contexts/PageLayout";
import { usePathname, useRouter } from "next/navigation";
import ContentWrapper from "@/components/ContentWrapper";

export const Notifications = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("");
  const [isShowMoreOpen, setIsShowMoreOpen] = useState(false);
  const { globalValue, resetGlobalValues, setGlobalValue } = usePageLayout();
  const pathname = usePathname();

  const observedDiv = useRef(null);
  const tabRef = useRef(null);

  const handleTabClick = () => {
    if (isShowMoreOpen) {
      setIsShowMoreOpen(false);
    }
    resetGlobalValues();
  };

  useEffect(() => {
    const parts = pathname?.split("/");
    const firstPart = parts[parts.length - 2];
    const lastPart = parts[parts.length - 1];
    firstPart === "tickets" ? setActiveTab("tickets") : setActiveTab(lastPart);
  }, [router, pathname, setGlobalValue]);

  const renderTabs = () => {
    return tabData?.map((tab, index) => {
      return (
				<li
					ref={tabRef}
					key={`${tab}-option-${index + 1}`}
					className="flex items-center py-2.5 focus-within:z-10 "
				>
					<a
						onClick={() => handleTabClick(tab?.id)}
						href={`/${tab?.id}`}
						className={`flex items-center justify-center px-6  rounded-s-2xl h-11 ${
							activeTab === tab?.id ? "text-primary" : "text-grey-400"
						} ${index < tabData.length - 1 ? "border-r" : ""}`}
					>
						<div className="mr-1 ">{tab.icon}</div>
						<div className="hover:text-primary">
							<p className="text-sm font-medium ">{tab?.label}</p>
						</div>
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
      className="flex flex-col justify-between sm:auto static lg:sticky"
    >
      {globalValue.hasTabbar && (
        <div className="bg-white rounded-2xl">
          <ul className="text-sm font-medium text-center text-grey-400  flex overflow-hidden ">
            {renderTabs()}
          </ul>
        </div>
      )}
      <div className="mt-5">{renderTabContent()}</div>
    </div>
  );
};
