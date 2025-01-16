import React, { useState } from "react";
import { useModals } from "@/contexts/Modals";
import Modal from "../Modal";
import Input from "../Input";
import { specialties, yearsOfExperiece } from "./data";
import { authorizedToWorkInUs } from "./data";
import MultiSelect from "../MultiSelect";
import { SuggestionDropdown } from "@/components/Select/Select";
import TagContainer from "../TagContainer";

export const ExperienceModal = () => {
  const [selected, setSelected] = useState([]);
  const { experience, setExperience } = useModals();

  const handleRemoveTag = (option) => {
    const isSelected = selected.some((current) => current.id === option.id);
    const newSelected = isSelected
      ? selected.filter((current) => current.id !== option.id)
      : [...selected, option];

    setSelected(newSelected);
  };

  return (
    <Modal
      id="experience"
      open={experience}
      onClose={() => setExperience(false)}
      title="Edit Experience Summary"
      className="!max-w-[46.5rem] !w-full"
    >
      <div className="">
        <SuggestionDropdown
          placeholder="Work Authorization"
          label="Work Authorization"
          options={authorizedToWorkInUs}
        />
        <SuggestionDropdown
          placeholder="Employment Sponsorship"
          label="Employment Sponsorship"
          options={authorizedToWorkInUs}
        />
        <div className="flex flex-wrap sm:flex-nowrap gap-2.5 w-full  items-end">
          <Input placeholder="Total Years of Work Experience" />
        </div>
        <MultiSelect
          options={specialties}
          label="Specialties"
          onChange={setSelected}
          value={selected}
        />
        {selected.length > 0 && (
          <div className="flex flex-col sm:flex sm:flex-row gap-2 mt-4">
            {selected.map((item) => {
              return (
                <TagContainer
                  key={item.id}
                  item={item}
                  onClickHandler={() => handleRemoveTag(item)}
                />
              );
            })}
          </div>
        )}
        <SuggestionDropdown
          placeholder="Experience with each specialty"
          label="Experience with each specialty"
          options={yearsOfExperiece}
        />
      </div>
    </Modal>
  );
};
