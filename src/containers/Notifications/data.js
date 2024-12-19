"use client";

import { CheckCircleIcon, BellRingingIcon, TicketIcon } from "@/svgs/icons";
import Notifications from "./elements/Notifications";
import Activities from "./elements/Activities";
import Tickets from "./elements/Tickets";
import {
  notification,
  activities,
  ticketsData,
} from "@/components/General/data";

export const tabData = [
  {
    id: "notifications",
    label: "Notifications",
    component: <Notifications data={notification} />,
    icon: <BellRingingIcon className="w-5 h-5" aria-hidden="true" />,
  },
  {
    id: "activities",
    label: "Activities",
    component: <Activities data={activities} />,
    icon: <CheckCircleIcon className="w-5 h-5" aria-hidden="true" />,
  },
  {
    id: "tickets",
    label: "Tickets",
    component: <Tickets data={ticketsData} />,
    icon: <TicketIcon className="w-5 h-5" aria-hidden="true" />,
  },
];
