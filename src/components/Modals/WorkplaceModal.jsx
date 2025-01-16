import React from "react";
import { useModals } from "@/contexts/Modals";
import Modal from "../Modal";
import { employmentType, libilityData, workplaceTypes } from "./data";
import { SuggestionDropdown } from "@/components/Select/Select";

export const WorkplaceModal = () => {
  const { workplace, setWorkplace, setSteps } = useModals();

  return (
    <Modal
      id="workplace"
      open={workplace}
      onClose={() => setWorkplace(false)}
      title="Edit Workplace Preferences"
      className="!max-w-[46.5rem] !w-full"
      onSave={() => {
        setSteps("workplace", 1);
        setWorkplace(false);
      }}
    >
      <div className="">
        <SuggestionDropdown
          placeholder="What is important to you when evaluating a job opportunity?"
          label="What is important to you when evaluating a job opportunity?"
          options={employmentType}
        />
        <SuggestionDropdown
          placeholder="What type of organization do you prefer to work in?"
          label="What type of organization do you prefer to work in?"
          options={libilityData}
        />
        <SuggestionDropdown
          placeholder="What type of job settings are you open to work for?"
          label="What type of job settings are you open to work for?"
          options={libilityData}
        />
        <SuggestionDropdown
          placeholder="What is your desired pay range?"
          label="What is your desired pay range?"
          options={workplaceTypes}
        />
        <SuggestionDropdown
          placeholder="How many hours are you willing to work per week?"
          label="How many hours are you willing to work per week?"
          options={libilityData}
        />
        <SuggestionDropdown
          placeholder="What are your shift preferences?"
          label="What are your shift preferences?"
          options={libilityData}
        />
        <SuggestionDropdown
          placeholder="What degree program or course of study are you currently pursuing?"
          label="What degree program or course of study are you currently pursuing?"
          options={libilityData}
        />
        <SuggestionDropdown
          placeholder="What management style best supports your success and well-being at work?"
          label="What management style best supports your success and well-being at work?"
          options={libilityData}
        />
        <SuggestionDropdown
          placeholder="What type of team environment best matches your work style?"
          label="What type of team environment best matches your work style?"
          options={libilityData}
        />
      </div>
    </Modal>
  );
};
