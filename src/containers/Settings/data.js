"use client";

import { LockIcon, BellRingingIcon } from "@/svgs/icons";
import Notifications from "./elements/Notifications";
import ChangePassword from "./elements/ChangePassword";
import { notificationSettings } from "@/components/General/data";

export const tabData = [
  {
    id: "settings/notifications",
    label: "Account Notifications",
    component: <Notifications data={notificationSettings} />,
    icon: <BellRingingIcon className="w-5 h-5" aria-hidden="true" />,
  },
  {
    id: "settings/change-password",
    label: "Password",
    component: <ChangePassword />,
    icon: <LockIcon className="w-5 h-5" aria-hidden="true" />,
  },
];
