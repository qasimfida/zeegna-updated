"use client";

import React from "react";
import {
  BrowseIcon,
  SavedJobIcon,
  ApplicationIcon,
  UpdateProfileIcon,
} from "@/svgs/icons";
import { useRouter } from "next/navigation";

export const JobsCard = () => {
  const router = useRouter();
  const handleRoute = (route) => () => {
    router.push(route);
  };
  return (
    <div className="flex flex-wrap gap-3 lg:flex-nowrap justify-center p-5 mt-5 bg-white rounded-2xl">
      <div className="w-full flex flex-col gap-3">
        <div
          className="flex p-4 rounded-2xl min-h-[4.375rem]  ring-grey-100 ring-1 hover:ring-black cursor-pointer hover:drop-shadow-xl"
          onClick={handleRoute("/work/discover")}
        >
          <div className="px-3 py-4 bg-primary-1500 text-white rounded-2xl mr-4">
            <BrowseIcon />
          </div>
          <div className=" w-auto">
            <h4 className="text-4xl text-grey-400 ">Browse Jobs</h4>
            <p className="text-base text-grey-500 font-medium truncate">
              Search to find the right jobs
            </p>
          </div>
        </div>
        <div
          className="flex p-4 rounded-2xl min-h-[4.375rem]  ring-grey-100 ring-1 hover:ring-black cursor-pointer hover:drop-shadow-xl"
          onClick={handleRoute("/work/applications")}
        >
          <div className="px-3 py-4 bg-success-700 text-white rounded-2xl mr-4">
            <ApplicationIcon className="pl-1.5" />
          </div>
          <div className=" w-full">
            <h4 className="text-4xl text-grey-400 ">View Applications</h4>
            <p className="text-base text-grey-500 font-medium truncate">
              Find status of your applications
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3">
        <div className="flex p-4 rounded-2xl min-h-[4.375rem]  ring-grey-100 ring-1 hover:ring-black cursor-pointer hover:drop-shadow-xl">
          <div className="px-3 py-4 bg-warning-700 text-white rounded-2xl mr-4">
            <SavedJobIcon className="pl-1.5" />
          </div>
          <div className=" w-full">
            <h4 className="text-4xl text-grey-400 ">Saved Jobs</h4>
            <p className="text-base text-grey-500 font-medium truncate">
              Go back to your search results
            </p>
          </div>
        </div>
        <div
          className="flex p-4 rounded-2xl min-h-[4.375rem]  ring-grey-100 ring-1 hover:ring-black cursor-pointer hover:drop-shadow-xl"
          onClick={handleRoute("/profile/overview")}
        >
          <div className="px-3 py-4 bg-primary-1600 text-white rounded-2xl mr-4">
            <UpdateProfileIcon className="pl-1.5" />
          </div>
          <div className=" w-full">
            <h4 className="text-4xl text-grey-400 ">Update Profile</h4>
            <p className="text-base text-grey-500 font-medium truncate">
              Bring your profile up to speed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
