import React, { useState } from "react";
import { useModals } from "@/contexts/Modals";
import Modal from "../Modal";
import { activityType, identificationData, skillsTagData } from "./data";
import { SuggestionDropdown } from "@/components/Select/Select";
import TagContainer from "../TagContainer";

export const SkillsModal = () => {
  const [selected, setSelected] = useState([]);
  const { skills, setSkills, setSteps } = useModals();

  const handleRemoveTag = (option) => {
    const isSelected = selected.some((current) => current.id === option.id);
    const newSelected = isSelected
      ? selected.filter((current) => current.id !== option.id)
      : [...selected, option];

    setSelected(newSelected);
  };

  return (
    <Modal
      id="skills"
      open={skills}
      onClose={() => setSkills(false)}
      title="Add Skills"
      className="!max-w-[46.5rem] !w-full"
      onSave={() => {
        setSteps("skills", selected.length > 0 ? 1 : 0);
        setSkills(false);
      }}
    >
      <div>
        <SuggestionDropdown
          placeholder="Profession Type"
          label="Profession Type"
          options={activityType}
        />
        <SuggestionDropdown
          placeholder="Skills name"
          label="Skills name"
          options={identificationData}
        />
        <div>
          <div className="mt-6 mb-2.5">
            <p className="text-sm font-medium text-grey-400">
              Popular Skills for Nurses
            </p>
          </div>
          <div>
            {skillsTagData.length > 0 && (
              <div className="flex flex-col sm:flex sm:flex-row gap-2 flex-wrap">
                {skillsTagData.map((item) => {
                  return (
                    <TagContainer
                      key={item.id}
                      item={item}
                      onClickHandler={() =>
                        setSelected(
                          selected.includes(item)
                            ? [...selected]
                            : [...selected, item]
                        )
                      }
                      variant="grey"
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
        {selected.length > 0 && (
          <div>
            <div className="mt-6 mb-2.5">
              <p className="text-sm font-medium text-grey-400">
                Selected Skills
              </p>
            </div>
            <div>
              {selected.length > 0 && (
                <div className="flex flex-col sm:flex sm:flex-row gap-2 flex-wrap">
                  {selected.map((item) => {
                    return (
                      <TagContainer
                        key={item.id}
                        item={item}
                        onCloseHandler={() => handleRemoveTag(item)}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};
