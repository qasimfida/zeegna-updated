import React, { useState } from "react";
import ActivitiesCard from "@/components/ActivitiesCard";
import Select from "@/components/Select";
import { useRouter, useSearchParams } from "next/navigation";
import { NoNotificationsIcon } from "@/svgs/NoNotificationsIcon";
import Tab from "@/components/Tab";

const Notifications = ({ data }) => {
  const [notificationsList, setNotificationsList] = useState(data);
  const router = useRouter();
  const tags = [
    { id: "all", name: "All Notifications" },
    { id: "recent", name: "Most Recent" },
    { id: "oldest", name: "Oldest" },
  ];

  const params = useSearchParams();
  const tab = params.get("tab") || "all";

  const selectedTab = tags.find((i) => i.id === tab);

  const handleDelete = (id) => {
    const newList = notificationsList?.filter((item) => item.id !== id);
    setNotificationsList(newList);
  };

  return (
    <div className="bg-white rounded-2xl p-5 pb-[1px]">
      <div className="flex justify-center flex-wrap gap-4 xl:gap-2.5 w-full lg:justify-between mb-7">
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
        <div className="flex flex-col gap-4 my-4">
          {notificationsList.length > 0 ? (
            notificationsList?.map((notification, index) => {
              const id = index + 1;
              return (
                <ActivitiesCard
                  key={`notification-${id}`}
                  notification={notification}
                  actionButton={false}
                  discoverButton={true}
                  handleDelete={handleDelete}
                />
              );
            })
          ) : (
            <div className="flex items-center justify-center w-full border rounded-2xl p-5 mb-[6.875rem]">
              <div className="flex flex-col items-center">
                <NoNotificationsIcon />
                <p className="text-4xl text-grey-400  mt-2.5">
                  You have no Notifications
                </p>
                <p className="text-base text-grey-400 font-normal">
                  You do not have any Notifications
                </p>
              </div>
            </div>
          )}
        </div>
      }
    </div>
  );
};

export default Notifications;
