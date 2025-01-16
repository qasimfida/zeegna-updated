"use client";

import React, { useEffect, useState } from "react";
import { BarsMenu } from "@/svgs/icons";
import FilterInput from "@/components/FilterInput";
import Tab from "@/components/Tab";
import JobAppliedCard from "@/components/JobAppliedCard";
import { usePageLayout } from "@/contexts/PageLayout";
import { useRouter, useSearchParams } from "next/navigation";

import Pagination from "@/components/Pagination";
import Select from "@/components/Select";
import { discoverData } from "../../containers/Work/data";
import { useDrawer } from "@/contexts/Drawers";

export const Discover = ({ tabName }) => {
  const tags = [
    { id: "all", name: "All Jobs" },
    { id: "recommended", name: "Recommended" },
    { id: "favorites", name: "Favorites" },
  ];

  const [allJobsData, setAllJobsData] = useState(discoverData);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const router = useRouter();

  const { setGlobalValue } = usePageLayout();

  const allJobs = allJobsData?.filter(
    (item) =>
      item.status === "all" ||
      item.status === "recommended" ||
      item.status === "favorites"
  );
  const allJobsPaginated = allJobs.slice(indexOfFirstItem, indexOfLastItem);

  const favoritesJobs = allJobsData?.filter(
    (item) => item.status === "favorites"
  );
  const favoritesJobsPaginated = favoritesJobs.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const recommendedJobs = allJobsData?.filter(
    (item) => item.status === "recommended"
  );
  const recommendedJobsPaginated = recommendedJobs.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handleAddToFavorites = (e, id) => {
    e.stopPropagation();
    setAllJobsData((prevJobs) =>
      prevJobs.map((job) =>
        job.id === id
          ? { ...job, status: job.status === "favorites" ? "all" : "favorites" }
          : job
      )
    );
  };
  const params = useSearchParams();
  const tab = params.get("tab") || "all";

  useEffect(() => {
    setCurrentPage(1);
  }, [tab]);

  const selectedTab = tags.find((i) => i.id === tab);
  const { toggleFilter } = useDrawer();
  return (
    <div className="">
      <div className="bg-white rounded-2xl p-5 mt-5">
        <div className="flex flex-col sm:flex-row  items-center justify-between w-full gap-4">
          <div className="flex justify-center flex-wrap gap-4 xl:gap-2.5 w-full lg:justify-between">
            <div className="hidden gap-4 lg:gap-2.5 lg:flex ">
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
            <div className="flex flex-wrap  w-full lg:w-52  gap-4 justify-between">
              <FilterInput
                readOnly={true}
                handleDrawerClick={() => toggleFilter(true)}
                placeholder="Filter"
                icon={<BarsMenu />}
              />
            </div>
          </div>
        </div>
        <div className="w-full grid gap-3.5 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 mt-8">
          {tab === "all" &&
            allJobsPaginated?.map(
              ({ id, respondBy, cardData, status }, index) => {
                return (
                  <JobAppliedCard
                    key={`${respondBy}-option-${index + 1}`}
                    id={id}
                    isInRightbar={false}
                    cardData={cardData}
                    variant={status}
                    outsideCaraousal={true}
                    hasMessage={false}
                    handleClick={() => {
                      router.push(`/work/${tabName}/${id}`);
                      setGlobalValue({
                        hasRightbar: true,
                        hasTabbar: true,
                      });
                    }}
                    handleAddToFavorites={handleAddToFavorites}
                  />
                );
              }
            )}
          {tab === "all" ||
            (tab === "favorites" &&
              favoritesJobsPaginated?.map(
                ({ id, respondBy, cardData, status }, index) => {
                  return (
                    <JobAppliedCard
                      key={`${respondBy}-option-${index + 1}`}
                      id={id}
                      isInRightbar={false}
                      cardData={cardData}
                      variant={status}
                      outsideCaraousal={true}
                      hasMessage={false}
                      isFavorite={true}
                      handleClick={() => {
                        router.push(`/work/${tabName}/${id}`);
                      }}
                      handleAddToFavorites={handleAddToFavorites}
                    />
                  );
                }
              ))}
          {tab === "all" ||
            (tab === "recommended" &&
              recommendedJobsPaginated?.map(
                ({ id, respondBy, cardData, status }, index) => {
                  return (
                    <JobAppliedCard
                      key={`${respondBy}-option-${index + 1}`}
                      id={id}
                      isInRightbar={false}
                      cardData={cardData}
                      variant={status}
                      outsideCaraousal={true}
                      hasMessage={false}
                      handleClick={() => {
                        router.push(`/work/${tabName}/${id}`);
                      }}
                      handleAddToFavorites={handleAddToFavorites}
                    />
                  );
                }
              ))}
        </div>
      </div>
      {tab === "all" && Math.ceil(allJobs?.length / itemsPerPage) > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={allJobs?.length}
          paginate={paginate}
          itemsPerPage={itemsPerPage}
        />
      )}
      {tab === "favorites" &&
        Math.ceil(favoritesJobs?.length / itemsPerPage) > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={favoritesJobs?.length}
            paginate={paginate}
            itemsPerPage={itemsPerPage}
          />
        )}
      {tab === "recommended" &&
        Math.ceil(recommendedJobs?.length / itemsPerPage) > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={recommendedJobs?.length}
            paginate={paginate}
            itemsPerPage={itemsPerPage}
          />
        )}
    </div>
  );
};
