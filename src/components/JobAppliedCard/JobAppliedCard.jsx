"use client";

import React, { Fragment } from "react";
import Image from "next/image";
import Button from "../Button";
import feature from "../../../public/images/feature.png";
import cls from "classnames";
import {
  ClockIcon,
  ArrowRightIcon,
  DotMenu,
  CheckCircleIcon,
  DeclinedCircularCheckIcon,
  LikeIcon,
  StarBadgeIcon,
  EdgeIcon,
} from "@/svgs/icons";
import { Menu, Transition } from "@headlessui/react";
import { Icon } from "@/svgs";

export const JobAppliedCard = ({
  id,
  cardData = {
    image: <Image src={feature} alt="Career Image" />,
    heading: "Registered Nurse (RN)",
    subHeading: "Bayada Home Care",
    hospitalName: "Home Health Care Agency Boston, MA (Field-Based)",
    tags: ["Full Time", "40 Hours / Week", "$75,000-$120,000"],
  },
  variant = "available",
  outsideCaraousal = false,
  handleClick = () => console.log("Clicked"),
  hasMessage = true,
  type = "job",
  handleAddToFavorites,
}) => {
  const { partner, image, heading, subHeading, hospitalName, tags, location } =
    cardData;
  const menuItems = ["View Job", "Apply for Job", "Job Preferences"];

  return (
    <div
      className={`w-full  ${
        outsideCaraousal ? "bg-white" : "sm:w-[97%] mt-5 mb-2 "
      } m-auto border  rounded-2xl sm:hover:ring-1 sm:hover:ring-black sm:cursor-pointer  `}
      onClick={handleClick}
    >
      <div className="flex items-center px-5 pt-3 rounded-t-2xl justify-between  border-b pb-3 relative bg-primary-2400">
        <div className="flex justify-between items-center gap-3">
          <div className="flex items-center justify-center max-w-16 min-w-16 max-h-16 min-h-16 rounded-[10px] bg-white border border-grey-100 relative">
            {
              <Image
                className="w-full rounded-[10px] "
                src={image ? image : feature}
                alt="Career Image"
                style={{ objectFit: "cover", padding: "4px" }}
                fill
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
            <p className="text-base font-semibold text-grey-400">{heading}</p>
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
      <div
        className={cls`flex flex-col items-start md:items-start justify-center w-full bg-white pt-4 px-5 rounded-2xl gap-2.5 `}
      >
        <div className="flex flex-col items-start w-full">
          <p className="text-sm font-medium text-grey-400 mb-2.5">
            {subHeading}
          </p>
          <p className="text-sm text-medium text-black ">
            {hospitalName} <br />
            {location}
          </p>
          <div className={`flex flex-wrap w-full gap-1.5 py-4`}>
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
      <div className="w-full flex gap-2.5 ">
        {variant === "expired" ? (
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col border-t px-5 py-2.5">
              <p className="text-sm font-semibold text-danger flex items-center gap-1.5">
                <ClockIcon
                  className="min-w-5 min-h-5 max-w-5 max-h-5   "
                  aria-hidden="true"
                />{" "}
                Expired on: 6/15/2024
              </p>
            </div>
          </div>
        ) : variant === "declined" ? (
          <div className="flex flex-col w-full">
            <div className="flex justify-between w-full border-t px-5 py-2.5">
              <p className="text-sm font-semibold text-danger flex items-center gap-1.5">
                <DeclinedCircularCheckIcon
                  className="min-w-5 min-h-5 max-w-5 max-h-5  "
                  aria-hidden="true"
                />{" "}
                Declined on: 6/15/2024
              </p>
              <p className="text-sm font-medium text-primary">
                Still Interested?
              </p>
            </div>
          </div>
        ) : variant === "applied" ? (
          <div className="flex flex-col w-full">
            <div className="flex flex-col border-t px-5 py-2.5">
              <p className="text-sm font-semibold text-primary flex items-center gap-1.5">
                <CheckCircleIcon
                  className="min-w-5 min-h-5 max-w-5 max-h-5   "
                  aria-hidden="true"
                />{" "}
                Accepted on: 6/15/2024
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col  w-full ">
            {hasMessage && (
              <div className="flex flex-col border-t py-2.5 px-5">
                <p className="text-sm font-semibold text-warning flex items-center gap-1.5">
                  <ClockIcon
                    className="min-w-5 min-h-5 max-w-5 max-h-5   "
                    aria-hidden="true"
                  />{" "}
                  Respond by : 6/15/2024
                </p>
              </div>
            )}
            {type === "job" && variant === "recommended" && (
              <div className="flex flex-col border-t px-5 py-2.5">
                <p className="text-sm font-semibold text-primary flex items-center gap-1.5">
                  <LikeIcon
                    className="min-w-5 min-h-5 max-w-5 max-h-5   "
                    aria-hidden="true"
                  />{" "}
                  Recommended for you
                </p>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="flex gap-2.5 border-t py-4 px-5">
        {type === "job" && (
          <Icon
            name="heart"
            className={`min-w-10 min-h-10 max-w-10 max-h-10 color-white hover:border-primary ${
              variant === "favorites" ? "bg-primary/20 text-primary " : ""
            }`}
            aria-hidden="true"
            onClick={(e) => handleAddToFavorites(e, id)}
          />
        )}
        <Button color="primary" variant="darkContained" size="lg">
          <p className="mr-2">View {type === "job" ? "Job" : "Invite"}</p>
          <ArrowRightIcon aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
};
