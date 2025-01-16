import React, { useState } from "react";
import { useModals } from "@/contexts/Modals";
import Modal from "../Modal";
import Input from "../Input";
import { Rate, locationData, managementStyleData, scheduleData } from "./data";
import MultiSelect from "../MultiSelect";
import { SuggestionDropdown } from "@/components/Select/Select";
import TagContainer from "../TagContainer";

export const PreferenceModal = () => {
  const [location, setLocation] = useState([]);
  const [organization, setOrganization] = useState([]);
  const [job, setJob] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [management, setManagement] = useState([]);
  const { preference, setPreference, setSteps } = useModals();

  const handleRemoveLocationTag = (option) => {
    const isSelected = location.some((current) => current.id === option.id);
    const newSelected = isSelected
      ? location.filter((current) => current.id !== option.id)
      : [...location, option];

    setLocation(newSelected);
  };

  const handleRemoveOrganizationTag = (option) => {
    const isSelected = organization.some((current) => current.id === option.id);
    const newSelected = isSelected
      ? organization.filter((current) => current.id !== option.id)
      : [...organization, option];

    setOrganization(newSelected);
  };

  const handleRemoveJobTag = (option) => {
    const isSelected = job.some((current) => current.id === option.id);
    const newSelected = isSelected
      ? job.filter((current) => current.id !== option.id)
      : [...job, option];

    setJob(newSelected);
  };

  const handleRemoveScheduleTag = (option) => {
    const isSelected = schedule.some((current) => current.id === option.id);
    const newSelected = isSelected
      ? schedule.filter((current) => current.id !== option.id)
      : [...schedule, option];

    setSchedule(newSelected);
  };

  const handleRemoveManagementTag = (option) => {
    const isSelected = management.some((current) => current.id === option.id);
    const newSelected = isSelected
      ? management.filter((current) => current.id !== option.id)
      : [...management, option];

    setManagement(newSelected);
  };

  return (
    <Modal
      id="preference"
      open={preference}
      onClose={() => setPreference(false)}
      title="Edit Search Preferences"
      className="!max-w-[46.5rem] !w-full"
      onSave={() => {
        setSteps("preference", 1);
        setPreference(false);
      }}
    >
      <div className="">
        <MultiSelect
          className="w-full"
          options={locationData}
          label="Where are you in your current job search?"
          onChange={setLocation}
          value={location}
        />
        {location.length > 0 && (
          <div className="flex flex-col sm:flex sm:flex-row gap-2 mt-4">
            {location.map((item) => {
              return (
                <TagContainer
                  key={item.id}
                  item={item}
                  onClickHandler={() => handleRemoveLocationTag(item)}
                />
              );
            })}
          </div>
        )}
        <MultiSelect
          className="w-full"
          options={locationData}
          label="What type of job are you looking for? "
          onChange={setOrganization}
          value={organization}
        />
        {organization.length > 0 && (
          <div className="flex flex-col sm:flex sm:flex-row gap-2 mt-4">
            {organization.map((item) => {
              return (
                <TagContainer
                  key={item.id}
                  item={item}
                  onClickHandler={() => handleRemoveOrganizationTag(item)}
                />
              );
            })}
          </div>
        )}
        <MultiSelect
          className="w-full"
          options={locationData}
          label="When are you able to start?"
          onChange={setJob}
          value={job}
        />
        {job.length > 0 && (
          <div className="flex flex-col sm:flex sm:flex-row gap-2 mt-4">
            {job.map((item) => {
              return (
                <TagContainer
                  key={item.id}
                  item={item}
                  onClickHandler={() => handleRemoveJobTag(item)}
                />
              );
            })}
          </div>
        )}
        <SuggestionDropdown
          placeholder="What is your work style preference? "
          label="What is your work style preference? "
          options={Rate}
        />
        <MultiSelect
          className="w-full"
          options={scheduleData}
          label="Are you willing to travel/relocate for a work assignment?"
          onChange={setSchedule}
          value={schedule}
        />
        {schedule.length > 0 && (
          <div className="flex flex-col sm:flex sm:flex-row gap-2 mt-4">
            {schedule.map((item) => {
              return (
                <TagContainer
                  key={item.id}
                  item={item}
                  onClickHandler={() => handleRemoveScheduleTag(item)}
                />
              );
            })}
          </div>
        )}
        <MultiSelect
          className="w-full"
          options={managementStyleData}
          label="Where would you like to work/relocate?"
          onChange={setManagement}
          value={management}
        />
        {management.length > 0 && (
          <div className="flex flex-col sm:flex sm:flex-row gap-2 mt-4">
            {management.map((item) => {
              return (
                <TagContainer
                  key={item.id}
                  item={item}
                  onClickHandler={() => handleRemoveManagementTag(item)}
                />
              );
            })}
          </div>
        )}
      </div>
    </Modal>
  );
};
