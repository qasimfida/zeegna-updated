import React from "react";
import { useModals } from "@/contexts/Modals";
import Select from "../Select";
import Modal from "../Modal";
import Input from "../Input";
import FileUpload from "../FileUpload";
import { CalendarIcon } from "@/svgs/icons";
import { IssuingInstitution, libilityData } from "./data";
import { SuggestionDropdown } from "@/components/Select/Select";

export const LiabilityInsuranceModal = () => {
  const { liability, setLiability, setSteps } = useModals();

  return (
    <Modal
      id="liability"
      open={liability}
      onClose={() => setLiability(false)}
      title="Add Liability Insurance"
      className="!max-w-[46.5rem] !w-full"
      onSave={() => {
        setSteps("liability", 1);
        setLiability(false);
      }}
    >
      <div className="">
        <SuggestionDropdown
          placeholder="Liability Insurance"
          label="Liability Insurance"
          options={libilityData}
        />
        <SuggestionDropdown
          placeholder="Insured by"
          label="Insured by"
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
