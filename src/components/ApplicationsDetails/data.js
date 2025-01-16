"use client";

import {
  BreifcaseIcon,
  BuildingIcon,
  DocumentIcon,
  DocumentMagnifyIcon,
  DocumentsMinusIcon,
  HomeIcon,
  LogoutIcon,
  MessagesIcon,
  ProfileIcon,
  SettingsIcon,
  EducationIcon,
} from "@/svgs/icons";
import Discover from "@/components/Discover";
import Invites from "@/components/Invites";
import Applications from "@/components/Applications";
import JobOffers from "@/components/JobOffers";
import trinityHealth from "../../../public/images/trinityHealth.png";
import Image from "next/image";
import UserInfo from "../UserInfo";
import {
  basicCertificationsData,
  completedChecklistData,
  continuingEducationData,
  educationData,
  employemntData,
  ExperienceSummaryData,
  iconTypes,
  licensesData,
  otherCertificationsData,
  searchPreferencesData,
  specialityCertificationsData,
  trainingData,
  workplacePreferencesData,
} from "@/utils/data";
import Button from "../Button";
import { Icon } from "@/svgs";
import cls from "classnames";
import { renderProfileCardData } from "@/utils/helper";
import { skillsTagData } from "../Modals/data";
import TagContainer from "../TagContainer";

const renderTagsWithIcons = (tags) => {
  return tags.map(({ name, type }, index) => (
    <Button
      key={`${name}-option-${index + 1}`}
      color={type}
      variant="tag"
      size="md"
    >
      {iconTypes[type]}
      {name}
    </Button>
  ));
};

export const navigation = [
  {
    name: "Home",
    href: "/",
    icon: <HomeIcon className="w-5 h-5" aria-hidden="true" />,
    current: true,
  },
  {
    name: "Profile",
    href: "/profile/overview",
    icon: <ProfileIcon className="w-5 h-5" aria-hidden="true" />,
    current: false,
  },
  {
    name: "My Work",
    href: "/work/discover",
    icon: <DocumentIcon className="w-6 h-6" aria-hidden="true" />,
    current: false,
  },
  {
    name: "Messages",
    href: "/messages",
    icon: <MessagesIcon className="w-6 h-6" aria-hidden="true" />,
    current: false,
  },
  {
    name: "Employers",
    href: "/employers",
    icon: <BuildingIcon className="w-6 h-6" aria-hidden="true" />,
    current: false,
  },
  {
    name: "Settings",
    href: "/settings/notifications",
    icon: <SettingsIcon className="w-6 h-6" aria-hidden="true" />,
    current: false,
  },
  {
    name: "Log Out",
    href: "/",
    icon: <LogoutIcon className="w-6 h-6" aria-hidden="true" />,
    current: false,
  },
];

export const tabData = [
  {
    id: "discover",
    label: "Discover",
    component: <Discover />,
    icon: <DocumentMagnifyIcon className="w-5 h-5" aria-hidden="true" />,
  },
  {
    id: "invites",
    label: "Invites",
    component: <Invites />,
    icon: <DocumentsMinusIcon className="w-5 h-5" aria-hidden="true" />,
  },
  {
    id: "applications",
    label: "Applications",
    component: <Applications />,
    icon: <EducationIcon className="w-5 h-5" aria-hidden="true" />,
  },
  {
    id: "joboffers",
    label: "Job Offers",
    component: <JobOffers />,
    icon: <BreifcaseIcon className="w-5 h-5" aria-hidden="true" />,
  },
];

