"use client";

import { useState } from "react";
import ProfileCard from "@/components/ProfileCard";
import Card from "@/components/Card";
import Award from "@/components/Award";
import EmployerBanner from "@/components/EmployerBanner";
import MapComponent from "@/components/MapComponent/MapComponent";
import { employersOverviewData } from "../EmployerBanner/data";
import { awards, benefitsData, employersQandAData } from "./data";
import {
  PointerIcon,
  AwardAndRatings,
  LifeOfAnEmployee,
  QuestionsIcon,
  Benefits,
  CultureIcon,
  Salary,
} from "@/svgs/icons";
import { healthIconTypes } from "@/utils/data";
import Culture from "@/components/Culture";

export const EmployersOverview = () => {
  const [awardsSteps, setAwardsSteps] = useState(0);
  const [activeTab, setActiveTab] = useState("general");
  const [benefits, setBenefits] = useState(0);
  const [culture, setCulture] = useState(0);
  const [lifeAsAnEmployee, setLifeAsAnEmployee] = useState(0);
  const [qanda, setQandA] = useState(0);

  const renderTabs = () => {
    return employersQandAData?.map((tab, index) => {
      return (
        <li
          key={`${tab}-option-${index + 1}`}
          className="flex items-center w-full py-2.5  focus-within:z-10 "
          onClick={() => setActiveTab(tab.id)}
        >
          <a
            href="#"
            className={`flex items-center justify-center w-full border-r px-4 rounded-s-2xl h-11 ${
              activeTab === tab?.id ? "text-primary" : "text-grey-400"
            }`}
          >
            <div className="hover:text-primary">
              <p className="text-sm font-medium ">{tab?.label}</p>
            </div>
          </a>
        </li>
      );
    });
  };

  const renderTabContent = () => {
    const activeTabComponent = employersQandAData?.find(
      (tab) => tab.id === activeTab
    )?.component;

    return <div className="tab-content">{activeTabComponent}</div>;
  };

  return (
    <div>
      <div className="bg-white rounded-2xl mt-5">
        <EmployerBanner />
        <div className="px-5 pb-5">
          {employersOverviewData?.map((item, index) => (
            <ProfileCard
              className="!gap-2.5"
              key={item.country}
              data={item}
              isLast={index === employersOverviewData?.length - 1}
            />
          ))}
          <p className="text-sm font-medium text-grey-400 mt-2.5">
            Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque.Qorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nunc vulputate libero et velit
            interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Curabitur tempus urna at turpis condimentum lobortis. Ut commodo
            efficitur neque.
          </p>
        </div>
      </div>

      <Card title={"Location"} hasIcon={false}>
        <div className="bg-white rounded-2xl p-4 flex justify-between border mt-5">
          <div className="flex  gap-2.5 w-full items-center ">
            <div className="text-grey-400">
              <PointerIcon className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <p className={`text-base font-medium text-grey-400`}>
                Bayada Home Care Charlotte
              </p>
              <p className={`text-base font-medium text-grey-400`}>
                8801 J.M. Keynes DriveSuite 350Charlotte, NC 28262
              </p>
            </div>
          </div>
        </div>
        <div className="w-full mt-5">
          <MapComponent />
        </div>
      </Card>

      <Card title={"Awards and Ratings"} hasIcon={false}>
        {!awardsSteps && (
          <div
            className="flex flex-col items-center justify-center mt-5"
            onClick={() => setAwardsSteps(1)}
          >
            <AwardAndRatings />
            <p className="text-base text-center font-medium text-grey-400  mt-2.5">
              The employer has not shared any details on awards and recognition
            </p>
          </div>
        )}
        {awardsSteps === 1 && (
          <div
            className="flex flex-col items-center justify-center mt-5 gap-4"
            onClick={() => setAwardsSteps(0)}
          >
            {awards?.map((award) => (
              <Award key={`${award}-benefits-`} award={award} />
            ))}
          </div>
        )}
      </Card>

      <Card title={"Life as an Employee"} hasIcon={false}>
        {lifeAsAnEmployee === 0 ? (
          <div
            className="flex flex-col items-center mt-5"
            onClick={() => setLifeAsAnEmployee(1)}
          >
            <LifeOfAnEmployee />
            <p className="text-base text-center font-medium text-grey-400  mt-2.5">
              The employer has not shared any details on awards and recognition
            </p>
          </div>
        ) : (
          <div
            className="flex flex-col items-center mt-5"
            onClick={() => setLifeAsAnEmployee(0)}
          >
            {/* <LifeOfAnEmployee /> */}
            <p className="text-base font-medium text-grey-400">
              Nurses form the very heart of our healthcare ministry. As a
              Catholic healthcare organization founded in 1890 by the Sisters of
              St. Joseph of Peace, PeaceHealth’s legacy and future are rooted in
              the vital service of its dedicated nurses and caregivers.Our
              nurses make up one-third of our overall workforce and are
              committed to living our Mission; caring for the whole person,
              mind, body, spirit and relationships. They play a critical role in
              ensuring the continued delivery of exceptional and compassionate
              care.PeaceHealth is committed to nursing excellence and our nurses
              serve our patients in a collaborative, Mission-driven setting
              marrying exceptional medicine with exceptional care.
            </p>
            <p className="text-base font-medium text-grey-400 mt-2.5">
              PeaceHealth is dedicated to supporting new nurses. Our Nurse
              Residency Program, offered in Bellingham, Vancouver, Longview, and
              Eugene/Springfield, includes monthly seminars focused on enhancing
              transition to professional practice and support building
              relationships with preceptors, mentors, and leaders throughout the
              first year...
            </p>
          </div>
        )}
      </Card>

      <Card title={"Questions and Answers"} hasIcon={false}>
        {qanda === 0 ? (
          <div
            className="flex flex-col items-center mt-4"
            onClick={() => setQandA(1)}
          >
            <QuestionsIcon />
            <p className="text-base text-center font-medium text-grey-400  mt-2.5">
              The employer has not added any Questions and Answers to their
              profile
            </p>
          </div>
        ) : (
          <div
            className="flex flex-col items-center mt-4"
            onClick={() => setQandA(0)}
          >
            <div className="flex flex-col   w-full">
              <ul className="text-sm font-medium text-center text-grey-400  flex overflow-hidden mx-auto border rounded-2xl w-full">
                {renderTabs()}
              </ul>
            </div>
            <div className="pt-2 w-full">{renderTabContent()}</div>
          </div>
        )}
      </Card>

      <Card title={"Benefits"} hasIcon={false}>
        {benefits === 0 ? (
          <div
            className="flex flex-col items-center mt-4"
            onClick={() => setBenefits(1)}
          >
            <Benefits />
            <p className="text-base text-center font-medium text-grey-400  mt-2.5">
              The employer has not shared any details on benefits offered
            </p>
          </div>
        ) : (
          <div
            className="flex flex-wrap w-full gap-2.5 items-start mt-4"
            onClick={() => setBenefits(0)}
          >
            {benefitsData?.map(({ type, label }) => {
              return (
                <button
                  key={`${type}-benefits-${label}-`}
                  className="flex flex-wrap rounded-full gap-2 mt-2.5 py-1.5 px-2.5 border border-primary-400 items-center"
                >
                  <div className="text-primary-400">
                    {healthIconTypes[type]}
                  </div>
                  <p className="text-primary-400 text-sm font-medium">
                    {label}
                  </p>
                </button>
              );
            })}
          </div>
        )}
      </Card>

      <Card title={"Culture"} hasIcon={false}>
        {culture === 0 ? (
          <div
            className="flex flex-col items-center mt-4"
            onClick={() => setCulture(1)}
          >
            <CultureIcon />
            <p className="text-base text-center font-medium text-grey-400  mt-2.5">
              The employer has not provided any details on the culture
            </p>
          </div>
        ) : (
          <Culture />
        )}
      </Card>

      <Card title={"Salary"} hasIcon={false}>
        <div className="flex flex-col items-center mt-4">
          <Salary />
          <p className="text-base text-center font-medium text-grey-400  mt-2.5">
            The employer has not provided any details on the salary
          </p>
        </div>
      </Card>

      {/* <Card title={"Jobs by the Employer (0)"} hasIcon={false}>
        <div className="flex flex-col items-center mt-4">
          <JobsByEmployer />
          <p className="text-base text-center font-medium text-grey-400  mt-2.5">
            The employer has not posted any jobs
          </p>
        </div>
      </Card> */}
    </div>
  );
};
