import React, { useState } from "react";
import { useModals } from "@/contexts/Modals";
import Modal from "../Modal";
import Input from "../Input";
import FileUpload from "../FileUpload";
import { CalendarIcon } from "@/svgs/icons";
import { IssuingInstitution, disciplineTypes, nursingTypes } from "./data";
import { SuggestionDropdown } from "@/components/Select/Select";
import MultiSelect from "../MultiSelect";
import TagContainer from "../TagContainer";

export const EducationModal = () => {
  const [selected, setSelected] = useState([]);
  const { education, setEducation, setSteps } = useModals();

  const handleRemoveTag = (option) => {
    const isSelected = selected.some((current) => current.id === option.id);
    const newSelected = isSelected
      ? selected.filter((current) => current.id !== option.id)
      : [...selected, option];

    setSelected(newSelected);
  };

  return (
    <Modal
      id="education"
      open={education}
      onClose={() => setEducation(false)}
      title="Add Education"
      className="!max-w-[46.5rem] !w-full"
      onSave={() => {
        setSteps("education", 1);
        setEducation(false);
      }}
    >
      <div className="">
        <SuggestionDropdown
          placeholder="Degree Name"
          label="Degree Name"
          options={nursingTypes}
        />
        <SuggestionDropdown
          placeholder="Institution Name"
          label="Institution Name"
          options={IssuingInstitution}
        />
        <MultiSelect
          className="w-full"
          options={disciplineTypes}
          label="Field of Study"
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
        <div className="flex flex-wrap sm:flex-nowrap gap-6 sm:gap-2.5 w-full items-end">
          <Input type="number" placeholder="GPA" />
          <Input placeholder="Honors and Awards" />
        </div>
        <FileUpload className="mt-5" multiple />
      </div>
    </Modal>
  );
};