export const discoverData = [
  {
    id: 1,
    image: <Image src={trinityHealth} alt="Career Image" />,
    title: "Registered Nurse (RN)",
    subTitle: "Bayada Home Care",
    description: "Home Health Care Agency Boston, MA (Field-Based)",
    tags: ["Full Time", "40 Hours / Week", "$75,000-$120,000"],
    progress: 80,
  },
  {
    id: 2,
    image: <Image src={trinityHealth} alt="Career Image" />,
    title: "Registered Nurse (RN)",
    subTitle: "Bayada Home Care",
    description: "Home Health Care Agency Boston, MA (Field-Based)",
    tags: ["Full Time", "40 Hours / Week", "$75,000-$120,000"],
    progress: 60,
  },
  {
    id: 3,
    image: <Image src={trinityHealth} alt="Career Image" />,
    title: "Registered Nurse (RN)",
    subTitle: "Bayada Home Care",
    description: "Home Health Care Agency Boston, MA (Field-Based)",
    tags: ["Full Time", "40 Hours / Week", "$75,000-$120,000"],
    progress: 40,
  },
  {
    id: 4,
    image: <Image src={trinityHealth} alt="Career Image" />,
    title: "Registered Nurse (RN)",
    subTitle: "Bayada Home Care",
    description: "Home Health Care Agency Boston, MA (Field-Based)",
    tags: ["Full Time", "40 Hours / Week", "$75,000-$120,000"],
    progress: 40,
  },
  {
    id: 5,
    image: <Image src={trinityHealth} alt="Career Image" />,
    title: "Registered Nurse (RN)",
    subTitle: "Bayada Home Care",
    description: "Home Health Care Agency Boston, MA (Field-Based)",
    tags: ["Full Time", "40 Hours / Week", "$75,000-$120,000"],
    progress: 40,
  },
  {
    id: 6,
    image: <Image src={trinityHealth} alt="Career Image" />,
    title: "Registered Nurse (RN)",
    subTitle: "Bayada Home Care",
    description: "Home Health Care Agency Boston, MA (Field-Based)",
    tags: ["Full Time", "40 Hours / Week", "$75,000-$120,000"],
    progress: 40,
  },
];
export const invitesData = [
  {
    id: 1,
    image: <Image src={trinityHealth} alt="Career Image" />,
    title: "Registered Nurse (RN)",
    subTitle: "Bayada Home Care",
    description: "Home Health Care Agency Boston, MA (Field-Based)",
    tags: ["Full Time", "40 Hours / Week", "$75,000-$120,000"],
    progress: 80,
  },
  {
    id: 2,
    image: <Image src={trinityHealth} alt="Career Image" />,
    title: "Registered Nurse (RN)",
    subTitle: "Bayada Home Care",
    description: "Home Health Care Agency Boston, MA (Field-Based)",
    tags: ["Full Time", "40 Hours / Week", "$75,000-$120,000"],
    progress: 60,
  },
  {
    id: 3,
    image: <Image src={trinityHealth} alt="Career Image" />,
    title: "Registered Nurse (RN)",
    subTitle: "Bayada Home Care",
    description: "Home Health Care Agency Boston, MA (Field-Based)",
    tags: ["Full Time", "40 Hours / Week", "$75,000-$120,000"],
    progress: 40,
  },
  {
    id: 4,
    image: <Image src={trinityHealth} alt="Career Image" />,
    title: "Registered Nurse (RN)",
    subTitle: "Bayada Home Care",
    description: "Home Health Care Agency Boston, MA (Field-Based)",
    tags: ["Full Time", "40 Hours / Week", "$75,000-$120,000"],
    progress: 40,
  },
  {
    id: 5,
    image: <Image src={trinityHealth} alt="Career Image" />,
    title: "Registered Nurse (RN)",
    subTitle: "Bayada Home Care",
    description: "Home Health Care Agency Boston, MA (Field-Based)",
    tags: ["Full Time", "40 Hours / Week", "$75,000-$120,000"],
    progress: 40,
  },
  {
    id: 6,
    image: <Image src={trinityHealth} alt="Career Image" />,
    title: "Registered Nurse (RN)",
    subTitle: "Bayada Home Care",
    description: "Home Health Care Agency Boston, MA (Field-Based)",
    tags: ["Full Time", "40 Hours / Week", "$75,000-$120,000"],
    progress: 40,
  },
];

