import React from "react";
import { useModals } from "@/contexts/Modals";
import Modal from "../Modal";
import { Ethnicity, Gender, Pronouns } from "./data";
import { SuggestionDropdown } from "@/components/Select/Select";

export const IdentityModal = () => {
  const { identity, setIdentity } = useModals();
  return (
    <Modal
      id="identity"
      open={identity}
      onClose={() => setIdentity(false)}
      title="Edit Identity Information"
      className="!max-w-[46.5rem] !w-full shadow-xl"
    >
      <div className="">
        <SuggestionDropdown
          placeholder="Pronouns"
          label="Pronouns"
          options={Pronouns}
        />
        <SuggestionDropdown
          placeholder="Gender"
          label="Gender"
          options={Gender}
        />
        <SuggestionDropdown
          placeholder="Ethnicity"
          label="Ethnicity"
          options={Ethnicity}
        />
      </div>
    </Modal>
  );
};
