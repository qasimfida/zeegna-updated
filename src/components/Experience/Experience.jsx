"use client";

import { Icon } from "@/svgs";
import {
  ExperienceSummaryData,
  continuingEducationData,
  referencesData,
} from "@/utils/data";
import ProfileCard from "@/components/ProfileCard";
import Card from "../Card";
import { useModals } from "@/contexts/Modals";

export const Experience = () => {
  const { setExperience, setWork, setSkill, setReferences, setTech, steps } =
    useModals();
  return (
    <div>
      <Card title={"Experience Summary"} hasIcon={false}>
        {ExperienceSummaryData?.map((item, index) => (
          <ProfileCard
            key={item.country}
            data={item}
            isLast={index === ExperienceSummaryData?.length - 1}
            onEditClick={() => setExperience(true)}
          />
        ))}
      </Card>

      {steps.work === 0 && (
        <Card
          title={"Work Experience"}
          subTitle={"Add Work Experience"}
          description={
            "Find the right job by adding past and current work experience on your profile"
          }
          onAddClick={() => setWork(true)}
        />
      )}

      {steps.work === 1 && (
        <Card
          title={"Work Experience"}
          icon={
            <Icon
              name="add"
              className="min-w-8 min-h-8"
              aria-hidden="true"
              filled
            />
          }
          onEditClick={() => setWork(true)}
        >
          {continuingEducationData?.map((item, index) => (
            <ProfileCard
              key={item.country}
              data={item}
              isLast={index === continuingEducationData?.length - 1}
              onEditClick={() => setWork(true)}
            />
          ))}
        </Card>
      )}

      {steps.skill === 0 && (
        <Card
          title={"Professional Activities"}
          subTitle={"Add Professional Activities"}
          description={
            "Attract employers by adding professional activities on your profile"
          }
          onAddClick={() => setSkill(true)}
        />
      )}

      {steps.skill === 1 && (
        <Card
          title={"Professional Activities"}
          icon={
            <Icon
              name="add"
              className="min-w-8 min-h-8"
              aria-hidden="true"
              filled
            />
          }
          onEditClick={() => setSkill(true)}
        >
          {continuingEducationData?.map((item, index) => (
            <ProfileCard
              key={item.country}
              data={item}
              isLast={index === continuingEducationData?.length - 1}
              onEditClick={() => setSkill(true)}
            />
          ))}
        </Card>
      )}

      {steps.references === 0 && (
        <Card
          title={"References"}
          subTitle={"Add References"}
          description={
            "Boost your credibility with employers by adding references to your profile."
          }
          onAddClick={() => setReferences(true)}
        />
      )}

      {steps.references === 1 && (
        <Card
          title={"References"}
          icon={
            <Icon
              name="add"
              className="min-w-8 min-h-8"
              aria-hidden="true"
              filled
            />
          }
          onEditClick={() => setReferences(true)}
        >
          {referencesData?.map((item, index) => (
            <ProfileCard
              key={item.country}
              data={item}
              isLast={index === referencesData?.length - 1}
              onEditClick={() => setReferences(true)}
            />
          ))}
        </Card>
      )}

      {steps.tech === 0 && (
        <Card
          title={"Tech Proficiency"}
          subTitle={"Add Tech Proficiency"}
          description={
            "Enhance your profile by listing tools and apps you have used in past roles."
          }
          onAddClick={() => setTech(true)}
        />
      )}

      {steps.tech === 1 && (
        <Card
          title={"Tech Proficiency"}
          icon={
            <Icon
              name="add"
              className="min-w-8 min-h-8"
              aria-hidden="true"
              filled
            />
          }
          onEditClick={() => setTech(true)}
        >
          {continuingEducationData?.map((item, index) => (
            <ProfileCard
              key={item.country}
              data={item}
              isLast={index === continuingEducationData?.length - 1}
              onEditClick={() => setTech(true)}
            />
          ))}
        </Card>
      )}
    </div>
  );
};
