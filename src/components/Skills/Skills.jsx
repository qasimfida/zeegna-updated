"use client";

import { UploadIcon, BoxIcon, DocumentFrameIcon } from "@/svgs/icons";
import {
  addChecklistData,
  ageData,
  checklistData,
  completedChecklistData,
  computerSkillsData,
  iconTypes,
} from "@/utils/data";
import { Icon } from "@/svgs";
import Button from "@/components/Button";
import { useState } from "react";
import Checklist from "@/components/Checklist";
import Radio from "@/components/Radio";
import ProgressBar from "@/components/ProgressBar";
import FileUpload from "@/components/FileUpload";
import Card from "@/components/Card";
import cls from "classnames";
import { people } from "@/components/Modals/data";
import { Select } from "@/components/Select/Select";
import { useModals } from "@/contexts/Modals";
import TagContainer from "@/components/TagContainer";

export const Skills = () => {
  const { setSkills, steps } = useModals();
  const [checkboxData, setCheckboxData] = useState(checklistData);
  const [computerData, setComputerData] = useState(computerSkillsData);
  const [ageSpecificData, setAgeSpecificData] = useState(ageData);
  const [externalCheckList, setExternalCheckList] = useState([]);
  const [checkList, setCheckList] = useState([]);
  const [skillsPage, setSkillsPage] = useState(false);
  const [selectedSkills] = useState([
    {
      id: 1,
      name: "Wound Care",
      avatar:
        "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 2,
      name: "Patient Assessment",
      avatar:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 3,
      name: "Medication Administration",
      avatar:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 4,
      name: "Vital Signs Monitoring",
      avatar:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 5,
      name: "IV Therapy",
      avatar:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 6,
      name: "Clinical Procedures",
      avatar:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 7,
      name: "Telemetry",
      avatar:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ]);

  const handleCheckboxChange = (groupId, checkboxId) => {
    setCheckboxData((prevData) =>
      prevData.map((group) => {
        if (group.id === groupId) {
          const updatedData = group.data.map((checkbox) => {
            if (checkbox.id === checkboxId) {
              return { ...checkbox, checked: !checkbox.checkbox };
            } else {
              return { ...checkbox, checked: false };
            }
          });

          return { ...group, data: updatedData };
        } else {
          return group;
        }
      })
    );
  };

  const handleAgeSpecificChange = (groupId, checkboxId) => {
    setAgeSpecificData((prevData) =>
      prevData.map((group) => {
        if (group.id === groupId) {
          const updatedData = group.data.map((checkbox) => {
            if (checkbox.id === checkboxId) {
              return { ...checkbox, checked: !checkbox.checkbox };
            } else {
              return { ...checkbox, checked: false };
            }
          });

          return { ...group, data: updatedData };
        } else {
          return group;
        }
      })
    );
  };

  const handleComputerCheckbox = (groupId, checkboxId) => {
    setComputerData((prevData) =>
      prevData.map((group) => {
        if (group.id === groupId) {
          const updatedData = group.data.map((checkbox) => {
            if (checkbox.id === checkboxId) {
              return { ...checkbox, checked: !checkbox.checkbox };
            } else {
              return { ...checkbox, checked: false };
            }
          });

          return { ...group, data: updatedData };
        } else {
          return group;
        }
      })
    );
  };

  if (skillsPage) {
    return (
      <>
        <Card
          title={"Please fill out your Administrative RN Skills"}
          leftIcon={
            <Icon
              className="min-w-10 min-h-10 hover:border-primary border"
              name="back"
              aria-hidden="true"
              handleClick={(e) => {
                window.scrollTo(0, 0);
                setSkillsPage(false);
                setCheckList(["1"]);
              }}
            />
          }
        >
          <div className="flex flex-wrap mt-4 mb-2 gap-8">
            <div className="flex flex-col gap-3">
              <button
                type="button"
                className="flex items-center gap-2 text-left"
              >
                <Radio variant={"danger"} checked={true} />
                <span className=" text-base font-medium text-grey-400">
                  No theory or experience
                </span>
              </button>
              <button
                type="button"
                className="flex items-center gap-2 text-left"
              >
                <Radio variant={"warning"} checked={true} />
                <span className=" text-base font-medium text-grey-400">
                  Limited experience. Need training
                </span>
              </button>
            </div>
            <div className="flex flex-col gap-3">
              <button
                type="button"
                className="flex items-center gap-2 text-left"
              >
                <Radio variant={"warning_light"} checked={true} />
                <span className=" text-base font-medium text-grey-400">
                  Experienced. Able to perform under supervision
                </span>
              </button>
              <button
                type="button"
                className="flex items-center gap-2 text-left"
              >
                <Radio variant={"primary"} checked={true} />
                <span className=" text-base font-medium text-grey-400">
                  Proficient. Able to perform independently
                </span>
              </button>
            </div>
          </div>
        </Card>

        <div className="p-5 border flex flex-col justify-start px-base rounded-3xl mt-5 bg-white w-full">
          <div className="w-full h-full flex flex-col">
            <h4 className="text-4xl text-grey-400 pt-2.5">
              You have completed 70% of Administrative Duties Checklist
            </h4>
          </div>
          <ProgressBar variant="primary" progress={80} className={"mt-2.5"} />
        </div>

        <Card title={"Administrative Duties"} hasIcon={false}>
          {checkboxData?.map((group, index) => {
            let rCls = ` ${
              index !== checkboxData.length - 1 ? "border-b" : ""
            }`;
            return (
              <div
                key={group?.heading}
                className={cls`py-4 flex justify-between items-center hover:bg-success-light/10 ${rCls}`}
              >
                <div>
                  <h4 className="text-base font-semibold text-grey-400">
                    {group?.heading}
                  </h4>
                </div>
                <div className="flex gap-2">
                  {group?.data?.map(({ id, name, checked }) => (
                    <Radio
                      key={id}
                      variant={name}
                      checked={checked}
                      onChange={() => handleCheckboxChange(group.id, id)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </Card>

        <Card title={"Computer Skills"} hasIcon={false}>
          {computerData?.map((group, index) => {
            let rCls = ` ${
              index !== computerData.length - 1 ? "border-b" : ""
            }`;
            return (
              <div
                key={group?.heading}
                className={cls`py-4 flex justify-between items-center hover:bg-success-light/10 ${rCls}`}
              >
                <div>
                  <h4 className="text-base font-semibold text-grey-400 mb-2">
                    {group?.heading}
                  </h4>
                </div>
                <div className="flex gap-2">
                  {group?.data?.map(({ id, name, checked }) => {
                    return (
                      <Radio
                        key={id}
                        variant={name}
                        checked={checked}
                        onChange={() => handleComputerCheckbox(group.id, id)}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </Card>

        <Card title={"Age-Specific Competencies"} hasIcon={false}>
          {ageSpecificData?.map((group, index) => {
            let rCls = ` ${
              index !== ageSpecificData.length - 1 ? "border-b" : ""
            }`;
            return (
              <div
                key={group?.heading}
                className={cls`py-4 flex justify-between items-center hover:bg-success-light/10 ${rCls}`}
              >
                <div>
                  <h4 className="text-base font-semibold text-grey-400">
                    {group?.heading}
                  </h4>
                </div>
                <div className="flex gap-2">
                  {group?.data?.map(({ id, name, checked }) => (
                    <Radio
                      key={id}
                      variant={name}
                      checked={checked}
                      onChange={() => handleAgeSpecificChange(group.id, id)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </Card>
      </>
    );
  }

  return (
    <div>
      <div>
        {steps.skills === 0 && (
          <Card
            title={"Skills"}
            subTitle={"Add Skills"}
            description={
              "Add your skills to help employers to show your strength"
            }
            onAddClick={() => setSkills(true)}
          />
        )}

        {steps.skills === 1 && (
          <Card
            title={"Skills"}
            onEditClick={() => setSkills(true)}
            icon={
              <Icon
                name="edit"
                className="min-w-8 min-h-8"
                aria-hidden="true"
              />
            }
          >
            {selectedSkills.length > 0 && (
              <div className="flex flex-col sm:flex sm:flex-row gap-2 flex-wrap mt-4">
                {selectedSkills.map((item) => {
                  return (
                    <TagContainer
                      key={item.id}
                      item={item}
                      onClickHandler={() =>
                        setSelected(
                          selectedSkills.includes(item)
                            ? [...selectedSkills]
                            : [...selectedSkills, item]
                        )
                      }
                      variant="grey"
                    />
                  );
                })}
              </div>
            )}
          </Card>
        )}
      </div>
      <Card title={"Add a Checklist"} hasIcon={false}>
        <div className="flex flex-wrap gap-1 sm:flex-nowrap sm:gap-4 md:gap-1 md:flex-wrap lg:flex-wrap xl:flex-nowrap xl:gap-4 justify-center items-center pt-4 pb-2 ">
          <Select
            onChange={() => {
              window.scrollTo(0, 0);
              setSkillsPage(true);
            }}
            className="w-full h-11 mt-0"
            placeholder="Add a checklist"
            variant="simple"
            label="Add a checklist"
            options={people}
          />
          <div className="flex items-center">
            <p className=" text-grey-400 font-medium">or</p>
          </div>
          <div className="flex items-center">
            <FileUpload
              variant="external"
              accept=".pdf, .doc, .docx, .ppt, .pptx, .xls, .xlsx"
              className="!rounded-3xl bg-grey-1800 flex items-center !border-0 w-full !flex-row xl:w-auto py-0 md:px-4 leading-6 gap-2 hover:bg-grey-1100 justify-center md:text-start text-white min-w-[290px] h-[45px]"
              onChange={setExternalCheckList}
            >
              <>
                <p className="md:w-auto truncate text-base font-medium h-11 flex items-center text-white">
                  Upload External Checklist
                </p>
                <UploadIcon className="w-5 h-5" aria-hidden="true" />
              </>
            </FileUpload>
          </div>
        </div>
      </Card>

      {!checkList.length > 0 ? (
        <div className="px-5 py-6 mt-6 bg-white rounded-2xl  hover:ring-1 hover:ring-black hover:shadow-xl ease-in cursor-pointer ">
          <div className="flex justify-center text-center flex-col items-center">
            <BoxIcon className="h-48" aria-hidden="true" />
            <h4 className="text-5xl text-grey-400">Completed Checklist</h4>
            <p className="font-normal text-base leading-6 text-grey-400">
              Upload External Checklist
            </p>
          </div>
        </div>
      ) : (
        <Card title={"Completed Chekcklists"} hasIcon={false}>
          {completedChecklistData.map(
            ({ heading, data, percentage }, index) => {
              return (
                <Checklist
                  key={`${heading}-option-${index + 1}`}
                  heading={heading}
                  data={data}
                  percentage={percentage}
                />
              );
            }
          )}
        </Card>
      )}

      {!externalCheckList.length > 0 ? (
        <div className="px-5 py-6 mt-6 bg-white rounded-2xl  hover:ring-1 hover:ring-black hover:shadow-xl ease-in cursor-pointer ">
          <div className="flex justify-center text-center flex-col items-center">
            <DocumentFrameIcon className="h-48" aria-hidden="true" />
            <h4 className="text-5xl text-grey-400">
              Uploaded External Checklist
            </h4>
            <p className="font-normal text-base leading-6 text-grey-400">
              Upload External Checklist
            </p>
          </div>
        </div>
      ) : (
        <Card title={"External Checkhlist"} hasIcon={false}>
          {addChecklistData.map(({ heading, data, percentage }, index) => {
            const btnCls = cls(
              `hover:ring-2 hover:border-0 px-2.5 !ring-${percentage.type} gap-1`
            );

            return (
              <div
                key={`${heading}-option-${index + 1}`}
                className="p-3 border flex flex-wrap justify-between px-base py-[14px] items-center rounded-3xl mt-5  hover:shadow-xl"
              >
                <div>
                  <h4 className="text-4xl text-grey-400 mb-2">{heading}</h4>
                  <p className="text-base text-grey-500 font-medium mb-2">
                    <span className="">{data.name}: </span>
                    {data.value}
                  </p>
                </div>
                <Button
                  color={percentage.type}
                  variant="tag"
                  size="md"
                  className={btnCls}
                >
                  {iconTypes[percentage.type]}
                  {percentage.name}
                </Button>
                <Icon
                  name="delete"
                  aria-hidden="true"
                  className="min-w-8 min-h-8 hover:border-primary"
                  onClick={() => setExternalCheckList([])}
                />
              </div>
            );
          })}
        </Card>
      )}
    </div>
  );
};
