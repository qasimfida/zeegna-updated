import React from "react";
import { useModals } from "@/contexts/Modals";
import Modal from "../Modal";
import Input from "../Input";
import { locationData, nursingTypes,disciplineTypes } from "./data";
import { SuggestionDropdown } from "@/components/Select/Select";

export const InformationModal = () => {
  const { information, setInformation } = useModals();
  return (
    <Modal
      id="information"
      open={information}
      onClose={() => setInformation(false)}
      title="Edit Personal Information"
      className="!max-w-[46.5rem] !w-full shadow-xl"
    >
      <div className="">
        <div className="flex gap-6 sm:gap-2.5 w-full  items-end flex-wrap sm:flex-nowrap ">
          <Input placeholder="First Name" />
          <Input placeholder="Middle Name" />
          <Input placeholder="Last Name" />
        </div>
        <SuggestionDropdown
          placeholder="Discipline Type"
          label="Discipline Type"
          options={disciplineTypes}
        />
        <SuggestionDropdown
          placeholder="Clinician Type"
          label="Clinician Type"
          options={nursingTypes}
        />
        <SuggestionDropdown
          placeholder="Current Location"
          label="Current Location"
          options={locationData}
        />
        <div className="flex gap-6 items-end flex-wrap sm:flex-nowrap sm:gap-2.5">
          <Input placeholder="Phone Number" />
          <Input placeholder="Email" />
        </div>
        <div className="w-full">
          <Input type="textarea" placeholder="Bio" />
        </div>
      </div>
    </Modal>
  );
};
