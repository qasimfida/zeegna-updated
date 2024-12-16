import React from "react";
import { useModals } from "@/contexts/Modals";
import Select from "../Select";
import Modal from "../Modal";
import Input from "../Input";
import FileUpload from "../FileUpload";
import { CalendarIcon } from "@/svgs/icons";
import { IssuingInstitution, identificationData } from "./data";
import { SuggestionDropdown } from "@/components/Select/Select";

export const IdentificationModal = () => {
  const { identification, setIdentification, setSteps } = useModals();

  return (
    <Modal
      id="identification"
      open={identification}
      onClose={() => setIdentification(false)}
      title="Upload Identification"
      className="!max-w-[46.5rem] !w-full"
      onSave={() => {
        setSteps("identification", 1);
        setIdentification(false);
      }}
    >
      <div className="">
        <SuggestionDropdown
          placeholder="Identification Type"
          label="Identification Type"
          options={identificationData}
        />
        <SuggestionDropdown
          placeholder="Issued By"
          label="Issued By"
          options={IssuingInstitution}
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
