import React from "react";
import { useModals } from "@/contexts/Modals";
import Modal from "../Modal";
import Input from "../Input";
import FileUpload from "../FileUpload";
import { CalendarIcon } from "@/svgs/icons";
import { authorizedToWorkInUs } from "./data";
import { SuggestionDropdown } from "@/components/Select/Select";

export const HealthModal = () => {
  const { health, setHealth, setSteps } = useModals();
  return (
    <Modal
      id="health"
      open={health}
      onClose={() => setHealth(false)}
      title="Add Health Screening"
      className="!max-w-[46.5rem] !w-full"
      onSave={() => {
        setSteps("health", 1);
        setHealth(false);
      }}
    >
      <div className="">
        <SuggestionDropdown
          placeholder="Screening Type"
          label="Screening Type"
          options={authorizedToWorkInUs}
        />
        <div className="flex flex-wrap sm:flex-nowrap gap-6 sm:gap-2.5 w-full items-end ">
          <Input
            placeholder="Issue Date"
            hasIcon
            type="date"
            icon={<CalendarIcon />}
          />
          <Input
            placeholder="Expiration Date"
            hasIcon
            type="date"
            icon={<CalendarIcon />}
          />
        </div>
        <FileUpload className="mt-5" multiple />
      </div>
    </Modal>
  );
};