export const generalQuestions = [
  {
    question: "Overview",
    answer: <UserInfo />,
  },
  {
    question: "Credentials",
    answer: (
      <div>
        {[licensesData[0]]?.map((item, index) => (
          <div
            key={`${item}-option-${index + 1}`}
            className={cls`gap-4 pt-4 ${
              index === licensesData ? "pb-0" : "border-b pb-4"
            }  flex flex-col`}
          >
            {item.country && (
              <div className="flex justify-between items-center w-full">
                <p className="text-sm font-semibold md:text-4xl text-grey-400">
                  License Information
                </p>
              </div>
            )}
            <div className="flex flex-col gap-2.5">
              {item.country && (
                <p className="text-sm md:text-base font-medium text-grey-400 ">
                  {item.country}
                </p>
              )}
              {item.heading && (
                <p className="text-sm font-semibold md:text-4xl text-grey-400 pb-2.5">
                  {item.heading}
                </p>
              )}
              {item?.data?.map(({ name, value }, index) => {
                const cls = `text-sm md:text-base ${
                  name.toLocaleLowerCase().includes("email") ||
                  name.toLocaleLowerCase().includes("website")
                    ? "text-primary-2600"
                    : "text-grey-500"
                } font-medium ${
                  Array.isArray(value)
                    ? "flex items-center flex-wrap gap-2"
                    : ""
                }`;

                return (
                  <div key={`${name}-option-${index + 1}`} className={cls}>
                    <span className="text-sm md:text-base text-grey-400">
                      {name}:{" "}
                    </span>
                    {renderProfileCardData(value)}
                  </div>
                );
              })}
              {item.tags && (
                <div className="flex flex-wrap w-full gap-2">
                  {renderTagsWithIcons(item.tags)}
                </div>
              )}
            </div>
          </div>
        ))}
        {[basicCertificationsData[0]]?.map((item, index) => (
          <div
            key={`${item}-option-${index + 1}`}
            className={cls`gap-4 pt-4 ${
              index === basicCertificationsData ? "pb-0" : "border-b pb-4"
            }  flex flex-col`}
          >
            {item.country && (
              <div className="flex justify-between items-center w-full">
                <p className="text-sm font-semibold md:text-4xl text-grey-400">
                  Basic Certifications
                </p>
              </div>
            )}
            <div className="flex flex-col gap-2.5">
              {item.country && (
                <p className="text-sm md:text-base font-medium text-grey-400 ">
                  {item.country}
                </p>
              )}
              {item.heading && (
                <p className="text-sm font-semibold md:text-4xl text-grey-400 pb-2.5">
                  {item.heading}
                </p>
              )}
              {item?.data?.map(({ name, value }, index) => {
                const cls = `text-sm md:text-base ${
                  name.toLocaleLowerCase().includes("email") ||
                  name.toLocaleLowerCase().includes("website")
                    ? "text-primary-2600"
                    : "text-grey-500"
                } font-medium ${
                  Array.isArray(value)
                    ? "flex items-center flex-wrap gap-2"
                    : ""
                }`;

                return (
                  <div key={`${name}-option-${index + 1}`} className={cls}>
                    <span className="text-sm md:text-base text-grey-400">
                      {name}:{" "}
                    </span>
                    {renderProfileCardData(value)}
                  </div>
                );
              })}
              {item.tags && (
                <div className="flex flex-wrap w-full gap-2">
                  {renderTagsWithIcons(item.tags)}
                </div>
              )}
            </div>
          </div>
        ))}
        {[specialityCertificationsData[0]]?.map((item, index) => (
          <div
            key={`${item}-option-${index + 1}`}
            className={cls`gap-4 pt-4 ${
              index === specialityCertificationsData ? "pb-0" : "border-b pb-4"
            }  flex flex-col`}
          >
            {item.country && (
              <div className="flex justify-between items-center w-full">
                <p className="text-sm font-semibold md:text-4xl text-sm md:text-base ">
                  Speciality Certifications
                </p>
              </div>
            )}
            <div className="flex flex-col gap-2.5">
              {item.country && (
                <p className="text-sm md:text-base font-medium text-grey-400 ">
                  {item.country}
                </p>
              )}
              {item.heading && (
                <p className="text-sm font-semibold md:text-4xl text-grey-400 pb-2.5">
                  {item.heading}
                </p>
              )}
              {item?.data?.map(({ name, value }, index) => {
                const cls = `text-sm md:text-base ${
                  name.toLocaleLowerCase().includes("email") ||
                  name.toLocaleLowerCase().includes("website")
                    ? "text-primary-2600"
                    : "text-grey-500"
                } font-medium ${
                  Array.isArray(value)
                    ? "flex items-center flex-wrap gap-2"
                    : ""
                }`;

                return (
                  <div key={`${name}-option-${index + 1}`} className={cls}>
                    <span className="text-sm md:text-base text-grey-400">
                      {name}:{" "}
                    </span>
                    {renderProfileCardData(value)}
                  </div>
                );
              })}
              {item.tags && (
                <div className="flex flex-wrap w-full gap-2">
                  {renderTagsWithIcons(item.tags)}
                </div>
              )}
            </div>
          </div>
        ))}
        {[otherCertificationsData[0]]?.map((item, index) => (
          <div
            key={`${item}-option-${index + 1}`}
            className={cls`gap-4 pt-4 ${
              index === otherCertificationsData ? "pb-0" : "pb-4"
            }  flex flex-col`}
          >
            {item.country && (
              <div className="flex justify-between items-center w-full">
                <p className="text-sm font-semibold md:text-4xl text-grey-400">
                  Other Certifications
                </p>
              </div>
            )}
            <div className="flex flex-col gap-2.5">
              {item.country && (
                <p className="text-sm md:text-base font-medium text-grey-400 ">
                  {item.country}
                </p>
              )}
              {item.heading && (
                <p className="text-sm font-semibold md:text-4xl text-grey-400 pb-2.5">
                  {item.heading}
                </p>
              )}
              {item?.data?.map(({ name, value }, index) => {
                const cls = `text-sm md:text-base ${
                  name.toLocaleLowerCase().includes("email") ||
                  name.toLocaleLowerCase().includes("website")
                    ? "text-primary-2600"
                    : "text-grey-500"
                } font-medium ${
                  Array.isArray(value)
                    ? "flex items-center flex-wrap gap-2"
                    : ""
                }`;

                return (
                  <div key={`${name}-option-${index + 1}`} className={cls}>
                    <span className="text-sm md:text-base text-grey-400">
                      {name}:{" "}
                    </span>
                    {renderProfileCardData(value)}
                  </div>
                );
              })}
              {item.tags && (
                <div className="flex flex-wrap w-full gap-2">
                  {renderTagsWithIcons(item.tags)}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    question: "Experience",
    answer: (
      <div>
        {[ExperienceSummaryData[0]]?.map((item, index) => (
          <div
            key={`${item}-option-${index + 1}`}
            className={cls`gap-4 pt-4 ${
              index === ExperienceSummaryData ? "pb-0" : "pb-4 border-b"
            }  flex flex-col`}
          >
            {item.country && (
              <div className="flex justify-between items-center w-full">
                <p className="text-sm font-semibold md:text-4xl text-grey-400">
                  Experience Summary
                </p>
              </div>
            )}
            <div className="flex flex-col gap-2.5">
              {item.country && (
                <p className="text-sm md:text-base font-medium text-grey-400 ">
                  {item.country}
                </p>
              )}
              {item.heading && (
                <p className="text-sm font-semibold md:text-4xl text-grey-400 pb-2.5">
                  {item.heading}
                </p>
              )}
              {item?.data?.map(({ name, value }, index) => {
                const cls = `text-sm md:text-base ${
                  name.toLocaleLowerCase().includes("email") ||
                  name.toLocaleLowerCase().includes("website")
                    ? "text-primary-2600"
                    : "text-grey-500"
                } font-medium ${
                  Array.isArray(value)
                    ? "flex items-center flex-wrap gap-2"
                    : ""
                }`;

                return (
                  <div key={`${name}-option-${index + 1}`} className={cls}>
                    <span className="text-sm md:text-base text-grey-400">
                      {name}:{" "}
                    </span>
                    {renderProfileCardData(value)}
                  </div>
                );
              })}
              {item.tags && (
                <div className="flex flex-wrap w-full gap-2">
                  {renderTagsWithIcons(item.tags)}
                </div>
              )}
            </div>
          </div>
        ))}
        {[continuingEducationData[0]]?.map((item, index) => (
          <div
            key={`${item}-option-${index + 1}`}
            className={cls`gap-4 pt-4 ${
              index === continuingEducationData ? "pb-0" : "pb-4 border-b"
            }  flex flex-col`}
          >
            {item.country && (
              <div className="flex justify-between items-center w-full">
                <p className="text-sm font-semibold md:text-4xl text-grey-400">
                  Work Experience
                </p>
              </div>
            )}
            <div className="flex flex-col gap-2.5">
              {item.country && (
                <p className="text-sm md:text-base font-medium text-grey-400 ">
                  {item.country}
                </p>
              )}
              {item.heading && (
                <p className="text-sm font-semibold md:text-4xl text-grey-400 pb-2.5">
                  {item.heading}
                </p>
              )}
              {item?.data?.map(({ name, value }, index) => {
                const cls = `text-sm md:text-base ${
                  name.toLocaleLowerCase().includes("email") ||
                  name.toLocaleLowerCase().includes("website")
                    ? "text-primary-2600"
                    : "text-grey-500"
                } font-medium ${
                  Array.isArray(value)
                    ? "flex items-center flex-wrap gap-2"
                    : ""
                }`;

                return (
                  <div key={`${name}-option-${index + 1}`} className={cls}>
                    <span className="text-sm md:text-base text-grey-400">
                      {name}:{" "}
                    </span>
                    {renderProfileCardData(value)}
                  </div>
                );
              })}
              {item.tags && (
                <div className="flex flex-wrap w-full gap-2">
                  {renderTagsWithIcons(item.tags)}
                </div>
              )}
            </div>
          </div>
        ))}
        {[continuingEducationData[0]]?.map((item, index) => (
          <div
            key={`${item}-option-${index + 1}`}
            className={cls`gap-4 pt-4 ${
              index === continuingEducationData ? "pb-0" : "pb-4 border-b"
            }  flex flex-col`}
          >
            {item.country && (
              <div className="flex justify-between items-center w-full">
                <p className="text-sm font-semibold md:text-4xl text-grey-400">
                  Professional Activities
                </p>
              </div>
            )}
            <div className="flex flex-col gap-2.5">
              {item.country && (
                <p className="text-sm md:text-base font-medium text-grey-400 ">
                  {item.country}
                </p>
              )}
              {item.heading && (
                <p className="text-sm font-semibold md:text-4xl text-grey-400 pb-2.5">
                  {item.heading}
                </p>
              )}
              {item?.data?.map(({ name, value }, index) => {
                const cls = `text-sm md:text-base ${
                  name.toLocaleLowerCase().includes("email") ||
                  name.toLocaleLowerCase().includes("website")
                    ? "text-primary-2600"
                    : "text-grey-500"
                } font-medium ${
                  Array.isArray(value)
                    ? "flex items-center flex-wrap gap-2"
                    : ""
                }`;

                return (
                  <div key={`${name}-option-${index + 1}`} className={cls}>
                    <span className="text-sm md:text-base text-grey-400">
                      {name}:{" "}
                    </span>
                    {renderProfileCardData(value)}
                  </div>
                );
              })}
              {item.tags && (
                <div className="flex flex-wrap w-full gap-2">
                  {renderTagsWithIcons(item.tags)}
                </div>
              )}
            </div>
          </div>
        ))}
        {[continuingEducationData[0]]?.map((item, index) => (
          <div
            key={`${item}-option-${index + 1}`}
            className={cls`gap-4 pt-4 ${
              index === continuingEducationData ? "pb-0" : "pb-4"
            }  flex flex-col`}
          >
            {item.country && (
              <div className="flex justify-between items-center w-full">
                <p className="text-sm font-semibold md:text-4xl text-grey-400">
                  Tech Proficiency
                </p>
              </div>
            )}
            <div className="flex flex-col gap-2.5">
              {item.country && (
                <p className="text-sm md:text-base font-medium text-grey-400 ">
                  {item.country}
                </p>
              )}
              {item.heading && (
                <p className="text-sm font-semibold md:text-4xl text-grey-400 pb-2.5">
                  {item.heading}
                </p>
              )}
              {item?.data?.map(({ name, value }, index) => {
                const cls = `text-sm md:text-base ${
                  name.toLocaleLowerCase().includes("email") ||
                  name.toLocaleLowerCase().includes("website")
                    ? "text-primary-2600"
                    : "text-grey-500"
                } font-medium ${
                  Array.isArray(value)
                    ? "flex items-center flex-wrap gap-2"
                    : ""
                }`;

                return (
                  <div key={`${name}-option-${index + 1}`} className={cls}>
                    <span className="text-sm md:text-base text-grey-400">
                      {name}:{" "}
                    </span>
                    {renderProfileCardData(value)}
                  </div>
                );
              })}
              {item.tags && (
                <div className="flex flex-wrap w-full gap-2">
                  {renderTagsWithIcons(item.tags)}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    question: "Education",
    answer: (
      <div>
        {[educationData[0]]?.map((item, index) => (
          <div
            key={`${item}-option-${index + 1}`}
            className={cls`gap-4 pt-4 ${
              index === educationData ? "pb-0" : "pb-4 border-b"
            }  flex flex-col`}
          >
            {item.country && (
              <div className="flex justify-between items-center w-full">
                <p className="text-sm font-semibold md:text-4xl text-grey-400">
                  Education
                </p>
              </div>
            )}
            <div className="flex flex-col gap-2.5">
              {item.country && (
                <p className="text-sm md:text-base font-medium text-grey-400 ">
                  {item.country}
                </p>
              )}
              {item.heading && (
                <p className="text-sm font-semibold md:text-4xl text-grey-400 pb-2.5">
                  {item.heading}
                </p>
              )}
              {item?.data?.map(({ name, value }, index) => {
                const cls = `text-sm md:text-base ${
                  name.toLocaleLowerCase().includes("email") ||
                  name.toLocaleLowerCase().includes("website")
                    ? "text-primary-2600"
                    : "text-grey-500"
                } font-medium ${
                  Array.isArray(value)
                    ? "flex items-center flex-wrap gap-2"
                    : ""
                }`;

                return (
                  <div key={`${name}-option-${index + 1}`} className={cls}>
                    <span className="text-sm md:text-base text-grey-400">
                      {name}:{" "}
                    </span>
                    {renderProfileCardData(value)}
                  </div>
                );
              })}
              {item.tags && (
                <div className="flex flex-wrap w-full gap-2">
                  {renderTagsWithIcons(item.tags)}
                </div>
              )}
            </div>
          </div>
        ))}
        {[continuingEducationData[0]]?.map((item, index) => (
          <div
            key={`${item}-option-${index + 1}`}
            className={cls`gap-4 pt-4 ${
              index === continuingEducationData ? "pb-0" : "pb-4 border-b"
            }  flex flex-col`}
          >
            {item.country && (
              <div className="flex justify-between items-center w-full">
                <p className="text-sm font-semibold md:text-4xl text-grey-400">
                  Continuing Education
                </p>
              </div>
            )}
            <div className="flex flex-col gap-2.5">
              {item.country && (
                <p className="text-sm md:text-base font-medium text-grey-400 ">
                  {item.country}
                </p>
              )}
              {item.heading && (
                <p className="text-sm font-semibold md:text-4xl text-grey-400 pb-2.5">
                  {item.heading}
                </p>
              )}
              {item?.data?.map(({ name, value }, index) => {
                const cls = `text-sm md:text-base ${
                  name.toLocaleLowerCase().includes("email") ||
                  name.toLocaleLowerCase().includes("website")
                    ? "text-primary-2600"
                    : "text-grey-500"
                } font-medium ${
                  Array.isArray(value)
                    ? "flex items-center flex-wrap gap-2"
                    : ""
                }`;

                return (
                  <div key={`${name}-option-${index + 1}`} className={cls}>
                    <span className="text-sm md:text-base text-grey-400">
                      {name}:{" "}
                    </span>
                    {renderProfileCardData(value)}
                  </div>
                );
              })}
              {item.tags && (
                <div className="flex flex-wrap w-full gap-2">
                  {renderTagsWithIcons(item.tags)}
                </div>
              )}
            </div>
          </div>
        ))}
        {[trainingData[0]]?.map((item, index) => (
          <div
            key={`${item}-option-${index + 1}`}
            className={cls`gap-4 pt-4 ${
              index === trainingData ? "pb-0" : "pb-4 border-b"
            }  flex flex-col`}
          >
            {item.country && (
              <div className="flex justify-between items-center w-full">
                <p className="text-sm font-semibold md:text-4xl text-grey-400">
                  Training
                </p>
              </div>
            )}
            <div className="flex flex-col gap-2.5">
              {item.country && (
                <p className="text-sm md:text-base font-medium text-grey-400 ">
                  {item.country}
                </p>
              )}
              {item.heading && (
                <p className="text-sm font-semibold md:text-4xl text-grey-400 pb-2.5">
                  {item.heading}
                </p>
              )}
              {item?.data?.map(({ name, value }, index) => {
                const cls = `text-sm md:text-base ${
                  name.toLocaleLowerCase().includes("email") ||
                  name.toLocaleLowerCase().includes("website")
                    ? "text-primary-2600"
                    : "text-grey-500"
                } font-medium ${
                  Array.isArray(value)
                    ? "flex items-center flex-wrap gap-2"
                    : ""
                }`;

                return (
                  <div key={`${name}-option-${index + 1}`} className={cls}>
                    <span className="text-sm md:text-base text-grey-400">
                      {name}:{" "}
                    </span>
                    {renderProfileCardData(value)}
                  </div>
                );
              })}
              {item.tags && (
                <div className="flex flex-wrap w-full gap-2">
                  {renderTagsWithIcons(item.tags)}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    question: "Skills",
    answer: (
      <div className="py-5">
        {skillsTagData.length > 0 && (
          <div className="flex flex-col sm:flex sm:flex-row gap-2 flex-wrap">
            {skillsTagData.map((item, index) => {
              return (
                <TagContainer
                  key={`${item.id}-option-${index + 1}`}
                  item={item}
                  variant="grey"
                />
              );
            })}
          </div>
        )}
        {[trainingData[0]]?.map((item, index) => (
          <div
            key={`${item}-option-${index + 1}`}
            className={cls` pt-4 ${
              index === trainingData ? "pb-0" : "pb-4 border-b"
            }  flex flex-col`}
          >
            {item.country && (
              <div className="flex justify-between items-center w-full">
                <p className="text-sm font-semibold md:text-4xl text-grey-400">
                  Completed Chekcklists
                </p>
              </div>
            )}
            <div className="flex flex-col ">
              {completedChecklistData.map(
                ({ heading, data, percentage }, index) => {
                  const btnCls = cls(`border hover:border-2 gap-1 px-4`);
                  return (
                    <div
                      key={`${heading}-option-${index + 1}`}
                      className="p-4 border flex flex-wrap justify-between px-base items-center rounded-3xl mt-2.5 hover:ring-1 ring-success hover:shadow-xl  "
                    >
                      <div>
                        <h4 className="text-sm font-semibold md:text-4xl text-grey-400 mb-2">
                          {heading}
                        </h4>
                        <p className="text-sm md:text-base text-grey-500 font-medium mb-2">
                          <span className="text-grey-400">{data.name}: </span>
                          {data.value}
                        </p>
                      </div>
                      <Button
                        color={percentage.type}
                        variant="tag"
                        size="md"
                        className={btnCls}
                      >
                        {percentage.name}
                        {/* {iconTypes[percentage.type]} */}
                      </Button>
                      <Icon
                        name="edit"
                        className="min-w-8 min-h-8 hover:border-primary"
                        aria-hidden="true"
                      />
                    </div>
                  );
                }
              )}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    question: "Preferences",
    answer: (
      <div>
        {[searchPreferencesData[0]]?.map((item, index) => (
          <div
            key={`${item}-option-${index + 1}`}
            className={cls`gap-4 pt-4 ${
              index === searchPreferencesData ? "pb-0" : "pb-4 border-b"
            }  flex flex-col`}
          >
            <div className="flex justify-between items-center w-full">
              <p className="text-sm font-semibold md:text-4xl text-grey-400">
                Search Preferences
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              {item.country && (
                <p className="text-sm md:text-base font-medium text-grey-400 ">
                  {item.country}
                </p>
              )}
              {item.heading && (
                <p className="text-sm font-semibold md:text-4xl text-grey-400 pb-2.5">
                  {item.heading}
                </p>
              )}
              {item?.data?.map(({ name, value }, index) => {
                const cls = `text-sm md:text-base ${
                  name.toLocaleLowerCase().includes("email") ||
                  name.toLocaleLowerCase().includes("website")
                    ? "text-primary-2600"
                    : "text-grey-500"
                } font-medium ${
                  Array.isArray(value)
                    ? "flex items-center flex-wrap gap-2"
                    : ""
                }`;

                return (
                  <div key={`${name}-option-${index + 1}`} className={cls}>
                    <span className="text-sm md:text-base text-grey-400">
                      {name}:{" "}
                    </span>
                    {renderProfileCardData(value)}
                  </div>
                );
              })}
              {item.tags && (
                <div className="flex flex-wrap w-full gap-2">
                  {renderTagsWithIcons(item.tags)}
                </div>
              )}
            </div>
          </div>
        ))}
        {[workplacePreferencesData[0]]?.map((item, index) => (
          <div
            key={`${item}-option-${index + 1}`}
            className={cls`gap-4 pt-4 ${
              index === workplacePreferencesData ? "pb-0" : "pb-4 border-b"
            }  flex flex-col`}
          >
            <div className="flex justify-between items-center w-full">
              <p className="text-sm font-semibold md:text-4xl text-grey-400">
                Workplace Preferences
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              {item.country && (
                <p className="text-sm md:text-base font-medium text-grey-400 ">
                  {item.country}
                </p>
              )}
              {item.heading && (
                <p className="text-sm font-semibold md:text-4xl text-grey-400 pb-2.5">
                  {item.heading}
                </p>
              )}
              {item?.data?.map(({ name, value }, index) => {
                const cls = `text-sm md:text-base ${
                  name.toLocaleLowerCase().includes("email") ||
                  name.toLocaleLowerCase().includes("website")
                    ? "text-primary-2600"
                    : "text-grey-500"
                } font-medium ${
                  Array.isArray(value)
                    ? "flex items-center flex-wrap gap-2"
                    : ""
                }`;

                return (
                  <div key={`${name}-option-${index + 1}`} className={cls}>
                    <span className="text-sm md:text-base text-grey-400">
                      {name}:{" "}
                    </span>
                    {renderProfileCardData(value)}
                  </div>
                );
              })}
              {item.tags && (
                <div className="flex flex-wrap w-full gap-2">
                  {renderTagsWithIcons(item.tags)}
                </div>
              )}
            </div>
          </div>
        ))}
        {[employemntData[0]]?.map((item, index) => (
          <div
            key={`${item}-option-${index + 1}`}
            className={cls`gap-4 pt-4 ${
              index === employemntData ? "pb-0" : "pb-0"
            }  flex flex-col`}
          >
            <div className="flex justify-between items-center w-full">
              <p className="text-sm font-semibold md:text-4xl text-grey-400">
                Employment Preferences
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              {item.country && (
                <p className="text-sm md:text-base font-medium text-grey-400 ">
                  {item.country}
                </p>
              )}
              {item.heading && (
                <p className="text-sm font-semibold md:text-4xl text-grey-400 pb-2.5">
                  {item.heading}
                </p>
              )}
              {item?.data?.map(({ name, value }, index) => {
                const cls = `text-sm md:text-base ${
                  name.toLocaleLowerCase().includes("email") ||
                  name.toLocaleLowerCase().includes("website")
                    ? "text-primary-2600"
                    : "text-grey-500"
                } font-medium ${
                  Array.isArray(value)
                    ? "flex items-center flex-wrap gap-2"
                    : ""
                }`;

                return (
                  <div key={`${name}-option-${index + 1}`} className={cls}>
                    <span className="text-sm md:text-base text-grey-400">
                      {name}:{" "}
                    </span>
                    {renderProfileCardData(value)}
                  </div>
                );
              })}
              {item.tags && (
                <div className="flex flex-wrap w-full gap-2">
                  {renderTagsWithIcons(item.tags)}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    ),
  },
];
