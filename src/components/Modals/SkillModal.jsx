import React, { useState } from "react";
import { useModals } from "@/contexts/Modals";
import Modal from "../Modal";
import Input from "../Input";
import FileUpload from "../FileUpload";
import { CalendarIcon } from "@/svgs/icons";
import { activityType, identificationData, skillsData } from "./data";
import { SuggestionDropdown } from "@/components/Select/Select";
import MultiSelect from "../MultiSelect";
import TagContainer from "../TagContainer";

export const SkillModal = () => {
  const [selected, setSelected] = useState([]);
  const { skill, setSkill, setSteps } = useModals();

  const handleRemoveTag = (option) => {
    const isSelected = selected.some((current) => current.id === option.id);
    const newSelected = isSelected
      ? selected.filter((current) => current.id !== option.id)
      : [...selected, option];

    setSelected(newSelected);
  };

  return (
    <Modal
      id="skill"
      open={skill}
      onClose={() => setSkill(false)}
      title="Add Professional Activities"
      className="!max-w-[46.5rem] !w-full"
      onSave={() => {
        setSteps("skill", 1);
        setSkill(false);
      }}
    >
      <div>
        <div className="w-full">
          <Input placeholder="Activity Name" />
        </div>
        <div className="w-full">
          <Input placeholder="Institution Name" />
        </div>
        <SuggestionDropdown
          placeholder="Activity Type"
          label="Activity Type"
          options={activityType}
        />
        <SuggestionDropdown
          placeholder="Role/Position"
          label="Role/Position"
          options={identificationData}
        />
        <div className="flex flex-wrap sm:flex-nowrap gap-6 sm:gap-2.5 w-full items-end ">
          <Input
            placeholder="Start Date"
            hasIcon
            type="date"
            icon={<CalendarIcon />}
          />
          <Input
            placeholder="End Date"
            hasIcon
            type="date"
            icon={<CalendarIcon />}
          />
        </div>
        <div className="w-full">
          <Input placeholder="Description" type="textarea" />
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
        <FileUpload className="mt-5" multiple />
      </div>
    </Modal>
  );
};
