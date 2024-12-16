import React, { useState } from "react";
import { useModals } from "@/contexts/Modals";
import Select from "../Select";
import Modal from "../Modal";
import Input from "../Input";
import FileUpload from "../FileUpload";
import { CalendarIcon } from "@/svgs/icons";
import {
  people,
  authorizedToWorkInUs,
  disciplineTypes,
  nursingTypes,
  skillsData,
} from "./data";
import { SuggestionDropdown } from "@/components/Select/Select";
import MultiSelect from "../MultiSelect";
import TagContainer from "../TagContainer";

export const TrainingModal = () => {
  const [selected, setSelected] = useState([]);
  const { training, setTraining, setSteps } = useModals();

  const handleRemoveTag = (option) => {
    const isSelected = selected.some((current) => current.id === option.id);
    const newSelected = isSelected
      ? selected.filter((current) => current.id !== option.id)
      : [...selected, option];

    setSelected(newSelected);
  };

  return (
    <Modal
      id="training"
      open={training}
      onClose={() => setTraining(false)}
      title="Add Training"
      className="!max-w-[46.5rem] !w-full"
      onSave={() => {
        setSteps("training", 1);
        setTraining(false);
      }}
    >
      <div className="">
        <SuggestionDropdown
          placeholder="Training Name"
          label="Training Name"
          options={people}
        />
        <div className="flex flex-wrap sm:flex-nowrap gap-2.5 w-full  items-end">
          <Input placeholder="Institution Name" />
        </div>
        <SuggestionDropdown
          placeholder="Training Type"
          label="Training Type"
          options={nursingTypes}
        />
        <SuggestionDropdown
          placeholder="Field of Study"
          label="Field of Study"
          options={disciplineTypes}
        />
        <div className="flex flex-wrap sm:flex-nowrap gap-6 sm:gap-2.5 w-full  items-end">
          <Input
            placeholder="Start Date"
            type="date"
            hasIcon
            icon={<CalendarIcon />}
          />
          <Input
            placeholder="End/Expected Date"
            hasIcon
            type="date"
            icon={<CalendarIcon />}
          />
        </div>
        <MultiSelect
          className=" w-full"
          options={skillsData}
          label="Skills Acquired"
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
        <div className="flex flex-wrap sm:flex-nowrap gap-2.5 w-full  items-end">
          <Input placeholder="CEUs Earned" />
        </div>
        <SuggestionDropdown
          placeholder="Certification Obtained"
          label="Certification Obtained"
          options={authorizedToWorkInUs}
        />
        <FileUpload className="mt-5" multiple />
      </div>
    </Modal>
  );
};
