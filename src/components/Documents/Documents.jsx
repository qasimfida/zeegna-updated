"use client";

import { Icon } from "@/svgs";
import {
  healthScreeningData,
  identificationData,
  liabilityInsuranceData,
  resumeData,
} from "@/utils/data";
import ProfileCard from "@/components/ProfileCard";
import Card from "../Card";
import Button from "../Button";
import { useState } from "react";
import { useModals } from "@/contexts/Modals";
import { usePageLayout } from "@/contexts/PageLayout";
import { useRouter } from "next/navigation";

export const Documents = () => {
  const {
    steps,
    setResume,
    setIdentification,
    setHealth,
    setImmunization,
    setLiability,
  } = useModals();
  const [temp, setTemp] = useState({
    resume: 0,
    insurance: 0,
    imuni: 0,
    identity: 0,
    screen: 0,
    participation: 0,
    background: 0,
  });
  const router = useRouter();
  const { globalValue, setGlobalValue } = usePageLayout();

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {globalValue.hasRightbar && steps.resume === 0 && (
        <Card
          title={"Resume"}
          subTitle={"Upload Resume Now"}
          description={
            "Upload your most up to date resume to help us find you the next best opportunity."
          }
          onAddClick={() => setResume(true)}
        />
      )}

      {globalValue.hasRightbar && steps.resume === 1 && (
        <Card
          title={"Resume"}
          icon={
            <Icon
              name="edit"
              className="min-w-8 min-h-8"
              aria-hidden="true"
              filled
            />
          }
          onEditClick={() => setResume(true)}
        >
          {resumeData?.map((item, index) => (
            <ProfileCard
              key={item.country}
              data={item}
              isLast={index === resumeData?.length - 1}
            />
          ))}
        </Card>
      )}

      {globalValue.hasRightbar && steps.identification === 0 && (
        <Card
          title={"Identification"}
          subTitle={"Upload  ID to Verify  Identity"}
          description={
            "Get success to get started. We respect your privacy and never sell or share your information with others."
          }
          onAddClick={() => setIdentification(true)}
        />
      )}

      {globalValue.hasRightbar && steps.identification === 1 && (
        <Card
          title={"Identification"}
          icon={
            <Icon
              name="add"
              className="min-w-8 min-h-8"
              aria-hidden="true"
              filled
            />
          }
          onEditClick={() => setIdentification(true)}
        >
          {identificationData.map((item, index) => (
            <ProfileCard
              key={item.country}
              data={item}
              isLast={index === identificationData?.length - 1}
              onEditClick={() => setIdentification(true)}
            />
          ))}
        </Card>
      )}

      {globalValue.hasRightbar && steps.health === 0 && (
        <Card
          title={"Health Screening"}
          subTitle={"Complete Health Screening"}
          description={
            "We require health screening submissions to ensure safely performance of duties."
          }
          onAddClick={() => setHealth(true)}
        />
      )}

      {globalValue.hasRightbar && steps.health === 1 && (
        <Card
          title={"Health Screening"}
          icon={
            <Icon
              name="add"
              className="min-w-8 min-h-8"
              aria-hidden="true"
              filled
            />
          }
          onEditClick={() => setHealth(true)}
        >
          {healthScreeningData.map((item, index) => (
            <ProfileCard
              key={item.country}
              data={item}
              isLast={index === healthScreeningData?.length - 1}
              onEditClick={() => setHealth(true)}
            />
          ))}
        </Card>
      )}

      {globalValue.hasRightbar && steps.immunization === 0 && (
        <Card
          title={"Immunization"}
          subTitle={"Submit  Immunization Records"}
          description={
            "We require immunization records from applicants as part of the application process."
          }
          onAddClick={() => setImmunization(true)}
        />
      )}

      {globalValue.hasRightbar && steps.immunization === 1 && (
        <Card
          title={"Immunization"}
          icon={
            <Icon
              name="add"
              className="min-w-8 min-h-8"
              aria-hidden="true"
              filled
            />
          }
          onEditClick={() => setImmunization(true)}
        >
          {healthScreeningData.map((item, index) => (
            <ProfileCard
              key={item.country}
              data={item}
              isLast={index === healthScreeningData?.length - 1}
              onEditClick={() => setImmunization(true)}
            />
          ))}
        </Card>
      )}

      {globalValue.hasRightbar && steps.liability === 0 && (
        <Card
          title={"Liability Insurance"}
          subTitle={"Upload  Liability Insurance"}
          description={
            "Clinicians engaged in contract work must upload liability insurance for continued protection."
          }
          onAddClick={() => setLiability(true)}
        />
      )}

      {globalValue.hasRightbar && steps.liability === 1 && (
        <Card
          title={"Liability Insurance"}
          icon={
            <Icon
              name="add"
              className="min-w-8 min-h-8"
              aria-hidden="true"
              filled
            />
          }
          onEditClick={() => setLiability(true)}
        >
          {liabilityInsuranceData.map((item, index) => (
            <ProfileCard
              key={item.country}
              data={item}
              onEditClick={() => setLiability(true)}
            />
          ))}
        </Card>
      )}

      {globalValue.hasRightbar && temp.participation === 0 && (
        <Card
          title={"Participation Agreement"}
          subTitle={"Sign the Participation Agreement"}
          description={
            "Review and sign the participation agreement to confirm your understanding and acceptance of the terms."
          }
          onAddClick={() => {
            handleScroll();
            router.push("/profile/participation-agreement");
            setGlobalValue({
              hasRightbar: false,
              hasTabbar: false,
            });
          }}
        />
      )}

      {globalValue.hasRightbar && temp.background === 0 && (
        <Card
          title={"Background Check Consent Form"}
          subTitle={"Background Check Consent Form  "}
          description={
            "We require your approval for the background check to maintain safety and compliance standards."
          }
          onAddClick={() => {
            handleScroll();
            setGlobalValue({
              hasRightbar: false,
              hasTabbar: false,
            });
            router.push("/profile/background-check");
          }}
        />
      )}

      {globalValue.hasRightbar && (
        <div className="p-3 mt-5 bg-white rounded-2xl  hover:ring-1 hover:ring-black hover:shadow-xl ease-in cursor-pointer ">
          <div className="flex justify-between w-full border-b pb-2 items-center">
            <h4 className="text-5xl text-grey-400">Legal and Consents</h4>
          </div>
          <div className="flex justify-between mt-4 mb-4">
            <div>
              <h4 className="text-4xl font-semibold text-grey-400 mb-2 mt-4">
                Privacy Policy and Terms of Use
              </h4>
              <p className="text-base text-grey-500 font-medium mb-2">
                <span className="text-grey-400">Signed Nov: </span>December 23,
                2024
              </p>
            </div>
            <div className="flex items-center">
              <Button
                color="dark"
                variant="darkOutlined"
                size="large"
                onClick={() => {
                  handleScroll();
                  router.push("/profile/legal-consent");
                  setGlobalValue({
                    hasRightbar: false,
                    hasTabbar: false,
                  });
                }}
              >
                View
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
