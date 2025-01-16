"use client";

import React, { useEffect, useRef, useState } from "react";
import { supportCardData, supportTabsData } from "./data";
import useElementWidth from "@/hooks";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Button from "../../components/Button";
import { CheckIcon } from "@/svgs/CheckIcon";
import { supportTabIconTypes } from "@/utils/data";
import cls from "classnames";
import { useModals } from "@/contexts/Modals";

export const Support = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [activeTab, setActiveTab] = useState("");
  const [isShowMoreOpen, setIsShowMoreOpen] = useState(false);
  const [visiableTabs, setVisiableTabs] = useState(supportTabsData || []);

  const [openAccordion, setOpenAccordion] = useState(null);
  const [checkedValues, setCheckedValues] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (checkedValues.includes(value)) {
      setCheckedValues([]);
    } else {
      setCheckedValues([value]);
    }
  };

  const handleboxClick = (label) => () => {
    if (checkedValues.includes(label)) {
      setCheckedValues([]);
    } else {
      setCheckedValues([label]);
    }
  };

  const toggleAccordion = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };

  const observedDiv = useRef(null);
  const tabRef = useRef(null);
  const width = useElementWidth(observedDiv);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setIsShowMoreOpen(false);
  };

  useEffect(() => {
    const parts = pathname?.split("/");
    const lastPart = parts[parts.length - 1];
    if (lastPart) {
      setActiveTab(lastPart);
    }
  }, [router, pathname]);

  const renderTabContent = () => {
    const activeTabComponent = supportTabsData?.find(
      (tab) => tab.id === activeTab
    )?.component;

    return <div className="tab-content">{activeTabComponent}</div>;
  };

  const { setTour, tour } = useModals();

  const renderTabs = () => {
    return visiableTabs?.map((tab, index) => {
      return (
        <li
          ref={tabRef}
          key={`${tab}-option-${index + 1}`}
          className={`flex items-center w-max  focus-within:z-10  border-b-2 px-4 sm:px-6 lg:px-12 py-2.5 text-sm font-medium  hover:text-primary  ${
            activeTab === tab?.id
              ? "text-primary  border-primary"
              : "text-grey-400 border-grey-100"
          }`}
        >
          <a
            onClick={() => handleTabClick(tab?.id)}
            href={`/support/${tab.id}`}
            className={`block`}
          >
            {tab?.label}
          </a>
        </li>
      );
    });
  };

  return (
    <div
      ref={observedDiv}
      className="flex flex-col justify-between sm:auto relative rounded-2xl  gap-5"
    >
      <div className="relative h-72 w-full xl:w-[45%] lg:w-2/4 rounded-2xl bg-white block md:hidden">
        <Image
          src="/images/support/tutorial.png"
          fill
          style={{ objectFit: "contain" }}
          alt="slider-promo"
        />
      </div>
      <div className="rounded-2xl bg-white p-5">
        <div className="flex flex-nowrap items-center ">
          <div className="relative w-full lg:w-2/4 xl:w-[55%] ">
            <Button className="!h-8 min-w-28 rounded-2xl !font-medium !text-sm !bg-transparent !text-grey-400 border !border-grey-400 flex items-center justify-center">
              Support Hub
            </Button>
            <h3 className="my-1 block text-grey-400 text-2xl font-semibold max-w-lg tracking ">
              You’ve got questions?
            </h3>
            <p className="block text-base font-medium text-grey-400">
              We have got answers. We are here to help.
            </p>
          </div>
          <div className="relative h-80 xl:w-[45%] lg:w-2/4 hidden lg:block ">
            <Image
              src="/images/support/support.png"
              fill
              style={{ objectFit: "contain" }}
              alt="support"
            />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-5">
        <div className=" rounded-2xl xl:py-16 max-w-3xl mx-auto">
          <div className="text-grey-400 text-center  mb-12 max-w-md mx-auto ">
            <h3 className="text-5xl font-semibold mb-2.5 text-grey-400">
              Frequently Asked Questions
            </h3>
            <p className="text-sm font-medium text-grey-400">
              Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
          <div className="flex flex-col  mb-10">
            <ul className="text-sm font-medium text-center text-grey-400  flex overflow-hidden mx-auto">
              {renderTabs()}
            </ul>
          </div>
          <div className="pt-2">{renderTabContent()}</div>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-5 hidden md:block">
        <div className="flex flex-nowrap items-center">
          <div className="relative w-full lg:w-2/4 xl:w-[55%]">
            <h3 className="my-1 block text-grey-400 text-5xl font-semibold max-w-lg tracking">
              Having troubles in navigation?
            </h3>
            <p className="block text-base font-medium text-grey-400 max-w-80 mb-5">
              You can visit the intro tutorial section to learn more
              about the platform
            </p>

            <Button
              className={`flex !text-base !px-10 !py-1 bg-white !text-grey-1800 !border-grey-1800 !font-medium border flex items-center justify-center w-full md:w-52 !h-11 hover:bg-grey-1800 hover:!text-white`}
              size="sm"
              color="tag"
              variant="tag"
              onClick={() => setTour(!tour)}
            >
              Visit Tutorial
            </Button>
          </div>
          <div className="relative h-72 xl:w-[45%] lg:w-2/4">
            <Image
              src="/images/support/tutorial.png"
              fill
              style={{ objectFit: "contain" }}
              alt="slider-promo"
            />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-5">
        <div className=" rounded-2xl xl:py-14 max-w-3xl mx-auto">
          <div className="text-grey-400 text-center  mb-8 max-w-md mx-auto ">
            <h3 className="text-5xl font-semibold text-grey-400 mb-2.5 ">
              Still Have Questions?
            </h3>
            <p className="text-sm font-medium text-grey-400">
              Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
          <div className="">
            <div className="grid gap-2.5 sm:grid sm:grid-cols-2 lg:grid xl:grid-cols-2">
              {supportCardData?.map(({ label, heading, subHeading }, index) => {
                const icon = supportTabIconTypes[label];
                return (
                  <div
                    key={`${label}-option-${index + 1}`}
                    className="p-4 w-full bg-white border rounded-2xl hover:ring-1 hover:ring-black hover:shadow-xl cursor-pointer"
                    onClick={handleboxClick(label)}
                  >
                    <div className=" flex items-center  justify-between pb-1">
                      <button
                        className={cls(
                          `border rounded-full h-12 w-12 flex items-center justify-center min-h-[2.5rem] min-w-[2.5rem] text-grey-400 bg-grey-1900`
                        )}
                      >
                        {icon}
                      </button>
                      <div className="flex gap-2 items-center">
                        <input
                          type="checkbox"
                          value={label} // Assigning a unique value from the data
                          checked={checkedValues.includes(label)}
                          onChange={handleCheckboxChange}
                          className="
                relative peer shrink-0 items-center flex
                appearance-none w-5 h-5 border-2 border-grey-100 bg-white
                checked:bg-grey-1800 checked:border-grey-1800 
                focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-[none]
                disabled:border-steel-400 disabled:bg-steel-400 rounded-full"
                        />
                        <CheckIcon colorClass="white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-grey-400 pb-1.5">
                        {heading}
                      </h4>
                      <p className="text-sm font-medium text-grey-400">
                        {subHeading}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex w-full pt-4 sm:pt-8 justify-center">
              <Button
                color="dark"
                variant="contained"
                size="xl"
                className="w-full !h-11 sm:w-52 justify-center !bg-grey-1800 hover:!bg-grey-1800/80"
                onClick={() => router.push("/support/details")}
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
