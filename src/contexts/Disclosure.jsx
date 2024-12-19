"use client";

import React, { createContext, useContext, useRef } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ArrowDownIcon,
  BellIcon,
  CompanyIcon,
  EdgeIcon,
  InfoIcon,
  LogoutIcon,
  MessageIcon,
} from "@/svgs/icons";
import profileImage from "../../public/images/profileImage.png";
import Image from "next/image";
import { navigation } from "@/containers/Profile/data";
import useElementWidth from "@/hooks";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useModals } from "./Modals";
import cls from "classnames";

const DisclosureContext = createContext(false);

export const DisclosureProvider = ({ children }) => {
  const router = useRouter();
  const observedDiv = useRef(null);
  const width = useElementWidth(observedDiv);
  const isMobile = width <= 767;
  const { setTour, tour } = useModals();
  const pathname = usePathname();
  const menuItems = ["Update Profile Image", "Account Settings", "Log Out"];
  const paths = [
    "/Profile",
    "/Work",
    "/Messages",
    "/Employers",
    "/Blogs",
    "/Settings",
    "/Logout",
    "/Support",
    "/Notifications",
    "/Activities",
    "/Tickets",
  ];

  const activePath = paths.find((path) => {
    const pathName = path.substring(1).toLowerCase();
    return pathname.toLowerCase().includes(pathName);
  });

  let name = activePath ? activePath.substring(1) : null;
  if (name === "Work") {
    name = "My Work";
  } else if (name === "Blogs") {
    name = "Resources";
  } else if (name === "Support") {
    name = "Support Hub";
  }

  return (
    <Disclosure as="div" className="dd">
      {({ open, close }) => (
        <div ref={observedDiv}>
          <div className="px-8 md:px-6 lg:px-8 h-[4.688rem] bg-white w-full relative z-[111]  rounded-2xl  md:relative">
            <div className="relative flex items-center justify-between h-full">
              <div className="flex items-center">
                <p className="text-5xl text-grey-400 hidden md:block truncate">
                  {pathname === "/" ? "Home" : name}
                </p>
                <div className=" flex-shrink-0 md:hidden">
                  <Link href="/" className="text-primary">
                    <CompanyIcon aria-hidden="true" />
                  </Link>
                </div>
              </div>
              <div className="relative inset-y-0 right-0 flex items-center md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center text-grey-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white rounded-full border-2 min-h-9 min-w-9">
                  {open ? (
                    <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="absolute inset-y-0 hidden md:flex right-0 items-center pr-2 sm:static sm:inset-auto sm:pr-0">
                <button
                  type="button"
                  className={cls(
                    "flex items-center justify-center rounded-full border text-grey-400 border-gray-200 hover:text-white hover:bg-primary hover:border-primary min-w-9 min-h-9 mr-4",
                    {
                      "text-white bg-primary border-primary": tour,
                    }
                  )}
                  onClick={() => setTour(true)}
                >
                  <MessageIcon
                    className=" border-gray-200"
                    aria-hidden="true"
                  />
                </button>
                <button
                  type="button"
                  className={cls(
                    "flex items-center justify-center rounded-full border text-grey-400 border-gray-200 hover:text-white hover:bg-primary hover:border-primary min-w-9 min-h-9 mr-4",
                    {
                      "text-white bg-primary border-primary":
                        pathname.includes("/support") ||
                        pathname.includes("/support/details"),
                    }
                  )}
                  onClick={() => router.push("/support/general")}
                >
                  <InfoIcon className="border-gray-200" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className={cls(
                    "flex items-center justify-center rounded-full border text-grey-400 border-gray-200 hover:text-white hover:bg-primary hover:border-primary min-w-9 min-h-9 mr-4",
                    {
                      "text-white bg-primary border-primary":
                        pathname === "/notifications" ||
                        pathname.includes("activities") ||
                        pathname.includes("tickets"),
                    }
                  )}
                  onClick={() => router.push("/notifications")}
                >
                  <BellIcon className=" border-gray-200" aria-hidden="true" />
                </button>
                <Menu as="div" className="relative">
                  <Menu.Button className="flex items-center text-sm bg-white rounded-full focus:outline-none">
                    <Image
                      className="rounded-full"
                      src={profileImage}
                      alt=""
                      width={36}
                      height={36}
                    />
                    <p className="mx-2 text-base font-medium text-grey-400 w-fit truncate">
                      James Bond
                    </p>
                    <ArrowDownIcon className="w-4 h-4" aria-hidden="true" />
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <div className="relative">
                      <EdgeIcon />
                      <Menu.Items className="absolute w-48 right-0 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={`${
                                active ? "bg-gray-100" : ""
                              } block px-4 py-2 text-sm text-gray-700`}
                            >
                              Update Profile Image
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/notifications"
                              className={`${
                                active ? "bg-gray-100" : ""
                              } block px-4 py-2 text-sm text-gray-700`}
                            >
                              Account Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={`${
                                active ? "bg-gray-100" : ""
                              } block px-4 py-2 text-sm text-gray-700`}
                            >
                              Log Out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </div>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          {open && (
            <div className="pt-4 md:hidden bg-white h-auto -mt-4">
              <Disclosure.Panel className="md:hidden">
                <div className="pt-6 pb-[1.125rem] px-4 space-y-1">
                  <Menu as="div" className="flex flex-col justify-center">
                    <Menu.Button className=" flex flex-col items-center text-sm rounded-full focus:outline-none mb-6">
                      <Image
                        className="rounded-full mb-2.5"
                        src={profileImage}
                        alt=""
                        width={80}
                        height={80}
                      />
                      <div className="relative flex items-center">
                        <p className="mx-2 text-4xl text-grey-400">
                          James Bond
                        </p>
                        <ArrowDownIcon className="w-4 h-4" aria-hidden="true" />
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
                          <div className=" mt-2">
                            <EdgeIcon class="top-[30px]" />
                            <Menu.Items className="absolute top-[40px] right-0 w-48 py-1 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              {menuItems?.map((menu, index) => {
                                return (
                                  <Menu.Item
                                    key={`${menu}-option-${index + 1}`}
                                  >
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
                      </div>
                    </Menu.Button>

                    {navigation?.map((item, index) => {
                      return (
                        <Link
                          key={`${item.name}-option-${index + 1}`}
                          className={cls(
                            "flex items-center justify-between p-4 mb-2.5 w-full h-16  rounded-2xl cursor-pointer text-grey-400  hover:border-primary focus:border-primary focus:shadow-xl hover:shadow-xl",
                            {
                              "border shadow-sm border-grey-100":
                                item.name !== "Log Out",
                            }
                          )}
                          href={`${item.href}`}
                          onClick={close}
                        >
                          <div className="flex items-center">
                            <button type="button">{item.icon}</button>
                            <div className="ml-2.5">
                              <p className=" text-grey-400 text-sm	">
                                {item.name}
                              </p>
                            </div>
                          </div>
                          {item.name !== "Log Out" && (
                            <button type="button ">
                              <ArrowDownIcon className="transform -rotate-90" />
                            </button>
                          )}
                        </Link>
                      );
                    })}
                    <Link
                      className={cls(
                        "flex items-center justify-between p-4 mb-2.5 w-full h-16  rounded-2xl cursor-pointer text-grey-400  hover:border-primary focus:border-primary focus:shadow-xl hover:shadow-xl border shadow-sm border-grey-100"
                      )}
                      href={``}
                      onClick={() => setTour(true)}
                    >
                      <div className="flex items-center">
                        <button
                          type="button"
                          className={cls(
                            "flex items-center justify-center rounded-full text-grey-400 border-gray-200 hover:text-white hover:bg-primary hover:border-primary min-w-9 min-h-9",
                            {
                              "text-white bg-primary border-primary": tour,
                            }
                          )}
                        >
                          <MessageIcon className="" aria-hidden="true" />
                        </button>
                        <div className="ml-2.5">
                          <p className=" text-grey-400 text-sm	">
                            Into Tutorial
                          </p>
                        </div>
                      </div>
                      <button type="button ">
                        <ArrowDownIcon className="transform -rotate-90" />
                      </button>
                    </Link>
                    <Link
                      className={cls(
                        "flex items-center justify-between p-4 mb-2.5 w-full h-16  rounded-2xl cursor-pointer text-grey-400  hover:border-primary focus:border-primary focus:shadow-xl hover:shadow-xl border shadow-sm border-grey-100"
                      )}
                      href={`/support/general`}
                      onClick={close}
                    >
                      <div className="flex items-center">
                        <button
                          type="button"
                          className={cls(
                            "flex items-center justify-center rounded-full text-grey-400 border-gray-200 hover:text-white hover:bg-primary hover:border-primary min-w-9 min-h-9",
                            {
                              "text-white bg-primary border-primary":
                                pathname.includes("/support"),
                            }
                          )}
                        >
                          <MessageIcon className="" aria-hidden="true" />
                        </button>
                        <div className="ml-2.5">
                          <p className=" text-grey-400 text-sm	">
                            Support and Feedback
                          </p>
                        </div>
                      </div>
                      <button type="button ">
                        <ArrowDownIcon className="transform -rotate-90" />
                      </button>
                    </Link>
                    <Link
                      className={cls(
                        "flex items-center justify-between p-4 mb-2.5 w-full h-16  rounded-2xl cursor-pointer text-grey-400  hover:border-primary focus:border-primary focus:shadow-xl hover:shadow-xl border shadow-sm border-grey-100"
                      )}
                      href={`/notifications`}
                      onClick={close}
                    >
                      <div className="flex items-center">
                        <button
                          type="button"
                          className={cls(
                            "flex items-center justify-center rounded-full text-grey-400 border-gray-200 hover:text-white hover:bg-primary hover:border-primary min-w-9 min-h-9",
                            {
                              "text-white bg-primary border-primary":
                                pathname === "/notifications" ||
                                pathname.includes("activities") ||
                                pathname.includes("tickets"),
                            }
                          )}
                        >
                          <BellIcon
                            className=" border-gray-200"
                            aria-hidden="true"
                          />
                        </button>
                        <div className="ml-2.5">
                          <p className=" text-grey-400 text-sm	">
                            Notifications and Tasks
                          </p>
                        </div>
                      </div>
                      <button type="button ">
                        <ArrowDownIcon className="transform -rotate-90" />
                      </button>
                    </Link>
                    <Link
                      className={cls(
                        "flex items-center justify-between p-4 mb-2.5 w-full h-16  rounded-2xl cursor-pointer text-grey-400  hover:border-primary focus:border-primary focus:shadow-xl hover:shadow-xl shadow-sm border-grey-100"
                      )}
                      href={`/`}
                      onClick={close}
                    >
                      <div className="flex items-center">
                        <button
                          type="button"
                          className={cls(
                            "flex items-center justify-center rounded-full text-grey-400 border-gray-200 hover:text-white hover:bg-primary hover:border-primary min-w-9 min-h-9"
                          )}
                        >
                          <LogoutIcon className="w-6 h-6" aria-hidden="true" />
                        </button>
                        <div className="ml-2.5">
                          <p className=" text-grey-400 text-sm	">Log Out</p>
                        </div>
                      </div>
                    </Link>
                  </Menu>
                </div>
              </Disclosure.Panel>
            </div>
          )}
          {isMobile ? (!open ? children : null) : children}
        </div>
      )}
    </Disclosure>
  );
};

export const useDisclosure = () => useContext(DisclosureContext);
