"use client";

import React from "react";
import { icons } from "@/svgs";
import { ArrowRightIcon } from "@/svgs/ArrowRightIcon";
import cls from "classnames";

export const InvitaionBanner = ({ invitation = "apply", respondBy }) => {
  const color =
    invitation === "apply" ||
    invitation === "accepted" ||
    invitation === "applied"
      ? "bg-primary"
      : "bg-danger";
  const hover =
    invitation === "apply" ||
    invitation === "accepted" ||
    invitation === "applied"
      ? "hover:bg-primary-light"
      : "hover:bg-danger-light";
  const border =
    invitation === "apply" ||
    invitation === "accepted" ||
    invitation === "applied"
      ? "border-l-primary"
      : "border-l-danger";
  const icon =
    invitation === "apply"
      ? "envolope"
      : invitation === "declined"
      ? "close"
      : invitation === "expired"
      ? "clock"
      : "check";
  const hasButtons =
    invitation === "apply" || invitation === "declined" ? true : false;
  const hasNotIntrestedButton =
    invitation === "expired" || invitation === "declined";

  const heading =
    invitation === "apply"
      ? "Invitation to Apply"
      : invitation === "declined"
      ? "Invite Declined"
      : invitation === "expired"
      ? "Invite Expired"
      : "Invite Accepted";
  const subHeading =
    invitation === "apply" || invitation === "expired" ? (
      "The employer believes you are a strong fit for this job and invites you to apply."
    ) : invitation === "declined" ? (
      <>
        You already declined this invite to apply.{" "}
        <span className="text-primary">Still interested?</span>
      </>
    ) : (
      "You already accepted this offer and sent your application to the employer."
    );

  const Icon = icons[icon];
  return (
    <div
      className={cls`flex flex-col lg:flex lg:flex-row justify-between overflow-hidden border-l-8 ${border} pr-4 py-4 bg-white rounded-2xl`}
    >
      <div className="flex relative w-full">
        <div className="flex">
          <div className="flex flex-col lg:flex lg:flex-row gap-1 lg:gap-4">
            <div className="flex justify-start lg:justify-center items-center h-full ml-3">
              <button
                type="button"
                className={cls`min-w-9 min-h-9 ${color} ${hover} text-white flex items-center justify-center rounded-full`}
              >
                <Icon />
              </button>
            </div>
            <div className="flex flex-col ml-3 lg:ml-0 justify-center">
              <h4 className="text-4xl text-grey-400 font-semi-bold">
                {heading}
              </h4>
              <p className="text-base font-medium text-grey-500">
                {subHeading}{" "}
                {respondBy && (
                  <span
                    className={`${
                      invitation === "expired" ? "text-danger" : "text-primary"
                    } text-base font-medium `}
                  >
                    {respondBy}
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      {hasButtons && (
        <div className="flex gap-2.5 mt-2.5 lg:mt-0 ml-3 lg:ml-0 items-center justify-start lg:justify-center">
          {!hasNotIntrestedButton && (
            <button
              type="button"
              className="min-w-40 rounded-3xl  flex text-base font-medium border-2 border-danger/30 text-danger  hover:border-danger h-10 leading-6  items-center justify-center gap-2.5"
            >
              Not Interested
            </button>
          )}
          <button
            type="button"
            className={`min-w-[9.375rem] rounded-3xl  flex text-base font-medium text-white  h-10 leading-6  items-center justify-center gap-2.5 ${
              invitation === "expired" || invitation === "applied"
                ? "bg-grey-1100"
                : "bg-grey-1800 hover:bg-grey-1100 "
            }`}
          >
            Apply
            <ArrowRightIcon />
          </button>
        </div>
      )}
    </div>
  );
};
