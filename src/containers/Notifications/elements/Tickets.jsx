"use client";

import React from "react";
import TicketCard from "@/components/TicketCard";
import Tab from "@/components/Tab";
import Select from "@/components/Select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  NoTicketsIcon,
  MessagesIcon,
  ClockIcon,
  SupportHourIcon,
  AddIcon,
} from "@/svgs/icons";
import Button from "@/components/Button";
import FileUpload from "@/components/FileUpload";
import dynamic from "next/dynamic";
import TicketHeader from "@/components/TicketHeader";
import TicketMessages from "@/components/TicketMessages";

const Editor = dynamic(() => import("@/components/Editor"), { ssr: false });

const Tickets = ({ data }) => {
  const router = useRouter();
  const tags = [
    { id: "all", name: "All Tickets" },
    { id: "open", name: "Open" },
    { id: "resolved", name: "Resolved" },
  ];
  const addTicketTag = [{ id: "add-ticket", name: "Submit Ticket" }];

  const params = useSearchParams();
  const pathname = usePathname();
  const parts = pathname?.split("/");
  const lastPart = parts[parts.length - 1];

  const tab = params.get("tab") || "all";

  const selectedTab = tags.find((i) => i.id === tab);

  if (lastPart !== "tickets") {
    return (
      <div className={`w-full m-auto items-center`}>
        <TicketHeader />

        <div className="w-full mx-auto bg-white p-5 border rounded-2xl mt-5">
          <div className="flex items-center gap-2.5 border-b pb-2.5">
            <MessagesIcon className="min-w-6 max-w-6 text-primary" />
            <p className="text-4xl text-grey-400 ">Messages</p>
          </div>

          <div className="mt-4">
            <TicketMessages />
          </div>

          {/* <TextEditor /> */}
          <div className="w-full  mt-5">
            <Editor placeholder="Type you Text" />
          </div>
          <FileUpload
            title="Upload Document"
            description="Vorem ipsum dolor sit amet, consectetur adipiscing elit."
            className="mt-4"
            multiple
          />
          <div className="flex w-full pt-4 sm:pt-8 justify-end">
            <Button
              className={`flex !text-sm !px-10 !py-1 bg-white !text-grey-1800 !border-grey-1800 !font-medium border flex items-center justify-center w-full md:w-52 !h-11 hover:bg-grey-1800 hover:!text-white`}
              size="sm"
              color="tag"
              variant="tag"
            >
              Send
            </Button>
          </div>
        </div>
        <div className="w-full mx-auto bg-white px-5 py-4 border rounded-2xl mt-5">
          <div className="flex items-center gap-2.5 border-b pb-2.5">
            <ClockIcon className="min-w-6 max-w-6 text-primary" />
            <p className="text-4xl text-grey-400 ">Support hours</p>
          </div>
          <div className="flex-col lg:flex lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
              <p className="text-base font-medium text-grey-400">
                Note that support tickets are reviewed Monday through Friday
                from 8:00 a.m to 5:000 p.m. CST, except for holidays{" "}
              </p>
            </div>
            <div className="flex justify-center p-8 w-full lg:w-1/2">
              <div className="min-w-max">
                <SupportHourIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-2.5 ">
      <div className="flex justify-center flex-wrap gap-4 xl:gap-2.5 w-full lg:justify-between mb-5">
        <div className="hidden gap-4 lg:gap-2.5 lg:flex ">
          {tags?.map((tag) => (
            <Tab key={`tab-${tag.id + 1}`} tab={tab} tag={tag} />
          ))}
        </div>
        {!data.length > 0 && (
          <div className="hidden gap-4 lg:gap-2.5 lg:flex ">
            {addTicketTag?.map((tag) => (
              <Button
                key={tag.id}
                className={`!text-sm !px-6 !py-1 bg-white !text-grey-1800 !border-grey-1800 !font-medium border flex items-center justify-center min-w-28 h-9 hover:bg-grey-1800 hover:!text-white`}
                size="sm"
                color="tag"
                variant="tag"
              >
                <AddIcon />
                {tag.name}
              </Button>
            ))}
          </div>
        )}
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
      <div className="flex flex-col gap-2.5">
        {data.length > 0 ? (
          data?.map((notification, index) => {
            const id = index + 1;
            return (
              <TicketCard
                key={`notification-${id}`}
                notification={notification}
                actionButton={false}
              />
            );
          })
        ) : (
          <div className="flex items-center justify-center w-full border rounded-2xl py-8">
            <div className="flex flex-col items-center">
              <NoTicketsIcon />
              <p className="text-4xl text-grey-400  mt-2.5">No Tickets</p>
              <p className="text-base text-grey-400 font-normal">
                You have not submitted any tickets
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tickets;
