"use client";

import {
  continuingEducationData,
  educationData,
  trainingData,
} from "@/utils/data";
import ProfileCard from "@/components/ProfileCard";
import { Icon } from "@/svgs";
import Card from "../Card";
import { useModals } from "@/contexts/Modals";

export const Education = () => {
  const { setEducation, setContinuingEducation, setTraining, steps } =
    useModals();
  return (
    <div>
      {steps.education === 0 && (
        <Card
          title={"Education"}
          subTitle={"Add Education"}
          description={
            "Unlock job opportunities by adding education details to your profile"
          }
          onAddClick={() => setEducation(true)}
        />
      )}

      {steps.education === 1 && (
        <Card
          title={"Education"}
          icon={
            <Icon
              name="add"
              className="min-w-8 min-h-8"
              aria-hidden="true"
              filled
            />
          }
          onEditClick={() => setEducation(true)}
        >
          {educationData?.map((item, index) => (
            <ProfileCard
              key={item.country}
              data={item}
              isLast={index === educationData?.length - 1}
              onEditClick={() => setEducation(true)}
            />
          ))}
        </Card>
      )}

      {steps.continuingEducation === 0 && (
        <Card
          title={"Continuing Education"}
          subTitle={"Add Continuing Education"}
          description={
            "Add continuing education credits earned to enhance your profile"
          }
          onAddClick={() => setContinuingEducation(true)}
        />
      )}

      {steps.continuingEducation === 1 && (
        <Card
          title={"Continuing Education"}
          icon={
            <Icon
              name="add"
              className="min-w-8 min-h-8"
              aria-hidden="true"
              filled
            />
          }
          onEditClick={() => setContinuingEducation(true)}
        >
          {continuingEducationData?.map((item, index) => (
            <ProfileCard
              key={item.country}
              data={item}
              isLast={index === continuingEducationData?.length - 1}
              onEditClick={() => setContinuingEducation(true)}
            />
          ))}
        </Card>
      )}

      {steps.training === 0 && (
        <Card
          title={"Training"}
          subTitle={"Add Training"}
          description={
            "Add trainings attended to demonstrate your professional development"
          }
          onAddClick={() => setTraining(true)}
        />
      )}

      {steps.training === 1 && (
        <Card
          title={"Training"}
          icon={
            <Icon
              name="add"
              className="min-w-8 min-h-8"
              aria-hidden="true"
              filled
            />
          }
          onEditClick={() => setTraining(true)}
        >
          {trainingData?.map((item, index) => (
            <ProfileCard
              key={item.country}
              data={item}
              isLast={index === trainingData?.length - 1}
              onEditClick={() => setTraining(true)}
            />
          ))}
        </Card>
      )}
    </div>
  );
};
