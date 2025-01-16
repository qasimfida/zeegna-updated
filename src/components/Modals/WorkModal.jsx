import React, { useState } from "react";
import { useModals } from "@/contexts/Modals";
import Modal from "@/components/Modal";
import Input from "@/components/Input";
import { CalendarIcon } from "@/svgs/icons";
import {
  IssuingInstitution,
  range,
  disciplineTypes,
  employmentType,
  hospitalTypes,
  locationData,
  nursingTypes,
  skillsData,
  workplaceTypes,
} from "./data";
import { SuggestionDropdown } from "@/components/Select/Select";
import MultiSelect from "@/components/MultiSelect";
import TagContainer from "@/components/TagContainer";
import CustomCheckbox from "@/components/CustomCheckbox";

export const WorkModal = () => {
  const [selected, setSelected] = useState("");
  const [skills, setSkills] = useState([]);
  const [specialty, setSpecialty] = useState([]);
  const [shifts, setShifts] = useState([]);
  const { work, setWork, setSteps } = useModals();
  const [compactLicense, setCompactLicense] = useState(false);
  const [agreementChecked, setAgreementChecked] = useState(false);

  const toggleCompactLicense = () => {
    setCompactLicense(!compactLicense);
  };

  const handleRemoveSkillsTag = (option) => {
    const isSelected = skills.some((current) => current.id === option.id);
    const newSelected = isSelected
      ? skills.filter((current) => current.id !== option.id)
      : [...skills, option];

    setSkills(newSelected);
  };

  const handleRemoveSpecialtyTag = (option) => {
    const isSelected = specialty.some((current) => current.id === option.id);
    const newSelected = isSelected
      ? specialty.filter((current) => current.id !== option.id)
      : [...specialty, option];

    setSpecialty(newSelected);
  };

  const handleRemoveShiftsTag = (option) => {
    const isSelected = shifts.some((current) => current.id === option.id);
    const newSelected = isSelected
      ? shifts.filter((current) => current.id !== option.id)
      : [...shifts, option];

    setShifts(newSelected);
  };

  return (
    <Modal
      id="work"
      open={work}
      onClose={() => setWork(false)}
      title="Add Work Experience"
      className="!max-w-[46.5rem] !w-full"
      onSave={() => {
        setSteps("work", 1);
        setWork(false);
      }}
    >
      <div className="">
        <SuggestionDropdown
          className="w-full "
          placeholder="Company Name"
          label="Company Name"
          options={IssuingInstitution}
        />
        <SuggestionDropdown
          className="w-full "
          placeholder="Company Location"
          label="Company Location"
          options={locationData}
        />
        <div className="flex flex-wrap sm:flex-nowrap gap-6 sm:gap-2.5  w-full items-end">
          <SuggestionDropdown
            placeholder="Employment Type"
            label="Employment Type"
            options={employmentType}
          />
          <SuggestionDropdown
            placeholder="Job Setting"
            label="Job Setting"
            options={disciplineTypes}
          />
        </div>
        <SuggestionDropdown
          placeholder="Workplace Type"
          label="Workplace Type"
          options={workplaceTypes}
        />
        <SuggestionDropdown
          placeholder="Company Type"
          label="Company Type"
          options={hospitalTypes}
        />

        {/* <SuggestionDropdown
          className="w-full "
          placeholder="Job Title"
          label="Job Title"
          options={nursingTypes}
        /> */}

        <div className="flex flex-wrap sm:flex-nowrap gap-6 sm:gap-2.5 w-full  items-end">
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
        <div className="flex gap-7 my-4">
          <CustomCheckbox
            label="I currently work here"
            className="!mt-0"
            variant="primary"
            color="primary"
            checked={agreementChecked}
            setChecked={() => setAgreementChecked(!agreementChecked)}
          />
        </div>

        <div className="">
          {/* <p className="text-xs font-medium text-grey-500 ml-4">
            Description of Duties
          </p> */}
          <Input
            className="w-full !mt-0"
            type="textarea"
            label="Description of Duties"
          />
        </div>

        <MultiSelect
          className=" w-full"
          options={skillsData}
          label="Skills"
          onChange={setSkills}
          value={skills}
        />
        {skills.length > 0 && (
          <div className="flex flex-col sm:flex sm:flex-row gap-2 mt-4">
            {skills.map((item) => {
              return (
                <TagContainer
                  key={item.id}
                  item={item}
                  onClickHandler={() => handleRemoveSkillsTag(item)}
                  variant="grey"
                />
              );
            })}
          </div>
        )}
        <SuggestionDropdown
          className=""
          placeholder="Position Discipline"
          label="Position Discipline"
          options={nursingTypes}
        />
        <MultiSelect
          className=" w-full"
          options={skillsData}
          label="Position Specialty"
          onChange={setSpecialty}
          value={specialty}
        />
        {specialty.length > 0 && (
          <div className="flex flex-col sm:flex sm:flex-row gap-2 mt-4">
            {specialty.map((item) => {
              return (
                <TagContainer
                  key={item.id}
                  item={item}
                  onClickHandler={() => handleRemoveSpecialtyTag(item)}
                />
              );
            })}
          </div>
        )}
        <MultiSelect
          className=" w-full"
          options={skillsData}
          label="Shift Types"
          onChange={setShifts}
          value={shifts}
        />
        {shifts.length > 0 && (
          <div className="flex flex-col sm:flex sm:flex-row gap-2 mt-4">
            {shifts.map((item) => {
              return (
                <TagContainer
                  key={item.id}
                  item={item}
                  onClickHandler={() => handleRemoveShiftsTag(item)}
                />
              );
            })}
          </div>
        )}
        <div className="flex  gap-6 flex-wrap sm:flex-nowrap sm:gap-2.5">
          <div className="flex w-full  ">
            <Input placeholder="Amount" />
          </div>
          <div className="flex w-full ">
            <SuggestionDropdown
              placeholder="Compensation"
              label="Compensation"
              options={range}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};
