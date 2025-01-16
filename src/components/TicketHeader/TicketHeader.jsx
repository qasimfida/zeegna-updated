"use client";

import React, { Fragment } from "react";
import { BackButtonIcon, EdgeIcon, DotMenu } from "@/svgs/icons";
import { Menu, Transition } from "@headlessui/react";
import Button from "@/components/Button";

export const TicketHeader = () => {
  const menuItems = ["View Ticket", "Edit Ticket", "Delete Ticket"];
  return (
    <div
      className={`flex justify-between gap-1 lg:gap-4 flex-wrap sm:flex-nowrap bg-white p-5 border rounded-2xl cursor-pointer items-center`}
    >
      <div className="flex gap-4 w-full items-center">
        <div
          className={`border rounded-3xl h-10 w-10 flex items-center justify-center min-h-10 min-w-10 text-grey-400 border-grey-1400  order-1 bg-white`}
          onClick={() => window.history.back()}
        >
          <BackButtonIcon />
        </div>
        <div className=" font-medium gap-1 order-1 lg:order-2 w-full">
          <p className="text-4xl  text-grey-400 min-w-max">Ticket ID: 602602</p>
        </div>
        <div className="flex order-2 sm:hidden">
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
                <Menu.Items className="absolute top-[15rem] right-[1.5rem] w-40 py-1 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
      <div className="flex w-full items-center justify-end gap-8 order-2 lg:order-3 ">
        <button
          className={`hidden sm:flex h-8 text-sm font-medium text-white bg-warning-600 rounded-2xl px-3 items-center min-w-max`}
        >
          In Review
        </button>
        <Button
          className={`hidden sm:flex !text-sm !px-6 !py-1 bg-white !text-grey-1800 !border-grey-1800 !font-medium border flex items-center justify-center min-w-28 h-9 hover:bg-grey-1800 hover:!text-white`}
          size="sm"
          color="tag"
          variant="tag"
        >
          Mark as Resolved
        </Button>
      </div>
    </div>
  );
};
