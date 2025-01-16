import React, { useState } from "react";
import { useModals } from "@/contexts/Modals";
import MultiSelect from "../MultiSelect";
import Modal from "../Modal";
import Input from "../Input";
import FileUpload from "../FileUpload";
import { CalendarIcon } from "@/svgs/icons";
import Radio from "../Radio";
import { SuggestionDropdown } from "@/components/Select/Select";
import { clinicianLicense, IssuingInstitution, LicenseStates } from "./data";
import TagContainer from "@/components/TagContainer";

export const LicenseModal = () => {
  const { license, setLicense, setSteps } = useModals();
  const [compactLicense, setCompactLicense] = useState(false);
  const [selected, setSelected] = useState([]);

  const toggleCompactLicense = () => {
    setCompactLicense(!compactLicense);
  };

  const handleRemoveTag = (option) => {
    const isSelected = selected.some((current) => current.id === option.id);
    const newSelected = isSelected
      ? selected.filter((current) => current.id !== option.id)
      : [...selected, option];

    setSelected(newSelected);
  };
  return (
    <Modal
      id="license"
      open={license}
      onClose={() => setLicense(false)}
      title="Add License Information"
      className="!max-w-[46.5rem] !w-full"
      onSave={() => {
        setSteps("license", 1);
        setLicense(false);
      }}
    >
      <div className="">
        <SuggestionDropdown
          placeholder="License Name"
          label="License Name"
          options={clinicianLicense}
        />
        <SuggestionDropdown
          placeholder="Issuing institution"
          label="Issuing institution"
          options={IssuingInstitution}
        />
        <MultiSelect
          options={LicenseStates}
          label="License States"
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
        <div className="flex flex-wrap sm:flex-nowrap justify-between gap-[.625rem] items-end ">
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
