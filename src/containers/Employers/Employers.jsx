"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Tab from "@/components/Tab";
import Select from "@/components/Select";
import Pagination from "@/components/Pagination";
import FilterInput from "@/components/FilterInput";
import { useDrawer } from "@/contexts/Drawers";
import { BarsMenu } from "@/svgs/BarsMenu";
import { employersData } from "./data";
import EmployerCard from "@/components/EmployerCard";

export const Employers = () => {
  const { toggleFilter } = useDrawer();
  const tags = [
    { id: "all", name: "All Employers" },
    { id: "partners", name: "Trusted Partners" },
    { id: "favorites", name: "Favorites" },
  ];
  const params = useSearchParams();
  const tab = params.get("tab") || "all";
  const selectedTab = tags.find((i) => i.id === tab);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const router = useRouter();

  const employersPaginated = employersData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const favoriteEmployers = employersData?.filter(
    (item) => item.status === "favorites"
  );
  const favoriteEmployersPaginated = favoriteEmployers.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const recommendedEmployers = employersData?.filter(
    (item) => item.partner
  );
  const recommendedEmployersPaginated = recommendedEmployers.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [tab]);

  return (
    <div className="flex flex-col justify-between sm:auto static lg:sticky ">
      <div className="bg-white p-5 rounded-2xl p-5">
        <div className="flex flex-col items-center justify-between w-full gap-4">
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
                placeholder="Filter"
                icon={<BarsMenu />}
                handleDrawerClick={() => toggleFilter(true)}
              />
            </div>
          </div>
        </div>
        <div className="w-full grid gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 mt-8">
          {tab === "all" &&
            employersPaginated?.map((job, index) => {
              return (
                <EmployerCard
                  key={`${index}-option-`}
                  data={job}
                  handleClick={(id) => {
                    setCurrentPage(1);
                    router.push(`/employers/${id}/overview`);
                  }}
                />
              );
            })}
          {tab === "all" ||
            (tab === "favorites" &&
              favoriteEmployersPaginated?.map((job, index) => {
                return (
                  <EmployerCard
                    key={`${index}-option-`}
                    data={job}
                    handleClick={() => {
                      setCurrentPage(1);
                      router.push(`/employers/${id}/overview`);
                    }}
                  />
                );
              }))}
          {tab === "all" ||
            (tab === "partners" &&
              recommendedEmployersPaginated?.map((job, index) => {
                return (
                  <EmployerCard
                    key={`${index}-option-`}
                    data={job}
                    handleClick={() => {
                      setCurrentPage(1);
                      router.push(`/employers/${id}/overview`);
                    }}
                  />
                );
              }))}
        </div>
      </div>
      {tab === "all" && Math.ceil(employersData?.length / itemsPerPage) > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={employersData?.length}
          paginate={paginate}
          itemsPerPage={itemsPerPage}
        />
      )}
      {tab === "favorites" &&
        Math.ceil(favoriteEmployers?.length / itemsPerPage) > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={favoriteEmployers?.length}
            paginate={paginate}
            itemsPerPage={itemsPerPage}
          />
        )}
      {tab === "partners" &&
        Math.ceil(recommendedEmployers?.length / itemsPerPage) > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={recommendedEmployers?.length}
            paginate={paginate}
            itemsPerPage={itemsPerPage}
          />
        )}
    </div>
  );
};
