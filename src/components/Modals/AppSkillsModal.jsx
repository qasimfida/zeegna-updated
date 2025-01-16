import React, { useState } from "react";
import { useModals } from "@/contexts/Modals";
import Modal from "../Modal";
import FileUpload from "../FileUpload";
import Radio from "../Radio";
import { SuggestionDropdown } from "@/components/Select/Select";
import { nursingTypes, IssuingInstitution } from "./data";

export const AppSkillsModal = () => {
  const { appSkills, setAppSkills, setSteps } = useModals();
  const [compactLicense, setCompactLicense] = useState(false);

  const toggleCompactLicense = () => {
    setCompactLicense(!compactLicense);
  };
  return (
    <Modal
      id="appSkills"
      open={appSkills}
      onClose={() => setAppSkills(false)}
      title="Add App Skills"
      className="!max-w-[46.5rem] !w-full"
      onSave={() => {
        setSteps("appSkills", 1);
        setAppSkills(false);
      }}
    >
      <div className="">
        <SuggestionDropdown
          placeholder="Skill name"
          label="Skill name"
          options={nursingTypes}
        />
        <SuggestionDropdown
          placeholder="Application Name"
          label="Application Name"
          options={IssuingInstitution}
        />
        <SuggestionDropdown
          placeholder="Proficiency Level"
          label="Proficiency Level"
          options={IssuingInstitution}
        />
        <SuggestionDropdown
          placeholder="Years of Experience"
          label="Years of Experience"
          options={IssuingInstitution}
        />
        <div className="flex gap-7 my-4">
          <label className="font-medium text-md text-grey-400 w-[10rem]">
            Certification Obtain
          </label>
          <div className="flex gap-5">
            <div className="flex gap-2   items-center">
              <label
                htmlFor="radio"
                className="font-medium text-md text-grey-400"
              >
                Yes
              </label>
              <Radio
                outlined
                size="lg"
                checked={compactLicense}
                onChange={toggleCompactLicense}
              />
            </div>
            <div className="flex gap-2  ">
              <label
                htmlFor="radio"
                className="font-medium text-md text-grey-400"
              >
                No
              </label>
              <Radio
                outlined
                size="lg"
                checked={!compactLicense}
                onChange={toggleCompactLicense}
              />
            </div>
          </div>
        </div>
        <FileUpload className="mt-5" multiple />
      </div>
    </Modal>
  );
};
