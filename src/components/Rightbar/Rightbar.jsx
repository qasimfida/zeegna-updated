"use client";

import RightbarWrapper from "@/components/RightbarWrapper";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/svgs";
import profileImage from "../../../public/images/profileImage.png";
import { searchData, workData } from "@/components/HomeRightbar/data";
import cls from "classnames";
import { useModals } from "@/contexts/Modals";
import { useState } from "react";

export const Rightbar = ({ className }) => {
  return (
    <RightbarWrapper className={cls(`flex flex-col ${className} `)}>
      <div className="bg-white rounded-2xl px-4 lg:px-5 pb-2">
        <div className="flex sm:flex-col items-center pt-4 sm:pt-8 pb-2.5 sm:pb-4 gap-2.5 sm:gap-0  border-b">
          <Image
            className="rounded-full border-[3px] border-primary"
            src={profileImage}
            alt="Profile Image"
            width={80}
            height={80}
          />
          <div>
            <p className="sm:mt-2.5 sm:mx-2 text-4xl text-grey-400">
              James Bond
            </p>
            <p className="text-base font-medium text-grey-500">
              Registered Nurse
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center pt-4 pb-2.5 sm:pb-4 border-b">
          <p className="flex flex-col sm:block text-base font-medium text-grey-400">
            <span>
              Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum,
            </span>
            <Link
              href="#"
              className="sm:ml-1 text-primary text-base font-semibold"
            >
              Show more
            </Link>
          </p>
        </div>
        <div className="flex flex-col  pt-2.5 sm:pt-4 pb-2.5 sm:pb-4 border-b items-start gap-2.5">
          <p className=" text-base font-medium text-grey-400 flex  gap-1.5 cursor-pointer">
            <span>
              <Icon
                name="telephone"
                className="min-w-8 min-h-8 hover:border-primary"
              />
            </span>
            <span className="text-base font-medium  flex items-center">
              111-111-1111
            </span>
          </p>
          <p className=" text-base font-medium text-grey-400 flex  gap-1.5 cursor-pointer">
            <span>
              <Icon
                name="envolope"
                className="min-w-8 min-h-8 hover:border-primary"
              />
            </span>
            <span className="text-base font-medium flex items-center">
              james.bond@gmail.com
            </span>
          </p>
          <p className=" text-base font-medium text-grey-400 flex  gap-1.5 cursor-pointer">
            <span>
              <Icon
                name="pointer"
                className="min-w-8 min-h-8 hover:border-primary"
              />
            </span>
            <span className="text-base font-medium flex items-center">
              111 test Drive, New York City, NY 10001
            </span>
          </p>
        </div>
        <div className="flex flex-col pt-2.5 sm:pt-4 pb-2.5 sm:pb-4 border-b items-start gap-2.5">
          <div className="flex gap-1.5">
            <span>
              <Icon
                name="case"
                className="min-w-8 min-h-8 hover:border-primary"
              />
            </span>
            <div className="">
              <p className=" text-base font-medium text-grey-500 flex  gap-1.5 cursor-pointer">
                <span className="text-base font-medium flex items-center">
                  Primary Specialty
                </span>
              </p>
              <p className=" text-base font-medium text-grey-400 flex  gap-1.5 cursor-pointer">
                <span className="text-base font-medium flex items-center">
                  Case Management
                </span>
              </p>
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
              <p className=" text-base font-medium text-grey-500 flex  gap-1.5 cursor-pointer">
                <span className="text-base font-medium flex items-center">
                  Years of Experience
                </span>
              </p>
              <p className=" text-base font-medium text-grey-400 flex  gap-1.5 cursor-pointer">
                <span className="text-base font-medium flex items-center">
                  14
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col pt-2.5 sm:pt-4 pb-2.5 sm:pb-4 border-b items-start gap-2.5 ">
          <p className=" text-base font-medium text-grey-500 flex  gap-1.5 cursor-pointer">
            Search Preferences
          </p>
          <div className="flex gap-1.5 flex-wrap">
            {searchData?.map((data, index) => (
              <p
                key={`${data}-option-${index + 1}`}
                className=" text-base font-medium text-grey-400 flex  cursor-pointer"
              >
                {data},
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col pt-2.5 sm:pt-4  items-start gap-2.5 mb-4 sm:mb-8">
          <p className=" text-base font-medium text-grey-500 flex  gap-1.5 cursor-pointer">
            Workplace Preferences
          </p>
          <div className="flex gap-1.5 flex-wrap">
            {workData?.map((data, index) => (
              <p
                key={`${data}-option-${index + 1}`}
                className=" text-base font-medium text-grey-400 flex  cursor-pointer"
              >
                {data},
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="flex items-center justify-between mb-2">
        <h4 className="text-base font-semibold text-grey-400">Featured Jobs</h4>
        <Button
          color="primary"
          variant="text"
          className="flex gap-2 hover:animate-pulse"
        >
          Show more
          <ArrowRightIcon />
        </Button>
      </div>
      <JobCard className="mb-5" />
      <JobCard className="mb-5" />
      <JobCard /> */}
    </RightbarWrapper>
  );
};
export const MobileRightbar = ({ className }) => {
  const { setInformation } = useModals();
  const [text, setText] = useState(
    "Committed and versatile healthcare professional with extensive  experience across a variety of healthcare settings. Known for providing top-notch care and support, excelling in fast-paced environments, and adept at addressing diverse patient needs with empathy and proficiency. With a strong foundation in patient care principles, equipped to deliver exceptional service whether in direct patient care, administrative roles, or team collaboration. Driven by a passion for improving patient outcomes and enhancing the quality of healthcare delivery"
  );
  const [showMore, setShowMore] = useState(false);
  return (
    <div
      className={cls`bg-white rounded-2xl px-4 sm:px-5 pb-2 my-4 flex flex-col lg:flex-row ${className}`}
    >
      <div className="w-full lg:w-4/6 sm:pr-5 lg:border-r border-grey-100">
        <div className="flex  justify-between  ">
          <div className="flex pt-4 lg:pt-8 pb-2.5 lg:pb-5 gap-2.5   ">
            <Image
              className="rounded-full border-2 border-primary"
              src={profileImage}
              alt="Profile Image"
              width={80}
              height={80}
            />
            <div>
              <p className=" text-4xl text-grey-400">James Bond</p>
              <p className=" text-base font-medium text-grey-500">Nursing</p>
              <p className="text-base font-medium text-grey-500">
                Registered Nurse (RN)
              </p>
            </div>
          </div>
          <div className="flex items-start justify-start pt-4 lg:pt-8">
            <Icon
              name="edit"
              className="min-w-8 min-h-8  hover:border-primary"
              aria-hidden="true"
              onClick={() => setInformation(true)}
            />
          </div>
        </div>
        <div className="flex flex-col  py-2.5  border-b lg:border-0">
          <div className="hidden md:block">
            <p className={`text-grey-400 font-medium  lg:pb-0 `}>
              Bio:
              <span className={`text-base text-grey-500 font-medium`}>
                {text}
              </span>
            </p>
          </div>
          <div className="block md:hidden">
            <p className={`text-grey-400 font-medium  lg:pb-0 `}>
              Bio:
              <span className={`text-base text-grey-500 font-medium`}>
                {showMore ? text : `${text.substring(0, 140)}...`}
              </span>
            </p>
            <p
              className="text-base font-semibold text-primary underline pb-2.5"
              onClick={() => setShowMore(showMore ? false : true)}
            >
              {showMore ? "Show Less" : "Show More"}
            </p>
          </div>

          <div className="flex flex-col  pt-2.5 lg:pt-4  lg:pb-4  items-start gap-2.5">
            <p className=" text-base font-medium text-grey-400 flex  gap-1.5 cursor-pointer">
              <span>
                <Icon
                  name="telephone"
                  className="min-w-8 min-h-8 hover:border-primary"
                />
              </span>
              <span className="text-base font-medium  flex items-center">
                111-111-1111
              </span>
            </p>
            <p className=" text-base font-medium text-grey-400 flex  gap-1.5 cursor-pointer">
              <span>
                <Icon
                  name="envolope"
                  className="min-w-8 min-h-8 hover:border-primary"
                />
              </span>
              <span className="text-base font-medium flex items-center">
                james.bond@gmail.com
              </span>
            </p>
            <p className=" text-base font-medium text-grey-400 flex  gap-1.5 cursor-pointer">
              <span>
                <Icon
                  name="pointer"
                  className="min-w-8 min-h-8 hover:border-primary"
                />
              </span>
              <span className="text-base font-medium flex items-center">
                111 test Drive, New York City, NY 10001
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-2/6">
        <div className="flex flex-col pl-0 lg:pl-5 pt-2.5 lg:py-5 pb-2.5  border-b items-start gap-2.5 ">
          <div className="flex justify-between w-full">
            <p className=" text-base font-medium text-grey-500 flex  gap-1.5 cursor-pointer">
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
                className=" text-base font-medium text-grey-400 flex  cursor-pointer"
              >
                {data},
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col pl-0 lg:pl-5  py-2.5 lg:py-5 border-b items-start gap-2.5 ">
          <div className="flex justify-between w-full">
            <p className=" text-base font-medium text-grey-500 flex  gap-1.5 cursor-pointer">
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
                className=" text-base font-medium text-grey-400 flex  cursor-pointer"
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
                <p className=" text-base font-medium text-grey-500 flex  gap-1.5 cursor-pointer">
                  <span className="text-base font-medium flex items-center">
                    Primary Specialty
                  </span>
                </p>
                <p className=" text-base font-medium text-grey-400 flex  gap-1.5 cursor-pointer">
                  <span className="text-base font-medium flex items-center">
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
              <p className=" text-base font-medium text-grey-500 flex  gap-1.5 cursor-pointer">
                <span className="text-base font-medium flex items-center">
                  Years of Experience
                </span>
              </p>
              <p className=" text-base font-medium text-grey-400 flex  gap-1.5 cursor-pointer">
                <span className="text-base font-medium flex items-center">
                  14
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
