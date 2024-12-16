"use client";

import React, { Fragment, useEffect, useRef, useState } from "react";
import Tabs from "@/components/Tabs";
import WorkDetailCard from "@/components/WorkDetailCard";
import { applicationsData, tabData } from "@/containers/Work/data";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { Icon } from "@/svgs";
import { EyeIcon } from "@/svgs/EyeIcon";
import Button from "../Button";
import Tab from "../Tab";
import Select from "../Select";
import JobApplyCard from "../JobApplyCard";
import Image from "next/image";
import { usePageLayout } from "@/contexts/PageLayout";
import useElementWidth from "@/hooks";
import { workTabIconTypes } from "@/utils/data";
import { generalQuestions } from "./data";
import { ArrowDownIcon } from "@/svgs/ArrowDownIcon";
import { Menu, Transition } from "@headlessui/react";
import { useModals } from "@/contexts/Modals";
import { DotMenu } from "@/svgs/DotMenu";
import { EdgeIcon } from "@/svgs/EdgeIcon";

export const ApplicationsDetails = () => {
  const { setWithdraw, setStatus, setReport } = useModals();
  const [currentPage, setCurrentPage] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(1);
  const [data, setData] = useState({});

  const params = useParams();
  const { id } = params;

  const tags = [
    { id: "all", name: "All Applications" },
    { id: "review", name: "In Review" },
    { id: "shortlisted", name: "Shortlisted" },
    { id: "interviewing", name: "Interview" },
    { id: "offerrecieved", name: "Offer Recieved" },
    { id: "backgroundcheck", name: "Background Check" },
    { id: "hired", name: "Hired" },
    { id: "archived", name: "Archived" },
    { id: "withdrawn", name: "Withdrawn" },
  ];

  const tabs = [
    { id: "all", name: "Job Details" },
    { id: "applicationDetails", name: "Application Details" },
    { id: "messages", name: "Messages" },
  ];

  const menuItems = ["Withdraw", "Report Job"];

  useEffect(() => {
    const invite = applicationsData?.filter((item) => item.id === Number(id));
    const data = invite[0];
    setData(data);
  }, [id]);

  const status = data?.status;
  const statusText = tags.filter((item) => item.id === status);
  const text = statusText[0]?.name;

  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "all";

  const selectedTab = tabs.find((i) => i.id === tab);

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

  const toggleAccordion = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };

  return (
    <div ref={observedDiv}>
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
      <div className="flex flex-col justify-between sm:auto relative rounded-2xl bg-white mt-5">
        <Tabs />
        <div className="flex flex-col lg:flex lg:flex-row mx-5 mt-2.5 lg:mt-5 justify-between pb-2.5 lg:pb-5 lg:border-b items-center gap-2.5 lg:gap-2  ">
          <div className="flex items-center gap-3 w-full justify-between border-b lg:border-b-0 pb-2.5 lg:pb-0">
            <div className="flex items-center gap-2.5">
              <Icon
                name="back"
                className="min-w-8 lg:min-w-10 min-h-8 lg:min-h-10 hover:border-primary "
                aria-hidden="true"
                handleClick={() => {
                  router.push("/work/applications");
                }}
              />
              <h4 className="text-sm font-semibold lg:text-4xl text-grey-400">
                Application ID: 602602
              </h4>
            </div>
            <div className="flex lg:hidden">
              <Menu>
                <Menu.Button
                  onClick={(e) => e.stopPropagation()}
                  className="h-6 w-6 text-sm flex items-center  bg-white justify-center rounded-full border border-primary "
                >
                  <DotMenu
                    className={`min-w-6 min-h-6 flex items-center rotate-90  text-primary`}
                    aria-hidden="true"
                  />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                  className="z-10 "
                >
                  <div className="relative">
                    <EdgeIcon class="!top-[23px]" />
                    <Menu.Items className="absolute top-[25px] right-0 w-40 py-1 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {menuItems?.map((menu, index) => {
                        return (
                          <Menu.Item key={`${menu}-option-${index + 1}`}>
                            {({ active }) => (
                              <a
                                href="#"
                                className={`${
                                  active ? "bg-gray-100" : ""
                                } block px-4 py-2 text-sm text-gray-700`}
                                onClick={() =>
                                  menu === "Withdraw"
                                    ? setWithdraw(true)
                                    : setReport(true)
                                }
                              >
                                {menu}
                              </a>
                            )}
                          </Menu.Item>
                        );
                      })}
                    </Menu.Items>
                  </div>
                </Transition>
              </Menu>
            </div>
          </div>
          <div className="flex w-full lg:w-auto flex-col lg:flex lg:flex-row gap-2.5 lg:gap-8 items-center text-grey-400 hover:text-primary">
            <button
              className={`w-full lg:w-auto min-w-max h-8 justify-center text-sm font-medium text-white px-3 md:mt-0 flex items-center gap-2 ${
                status === "review"
                  ? "bg-warning"
                  : status === "shortlisted"
                  ? "bg-primary-2700"
                  : status === "interviewing"
                  ? "bg-primary-2800"
                  : status === "offerrecieved"
                  ? "bg-primary-2900"
                  : status === "backgroundcheck"
                  ? "bg-warning-900"
                  : status === "hired"
                  ? "bg-primary"
                  : status === "withdrawn"
                  ? "bg-grey-200"
                  : status === "archived"
                  ? "bg-grey-2500"
                  : "bg-danger-light"
              } rounded-2xl py-[2px]`}
            >
              {status !== "declined" ? (
                <EyeIcon className="!text-white" />
              ) : (
                <Icon name="close" className="!h-4 !w-4 !text-white" />
              )}
              {status !== "declined" ? text : "Declined By Employer"}
            </button>
            <Button
              className={`flex !text-sm !lg:text-base !py-1 bg-white !text-grey-1800 !border-grey-1800 !font-medium border flex items-center justify-center w-full lg:w-48 !h-9 hover:bg-grey-1800 hover:!text-white`}
              size="sm"
              color="tag"
              variant="tag"
              onClick={() => setStatus(true)}
            >
              Update Status
            </Button>
            <div className="hidden lg:flex">
              <Menu>
                <Menu.Button
                  onClick={(e) => e.stopPropagation()}
                  className="h-8 w-8 text-sm flex items-center  bg-white justify-center rounded-full border-primary border"
                >
                  <DotMenu
                    className={`min-w-6 min-h-6 flex items-center rotate-90  text-primary`}
                    aria-hidden="true"
                  />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                  className="z-10 "
                >
                  <div className="relative">
                    <EdgeIcon class="!top-[30px]" />
                    <Menu.Items className="absolute top-[32px] right-0 w-40 py-1 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {menuItems?.map((menu, index) => {
                        return (
                          <Menu.Item key={`${menu}-option-${index + 1}`}>
                            {({ active }) => (
                              <a
                                href="#"
                                className={`${
                                  active ? "bg-gray-100" : ""
                                } block px-4 py-2 text-sm text-gray-700`}
                                onClick={() =>
                                  menu === "Withdraw"
                                    ? setWithdraw(true)
                                    : setReport(true)
                                }
                              >
                                {menu}
                              </a>
                            )}
                          </Menu.Item>
                        );
                      })}
                    </Menu.Items>
                  </div>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
        <div className="flex px-5 pt-0 lg:pt-5 flex-col sm:flex-row items-center justify-between w-full gap-2.5">
          <div className=" flex flex-col border-b pb-2.5 lg:pb-5 sm:flex-row  items-center justify-between w-full gap-4">
            <div className="flex justify-center flex-wrap gap-4 xl:gap-2.5 w-full lg:justify-between">
              <div className="hidden w-full justify-start gap-4 lg:flex flex-wrap">
                {tabs?.map((tag) => (
                  <Tab key={`activites-${tag.id + 1}`} tab={tab} tag={tag} />
                ))}
              </div>
              <div className="lg:hidden bg-white rounded-2xl flex items-center w-full">
                <Select
                  options={tabs}
                  value={selectedTab}
                  onChange={(tag) => {
                    setCurrentPage(1);
                    router.push(`?tab=${tag.id}`);
                  }}
                  variant="simple"
                  selectClass="!rounded-2xl font-medium !h-8"
                />
              </div>
            </div>
          </div>
        </div>
        {(tab === "jobDetails" || tab === "all") && (
          <div className="">
            <JobApplyCard variant="outside" />
            <WorkDetailCard />
          </div>
        )}
        {tab === "applicationDetails" && (
          <div className="">
            <div className="bg-white rounded-2xl px-4 mt-4 mb-5 sm:px-5">
              <p className="text-sm md:text-base font-medium text-grey-400">
                Clinical Research Coordinator, Registered Nurse
              </p>
              <p className="text-sm md:text-base font-medium text-primary-2600">
                Novant Health
              </p>
              <p className="text-sm md:text-base font-medium text-grey-400">
                Charlotte, NC
              </p>
              <p className="text-sm md:text-base font-medium text-grey-500">
                Applied on: May 2, 2024
              </p>
            </div>
            {generalQuestions?.map(({ question, answer }, index) => {
              const id = index + 1;
              return (
                <div
                  key={`${question}-option-${index + 1}`}
                  className={`mb-2.5 ${
                    openAccordion === id ? " mx-4 " : " mx-4 "
                  }`}
                >
                  <div
                    onClick={() => toggleAccordion(id)}
                    className={`flex justify-between items-center px-4 py-[1.125rem] bg-primary-2400 cursor-pointer rounded-[10px]`}
                  >
                    <h4 className="text-sm font-semibold md:text-5xl text-grey-1800">
                      {question}
                    </h4>
                    <Icon
                      name={openAccordion === id ? "up" : "down"}
                      className="min-w-6 w-6 min-h-6 h-6 border-grey-400 hover:border-primary"
                    />
                  </div>
                  {openAccordion === id && <div className="">{answer}</div>}
                </div>
              );
            })}
          </div>
        )}
        {tab === "messages" && (
          <div className="bg-white rounded-2xl py-12 px-4 lg:px-0 sm:px-5">
            <div className="w-full flex flex-col items-center justify-center">
              <p className="text-base font-semibold md:text-5xl text-grey-400">
                Send a message to follow up
              </p>
              <p className="text-sm md:text-base font-medium text-grey-400 text-center w-full lg:w-[48%]">
                Take the time to say hello, share why you&apos;re a good fit for this
                job, or follow up on your application.
              </p>
              <Button
                className={`flex !text-base !px-0 !py-1 bg-grey-1800 !text-white !border-grey-1800 !font-medium border flex items-center justify-center w-full md:w-52 !h-11 hover:bg-grey-1800 hover:!text-white mt-8`}
                size="sm"
                color="tag"
                variant="tag"
              >
                Message this Employer
              </Button>
            </div>
          </div>
        )}
      </div>
      <div className="bg-white rounded-2xl p-5 md:block mt-5">
        <div className="flex flex-col-reverse md:flex md:flex-row flex-nowrap items-center gap-4">
          <div className="relative w-full justify-center md:justify-start text-center md:text-start lg:w-2/4 xl:w-[55%]">
            <h3 className="my-1 block w-full text-grey-400 text-base font-semibold md:text-5xl font-semibold md:max-w-lg tracking">
              Still Looking for Jobs?
            </h3>
            <p className="block text-sm md:text-base w-full max-w-[312px] md:max-w-max m-auto font-medium text-grey-400 md:max-w-80 mb-2.5 md:mb-5">
              We have many other exciting jobs for you to browse and apply.
              Don&apos;t settle with status quo
            </p>

            <Button
              className={`flex !text-base !px-10 !py-1 bg-white !text-grey-1800 !border-grey-1800 !font-medium border flex items-center justify-center w-full md:w-52 !h-11 hover:bg-grey-1800 hover:!text-white mt-2.5`}
              size="sm"
              color="tag"
              variant="tag"
            >
              Browse Jobs
            </Button>
          </div>
          <div className="relative h-72 w-full">
            <Image
              src="/images/employer/browseJobs.png"
              fill
              style={{ objectFit: "contain" }}
              alt="slider-promo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
