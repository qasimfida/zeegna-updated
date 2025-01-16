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
import { similarJobCards } from "./data";
import { tabData } from "@/containers/Work/data";
import JobRightbar from "@/components/JobRightbar";
import EmployerDetails from "@/components/EmployerDetails";
import { Icon } from "@/svgs";
import JobAppliedCard from "@/components/JobAppliedCard";
import { usePageLayout } from "@/contexts/PageLayout";
import useElementWidth from "@/hooks";
import { workTabIconTypes } from "@/utils/data";
import { ArrowDownIcon } from "@/svgs/ArrowDownIcon";
import { generalQuestions } from "../ApplicationsDetails/data";
import ProfileInfoTile from "../ProfileInfoTile";
import { BreifcaseIcon } from "@/svgs/BreifcaseIcon";
import { DocumentsMinusIcon } from "@/svgs/DocumentsMinusIcon";
import { DocumentIcon } from "@/svgs/DocumentIcon";
import { EducationIcon } from "@/svgs/EducationIcon";
import { AwardIcon } from "@/svgs/AwardIcon";
import { CloseIcon } from "@/svgs/CloseIcon";
import Button from "../Button";
import { ProfileIcon } from "@/svgs/ProfileIcon";

export const DiscoverDetails = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const { id } = params;

  const isProfileComplete = id % 2 === 0;

  useEffect(() => {
    const invite = invitesData?.filter((item) => item.id === Number(id));
    setData(invite);
  }, [id]);

  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const tab = searchParams.get("tab");

  const router = useRouter();

  const [activeTab, setActiveTab] = useState("");
  const [visiableTabs, setVisiableTabs] = useState(tabData || []);
  const [hiddenTabs, setHiddenTabs] = useState(false);
  const [isShowMoreOpen, setIsShowMoreOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(1);
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
    <div
      ref={observedDiv}
      className="flex flex-col justify-between sm:auto   rounded-2xl"
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
      {type && (
        <div className="mt-5">
          <InvitaionBanner
            invitation={type}
            type={type}
            respondBy={
              type === "applied"
                ? "Applied on: 6.15.2024"
                : type === "expired"
                ? "Expired on: 06/07/2023"
                : "Respond by : 6/15/2024"
            }
          />
        </div>
      )}
      {tab === "apply" ? (
        <div className="">
          <div className="bg-white rounded-2xl mt-5 pt-5 pb-3">
            <div className="flex items-center justify-between px-5 pb-5 gap-4">
              <p className="text-base font-semibold text-grey-400 truncate">
                Applying to
                <span className="text-base font-semibold text-primary truncate ml-2">
                  Senior Registered Nurse - Critical Care Unit - Boston, MA
                </span>
              </p>
              <Button
                className={`flex !text-base !py-1 ${
                  isProfileComplete
                    ? "!text-white bg-grey-1800"
                    : "text-white bg-grey-200"
                } border-none !font-medium flex items-center justify-center min-w-52 !h-11 !px-0 `}
                size="sm"
                color="tag"
                variant={isProfileComplete ? "darkContained" : "tag"}
              >
                Submit Application
              </Button>
            </div>
            <div
              className={` ${
                isProfileComplete
                  ? ""
                  : "border-l-danger-light border-l-[6px] border rounded-2xl mx-5 py-4"
              } `}
            >
              {!isProfileComplete && (
                <div className="px-5 flex items-center gap-4 pb-4">
                  <CloseIcon className="bg-danger-light rounded-full text-white w-6 h-6 p-[2px]" />
                  <p className="text-4xl text-grey-400">
                    Please complete the following sections of your profile
                  </p>
                </div>
              )}
              <div
                className={`grid grid-rows-6 lg:grid-rows-3 grid-flow-col gap-3 2xl:grid-rows-2 px-5`}
              >
                <ProfileInfoTile
                  className={" container:w-full "}
                  icon={<ProfileIcon />}
                  label="Bio"
                  isAdded={isProfileComplete}
                  onClick={() => router.push("/profile/overview")}
                />

                <ProfileInfoTile
                  className={" container:w-full "}
                  icon={<BreifcaseIcon />}
                  label="Experience"
                  isAdded={isProfileComplete}
                  onClick={() => router.push("/profile/experience")}
                />

                <ProfileInfoTile
                  className={" container:w-full "}
                  icon={<DocumentsMinusIcon />}
                  label="Credentials"
                  isAdded={isProfileComplete}
                  onClick={() => router.push("/profile/credentials")}
                />

                <ProfileInfoTile
                  className={" container:w-full "}
                  icon={<DocumentIcon />}
                  label="Resume"
                  isAdded={isProfileComplete}
                  onClick={() => router.push("/profile/documents")}
                />

                <ProfileInfoTile
                  className={" container:w-full "}
                  icon={<EducationIcon />}
                  label="Education"
                  isAdded={isProfileComplete}
                  onClick={() => router.push("/profile/education")}
                />

                <ProfileInfoTile
                  className={" container:w-full "}
                  icon={<AwardIcon />}
                  label="Skills"
                  isAdded={isProfileComplete}
                  onClick={() => router.push("/profile/skills")}
                />
              </div>
            </div>
            <div className="px-5 py-5">
              <p className="text-base font-semibold text-grey-400">
                Is this Information correct?
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
          <div className="flex items-center justify-end w-full gap-4 mt-5">
            <Button
              className={`flex text-base bg-white !text-grey-1800 !border-grey-1800 !font-medium border flex items-center justify-center w-full lg:w-48 !h-11 hover:bg-grey-1800 hover:!text-white`}
              size="sm"
              color="tag"
              variant="tag"
            >
              Cancel
            </Button>
            <Button
              className={`flex !text-base !py-1 ${
                isProfileComplete
                  ? "!text-white bg-grey-1800"
                  : "text-white bg-grey-200"
              } border-none !font-medium flex items-center justify-center min-w-52 !h-11 !px-0 `}
              size="sm"
              color="tag"
              variant={isProfileComplete ? "darkContained" : "tag"}
            >
              Submit Application
            </Button>
          </div>
        </div>
      ) : (
        <div className={` mt-5`}>
          <div className="w-full flex flex-col lg:flex lg:flex-row gap-5">
            <div className="flex self-start lg:sticky lg:top-[1.5rem] w-full lg:w-[350px] lg:order-2">
              <JobRightbar />
            </div>
            <div className="w-full lg:w-[calc(100%-23rem)] ">
              <WorkDetailCard />
            </div>
          </div>

          <div className="hidden mt-5">
            <EmployerDetails />
          </div>

          <div className="flex flex-col justify-between sm:auto relative bg-white rounded-2xl min-h-28 p-5 mt-5">
            <div className="flex justify-between w-full border-b pb-2.5 items-center">
              <h4 className="text-5xl text-grey-400">Similar Jobs</h4>
              <div className="flex gap-4 items-center"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[14px] pt-4">
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
                    />
                  );
                }
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
