import React from "react";
import { useModals } from "@/contexts/Modals";
import Modal from "../Modal";
import { reportModalData } from "./data";
import Button from "../Button";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/components/Editor"), { ssr: false });

export const ReportModal = () => {
  const { report, setReport } = useModals();

  return (
    <Modal
      id="report"
      open={report}
      onClose={() => setReport(false)}
      title="Report Job"
      className="!max-w-[46.5rem] !w-full"
      footer={
        <div className="flex justify-between items-center">
          <Button
            variant="text"
            color="warning"
            size="sm"
            className="flex gap-1 hover:ring-1 ring-primary-2600 !text-primary-2600 !h-9 !text-base !font-medium !px-4"
            onClick={() => setReport(false)}
          >
            Cancel
          </Button>
          <Button
            className="!h-9 !px-5 !text-base !font-medium"
            variant="darkContained"
            size="sm"
            onClick={() => setReport(false)}
          >
            Submit
          </Button>
        </div>
      }
    >
      <div className="">
        <div className="mt-5 border-b pb-5">
          {reportModalData?.map(({ name, type }, index) => (
            <div
              key={`-option-${index + 1}`}
              className="text-sm md:text-base font-medium text-grey-400 flex items-center gap-2.5"
            >
              <div className="w-3 h-3 border-2 border-grey-200 rounded-full"></div>
              <p>{name}</p>
            </div>
          ))}
        </div>
        <div className="pr-2 py-5  border-b pb-5">
          <Editor />
        </div>
        <div className="mt-5 pr-1">
          <p className="text-base font-medium text-grey-400">
            All Job Ads are subject to ZyraHealth&apos;s Terms of Service. We allow
            users to flag postings that may be in violation of those terms. Job
            Ads may also be flagged by Indeed. However, no moderation system is
            perfect, and flagging a posting does not ensure that it
            will be removed.
          </p>
        </div>
      </div>
    </Modal>
  );
};
