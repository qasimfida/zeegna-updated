"use client";
import React, { useState } from "react";
import moment from "moment";
import cls from "classnames";
import { getNameInitials } from "@/utils/getNameInitials";
import Image from "next/image";

export const Contact = ({ contact, isActive, ...rest }) => {
  const {
    image,
    firstName,
    lastName,
    clinicName,
    lastMessageTime,
    newMessages,
  } = contact;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const formatTime = (time) => {
    const momentTime = moment(time);
    const fromNow = momentTime.fromNow();
    return fromNow
      .replace("a few seconds", "few secs")
      .replace("seconds", "secs")
      .replace("minute", "min")
      .replace("minutes", "mins")
      .replace("hour", "hr")
      .replace("hours", "hrs")
      .replace("day", "day")
      .replace("days", "days")
      .replace("month", "mon");
  };

  return (
    <div
      className={cls(
        "flex space-x-3 py-4 px-2.5 border-b border-grey-100 hover:bg-grey-100 cursor-pointer",
        { "bg-grey-100": isHovered || isActive }
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      <div
        className={`flex-shrink-0 h-[2.625rem] w-[2.625rem] min-h-[2.625rem] min-w-[2.625rem] max-h-[2.625rem]  max-w-[2.625rem] inline-flex ${
          isHovered || isActive
            ? "border-2 border-grey-2000 "
            : "border-2 border-transparent"
        } text-center  items-center justify-center rounded-full  bg-success-800 relative `}
      >
        {image ? (
          <Image
            src={image}
            alt={`${firstName} ${lastName}`}
            style={{ objectFit: "cover" }}
            fill
          />
        ) : (
          <span className={cls(`  font-semibold text-base text-grey-400`)}>
            {getNameInitials(`${firstName} ${lastName}`)}
          </span>
        )}
      </div>
      <div className="flex-grow">
        <div
          className={cls("text-grey-400 text-base font-semibold truncate")}
        >{`${firstName} ${lastName}`}</div>
        <div className={cls("text-sm text-grey-400 font-medium truncate")}>
          {clinicName}
        </div>
      </div>
      <div className="text-right flex flex-col items-end justify-between">
        <div
          className={cls("text-xs text-grey-400 min-w-max", {
            "text-grey-400": isHovered || isActive,
          })}
        >
          {formatTime(lastMessageTime)}
        </div>
        {newMessages > 0 && (
          <div
            className={cls`text-sm font-medium text-grey-500 rounded-[10px] w-max min-w-[2rem] text-center ${
              isHovered || isActive ? "bg-grey-2200" : "bg-grey-100"
            }`}
          >
            {newMessages}
          </div>
        )}
      </div>
    </div>
  );
};
