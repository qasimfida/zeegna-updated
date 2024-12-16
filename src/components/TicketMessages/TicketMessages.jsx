"use client";

import React from "react";
import profileImage from "../../../public/images/profileImage.png";
import zh from "../../../public/images/zh.png";
import Image from "next/image";

export const TicketMessages = () => {
  return (
    <>
      <div className="border-b pb-5 flex-col justify-start h-full gap-2.5 mb-5">
        <div className="flex gap-2.5 items-start">
          <Image
            className="rounded-full"
            src={profileImage}
            alt="profile"
            width={35}
            height={35}
          />
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-2.5 w-full">
              <p className="text-sm font-medium text-grey-1600 min-w-max">
                James Bond
              </p>
              <p className="w-1 h-1 bg-grey-1700 rounded-full"></p>
              <p className="text-xs font-medium text-grey-400">
                May 01, 2024 12:38 AM
              </p>
            </div>
            <div className="flex  gap-2.5 w-full">
              <p className="text-sm font-semibold text-grey-400 min-w-max">
                Topic Name:
              </p>
              <p className="text-sm font-medium text-grey-400">
                I have challenges navigating the platform.
              </p>
            </div>
            <div className="flex items-center gap-2.5 w-full">
              <p className="text-sm font-semibold text-grey-400">Type:</p>
              <p className="text-sm font-medium text-grey-400">Idea</p>
            </div>
            <div className="flex items-center gap-2.5 w-full">
              <p className="text-sm font-medium text-grey-400">
                Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b pb-5 flex-col justify-start h-full gap-2.5">
        <div className="flex gap-2.5 items-start">
          <Image
            className="rounded-full"
            src={zh}
            alt="profile"
            width={40}
            height={40}
          />
          <div className="flex flex-col items-center gap-2.5">
            <div className="flex items-center gap-2.5 w-full">
              <p className="text-sm font-medium text-grey-1600">ZyraHealth+</p>
              <p className="w-1 h-1 bg-grey-1700 rounded-full"></p>
              <p className="text-xs font-medium text-grey-400">
                May 01, 2024 12:38 AM
              </p>
            </div>
            <div className="flex items-center gap-2.5 w-full">
              <p className="text-sm font-medium text-grey-400">Hi James,</p>
            </div>
            <div className="flex items-center gap-2.5 w-full">
              <p className="text-sm font-medium text-grey-400">
                Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
            </div>
            <div className="flex items-center gap-2.5 w-full">
              <p className="text-sm font-medium text-grey-400">
                Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
            </div>
            <div className="flex-col items-center gap-2.5 w-full">
              <p className="text-sm font-medium text-grey-400">Thank you,</p>
              <p className="text-sm font-medium text-grey-400">Support Team</p>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
};
