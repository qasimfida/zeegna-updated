import React from "react";
import { useModals } from "@/contexts/Modals";
import Modal from "../Modal";
import FileUpload from "../FileUpload";
import { authorizedToWorkInUs, level } from "./data";
import { SuggestionDropdown } from "@/components/Select/Select";

export const TechModal = () => {
  const { tech, setTech, setSteps } = useModals();
  return (
    <Modal
      id="tech"
      open={tech}
      onClose={() => setTech(false)}
      title="Add Tech Proficiency"
      className="!max-w-[46.5rem] !w-full"
      onSave={() => {
        setSteps("tech", 1);
        setTech(false);
      }}
    >
      <div className="">
        <SuggestionDropdown
          placeholder="Category Name"
          label="Category Name"
          options={authorizedToWorkInUs}
        />
        <SuggestionDropdown
          placeholder="Application Name"
          label="Application Name"
          options={authorizedToWorkInUs}
        />
        <SuggestionDropdown
          placeholder="Proficiency Level"
          label="Proficiency Level"
          options={level}
        />
        <SuggestionDropdown
          placeholder="Years of Experience"
          label="Years of Experience"
          options={level}
        />
        <SuggestionDropdown
          placeholder="Certification Obtained"
          label="Certification Obtained"
          options={level}
        />
        <FileUpload className="mt-5" multiple />
      </div>
    </Modal>
  );
};
