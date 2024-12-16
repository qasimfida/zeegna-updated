"use client";

import React, { Fragment } from "react";
import Image from "next/image";
import Button from "../Button";
import frame from "../../../public/images/frame.png";
import cls from "classnames";
import { Icon } from "@/svgs";
import { Menu, Transition } from "@headlessui/react";
import { EdgeIcon, DotMenu, ArrowRightIcon } from "@/svgs/icons";

export const JobCard = ({
  cardData = {
    image: <Image src={frame} alt="Career Image" />,
    heading: "Registered Nurse (RN)",
    subHeading: "Bayada Home Care",
    hospitalName: "Home Health Care Agency Boston, MA (Field-Based)",
    tags: [
      "40 Hours/Week",
      "Rotating Shifts",
      "$75,000 - $90,000",
      "Full-time",
    ],
  },
  isInRightbar = true,
  children,
  variant = "invite",
  className,
  outsideCaraousal = false,
  handleClick = () => console.log("Clicked"),
  ...rest
}) => {
  const { image, heading, subHeading, hospitalName, tags, location } = cardData;
  if (isInRightbar) {
    return (
      <div
        className={cls`flex items-start md:items-start md:flex-row justify-center w-full bg-white px-3 py-3.5 rounded-2xl gap-2.5 sm:hover:ring-1 sm:hover:ring-black sm:cursor-pointer  ${className}`}
        {...rest}
      >
        <div className="flex justify-center max-w-14 min-w-14">{image}</div>
        <div className="flex flex-col gap-2">
          <p className="text-base font-semibold text-grey-400">{heading}</p>
          <p className="text-sm font-semibold text-grey-400">{subHeading}</p>
          <p className="text-sm text-medium text-black">
            {hospitalName} <br />
            {location}
          </p>
          <div className="flex flex-wrap w-full gap-2">
            {tags.map((tag, index) => {
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
    );
  }

  const menuItems = ["View Job", "Apply for Job", "Job Preferences"];

  return (
    <div
      className={`w-full bg-white  ${
        outsideCaraousal ? "" : "sm:w-[97%] mt-4 mb-1"
      } m-auto border  rounded-2xl pt-2.5 sm:hover:ring-1 sm:hover:ring-black sm:cursor-pointer ${className}  `}
      onClick={handleClick}
    >
      <div className="flex items-center justify-between  border-b px-4 pb-2.5 relative">
        <div className="flex justify-between items-center gap-2.5 ">
          <div className="flex  max-w-[3.125rem] min-w-[3.125rem]">{image}</div>
          <p className="text-sm font-semibold text-grey-400">{heading}</p>
        </div>
        <div className="">
          <Menu>
            <Menu.Button
              onClick={(e) => e.stopPropagation()}
              className="h-8 w-8 text-sm flex items-center justify-center rounded-full hover:border-primary border"
            >
              <DotMenu
                className={`min-w-6 min-h-6 flex items-center rotate-90 relative text-primary`}
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
                <Menu.Items className="absolute top-[3rem] right-0 w-48 py-1 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
      <div
        className={cls`flex flex-col items-start md:items-start px-4  justify-center w-full bg-white pt-4 pb-4 rounded-2xl gap-2.5 `}
      >
        <div className="flex flex-col items-start w-full">
          <p className="text-base font-semibold text-grey-400 mb-2.5">
            {subHeading}
          </p>
          <p className="text-sm font-medium text-black mb-2.5">
            {hospitalName} <br />
            {location}
          </p>
          <div
            className={`flex flex-wrap w-full gap-1.5 pb-4 ${
              !children ? "border-b " : ""
            }`}
          >
            {tags.map((tag, index) => {
              return (
                <Button
                  key={`${tag}-option-${index + 1}`}
                  variant="tagOutlined"
                  size="md"
                >
                  {tag}
                </Button>
              );
            })}
          </div>
          {children && (
            <div className="flex w-full items-center gap-1.5 border-b border-t py-2.5">
              {children}
            </div>
          )}
          <div className="w-full  flex gap-2.5 mt-4">
            {variant === "invite" ? (
              <div className="flex gap-2.5 w-11/12 m-auto  items-center">
                <Button color="success" variant="darkContained" size="lg">
                  <p className="mr-2">View Invite</p>
                  <ArrowRightIcon aria-hidden="true" />
                </Button>
              </div>
            ) : (
              <div className="flex gap-2.5 w-full ">
                <Icon
                  name="heart"
                  className="min-w-10 min-h-10 max-w-10 max-h-10 color-white hover:border-primary"
                  aria-hidden="true"
                />
                <Button color="primary" variant="darkContained" size="lg">
                  <p className="mr-2">View Job</p>
                  <ArrowRightIcon aria-hidden="true" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
