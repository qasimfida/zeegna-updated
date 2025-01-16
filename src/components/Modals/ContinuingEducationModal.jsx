import React, { useState } from "react";
import { useModals } from "@/contexts/Modals";
import Modal from "../Modal";
import Input from "../Input";
import FileUpload from "../FileUpload";
import { CalendarIcon } from "@/svgs/icons";
import {
  IssuingInstitution,
  disciplineTypes,
  nursingTypes,
  skillsData,
} from "./data";
import { SuggestionDropdown } from "@/components/Select/Select";
import MultiSelect from "../MultiSelect";
import TagContainer from "../TagContainer";

export const ContinuingEducationModal = () => {
  const [selected, setSelected] = useState([]);
  const { continuingEducation, setContinuingEducation, setSteps } = useModals();

  const handleRemoveTag = (option) => {
    const isSelected = selected.some((current) => current.id === option.id);
    const newSelected = isSelected
      ? selected.filter((current) => current.id !== option.id)
      : [...selected, option];

    setSelected(newSelected);
  };

  return (
    <Modal
      id="continuingEducation"
      open={continuingEducation}
      onClose={() => setContinuingEducation(false)}
      title="Add Continuing Education"
      className="!max-w-[46.5rem] !w-full"
      onSave={() => {
        setSteps("continuingEducation", 1);
        setContinuingEducation(false);
      }}
    >
      <div className="">
        <SuggestionDropdown
          placeholder="Course Name"
          label="Course Name"
          options={nursingTypes}
        />
        <SuggestionDropdown
          placeholder="Institution Name"
          label="Institution Name"
          options={IssuingInstitution}
        />
        <SuggestionDropdown
          placeholder="Course Type"
          label="Course Type"
          options={nursingTypes}
        />
        <SuggestionDropdown
          placeholder="Field of Study"
          label="Field of Study"
          options={disciplineTypes}
        />
        <div className="flex flex-wrap sm:flex-nowrap gap-6 sm:gap-2.5 w-full items-end">
          <Input
            placeholder="Start Date"
            hasIcon
            type="date"
            icon={<CalendarIcon />}
          />
          <Input
            placeholder="End/Expected Date"
            type="date"
            hasIcon
            icon={<CalendarIcon />}
          />
        </div>
        <MultiSelect
          className="w-full"
          options={skillsData}
          label="Skills Acquired"
          onChange={setSelected}
          value={selected}
        />
        {selected.length > 0 && (
          <div className="flex flex-col sm:flex sm:flex-row gap-2 mt-4">
            {selected?.map((item) => {
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
        <div className="flex flex-wrap sm:flex-nowrap gap-6 sm:gap-2.5 w-full items-end">
          <Input placeholder="CEUs Earned" />
        </div>
        <FileUpload className="mt-5" multiple />
      </div>
    </Modal>
  );
};
