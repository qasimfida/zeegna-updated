"use client";

import React from "react";
import GreetingsCard from "@/components/GreetingsCard";
import JobsCard from "@/components/JobsCard";
import Referal from "@/components/Referal";
import HourlyPay from "@/components/HourlyPay";
import { blogs, sliderMobileData } from "./data";
import Caraousal from "@/components/Caraousal";
import CaraousalMobile from "@/components/CaraousalMobile";
import Blogs from "@/components/BlogsWithHeader";
import { useRouter } from "next/navigation";
import ProfileCompletion from "@/components/ProfileCompletion";
import { notification } from "@/components/General/data";

export const Dashboard = () => {
  const router = useRouter();
  return (
    <div>
      <GreetingsCard />

      <div className="pt-4">
        <ProfileCompletion className="container:hidden block" />
      </div>

      <JobsCard />

      <div className="caraousal-container">
        {/* <div className="hidden sm:block">
          <Caraousal heading="Recent Invites" sliderData={sliderMobileData} />
        </div> */}
        <div className="hidden sm:block">
          <Caraousal
            heading="Recent Invites"
            sliderData={sliderMobileData}
            jobCardVariant="invite"
            viewAll={() => router.push("/work/invites")}
          />
        </div>
        <div className="block sm:hidden">
          <CaraousalMobile
            heading="Recent Invites"
            sliderData={sliderMobileData}
            viewAll={() => router.push("/work/invites")}
          />
        </div>
      </div>

      <div className="caraousal-container">
        <div>
          <Caraousal
            heading="Notifications"
            sliderData={notification}
            variant="task"
            viewAll={() => router.push("/tasks")}
          />
        </div>
      </div>

      <div className="caraousal-container">
        <div className="hidden sm:block">
          <Caraousal
            heading="Recomended Jobs"
            sliderData={sliderMobileData}
            jobCardVariant="job"
            viewAll={() => router.push(`/work/discover/?tab=recommended`)}
          />
        </div>
        <div className="block sm:hidden">
          <CaraousalMobile
            heading="Recomended Jobs"
            sliderData={sliderMobileData}
            jobCardVariant="job"
            viewAll={() => router.push(`/work/discover/?tab=recommended`)}
          />
        </div>
      </div>
      <HourlyPay />
      <Blogs blogs={blogs} heading="Resources" viewAll />
      <Referal />
    </div>
  );
};
