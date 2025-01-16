"use client";

import { BurgerMenu } from "@/svgs/icons";
import Filter from "@/components/Filter";
import {
  jobTypeOptions,
  disciplineTypeOptions,
  workplaceTypeOptions,
  locationData,
} from "./data";
import { useState } from "react";
import CustomCheckbox from "../CustomCheckbox";
import { SuggestionDropdown } from "@/components/Select/Select";
import { relationshipData } from "../Modals/data";
import RangeSlider from "../RangeSlider";
import { useDrawer } from "@/contexts/Drawers";
import { Icon } from "@/svgs";

export const WorkFilters = () => {
  const { toggleFilter } = useDrawer();
  const [isJobOpen, setIsJobOpen] = useState(true);
  const [isDisciplineOpen, setIsDisciplineOpen] = useState(true);
  const [isPayRangeOpen, setIsPayRangeOpen] = useState(true);
  const [isRoleTypeOpen, setIsRoleTypeOpen] = useState(true);
  const [isWorkplaceOpen, setIsWorkplaceOpen] = useState(true);
  const [isExperienceTypeOpen, setIsExperienceTypeOpen] = useState(true);

  const [range, setRange] = useState({ min: 10, max: 100 });
  const [jobOptions, setJobOptions] = useState(jobTypeOptions);
  const [disciplineOptions, setDisciplineOptions] = useState(
    disciplineTypeOptions
  );
  const [WorkplaceOptions, setWorkplaceOptions] =
    useState(workplaceTypeOptions);

  const handleJobCheckboxChange = (id) => {
    setJobOptions(
      jobOptions.map((option) =>
        option.id === id ? { ...option, checked: !option.checked } : option
      )
    );
  };
  const handleDisciplineCheckboxChange = (id) => {
    setDisciplineOptions(
      disciplineOptions.map((option) =>
        option.id === id ? { ...option, checked: !option.checked } : option
      )
    );
  };
  const handleWorkplaceCheckboxChange = (id) => {
    setWorkplaceOptions(
      WorkplaceOptions.map((option) =>
        option.id === id ? { ...option, checked: !option.checked } : option
      )
    );
  };

  let pb = ` block`;

  return (
    <div className="flex flex-col">
      <div className="bg-white rounded-l-2xl">
        <div className=" border-b fixed sm:relative w-full bg-white z-[100]">
          <div className="flex justify-between pb-5 p-5">
            <div className="text-primary  flex items-center gap-2.5">
              <BurgerMenu />
              <p className="text-base font-semibold text-primary">Filters</p>
            </div>
            <div className="flex items-center gap-2.5">
              <p className="text-base font-medium text-grey-400 cursor-pointer">
                Clear all
              </p>
              <Icon
                name="close"
                className="min-w-8 min-h-8 color-white sm:hover:border-primary"
                aria-hidden="true"
                onClick={() => toggleFilter(false)}
              />
            </div>
          </div>
        </div>
        <div className="mb-5 px-5 mt-20 sm:mt-0">
          <Filter
            name="Clinician Type"
            isOpen={isJobOpen}
            setIsOpen={setIsJobOpen}
          >
            {jobOptions?.map((option) => (
              <CustomCheckbox
                key={option.id}
                className="!gap-2.5 !mt-0"
                labelClass="!text-base font-medium text-grey-400"
                label={option.name}
                checked={option.checked}
                setChecked={() => handleJobCheckboxChange(option.id)}
                color="default"
              />
            ))}
          </Filter>
          <Filter name="Location" isOpen={isJobOpen} setIsOpen={setIsJobOpen}>
            <SuggestionDropdown
              placeholder="Current Location"
              label="Current Location"
              options={locationData}
            />
          </Filter>
          <Filter name="Job Type" isOpen={isJobOpen} setIsOpen={setIsJobOpen}>
            {jobOptions?.map((option) => (
              <CustomCheckbox
                key={option.id}
                className="!gap-2.5 !mt-0"
                labelClass="!text-base font-medium text-grey-400"
                label={option.name}
                checked={option.checked}
                setChecked={() => handleJobCheckboxChange(option.id)}
                color="default"
              />
            ))}
          </Filter>

          <Filter
            name="Discipline Type"
            isOpen={isDisciplineOpen}
            setIsOpen={setIsDisciplineOpen}
          >
            {disciplineOptions?.map((option) => (
              <CustomCheckbox
                key={option.id}
                className="!gap-2.5 !mt-0"
                labelClass="!text-base font-medium text-grey-400"
                label={option.name}
                checked={option.checked}
                setChecked={() => handleDisciplineCheckboxChange(option.id)}
                color="default"
              />
            ))}
          </Filter>
          <Filter
            name="Pay Range"
            isOpen={isPayRangeOpen}
            setIsOpen={setIsPayRangeOpen}
          >
            <SuggestionDropdown
              placeholder="Hour"
              label="Hour"
              options={relationshipData}
            />
            <div className="mt-5">
              <RangeSlider
                min={0}
                max={125}
                values={range}
                variant="primary"
                onChange={({ min, max }) => {
                  setRange({ min, max });
                }}
              />
            </div>
          </Filter>
          <Filter
            name="Role Type"
            isOpen={isRoleTypeOpen}
            setIsOpen={setIsRoleTypeOpen}
          >
            <SuggestionDropdown
              placeholder="Select role type"
              label="Select role type"
              options={relationshipData}
            />
          </Filter>
          <Filter
            name="Workplace Type"
            isOpen={isWorkplaceOpen}
            setIsOpen={setIsWorkplaceOpen}
          >
            {WorkplaceOptions?.map((option) => (
              <CustomCheckbox
                key={option.id}
                className="!gap-2.5 !mt-0"
                labelClass="!text-base font-medium text-grey-400"
                label={option.name}
                checked={option.checked}
                setChecked={() => handleWorkplaceCheckboxChange(option.id)}
                color="default"
              />
            ))}
          </Filter>

          <Filter
            name="Experience year"
            isOpen={isExperienceTypeOpen}
            setIsOpen={setIsExperienceTypeOpen}
          >
            <SuggestionDropdown
              placeholder="Select role type"
              label="Select role type"
              options={relationshipData}
            />
          </Filter>
          {/* <div
            style={{ height: `${relationshipData.length * 36}px` }}
            className={pb}
          ></div> */}
        </div>
      </div>
    </div>
  );
};
