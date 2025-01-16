import React from "react";
import { useModals } from "@/contexts/Modals";
import Modal from "../Modal";
import {
  EyeIcon,
  DocIcon,
  LaptopIcon,
  ScanIcon,
  OpenEnvolopeIcon,
  ThumbIcon,
  DangerIcon,
} from "@/svgs/icons";

export const UpdateStatusModal = () => {
  const { status, setStatus } = useModals();

  return (
    <Modal
      id="status"
      open={status}
      onClose={() => setStatus(false)}
      title="Update Status"
      className="!max-w-[46.5rem] !w-full"
      footer={
        <div className="flex items-center text-center w-full justify-center">
          <p className="text-sm font-medium text-primary-2600">Cancel</p>
        </div>
      }
      footerClass="border-t-0 mt-5 border-gray-100  pr-3"
    >
      <div className="">
        <div className="border-b py-5 text-center">
          <p className="text-sm font-semibold text-grey-500">
            Update your application status. Employer will not see this status.
          </p>
        </div>
        <div className="">
          <p className="text-sm font-medium text-grey-400 border-b py-2.5 px-4 flex items-center gap-2.5 hover:bg-primary-2400 cursor-pointer">
            <EyeIcon className="text-primary" />
            In Review
          </p>
          <p className="text-sm font-medium text-grey-400 border-b py-2.5 px-4 flex items-center gap-2.5 hover:bg-primary-2400 cursor-pointer">
            <DocIcon className="text-primary" />
            Shortlisted
          </p>
          <p className="text-sm font-medium text-grey-400 border-b py-2.5 px-4 flex items-center gap-2.5 hover:bg-primary-2400 cursor-pointer">
            <LaptopIcon className="text-primary" />
            Interviewing
          </p>
          <p className="text-sm font-medium text-grey-400 border-b py-2.5 px-4 flex items-center gap-2.5 hover:bg-primary-2400 cursor-pointer">
            <ScanIcon className="text-primary" />
            Background Check
          </p>
          <p className="text-sm font-medium text-grey-400 border-b py-2.5 px-4 flex items-center gap-2.5 hover:bg-primary-2400 cursor-pointer">
            <OpenEnvolopeIcon className="text-primary" />
            Offer Received
          </p>
          <p className="text-sm font-medium text-grey-400 border-b py-2.5 px-4 flex items-center gap-2.5 hover:bg-primary-2400 cursor-pointer">
            <ThumbIcon className="text-primary" />
            Hired
          </p>
          <p className="text-sm font-medium text-grey-400 border-b py-2.5 px-4 flex items-center gap-2.5 hover:bg-primary-2400 cursor-pointer">
            <DangerIcon className="text-danger" />
            Declined by Employer
          </p>
        </div>
      </div>
    </Modal>
  );
};
