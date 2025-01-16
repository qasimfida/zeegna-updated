"use client";

import { useModals } from "@/contexts/Modals";
import Card from "../Card/index";
import { Icon } from "@/svgs";
import ProfileCard from "@/components/ProfileCard";
import {
  contactInformationData,
  emergencyContactData,
  identityInfoData,
  languagesData,
  profileData,
  socialProfileData,
} from "@/utils/data";
import { MobileRightbar } from "../Rightbar/Rightbar";

export const Overview = () => {
  const {
    steps,
    setLanguages,
    setInformation,
    setContact,
    setIdentity,
    setEmergency,
    setSocial,
  } = useModals();
  return (
    <div>
      <MobileRightbar className="container:hidden block" />
      {/* <Card
        title="Personal Information"
        heading="William Brute Nash"
        options={profileData}
        hasIcon={false}
        onEditClick={() => setInformation(true)}
      />
      <Card
        title="Contact Information"
        heading="Currently located in Charlotte, NC"
        options={contactInformationData}
        hasIcon={false}
        onEditClick={() => setContact(true)}
      /> */}
      {steps.languages === 0 && (
        <Card
          title={"Languages"}
          subTitle={"Add Languages"}
          description={
            "Attract more employers by adding the languages you speak on your profile"
          }
          onAddClick={() => setLanguages(true)}
        />
      )}
      {steps.languages === 1 && (
        <Card
          title={"Languages"}
          icon={
            <Icon
              name="add"
              className="min-w-8 min-h-8"
              aria-hidden="true"
              filled
            />
          }
          onEditClick={() => setLanguages(true)}
        >
          {languagesData?.map((item, index) => (
            <ProfileCard
              key={item.country}
              data={item}
              isLast={index === languagesData.length - 1}
              onEditClick={() => setLanguages(true)}
            />
          ))}
        </Card>
      )}
      {steps.emergency === 0 && (
        <Card
          title={"Emergency Contacts"}
          subTitle={"Add Emergency Contacts"}
          description={
            "Add an emergency contact to increase profile completeness"
          }
          onAddClick={() => setEmergency(true)}
        />
      )}
      {steps.emergency === 1 && (
        <Card
          title="Emergency Contacts"
          heading="Meghan Roberts"
          options={emergencyContactData}
          hasIcon={true}
          icon={
            <Icon
              name="add"
              className="min-w-8 min-h-8"
              aria-hidden="true"
              filled
            />
          }
          onEditClick={() => setEmergency(true)}
        />
      )}
      {steps.social === 0 && (
        <Card
          title={"Social Profile"}
          subTitle={"Add Social Profile"}
          description={
            "Add your social media or other online accounts to enhance your profile"
          }
          onAddClick={() => setSocial(true)}
        />
      )}
      {steps.social === 1 && (
        <Card
          title="Social Profile"
          heading="Socials"
          options={socialProfileData}
          icon={
            <Icon
              name="add"
              className="min-w-8 min-h-8"
              aria-hidden="true"
              filled
            />
          }
          onEditClick={() => setSocial(true)}
        />
      )}
      <Card
        title="Identity Information"
        options={identityInfoData}
        onEditClick={() => setIdentity(true)}
        hasEditIcon={false}
        icon={
          <Icon
            name="add"
            className="min-w-8 min-h-8"
            aria-hidden="true"
            filled
          />
        }
      />
    </div>
  );
};
