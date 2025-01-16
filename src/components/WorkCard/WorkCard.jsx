"use client";

import React from "react";
import { Icon } from "@/svgs";
import Button from "../Button";
import cls from "classnames";
import trinityHealth from "../../../public/images/trinityHealth.png";
import Image from "next/image";
import ProgressBar from "../ProgressBar";
import { useRouter } from "next/navigation";
import { ArrowRightIcon } from "@/svgs/ArrowRightIcon";
import { usePageLayout } from "@/contexts/PageLayout";
import { CheckBadgeIcon } from "@/svgs/CheckBadgeIcon";

export const WorkCard = ({ card, tabName = "" }) => {
  const {
    image,
    title = "",
    subTitle = "",
    description = "",
    tags = [],
    progress,
    variant = "applied",
  } = card;
  const router = useRouter();
  const { setGlobalValue } = usePageLayout();

  if (variant === "applied") {
    return (
      <div
        key={`${title}-work-`}
        className="flex flex-col 2xl:flex 2xl:flex-row justify-between overflow-hidden px-4 py-4 2xl:p-4 mt-5 bg-white rounded-2xl min-h-28"
        onClick={() => {
          setGlobalValue({
            hasRightbar: true,
            hasTabbar: true,
          });
          router.push(`/work/${tabName}/${card.id}`);
        }}
      >
        <div className="flex relative w-full">
          <div className="flex flex-col focus-within:z-10 w-full sm:w-10/12 md:w-9/12 xl:w-10/12 2xl:w-11/12 ">
            <div
              className={cls`flex flex-col sm:flex sm:flex-row items-start md:items-start md:flex-col justify-startsm:cursor-pointer gap-4 `}
            >
              <div className="flex justify-center items-center h-full">
                {image ? (
                  image
                ) : (
                  <Image src={trinityHealth} alt="Career Image" />
                )}
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-base font-semibold text-grey-400">
                  {title}
                </h4>
                <p className="text-sm font-semibold text-grey-500">
                  {subTitle}
                </p>
                <p className="text-sm text-medium text-grey-400">
                  {description}
                </p>
                <div className="flex flex-wrap w-full gap-2">
                  {tags &&
                    tags?.map((tag, index) => {
                      return (
                        <Button
                          key={`${tag}-option-${index + 1}`}
                          variant="tagOutlined"
                          size="md"
                        >
                          <p>{tag}</p>
                        </Button>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
          <div className="flex sm:px-0 py-5 sm:p-1 focus-within:z-10 absolute right-0 sm:right-5 top-0 ">
            <ProgressBar
              variant="success"
              progress={progress}
              className={"!flex !flex-col !gap-1  !w-24"}
              unit="% match"
            />
            <div className=" flex items-center justify-center ml-4">
              <Icon
                name="later"
                className="min-w-10 min-h-10"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
        <div className="border-t-2 border-l-0 pl-0 pt-4 2xl:pt-0 2xl:mt-0 mt-4 2xl:border-l-2 2xl:border-t-0 border-dashed 2xl:pl-5">
          {tabName === "applications" && (
            <div className="text-success flex flex-col items-center h-24 justify-end">
              <div className="w-6 h-6 mb-1">
                <CheckBadgeIcon />
              </div>
              <p className="text-4xl">Applied</p>
            </div>
          )}
          <div
            className={`${
              tabName === "applications" ? "" : "border-b"
            } pb-2.5 text-center`}
          >
            <p className="text-sm font-medium text-grey-400 mb-1.5">
              The Employer believes you’re a strong fit for the job and invites
              you to apply
            </p>
            <p className="text-sm font-medium text-grey-500">
              Respond by: 6.15.2024
            </p>
          </div>
          {tabName !== "applications" && (
            <div className="flex flex-col gap-2.5">
              <button
                type="button"
                className="rounded-3xl bg-primary flex text-base font-medium text-white w-full h-11 leading-6 hover:bg-primary-light  items-center justify-center mt-2.5 gap-2.5"
              >
                Apply
                <ArrowRightIcon />
              </button>
              <button
                type="button"
                className="rounded-3xl  flex text-base font-medium border-2 border-danger/30 text-danger w-full hover:border-danger h-11 leading-6  items-center justify-center gap-2.5"
              >
                Not interested
                <ArrowRightIcon />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="flex overflow-hidden px-4 pb-4 sm:p-4 mt-5 bg-white rounded-2xl gap-4 relative min-h-28"
        onClick={() => router.push(`/work/${tabName}/${card.id}`)}
      >
        <div className="flex flex-col focus-within:z-10 w-full sm:w-10/12 md:w-9/12 xl:w-10/12 2xl:w-11/12">
          <div
            className={cls`flex flex-col sm:flex sm:flex-row items-start md:items-start md:flex-row justify-startsm:cursor-pointer gap-4 sm:gap-8`}
          >
            <div className="flex justify-center items-center h-full">
              {image ? image : <Image src={trinityHealth} alt="Career Image" />}
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-base font-semibold text-grey-400">{title}</h4>
              <p className="text-sm font-semibold text-grey-500">{subTitle}</p>
              <p className="text-sm text-medium text-grey-400">{description}</p>
              <div className="flex flex-wrap w-full gap-2">
                {tags &&
                  tags?.map((tag, index) => {
                    return (
                      <Button
                        key={`${tag}-option-${index + 1}`}
                        variant="tagOutlined"
                        size="md"
                      >
                        <p>{tag}</p>
                      </Button>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex sm:px-0 py-5 sm:p-4 focus-within:z-10 absolute right-5 top-0 ">
          <ProgressBar
            variant="success"
            progress={progress}
            className={"!flex !flex-col !gap-1  !w-24"}
            unit="% match"
          />
          <div className=" flex items-center justify-center ml-4">
            <Icon
              name="later"
              className="min-w-10 min-h-10"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    );
  }
};
