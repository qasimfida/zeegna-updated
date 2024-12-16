import React from "react";
import { useModals } from "@/contexts/Modals";
import Modal from "../Modal";
import Input from "../Input";
import { relationshipData } from "./data";
import { SuggestionDropdown } from "@/components/Select/Select";

export const EmergencyModal = () => {
  const { setSteps, emergency, setEmergency } = useModals();
  return (
    <Modal
      id="emergency"
      open={emergency}
      onClose={() => setEmergency(false)}
      title="Add Emergency Contacts"
      className="!max-w-[46.5rem] !w-full shadow-xl"
      onSave={() => {
        setSteps("emergency", 1);
        setEmergency(false);
      }}
    >
      <div className="">
        <div className="flex gap-6 w-full  items-end flex-wrap sm:flex-nowrap sm:gap-2.5">
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
        </div>
        <SuggestionDropdown
          placeholder="Relationship"
          label="Relationship"
          options={relationshipData}
        />
        <div className="flex gap-6 items-end flex-wrap sm:flex-nowrap sm:gap-2.5">
          <Input placeholder="Email" />
          <Input placeholder="Phone Number" />
        </div>
      </div>
    </Modal>
  );
};
