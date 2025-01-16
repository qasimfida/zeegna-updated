import React from "react";
import { useModals } from "@/contexts/Modals";
import Modal from "../Modal";
import Input from "../Input";
import { languagesData, lang_data } from "./data";
import { SuggestionDropdown } from "@/components/Select/Select";

export const LanguagesModal = () => {
  const { setSteps, languages, setLanguages } = useModals();
  return (
    <Modal
      id="languages"
      open={languages}
      onClose={() => setLanguages(false)}
      title="Add Languages"
      className="!max-w-[46.5rem] !w-full shadow-xl"
      onSave={() => {
        setSteps("languages", 1);
        setLanguages(false);
      }}
    >
      <div className="">
        <SuggestionDropdown
          placeholder="Language"
          label="Language"
          options={languagesData}
        />
        <div className="flex gap-2.5 w-full items-end">
          <SuggestionDropdown
          placeholder="Reading Proficiency"
          label="Reading Proficiency"
          options={lang_data.reading_proficiency}
        />
        </div>
        <div className="flex gap-2.5 w-full items-end">
          <SuggestionDropdown
          placeholder="Writing Proficiency"
          label="Writing Proficiency"
          options={lang_data.writing_proficiency}
        />
        </div>
        <div className="flex gap-2.5 w-full items-end">
          <SuggestionDropdown
          placeholder="Verbal Proficiency"
          label="Verbal Proficiency"
          options={lang_data.verbal_proficiency}
        />
        </div>
      </div>
    </Modal>
  );
};
