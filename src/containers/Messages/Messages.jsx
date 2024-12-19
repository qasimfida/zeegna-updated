"use client";

import React from "react";
import { Sidebar, ChatRoom } from "./elements";
import { useInbox } from "@/contexts/Inbox";
import { useScreenWidth } from "@/hooks";

export const Messages = () => {
  const { selectedContact } = useInbox();
  const width = useScreenWidth();
  return (
    <div className="flex flex-col justify-between sm:auto relative bg-white rounded-2xl border border-grey-100">
      <div className="flex flex-wrap xl:flex-nowrap">
        {width > 1280 ? <Sidebar /> : selectedContact.id ? null : <Sidebar />}
        {width > 1280 || selectedContact.id ? <ChatRoom /> : null}
      </div>
    </div>
  );
};
