"use client";

import Image from "next/image";
import { Icon } from "@/svgs";
import profileImage from "../../../public/images/profileImage.png";
import { searchData, workData } from "@/components/HomeRightbar/data";
import cls from "classnames";
import { useModals } from "@/contexts/Modals";
import { useState } from "react";
import { languagesData } from "@/utils/data";
import { renderProfileCardData } from "@/utils/helper";

export const UserInfo = ({ className }) => {
  const { setInformation } = useModals();
  const [text, setText] = useState(
    "Committed and versatile healthcare professional with extensive  experience across a variety of healthcare settings. Known for providing top-notch care and support, excelling in fast-paced environments, and adept at addressing diverse patient needs with empathy and proficiency. With a strong foundation in patient care principles, equipped to deliver exceptional service whether in direct patient care, administrative roles, or team collaboration. Driven by a passion for improving patient outcomes and enhancing the quality of healthcare delivery"
  );
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      <div
        className={cls`bg-white border-b px-4 sm:px-0 pb-2 flex flex-col lg:flex-row ${className}`}
      >
        <div className="w-full lg:w-4/6 sm:pr-5 lg:border-r border-grey-100">
          <div className="flex justify-between">
            <div className="flex pt-4 lg:pt-8 pb-2.5 lg:pb-5 gap-2.5">
              <Image
                className="rounded-full border-2 border-primary w-16 md:w-20 h-16 md:h-20"
                src={profileImage}
                alt="Profile Image"
              />
              <div>
                <p className="text-sm font-semibold md:text-4xl text-grey-400">
                  James Bond
                </p>
                <p className="text-sm md:text-base font-medium text-grey-500">
                  Nursing
                </p>
                <p className="text-sm md:text-base font-medium text-grey-500">
                  Registered Nurse (RN)
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start pt-4 lg:pt-8">
              <Icon
                name="edit"
                className="min-w-8 min-h-8 hover:border-primary"
                aria-hidden="true"
                onClick={() => setInformation(true)}
              />
            </div>
          </div>
          <div className="flex flex-col py-2.5 border-b lg:border-0">
            <div className="hidden md:block">
              <p
                className={`text-sm md:text-base text-grey-400 font-medium lg:pb-0 `}
              >
                Bio:
                <span
                  className={`text-sm md:text-base text-grey-500 font-medium`}
                >
                  {text}
                </span>
              </p>
            </div>
            <div className="block md:hidden">
              <p
                className={`text-sm md:text-base text-grey-400 font-medium lg:pb-0`}
              >
                Bio:
                <span
                  className={`text-sm md:text-base text-grey-500 font-medium`}
                >
                  {showMore ? text : `${text.substring(0, 140)}...`}
                </span>
              </p>
              <p
                className="text-sm md:text-base font-semibold text-primary underline pb-2.5"
                onClick={() => setShowMore(showMore ? false : true)}
              >
                {showMore ? "Show Less" : "Show More"}
              </p>
            </div>

            <div className="flex flex-col  pt-2.5 lg:pt-4  lg:pb-4  items-start gap-2.5">
              <p className=" text-sm md:text-base font-medium text-grey-400 flex  gap-1.5 cursor-pointer">
                <span>
                  <Icon
                    name="telephone"
                    className="min-w-8 min-h-8 hover:border-primary"
                  />
                </span>
                <span className="text-sm md:text-base font-medium  flex items-center">
                  111-111-1111
                </span>
              </p>
              <p className=" text-sm md:text-base font-medium text-grey-400 flex  gap-1.5 cursor-pointer">
                <span>
                  <Icon
                    name="envolope"
                    className="min-w-8 min-h-8 hover:border-primary"
                  />
                </span>
                <span className="text-sm md:text-base font-medium flex items-center">
                  james.bond@gmail.com
                </span>
              </p>
              <p className=" text-sm md:text-base font-medium text-grey-400 flex  gap-1.5 cursor-pointer">
                <span>
                  <Icon
                    name="pointer"
                    className="min-w-8 min-h-8 hover:border-primary"
                  />
                </span>
                <span className="text-sm md:text-base font-medium flex items-center">
                  111 test Drive, New York City, NY 10001
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/6">
          <div className="flex flex-col pl-0 lg:pl-5 pt-2.5 lg:py-5 pb-2.5  border-b items-start gap-2.5 ">
            <div className="flex justify-between w-full">
              <p className=" text-sm md:text-base font-medium text-grey-500 flex  gap-1.5 cursor-pointer">
                Search Preferences
              </p>
              <Icon
                name="edit"
                className="min-w-8 min-h-8  hover:border-primary flex"
                aria-hidden="true"
              />
            </div>
            <div className="flex gap-1.5 flex-wrap">
              {searchData?.map((data, index) => (
                <p
                  key={`${data}-option-${index + 1}`}
                  className=" text-sm md:text-base font-medium text-grey-400 flex  cursor-pointer"
                >
                  {data},
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col pl-0 lg:pl-5  py-2.5 lg:py-5 border-b items-start gap-2.5 ">
            <div className="flex justify-between w-full">
              <p className=" text-sm md:text-base font-medium text-grey-500 flex  gap-1.5 cursor-pointer">
                Workplace Preferences
              </p>
              <Icon
                name="edit"
                className="min-w-8 min-h-8  hover:border-primary hidden sm:flex"
                aria-hidden="true"
              />
            </div>
            <div className="flex gap-1.5 flex-wrap">
              {workData?.map((data, index) => (
                <p
                  key={`${data}-option-${index + 1}`}
                  className=" text-sm md:text-base font-medium text-grey-400 flex  cursor-pointer"
                >
                  {data},
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col pl-0 lg:pl-5  pt-2.5 lg:py-5 pb-2.5  items-start gap-2.5">
            <div className="flex justify-between w-full gap-1.5">
              <div className="flex gap-2">
                <span>
                  <Icon
                    name="case"
                    className="min-w-8 min-h-8 hover:border-primary"
                  />
                </span>
                <div className="">
                  <p className=" text-sm md:text-base font-medium text-grey-500 flex  gap-1.5 cursor-pointer">
                    <span className="text-sm md:text-base font-medium flex items-center">
                      Primary Specialty
                    </span>
                  </p>
                  <p className=" text-sm md:text-base font-medium text-grey-400 flex  gap-1.5 cursor-pointer">
                    <span className="text-sm md:text-base font-medium flex items-center">
                      Case Management
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <Icon
                  name="edit"
                  className="min-w-8 min-h-8 hover:border-primary flex"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div className="flex gap-1.5">
              <span>
                <Icon
                  name="cap"
                  className="min-w-8 min-h-8 hover:border-primary"
                />
              </span>
              <div className="">
                <p className=" text-sm md:text-base font-medium text-grey-500 flex  gap-1.5 cursor-pointer">
                  <span className="text-sm md:text-base font-medium flex items-center">
                    Years of Experience
                  </span>
                </p>
                <p className=" text-sm md:text-base font-medium text-grey-400 flex  gap-1.5 cursor-pointer">
                  <span className="text-sm md:text-base font-medium flex items-center">
                    14
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-5">
        {languagesData?.map((item, index) => {
          return (
            <div
              key={`${item}-option-${index + 1}`}
              className={cls`gap-4 pt-4 flex ${
                index === languagesData.length - 1 ? "pb-0" : "border-b pb-4"
              } flex-col`}
            >
              {item.country && (
                <div className="flex justify-between items-center w-full">
                  <p className="text-sm font-semibold md:text-4xl text-grey-400">
                    {item.country}
                  </p>
                  {/* <Icon
                  name="edit"
                  onClick={onEditClick}
                  className="min-w-8 min-h-8 hover:border-primary"
                  aria-hidden="true"
                /> */}
                </div>
              )}
              <div className="flex flex-col gap-2.5">
                {item.heading && (
                  <p className="text-sm font-semibold md:text-4xl text-grey-400 pb-2.5">
                    {item.heading}
                  </p>
                )}
                {item?.data?.map(({ name, value }, index) => {
                  const cls = `text-sm md:text-base ${
                    name.toLocaleLowerCase().includes("email") ||
                    name.toLocaleLowerCase().includes("website")
                      ? "text-primary-2600"
                      : "text-grey-500"
                  } font-medium ${
                    Array.isArray(value)
                      ? "flex items-center flex-wrap gap-2"
                      : ""
                  }`;

                  return (
                    <div key={`${name}-option-${index + 1}`} className={cls}>
                      <span className="text-sm md:text-base font-medium text-grey-400">
                        {name}:{" "}
                      </span>
                      {renderProfileCardData(value)}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
