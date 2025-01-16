"use client";

import Card from "../Card/index";
import {
  basicCertificationsData,
  licensesData,
  otherCertificationsData,
  specialityCertificationsData,
} from "@/utils/data";
import ProfileCard from "@/components/ProfileCard";
import { Icon } from "@/svgs";
import { useModals } from "@/contexts/Modals";

export const Credentials = () => {
  const {
    steps,
    setLicense,
    setCertifications,
    setSpecialityCertifications,
    setOtherCertifications,
  } = useModals();
  return (
    <div>
      {steps.license === 0 && (
        <Card
          title={"License Information"}
          subTitle={"Add License Information"}
          description={
            "Adding your current licenses is critical to ensure eligibility for matching job offers"
          }
          onAddClick={() => setLicense(true)}
        />
      )}

      {steps.license === 1 && (
        <Card
          title={"Licenses"}
          icon={
            <Icon
              name="add"
              className="min-w-8 min-h-8"
              aria-hidden="true"
              filled
            />
          }
          onEditClick={() => setLicense(true)}
        >
          {licensesData?.map((item, index) => (
            <ProfileCard
              key={item.country}
              data={item}
              isLast={index === licensesData?.length - 1}
              onEditClick={() => setLicense(true)}
            />
          ))}
        </Card>
      )}

      {steps.certifications === 0 && (
        <Card
          title={"Basic Certifications"}
          subTitle={"Add Basic Certifications"}
          description={
            "List basic certifications you have earned to demonstrate proficiency and attract employers"
          }
          onAddClick={() => setCertifications(true)}
        />
      )}

      {steps.certifications === 1 && (
        <Card
          title={"Basic Certifications"}
          icon={
            <Icon
              name="add"
              className="min-w-8 min-h-8"
              aria-hidden="true"
              filled
            />
          }
          onEditClick={() => setCertifications(true)}
        >
          {basicCertificationsData?.map((item, index) => (
            <ProfileCard
              key={item.country}
              data={item}
              isLast={index === basicCertificationsData?.length - 1}
              onEditClick={() => setCertifications(true)}
            />
          ))}
        </Card>
      )}

      {steps.specialityCertifications === 0 && (
        <Card
          title={"Speciality Certifications"}
          subTitle={"Add Speciality Certifications"}
          description={
            "Adding specialty certifications is important to validate your expertise and professional readiness"
          }
          onAddClick={() => setSpecialityCertifications(true)}
        />
      )}

      {steps.specialityCertifications === 1 && (
        <Card
          title={"Speciality Certifications"}
          icon={
            <Icon
              name="add"
              className="min-w-8 min-h-8"
              aria-hidden="true"
              filled
            />
          }
          onEditClick={() => setSpecialityCertifications(true)}
        >
          {specialityCertificationsData?.map((item, index) => (
            <ProfileCard
              key={item.country}
              data={item}
              isLast={index === specialityCertificationsData?.length - 1}
              onEditClick={() => setSpecialityCertifications(true)}
            />
          ))}
        </Card>
      )}

      {steps.otherCertifications === 0 && (
        <Card
          title={"Other Certifications"}
          subTitle={"Add Other Certifications"}
          description={
            "Include other certifications you have earned to boost your professional standing"
          }
          onAddClick={() => setOtherCertifications(true)}
        />
      )}

      {steps.otherCertifications === 1 && (
        <Card
          title={"Other Certifications"}
          icon={
            <Icon
              name="add"
              className="min-w-8 min-h-8"
              aria-hidden="true"
              filled
            />
          }
          onEditClick={() => setOtherCertifications(true)}
        >
          {otherCertificationsData?.map((item, index) => (
            <ProfileCard
              key={item.country}
              data={item}
              isLast={index === otherCertificationsData?.length - 1}
              onEditClick={() => setOtherCertifications(true)}
            />
          ))}
        </Card>
      )}
    </div>
  );
};
