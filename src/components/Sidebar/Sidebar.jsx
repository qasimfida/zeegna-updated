"use client";

import React from "react";
import {
  DocumentIcon,
  HomeIcon,
  ProfileIcon,
  MessagesIcon,
  BuildingIcon,
  LogoutIcon,
  SettingsIcon,
  CompanyIcon,
} from "@/svgs/icons";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { usePageLayout } from "@/contexts/PageLayout";
import Link from "next/link";

export const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { resetGlobalValues } = usePageLayout();

  const isActive = (path) => {
    const newData = path.split("/");
    const newFirstPath = newData[newData.length - 1];

    return pathname.includes(newFirstPath);
  };

  const menuItemClass = (path) => {
    return `flex items-center w-full h-12 justify-start rounded-2xl  cursor-pointer ${
      isActive(path)
        ? "text-white bg-primary-light"
        : "text-white  sm:hover:bg-primary-light"
    }`;
  };

  const handleClick = (params) => {
    resetGlobalValues();
    router.push(params);
  };

  return (
    <div className="hidden md:flex lg:flex bg-primary top-5 sticky py-8 px-5 w-60 rounded-2xl flex-col min-h-[calc(100vh-2.5rem)] h-auto gap-12 z-10">
      <div className="ml-5 flex-shrink-0 lg:flex justify-start">
        <Link href="/" className="text-white">
          <CompanyIcon aria-hidden="true" />
        </Link>
      </div>
      <div className="flex flex-col items-center w-full gap-1">
        <div
          onClick={() => {
            handleClick("/");
          }}
          className={`flex items-center w-full h-12 justify-start rounded-2xl text-white cursor-pointer ${
            pathname === "/"
              ? "text-white bg-primary-light"
              : " sm:hover:bg-primary-light"
          }`}
        >
          <button type="button" className="ml-5 mr-6">
            <HomeIcon className="w-6 h-6" aria-hidden="true" />
          </button>
          <p className="text-base font-medium">Home</p>
        </div>
        <div
          onClick={() => {
            handleClick("/profile/overview");
          }}
          className={menuItemClass("/profile")}
        >
          <button type="button" className="ml-5 mr-6">
            <ProfileIcon className="w-6 h-6" aria-hidden="true" />
          </button>
          <p className="text-base font-medium">Profile</p>
        </div>
        <div
          onClick={() => {
            handleClick("/work/discover");
          }}
          className={menuItemClass("/work")}
        >
          <button type="button" className="ml-5 mr-6">
            <DocumentIcon className="w-6 h-6" aria-hidden="true" />
          </button>
          <p className="text-base font-medium">My Work</p>
        </div>
        <div
          onClick={() => {
            handleClick("/messages");
          }}
          className={menuItemClass("/messages")}
        >
          <button type="button" className="ml-5 mr-6">
            <MessagesIcon className="w-6 h-6" aria-hidden="true" />
          </button>
          <p className="text-base font-medium">Messages</p>
        </div>
        <div
          onClick={() => {
            handleClick("/employers");
          }}
          className={menuItemClass("/employers")}
        >
          <button type="button" className="ml-5 mr-6">
            <BuildingIcon className="w-6 h-6" aria-hidden="true" />
          </button>
          <p className="text-base font-medium">Employers</p>
        </div>
        <div
          onClick={() => {
            handleClick("/blogs");
          }}
          className={menuItemClass("/blogs")}
        >
          <button type="button" className="ml-5 mr-6">
            <DocumentIcon className="w-6 h-6" aria-hidden="true" />
          </button>
          <p className="text-base font-medium">Resources</p>
        </div>
      </div>
      <div className="flex flex-col items-center w-full gap-[5px]">
        <div
          onClick={() => {
            handleClick("/settings/notifications");
          }}
          className={menuItemClass("/settings")}
        >
          <button type="button" className="ml-5 mr-6">
            <SettingsIcon className="w-6 h-6" aria-hidden="true" />
          </button>
          <p className="text-base font-medium">Settings</p>
        </div>
        <div
          onClick={() => {
            handleClick("/logout");
          }}
          className={menuItemClass("/logout")}
        >
          <button type="button" className="ml-5 mr-6">
            <LogoutIcon className="w-6 h-6" aria-hidden="true" />
          </button>
          <p className="text-base font-medium">Log Out</p>
        </div>
      </div>
    </div>
  );
};
