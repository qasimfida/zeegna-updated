"use client";

import React from "react";
import Button from "../Button";
import KeyDetails from "@/components/KeyDetails";
import {
  certificationsTagsData,
  jobBenefitsData,
  jobInsentivesData,
  jobQualificationsData,
  jobResponsibilitiesData,
} from "./data";
import Certifications from "@/components/Certifications";
import { useRouter, useSearchParams } from "next/navigation";

const renderTagsWithIcons = (tags) => {
  return (
    tags &&
    tags?.map(({ name, type }, index) => (
      <Button
        key={index + 1}
        className={`!text-sm !px-2.5 bg-grey-light text-grey-400 !font-normal border min-w-max h-8`}
        size="sm"
        color="tag"
        variant="tag"
      >
        {name}
      </Button>
    ))
  );
};

export const WorkDetailCard = () => {
  const progress = 70;
  const params = useSearchParams();
  const type = params.get("type");
  const router = useRouter();

  const viewAll = () => {
    router.push(`/work/discover/?tab=recommended`);
  };

  return (
    <div className="rounded-2xl">
      {/* <div className="bg-white rounded-2xl mb-4">
        <JobApplyCard type={type} />
      </div> */}

      {/* <div className="bg-white rounded-2xl mb-4 ">
        <div className="flex items-center gap-4 bg-white rounded-2xl mt-4 p-3">
          <ProgressBar type="circular" progress={progress} />
          <p className="text-sm md:text-base font-semibold text-grey-400">
            {`This job matches ${progress}% of your profile`}
          </p>
        </div>
      </div> */}

      <div className="bg-white rounded-2xl">
        <KeyDetails />
        <Certifications />

        <div className="p-5 flex flex-col  cursor-pointer ">
          <div className={`flex w-full items-center`}>
            <h4 className="text-sm font-semibold md:text-5xl text-grey-400">
              Preferred Skills:
            </h4>
          </div>
          <div className=" mt-2.5 pb-4 border-b">
            <div className="flex items-center flex-wrap gap-2 font-medium text-sm md:text-base text-primary ">
              {renderTagsWithIcons(certificationsTagsData)}
            </div>
          </div>
        </div>

        <div className=" px-5 lg:flex lg:flex-col  cursor-pointer ">
          <div className={`flex w-full items-center`}>
            <h4 className="text-sm font-semibold md:text-5xl text-grey-400">
              Job Description:
            </h4>
          </div>
          <p className="text-sm md:text-base font-medium text-grey-400 mt-2.5 pb-5 border-b">
            The Director of Womens and Infants Services is a critical leadership
            role within a healthcare setting, overseeing the delivery of care in
            departments such as Obstetrics, Gynecology, and Neonatology. This
            position requires an individual with a strong clinical background in
            womens and infant health, combined with exceptional leadership and
            management skills. The director is responsible for setting the
            vision and direction for the service line, ensuring high-quality
            patient care, and maintaining compliance with healthcare standards
            and regulations. The role typically involves collaboration with a
            wide range of healthcare professionals and administrative staff.
          </p>
        </div>

        <div className=" p-5 flex flex-col  cursor-pointer ">
          <div className={`flex w-full items-center`}>
            <h4 className="text-sm font-semibold md:text-5xl text-grey-400">
              {" "}
              Job Responsibilities:
            </h4>
          </div>
          <div className="ml-[1.125rem] mt-2.5 pb-5 border-b">
            <ul className="list-disc">
              {jobResponsibilitiesData?.map(({ name, type }, index) => (
                <li
                  key={`-option-${index + 1}`}
                  className="text-sm md:text-base font-medium text-grey-400"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className=" px-5 flex flex-col  cursor-pointer ">
          <div className={`flex w-full items-center`}>
            <h4 className="text-sm font-semibold md:text-5xl text-grey-400">
              {" "}
              Job Qualifications:
            </h4>
          </div>
          <div className="ml-[1.125rem] mt-2.5 pb-5 border-b">
            <ul className="list-disc">
              {jobQualificationsData?.map(({ name, type }, index) => (
                <li
                  key={`-option-${index + 1}`}
                  className="text-sm md:text-base font-medium text-grey-400"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className=" p-5 flex flex-col  cursor-pointer ">
          <div className={`flex w-full items-center`}>
            <h4 className="text-sm font-semibold md:text-5xl text-grey-400">
              {" "}
              Job Benefits:
            </h4>
          </div>
          <div className="ml-[18px] mt-2.5 pb-5 border-b">
            <ul className="list-disc">
              {jobBenefitsData?.map(({ name, type }, index) => (
                <li
                  key={`-option-${index + 1}`}
                  className="text-sm md:text-base font-medium text-grey-400"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className=" px-5 flex flex-col  cursor-pointer ">
          <div className={`flex w-full items-center`}>
            <h4 className="text-sm font-semibold md:text-5xl text-grey-400">
              {" "}
              Job Incentives:
            </h4>
          </div>
          <div className="ml-[18px] mt-2.5 pb-5 border-b">
            <ul className="list-disc">
              {jobInsentivesData?.map(({ name, type }, index) => (
                <li
                  key={`-option-${index + 1}`}
                  className="text-sm md:text-base font-medium text-grey-400"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className=" p-5 flex flex-col  cursor-pointer ">
          <div className={`flex w-full items-center`}>
            <h4 className="text-sm font-semibold md:text-5xl text-grey-400">
              Additional Details:
            </h4>
          </div>
          <p className="text-sm md:text-base font-medium text-grey-400 mt-2.5">
            The role of a Director of Womens and Infants Services is both
            challenging and immensely rewarding, offering the opportunity to
            make a significant impact on the health and well-being of women and
            infants. It requires a dynamic individual who is passionate about
            maternal and infant health, and who can effectively balance clinical
            expertise with strategic leadership. The director plays a key role
            in shaping the future of womens and infants healthcare services,
            ensuring they are safe, effective, and responsive to the needs of
            patients and their families.
          </p>
        </div>
      </div>
    </div>
  );
};
