import React, { useState } from "react";
import NotificationCard from "@/components/NotificationCard";
import Switch from "@/components/Switch";
import Radio from "@/components/Radio";
import { Icon } from "@/svgs";

const RenderSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div className="flex items-center py-6">
      <Switch isOn={isOn} handleToggle={() => setIsOn(!isOn)} />
    </div>
  );
};
const Notifications = ({ data }) => {
  const [emailNotification, setEmailNotification] = useState("no");
  return (
    <div className="bg-white rounded-2xl">
      <div className="px-2.5 pt-[1px] pb-2.5">
        {data?.map((notification, index) => {
          const id = index + 1;
          return (
						<NotificationCard
							key={`notification-${id}`}
							notification={notification}
							actionButton={<RenderSwitch />}
							hasColor={true}
							className="h-auto lg:h-[100px] bg-white"
							iconClass=" "
						/>
					);
        })}
        <div className="w-full m-auto bg-white justify-between px-5 py-4 lg:h-[88px] lg:items-center border rounded-2xl mt-2.5 flex gap-4 flex-wrap lg:flex-nowrap ">
          {/* <div
            className={`border rounded-3xl h-10 w-10 flex items-center justify-center min-h-[2.5rem] min-w-[2.5rem] text-grey-400 border-grey-1400  `}
          >
            <EnvolopeIcon />
          </div> */}
          <Icon
            name="envolope"
            className="min-w-10 !w-10 !h-10 min-h-10 !border border-grey-1400 hover:!text-grey-400 bg-warning-500/50 shrink-0"
          />
          <p className="text-base font-medium text-grey-400 gap-2.5 w-full  lg:w-3/5 flex items-center">
            Send an email when a new job is available:
          </p>
          <div className="flex flex-wrap sm:flex-nowrap gap-2 justify-between lg:justify-around w-full">
            <div className="flex w-full sm:w-auto gap-2.5 items-center">
              <Radio
                variant="dark"
                outlined
                name="No"
                size="lg"
                checked={emailNotification === "No"}
                onChange={() => setEmailNotification("No")}
              />
              <label htmlFor="No" className="text-grey-400 text-sm font-medium">
                No
              </label>
            </div>
            <div className="flex w-full sm:w-auto gap-2.5 items-center">
              <Radio
                variant="dark"
                outlined
                name="Daily"
                size="lg"
                checked={emailNotification === "Daily"}
                onChange={() => setEmailNotification("Daily")}
              />
              <label htmlFor="Daily" className="text-grey-400 text-sm font-medium">
                Daily
              </label>
            </div>
            <div className="flex w-full sm:w-auto gap-2.5 items-center">
              <Radio
                variant="dark"
                outlined
                name="Weekly"
                size="lg"
                checked={emailNotification === "Weekly"}
                onChange={() => setEmailNotification("Weekly")}
              />
              <label htmlFor="Weekly" className="text-grey-400 text-sm font-medium">
                Weekly
              </label>
            </div>
            <div className="flex w-full sm:w-auto gap-2.5 items-center">
              <Radio
                variant="dark"
                outlined
                name="Instantly"
                size="lg"
                checked={emailNotification === "Instantly"}
                onChange={() => setEmailNotification("Instantly")}
              />
              <label htmlFor="Instantly" className="text-grey-400 text-sm font-medium">
                Instantly
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
