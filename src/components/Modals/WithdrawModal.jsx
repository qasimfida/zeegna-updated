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
  WarningIcon,
} from "@/svgs/icons";
import { jobInsentivesData } from "../WorkDetailCard/data";
import { withdrawModalData, withdrawModalFAQData } from "./data";
import Button from "../Button";

export const WithdrawModal = () => {
  const { withdraw, setWithdraw } = useModals();

  return (
    <Modal
      id="withdraw"
      open={withdraw}
      onClose={() => setWithdraw(false)}
      title="Withdraw Application"
      className="!max-w-[46.5rem] !w-full"
      footer={
        <div className="flex justify-between items-center">
          <Button
            variant="text"
            color="warning"
            size="sm"
            className="flex gap-1 hover:ring-1 ring-primary-2600 !text-primary-2600 !h-9 !text-base !font-medium !px-4"
            onClick={() => setWithdraw(false)}
          >
            Cancel
          </Button>
          <Button
            className="!h-9 !px-5 !text-base !font-medium"
            variant="darkContained"
            size="sm"
            onClick={() => setWithdraw(false)}
          >
            Withdraw Application
          </Button>
        </div>
      }
    >
      <div className="">
        <div className="bg-white py-5 border-b">
          <p className="text-base font-medium text-grey-400">
            Clinical Research Coordinator, Registered Nurse
          </p>
          <p className="text-base font-medium text-primary-2600">
            Novant Health
          </p>
          <p className="text-base font-medium text-grey-400">Charlotte, NC</p>
          <p className="text-base font-medium text-grey-500">
            Applied on: May 2, 2024
          </p>
        </div>
        <div className="bg-white py-5 border-b">
          <div className="flex items-center mb-4 gap-2.5">
            <WarningIcon className="text-danger" />
            <p className="text-base font-semibold text-grey-400">
              Review Before Proceeding
            </p>
          </div>
          <div className="ml-[18px]">
            <ul className="list-disc">
              {withdrawModalData?.map(({ name, type }, index) => (
                <li
                  key={`-option-${index + 1}`}
                  className="text-sm md:text-base font-medium text-grey-400"
                >
                  {name}
                </li>
              ))}
              <li className="text-sm md:text-base font-medium text-grey-400">
                Try{" "}
                <span className="text-base font-medium text-primary-2600">
                  messaging
                </span>{" "}
                the employer instead
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white py-5 border-b">
          <p className="text-base font-semibold text-grey-400">
            Why are you no longer interested in this job?
          </p>
          <p className="text-sm font-medium text-grey-400 pb-4">
            Anything you share can help us improve our experience
          </p>
          <div className="">
            {withdrawModalFAQData?.map(({ name, type }, index) => (
              <div
                key={`-option-${index + 1}`}
                className="text-sm md:text-base font-medium text-grey-400 flex items-center gap-2.5"
              >
                <div className="w-3 h-3 border-2 border-grey-200 rounded-full"></div>
                <p>{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};
