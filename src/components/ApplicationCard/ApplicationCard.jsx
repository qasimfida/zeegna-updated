"use client";

import moment from "moment";
import React, { Fragment } from "react";
import { DotMenu, ClockIcon, EdgeIcon, EyeIcon } from "@/svgs/icons";
import { Menu, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";

export const ApplicationCard = ({
  notification,
  handleAction,
  actionButton = true,
  discoverButton = false,
  childClass,
  hasColor = true,
  iconClass = "",
  ...props
}) => {
  const { title, title1, title2, date, id, status } = notification;
  const menuItems = ["View Ticket", "Edit Ticket", "Delete Ticket"];
  const router = useRouter();
  return (
    <div
      className={`flex-col xl:flex xl:flex-row items-center justify-start w-full m-auto bg-grey-700 md:bg-white border border-grey-100 rounded-2xl px-5 py-6 hover:ring-1 sm:hover:ring-black sm:hover:shadow-xl sm:ease-in sm:cursor-pointer relative`}
      {...props}
      onClick={() => router.push(`/work/applications/${id}`)}
    >
      <div className="flex-col md:flex md:flex-row justify-between items-center xl:w-full mt-2.5 md:mt-0">
        <div className="flex gap-4 justify-between min-w-[32%]">
          <div className="w-[60%] md:w-auto ">
            <p className="text-sm font-medium text-grey-400">{title}</p>
            <p className="text-sm font-medium text-grey-400">{title1}</p>
            <p className="text-sm font-medium text-grey-400">{title2}</p>
          </div>

          <div className="flex md:hidden">
            <Menu>
              <Menu.Button
                onClick={(e) => e.stopPropagation()}
                className="h-8 w-8 text-sm flex items-center  bg-white justify-center rounded-full border border-primary "
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
                  <EdgeIcon />
                  <Menu.Items className="absolute top-[3rem] right-8 w-40 py-1 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {menuItems?.map((menu, index) => {
                      return (
                        <Menu.Item key={`${menu}-option-${index + 1}`}>
                          {({ active }) => (
                            <a
                              href="#"
                              className={`${
                                active ? "bg-gray-100" : ""
                              } block px-4 py-2 text-sm text-gray-700`}
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
        <div className="flex items-center gap-2.5 mt-2.5 md:mt-0">
          <ClockIcon className="text-grey-200" />
          <p className="text-sm font-medium text-grey-400">
            Applied On: {moment(date).format("MMM DD, YYYY")}
          </p>
        </div>
        <div className="flex items-center gap-2.5 mt-2.5 md:mt-0">
          <EyeIcon className="!text-grey-200" />
          <p className="text-sm font-medium text-grey-400">Viewd by Employer</p>
        </div>
        <button
          className={`w-full md:w-auto min-w-24 h-6 text-xs font-medium text-white mt-2.5 md:mt-0 ${
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
          } rounded-2xl px-2.5 py-[2px]`}
        >
          {status}
        </button>
        <div className="hidden md:flex">
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
                <EdgeIcon />
                <Menu.Items className="absolute top-[3rem] right-8 w-40 py-1 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {menuItems?.map((menu, index) => {
                    return (
                      <Menu.Item key={`${menu}-option-${index + 1}`}>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`${
                              active ? "bg-gray-100" : ""
                            } block px-4 py-2 text-sm text-gray-700`}
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
  );
};
