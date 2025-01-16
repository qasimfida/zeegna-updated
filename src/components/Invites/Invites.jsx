"use client";

import React, { useEffect, useState } from "react";
import { BarsMenu } from "@/svgs/icons";
import FilterInput from "@/components/FilterInput";
import Tab from "@/components/Tab";
import JobAppliedCard from "@/components/JobAppliedCard";
import { usePageLayout } from "@/contexts/PageLayout";
import { useRouter, useSearchParams } from "next/navigation";
import { invitesData } from "@/containers/Work/data";
import Pagination from "@/components/Pagination";
import Select from "../Select";
import { useDrawer } from "@/contexts/Drawers";

export const Invites = () => {
  const tags = [
    { id: "all", name: "All Invites" },
    { id: "applied", name: "Accepted" },
    { id: "declined", name: "Declined" },
    { id: "expired", name: "Expired" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const router = useRouter();
  const { setGlobalValue } = usePageLayout();

  const acceptedInvites = invitesData?.filter(
    (item) => item.status === "applied"
  );
  const acceptedInvitesPaginated = acceptedInvites.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const declinedInvites = invitesData?.filter(
    (item) => item.status === "declined"
  );
  const declinedInvitesPaginated = declinedInvites.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const expiredInvites = invitesData?.filter(
    (item) => item.status === "expired"
  );
  const expiredInvitesPaginated = expiredInvites.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const all = invitesData?.filter((item) => item.status === "all");
  const allInvitesPaginated = all?.slice(indexOfFirstItem, indexOfLastItem);

  const params = useSearchParams();
  const tab = params.get("tab") || "all";

  useEffect(() => {
    setCurrentPage(1);
  }, [tab]);

  const selectedTab = tags?.find((i) => i.id === tab);

  const { toggleFilter } = useDrawer();
  return (
    <div className="">
      <div className="bg-white rounded-2xl p-5 mt-5">
        <div className=" flex flex-col sm:flex-row  items-center justify-between w-full gap-4">
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
        <div className="w-full grid gap-3.5 sm:grid-cols-2 lg:grid-cols-2 lg:grid xl:grid-cols-2 2xl:grid-cols-3 mt-8">
          {tab === "all" &&
            allInvitesPaginated?.map(
              ({ id, respondBy, cardData, status }, index) => {
                return (
                  <JobAppliedCard
                    key={`${id}-option-${index + 1}`}
                    isInRightbar={false}
                    cardData={cardData}
                    variant={status}
                    outsideCaraousal={true}
                    type="invite"
                    handleClick={() => {
                      router.push(`/work/invites/${id}?type=apply`);
                    }}
                  />
                );
              }
            )}
          {tab === "applied" &&
            acceptedInvitesPaginated?.map(
              ({ id, respondBy, cardData, status }, index) => {
                return (
                  <JobAppliedCard
                    key={`${respondBy}-option-${index + 1}`}
                    isInRightbar={false}
                    cardData={cardData}
                    variant={status}
                    outsideCaraousal={true}
                    type="invite"
                    handleClick={() => {
                      router.push(`/work/invites/${id}?type=applied`);
                    }}
                  />
                );
              }
            )}
          {tab === "declined" &&
            declinedInvitesPaginated?.map(
              ({ id, respondBy, cardData, status }, index) => {
                return (
                  <JobAppliedCard
                    key={`${respondBy}-option-${index + 1}`}
                    isInRightbar={false}
                    cardData={cardData}
                    variant={status}
                    outsideCaraousal={true}
                    type="invite"
                    handleClick={() => {
                      router.push(`/work/invites/${id}?type=declined`);
                      setGlobalValue({
                        hasRightbar: true,
                        hasTabbar: true,
                      });
                    }}
                  />
                );
              }
            )}
          {tab === "expired" &&
            expiredInvitesPaginated?.map(
              ({ id, respondBy, cardData, status }, index) => {
                return (
                  <JobAppliedCard
                    key={`${respondBy}-option-${index + 1}`}
                    isInRightbar={false}
                    cardData={cardData}
                    variant={status}
                    outsideCaraousal={true}
                    type="invite"
                    handleClick={() => {
                      router.push(`/work/invites/${id}?type=expired`);
                      setGlobalValue({
                        hasRightbar: true,
                        hasTabbar: true,
                      });
                    }}
                  />
                );
              }
            )}
        </div>
      </div>
      {tab === "all" &&
        Math.ceil(acceptedInvites?.length / itemsPerPage) > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={acceptedInvites?.length}
            paginate={paginate}
            itemsPerPage={itemsPerPage}
          />
        )}
      {tab === "declined" &&
        Math.ceil(declinedInvites?.length / itemsPerPage) > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={declinedInvites?.length}
            paginate={paginate}
            itemsPerPage={itemsPerPage}
          />
        )}
      {tab === "expired" &&
        Math.ceil(expiredInvites?.length / itemsPerPage) > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={expiredInvites?.length}
            paginate={paginate}
            itemsPerPage={itemsPerPage}
          />
        )}
    </div>
  );
};
