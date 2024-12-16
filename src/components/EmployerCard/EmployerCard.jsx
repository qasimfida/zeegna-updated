"use client";

import React, { Fragment } from "react";
import { Icon } from "@/svgs";
import cls from "classnames";
import {
  BagIcon,
  EdgeIcon,
  StarBadgeIcon,
  DotMenu,
  ArrowRightIcon,
} from "@/svgs/icons";
import Image from "next/image";
import feature from "../../../public/images/feature.png";
import { Menu, Transition } from "@headlessui/react";
import Button from "../Button";

export const EmployerCard = ({
  data,
  handleClick = () => console.log("clicked"),
}) => {
  const {
    id,
    image,
    title,
    employerType,
    employerSize,
    location,
    jobs,
    description,
    partner,
    status,
  } = data;
  const menuItems = ["View Job", "Apply for Job", "Job Preferences"];
  return (
    <div
      className="w-full bg-white m-auto border  rounded-2xl sm:hover:ring-1 sm:hover:ring-black sm:cursor-pointer"
      onClick={() => handleClick(id)}
    >
      <div className="flex items-center px-5 pt-3 rounded-t-2xl justify-between  border-b pb-3 relative bg-primary-2400">
        <div className="flex justify-between items-center gap-3">
          <div className="flex items-center justify-center max-w-16 min-w-16 max-h-16 min-h-16 rounded-[10px] bg-white border border-grey-100">
            {
              <Image
                className="w-full rounded-[10px] "
                src={image ? image : feature}
                alt="Career Image"
                style={{ objectFit: "cover", padding: "2px" }}
              />
            }
          </div>
          <div>
            {partner && (
              <p className="text-sm font-semibold text-primary flex items-center gap-1 mb-1">
                <StarBadgeIcon className="min-w-6 max-w-6 min-h-6 max-h-6" />
                Trusted Partner
              </p>
            )}
            <p className="text-base font-semibold text-grey-400">{title}</p>
          </div>
        </div>
        <div className="">
          <Menu>
            <Menu.Button
              onClick={(e) => e.stopPropagation()}
              className="h-8 w-8 text-sm flex items-center justify-center rounded-full border border-primary"
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
                <Menu.Items className="absolute top-0 right-0 w-48 py-1 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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

      <div className="flex relative w-full">
        <div
          className={cls`flex flex-col sm:flex sm:flex-row items-start md:items-start md:flex-row justify-startsm:cursor-pointer gap-4 px-5 pt-4  sm:gap-5`}
        >
          <div className="flex flex-col gap-2">
            <p className={`text-sm text-grey-500 font-medium`}>
              <span className={`text-sm text-grey-400 font-medium mr-1`}>
                Employer Type:
              </span>
              {employerType}
            </p>
            <p className={`text-sm text-grey-500 font-medium`}>
              <span className={`text-sm text-grey-400 font-medium mr-1`}>
                Employer Size:
              </span>
              {employerSize}
            </p>
            <p className={`text-sm text-grey-500 font-medium`}>
              <span className={`text-sm text-grey-400 font-medium mr-1`}>
                Location:
              </span>
              {location}
            </p>
            <p className="text-sm text-medium text-grey-400 line-clamp-4">
              {description}
            </p>
          </div>
        </div>
      </div>
      <div className="px-5 pb-4 pt-2.5">
        <button className="flex flex-wrap rounded-full gap-2 h-8 items-center bg-grey-light text-grey-400 text-sm font-normal px-2">
          <BagIcon />
          {jobs} Jobs on ZyraHealth
        </button>
      </div>

      <div className="flex gap-2.5 border-t py-4 px-5">
        <Icon
          name="heart"
          className={`min-w-10 min-h-10 max-w-10 max-h-10 color-white hover:border-primary ${
            status === "favorites" ? "bg-primary/20 text-primary " : ""
          }`}
          aria-hidden="true"
        />
        <Button color="primary" variant="darkContained" size="lg">
          <p className="mr-2">View Employer</p>
          <ArrowRightIcon aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
};
