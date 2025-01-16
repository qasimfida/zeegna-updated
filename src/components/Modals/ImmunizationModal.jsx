import React from "react";
import { useModals } from "@/contexts/Modals";
import Modal from "../Modal";
import Input from "../Input";
import FileUpload from "../FileUpload";
import { CalendarIcon } from "@/svgs/icons";
import { authorizedToWorkInUs } from "./data";
import { SuggestionDropdown } from "@/components/Select/Select";

export const ImmunizationModal = () => {
  const { immunization, setImmunization, setSteps } = useModals();

  return (
    <Modal
      id="immunization"
      open={immunization}
      onClose={() => setImmunization(false)}
      title="Add Immunization"
      className="!max-w-[46.5rem] !w-full"
      onSave={() => {
        setSteps("immunization", 1);
        setImmunization(false);
      }}
    >
      <div className="">
        <SuggestionDropdown
          placeholder="Immunization Type"
          label="Immunization Type"
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
            placeholder="Expiry Date"
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
