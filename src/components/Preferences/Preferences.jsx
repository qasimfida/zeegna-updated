"use client";

import { Icon } from "@/svgs";
import {
  employemntData,
  searchPreferencesData,
  workplacePreferencesData,
} from "@/utils/data";
import ProfileCard from "@/components/ProfileCard";
import Card from "../Card";
import { useModals } from "@/contexts/Modals";

export const Preferences = () => {
  const { steps, setPreference, setAppSkills, setWorkplace, setEmployment } =
    useModals();
  return (
    <div>
      <Card
        title={"Search Preferences"}
        icon={
          <Icon
            name="edit"
            aria-hidden="true"
            className="min-w-8 min-h-8"
            filled
            handleClick={() => setPreference(true)}
          />
        }
      >
        {searchPreferencesData.map((item) => (
          <ProfileCard key={item.country} data={item} isLast />
        ))}
      </Card>

      <Card
        title={"Workplace Preferences"}
        icon={
          <Icon
            name="edit"
            aria-hidden="true"
            className="min-w-8 min-h-8"
            filled
            handleClick={() => setWorkplace(true)}
          />
        }
      >
        {workplacePreferencesData.map((item) => (
          <ProfileCard key={item.country} data={item} isLast />
        ))}
      </Card>

      {steps.employment === 0 && (
        <Card
          title={"Employment Preferences"}
          subTitle={"Add Employment Preferences"}
          description={
            "Customize your job search by setting your employment preferences"
          }
          onAddClick={() => setEmployment(true)}
        />
      )}

      {steps.employment === 1 && (
        <Card
          title={"Employment Preferences"}
          onEditClick={() => setEmployment(true)}
        >
          {employemntData?.map((item) => (
            <ProfileCard
              key={item.country}
              data={item}
              onEditClick={() => setEmployment(true)}
            />
          ))}
        </Card>
      )}
      {/* {steps.appSkills === 0 && (
        <Card
          title={"App Skills"}
          subTitle={"Add App Skills"}
          description={"Customize your job search by setting your App Skills"}
          onAddClick={() => setAppSkills(true)}
        />
      )}

      {steps.appSkills === 1 && (
        <Card title={"App Skills"}>
          {employemntData?.map((item) => (
            <ProfileCard key={item.country} data={item} />
          ))}
        </Card>
      )} */}
    </div>
  );
};
