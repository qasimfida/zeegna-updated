import React from "react";
import Messages from "@/containers/Messages";
import { InboxProvider } from "@/contexts/Inbox";

const page = () => {
  return (
    <InboxProvider>
      <Messages />
    </InboxProvider>
  );
};

export default page;
