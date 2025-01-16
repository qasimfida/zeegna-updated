import React, { useState } from "react";
import ActivitiesCard from "@/components/ActivitiesCard";
import Select from "@/components/Select";
import { useRouter, useSearchParams } from "next/navigation";
import Tab from "@/components/Tab";
import { NoActivitiesIcon } from "@/svgs/NoActivitiesIcon";

const Activities = ({ data }) => {
  const [activitesList, setActivitiesList] = useState(data);
  const router = useRouter();
  const tags = [
    { id: "all", name: "All Activities" },
    { id: "recent", name: "Most Recent" },
    { id: "oldest", name: "Oldest" },
  ];

  const params = useSearchParams();
  const tab = params.get("tab") || "all";

  const selectedTab = tags.find((i) => i.id === tab);

  const handleDelete = (id) => {
    const newList = activitesList?.filter((item) => item.id !== id);
    setActivitiesList(newList);
  };

  return (
    <div className="bg-white rounded-2xl px-2.5 pt-2.5 pb-[1px]">
      <div className="flex justify-center flex-wrap gap-4 xl:gap-2.5 w-full lg:justify-between mb-5">
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
              router.push(`?tab=${tag.id}`);
            }}
            variant="simple"
            selectClass="!rounded-lg font-medium !h-10"
          />
        </div>
      </div>
      {
        <div className="flex flex-col gap-2.5 my-2.5">
          {activitesList.length > 0 ? (
            activitesList?.map((notification, index) => {
              const id = index + 1;
              return (
                <ActivitiesCard
                  key={`notification-${id}`}
                  notification={notification}
                  variant="discoverButton"
                  discoverButton={false}
                  handleDelete={handleDelete}
                />
              );
            })
          ) : (
            <div className="flex items-center justify-center w-full border rounded-2xl p-5 min-h-[22.188rem]">
              <div className="flex flex-col items-center">
                <NoActivitiesIcon />
                <p className="text-4xl text-grey-400  mt-2.5">No Activities</p>
                <p className="text-base text-grey-400 font-normal">
                  We have not recorded any activities
                </p>
              </div>
            </div>
          )}
        </div>
      }
      {/* {tab === "recent" &&
        data?.map((notification, index) => {
          const id = index + 1;
          return (
            <ActivitiesCard
              key={`notification-${id}`}
              notification={notification}
            />
          );
        })}
      {tab === "oldest" &&
        data?.map((notification, index) => {
          const id = index + 1;
          return (
            <ActivitiesCard
              key={`notification-${id}`}
              notification={notification}
            />
          );
        })} */}
    </div>
  );
};

export default Activities;
