import React from "react";
import { useModals } from "@/contexts/Modals";
import Select from "../Select";
import Modal from "../Modal";
import Input from "../Input";
import {
  activityType,
  identificationData,
  libilityData,
  yearsOfExperiece,
} from "./data";
import { SuggestionDropdown } from "@/components/Select/Select";

export const ReferencesModal = () => {
  const { references, setReferences, setSteps } = useModals();

  return (
    <Modal
      id="references"
      open={references}
      onClose={() => setReferences(false)}
      title="Add References"
      className="!max-w-[46.5rem] !w-full"
      onSave={() => {
        setSteps("references", 1);
        setReferences(false);
      }}
    >
      <div className="">
        <div className="flex flex-wrap sm:flex-nowrap gap-6 sm:gap-2.5 w-full items-end">
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
        </div>
        <SuggestionDropdown
          placeholder="Reference For"
          label="Reference For"
          options={libilityData}
        />
        <SuggestionDropdown
          placeholder="Reference Type"
          label="Reference Type"
          options={identificationData}
        />
        <div className="flex flex-wrap sm:flex-nowrap gap-2.5 w-full items-end">
          <Input placeholder="Reference Title" />
        </div>
        <SuggestionDropdown
          placeholder="Years Known"
          label="Years Known"
          options={yearsOfExperiece}
        />
        <div className="flex flex-wrap sm:flex-nowrap gap-6 sm:gap-2.5 w-full items-end">
          <Input placeholder="Work Email" />
          <Input placeholder="Phone" />
        </div>
        <SuggestionDropdown
          placeholder="Consent to Reach Out"
          label="Consent to Reach Out"
          options={libilityData}
        />
      </div>
    </Modal>
  );
};
