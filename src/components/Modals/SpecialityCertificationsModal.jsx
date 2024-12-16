import React, { useState } from "react";
import { useModals } from "@/contexts/Modals";
import Modal from "../Modal";
import Input from "../Input";
import FileUpload from "../FileUpload";
import { CalendarIcon } from "@/svgs/icons";
import { IssuingInstitution, LicenseStates, specialtyCertifications } from "./data";
import { SuggestionDropdown } from "@/components/Select/Select";
import MultiSelect from "../MultiSelect";
import TagContainer from "../TagContainer";

export const SpecialityCertificationsModal = () => {
  const [selected, setSelected] = useState([]);
  const { setSteps, specialityCertifications, setSpecialityCertifications } =
    useModals();

  const handleRemoveTag = (option) => {
    const isSelected = selected.some((current) => current.id === option.id);
    const newSelected = isSelected
      ? selected.filter((current) => current.id !== option.id)
      : [...selected, option];

    setSelected(newSelected);
  };

  return (
    <Modal
      id="specialityCertifications"
      open={specialityCertifications}
      onClose={() => setSpecialityCertifications(false)}
      title="Add Speciality Certifications"
      className="!max-w-[46.5rem] !w-full shadow-xl"
      onSave={() => {
        setSteps("specialityCertifications", 1);
        setSpecialityCertifications(false);
      }}
    >
      <div className="">
        <SuggestionDropdown
          placeholder="Certification Name"
          label="Certification Name"
          options={specialtyCertifications}
        />
        <SuggestionDropdown
          placeholder="Issuing Institution"
          label="Issuing Institution"
          options={IssuingInstitution}
        />
        <MultiSelect
          options={LicenseStates}
          label="Certification States"
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
        <div className="flex gap-2.5  items-end">
          <Input
            placeholder="Expiration Date"
            type="date"
            hasIcon
            icon={<CalendarIcon />}
          />
        </div>
        <FileUpload className="mt-5" multiple />
      </div>
    </Modal>
  );
};
