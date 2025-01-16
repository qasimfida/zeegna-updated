"use client";

import moment from "moment";
import Button from "@/components/Button";
import React, { Fragment } from "react";
import { DotMenu, ClockIcon, EdgeIcon } from "@/svgs/icons";
import { Menu, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";

export const TicketCard = ({
  notification,
  handleAction,
  actionButton = true,
  discoverButton = false,
  childClass,
  hasColor = true,
  iconClass = "",
  ...props
}) => {
  const { title, ticketNumber, date, id, progress, hospital, idea } =
    notification;
  const menuItems = ["View Ticket", "Edit Ticket", "Delete Ticket"];
  const router = useRouter();
  return (
    <div
      className={`flex-col xl:flex xl:flex-row items-center justify-start w-full m-auto bg-white  border border-grey-100 rounded-2xl  px-5 py-6 hover:ring-1 sm:hover:ring-black sm:hover:shadow-xl sm:ease-in sm:cursor-pointer relative`}
      {...props}
      onClick={() => router.push(`/tickets/${id}`)}
    >
      <div className="flex-col xl:flex xl:flex-row gap-4 xl:w-1/2">
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium text-grey-200">
            {ticketNumber.length > 10
              ? `${ticketNumber?.substring(0, 6)}...`
              : ticketNumber}
          </p>
          <div className="flex xl:hidden">
            <Menu>
              <Menu.Button
                onClick={(e) => e.stopPropagation()}
                className="h-8 w-8 text-sm flex items-center  bg-white justify-center rounded-full hover:border-primary border"
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
        <div>
          <p className="text-sm font-medium text-grey-400">{title}</p>
        </div>
      </div>

      <div className="flex justify-between items-center xl:w-full mt-2.5 ">
        <button
          className={`h-6 text-xs font-medium text-white ${
            progress === "In Review"
              ? "bg-warning-600"
              : progress === "resolved"
              ? "bg-success-600"
              : "bg-danger"
          } rounded-2xl px-2.5 py-[2px]`}
        >
          {progress}
        </button>
        <button className="hidden xl:flex p-2 min-w-9 max-w-9 items-center justify-center min-h-9 max-h-9 bg-grey-100 rounded-full text-sm font-medium grey-400">
          {hospital}
        </button>
        <div className="flex xl:hidden items-center gap-2.5">
          <div className="bg-primary w-3 h-3 rounded-sm"></div>
          <p className="text-base font-medium text-grey-400">{idea}</p>
        </div>
        <div className="flex items-center gap-2.5">
          <ClockIcon className="text-grey-200" />
          <p className="text-base font-medium text-grey-400">
            {moment(date).format("MMM DD, YYYY")}
          </p>
        </div>
        <div className="hidden xl:flex items-center gap-2.5">
          <div className="bg-primary w-3 h-3 rounded-sm"></div>
          <p className="text-base font-medium text-grey-400">{idea}</p>
        </div>
        <div className="hidden xl:flex ">
          {/* <Link
            href={`/tickets/${id}`}
            className="text-base font-medium text-primary"
          >
            View Ticket
          </Link> */}
          <Button
            onClick={() => router.push(`/tickets/${id}`)}
            className={`hidden sm:flex !w-36 h-9 !text-base !font-medium !px-0`}
            size="sm"
            variant="darkOutlined"
            color="dark"
          >
            View Ticket
          </Button>
        </div>
      </div>
    </div>
  );
};
