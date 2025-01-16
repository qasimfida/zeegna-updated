import React, { useState } from "react";
import { useModals } from "@/contexts/Modals";
import Modal from "../Modal";
import Input from "../Input";
import { CalendarIcon } from "@/svgs/icons";
import { Type, Rate, locationData, employmentType } from "./data";
import { SuggestionDropdown } from "@/components/Select/Select";
import MultiSelect from "../MultiSelect";
import TagContainer from "../TagContainer";

export const EmploymentModal = () => {
  const { employment, setEmployment, setSteps } = useModals();
  const [shift, setShift] = useState();

  const handleRemoveShiftTag = (option) => {
    const isSelected = shift.some((current) => current.id === option.id);
    const newSelected = isSelected
      ? shift.filter((current) => current.id !== option.id)
      : [...shift, option];

    setShift(newSelected);
  };

  return (
    <Modal
      id="employment"
      open={employment}
      onClose={() => setEmployment(false)}
      title="Add Employment Preferences"
      className="!max-w-[46.5rem] !w-full"
      onSave={() => {
        setSteps("employment", 1);
        setEmployment(false);
      }}
    >
      <div className="">
        <SuggestionDropdown
          placeholder="Job Type"
          label="Job Type"
          options={Type}
        />
        <div className="flex flex-wrap sm:flex-nowrap gap-2.5 w-full items-end ">
          <Input
            placeholder="Start Date Availability"
            hasIcon
            type="date"
            icon={<CalendarIcon />}
          />
        </div>
        <SuggestionDropdown
          placeholder="Preferred Work Location"
          label="Preferred Work Location"
          options={locationData}
        />
        <div className="  flex gap-6 flex-wrap sm:flex-nowrap sm:gap-2.5">
          <div className="flex w-full">
            <Input placeholder="Amount" />
          </div>
          <div className="flex w-full">
            <SuggestionDropdown
              placeholder="Desired Pay"
              label="Desired Pay"
              options={Rate}
            />
          </div>
        </div>

        <MultiSelect
          options={employmentType}
          label="Shift Type Preferences"
          onChange={setShift}
          value={shift}
        />
        {shift?.length > 0 && (
          <div className="flex flex-col sm:flex sm:flex-row gap-2 mt-4">
            {shift.map((item) => {
              return (
                <TagContainer
                  key={item.id}
                  item={item}
                  onClickHandler={() => handleRemoveShiftTag(item)}
                />
              );
            })}
          </div>
        )}
      </div>
    </Modal>
  );
};
