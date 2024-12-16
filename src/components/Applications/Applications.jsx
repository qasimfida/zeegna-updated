"use client";

import React, { useState } from "react";
import ApplicationCard from "@/components/ApplicationCard";
import { useRouter, useSearchParams } from "next/navigation";
import { applicationsData } from "../../containers/Work/data";
import Tab from "../Tab";
import Select from "../Select";
import Pagination from "../Pagination";
import Button from "../Button";
import Image from "next/image";

export const Applications = ({ tabName }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const tags = [
    { id: "all", name: "All Applications" },
    { id: "review", name: "In Review" },
    { id: "shortlisted", name: "Shortlisted" },
    { id: "interviewing", name: "Interview" },
    { id: "offerrecieved", name: "Offer Recieved" },
    { id: "backgroundcheck", name: "Background Check" },
    { id: "hired", name: "Hired" },
    { id: "archived", name: "Archived" },
    { id: "withdrawn", name: "Withdrawn" },
  ];

  const allApplicationsPaginated = applicationsData?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const review = applicationsData?.filter((item) => item.status === "review");
  const reviewPaginated = review?.slice(indexOfFirstItem, indexOfLastItem);

  const shortlisted = applicationsData?.filter(
    (item) => item.status === "shortlisted"
  );
  const shortlistedPaginated = shortlisted?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const interviewing = applicationsData?.filter(
    (item) => item.status === "interviewing"
  );
  const interviewingPaginated = interviewing?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const offerrecieved = applicationsData?.filter(
    (item) => item.status === "offerrecieved"
  );
  const offerrecievedPaginated = offerrecieved?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const backgroundcheck = applicationsData?.filter(
    (item) => item.status === "backgroundcheck"
  );
  const backgroundcheckPaginated = backgroundcheck?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const hired = applicationsData?.filter(
    (item) => item.status === "shortlisted"
  );
  const hiredPaginated = hired?.slice(indexOfFirstItem, indexOfLastItem);

  const archived = applicationsData?.filter(
    (item) => item.status === "archived"
  );
  const archivedPaginated = archived?.slice(indexOfFirstItem, indexOfLastItem);

  const withdrawn = applicationsData?.filter(
    (item) => item.status === "withdrawn"
  );
  const withdrawnPaginated = withdrawn?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const declined = applicationsData?.filter(
    (item) => item.status === "declined"
  );
  const declinedPaginated = declined?.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const router = useRouter();
  const params = useSearchParams();
  const tab = params.get("tab") || "all";

  const selectedTab = tags.find((i) => i.id === tab);

  return (
    <div>
      <div className="bg-white rounded-2xl p-5 mt-5 ">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-2.5">
          <div className=" flex flex-col sm:flex-row  items-center justify-between w-full gap-4">
            <div className="flex justify-center flex-wrap gap-4 xl:gap-2.5 w-full lg:justify-between">
              <div className="hidden w-full justify-start gap-4 lg:flex flex-wrap">
                {tags?.map((tag) => (
                  <Tab key={`activites-${tag.id + 1}`} tab={tab} tag={tag} />
                ))}
              </div>
              <div className="lg:hidden bg-white rounded-2xl flex items-center w-full">
                <Select
                  options={tags}
                  value={selectedTab}
                  onChange={(tag) => {
                    setCurrentPage(1);
                    router.push(`?tab=${tag.id}`);
                  }}
                  variant="simple"
                  selectClass="!rounded-2xl font-medium !h-8"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-8">
          {tab === "all" &&
            allApplicationsPaginated?.map((notification, index) => {
              const id = index + 1;
              return (
                <ApplicationCard
                  key={`notification-${id}`}
                  notification={notification}
                  actionButton={false}
                />
              );
            })}
          {tab === "review" &&
            reviewPaginated?.map((notification, index) => {
              const id = index + 1;
              return (
                <ApplicationCard
                  key={`notification-${id}`}
                  notification={notification}
                  actionButton={false}
                />
              );
            })}
          {tab === "shortlisted" &&
            shortlistedPaginated?.map((notification, index) => {
              const id = index + 1;
              return (
                <ApplicationCard
                  key={`notification-${id}`}
                  notification={notification}
                  actionButton={false}
                />
              );
            })}
          {tab === "interviewing" &&
            interviewingPaginated?.map((notification, index) => {
              const id = index + 1;
              return (
                <ApplicationCard
                  key={`notification-${id}`}
                  notification={notification}
                  actionButton={false}
                />
              );
            })}
          {tab === "offerrecieved" &&
            offerrecievedPaginated?.map((notification, index) => {
              const id = index + 1;
              return (
                <ApplicationCard
                  key={`notification-${id}`}
                  notification={notification}
                  actionButton={false}
                />
              );
            })}
          {tab === "backgroundcheck" &&
            backgroundcheckPaginated?.map((notification, index) => {
              const id = index + 1;
              return (
                <ApplicationCard
                  key={`notification-${id}`}
                  notification={notification}
                  actionButton={false}
                />
              );
            })}
          {tab === "hired" &&
            hiredPaginated?.map((notification, index) => {
              const id = index + 1;
              return (
                <ApplicationCard
                  key={`notification-${id}`}
                  notification={notification}
                  actionButton={false}
                />
              );
            })}
          {tab === "archived" &&
            archivedPaginated?.map((notification, index) => {
              const id = index + 1;
              return (
                <ApplicationCard
                  key={`notification-${id}`}
                  notification={notification}
                  actionButton={false}
                />
              );
            })}
          {tab === "withdrawn" &&
            withdrawnPaginated?.map((notification, index) => {
              const id = index + 1;
              return (
                <ApplicationCard
                  key={`notification-${id}`}
                  notification={notification}
                  actionButton={false}
                />
              );
            })}
          {tab === "declined" &&
            declinedPaginated?.map((notification, index) => {
              const id = index + 1;
              return (
                <ApplicationCard
                  key={`notification-${id}`}
                  notification={notification}
                  actionButton={false}
                />
              );
            })}
        </div>
        {tab === "all" &&
          Math.ceil(applicationsData?.length / itemsPerPage) > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={applicationsData?.length}
              paginate={paginate}
              itemsPerPage={itemsPerPage}
            />
          )}
      </div>
      <div className="bg-white rounded-2xl p-5 md:block mt-5">
        <div className="flex flex-col-reverse md:flex md:flex-row flex-nowrap items-center gap-4 md:gap-0">
          <div className="relative w-full justify-center md:justify-start text-center md:text-start lg:w-2/4 xl:w-[55%]">
            <h3 className="my-1 block w-full text-grey-400 text-5xl font-semibold md:max-w-lg tracking">
              Still Looking for Jobs?
            </h3>
            <p className="block text-base w-full font-medium text-grey-400 md:max-w-80 mb-2.5 md:mb-5">
              We have many other exciting jobs for you to browse and apply.
              Don&apos;t settle with status quo
            </p>

            <Button
              className={`flex !text-base !px-10 !py-1 bg-white !text-grey-1800 !border-grey-1800 !font-medium border flex items-center justify-center w-full md:w-52 !h-11 hover:bg-grey-1800 hover:!text-white`}
              size="sm"
              color="tag"
              variant="tag"
            >
              Browse Jobs
            </Button>
          </div>
          <div className="relative h-72 w-full">
            <Image
              src="/images/employer/browseJobs.png"
              fill
              style={{ objectFit: "contain" }}
              alt="slider-promo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
