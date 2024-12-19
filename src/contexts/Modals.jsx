"use client";
import React, { createContext, useCallback, useContext, useState } from "react";
import {
  LicenseModal,
  DeleteLicenseModal,
  EducationModal,
  WorkModal,
  SkillModal,
  SkillsModal,
  AppSkillsModal,
  PreferenceModal,
  WorkplaceModal,
  ContactModal,
  InformationModal,
  IdentityModal,
  LanguagesModal,
  EmergencyModal,
  SocialModal,
  CertificationsModal,
  SpecialityCertificationsModal,
  OtherCertificationsModal,
  ContinuingEducationModal,
  TrainingModal,
  ExperienceModal,
  ReferencesModal,
  TechModal,
  ResumeModal,
  IdentificationModal,
  HealthModal,
  ImmunizationModal,
  LiabilityInsuranceModal,
  EmploymentModal,
  TourModal,
  EmailSentModal,
  UpdateStatusModal,
  WithdrawModal,
  ReportModal,
} from "@/components/Modals";

const ModalContext = createContext(false);

export const ModalsProvider = ({ children }) => {
  const [license, setLicense] = useState(false);
  const [deleteLicense, setDeleteLicense] = useState(false);
  const [education, setEducation] = useState(false);
  const [work, setWork] = useState(false);
  const [skill, setSkill] = useState(false);
  const [status, setStatus] = useState(false);
  const [withdraw, setWithdraw] = useState(false);
  const [report, setReport] = useState(false);
  const [skills, setSkills] = useState(false);
  const [appSkills, setAppSkills] = useState(false);
  const [preference, setPreference] = useState(false);
  const [workplace, setWorkplace] = useState(false);
  const [contact, setContact] = useState(false);
  const [information, setInformation] = useState(false);
  const [identity, setIdentity] = useState(false);
  const [languages, setLanguages] = useState(false);
  const [emergency, setEmergency] = useState(false);
  const [social, setSocial] = useState(false);
  const [certifications, setCertifications] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [specialityCertifications, setSpecialityCertifications] =
    useState(false);
  const [otherCertifications, setOtherCertifications] = useState(false);
  const [continuingEducation, setContinuingEducation] = useState(false);
  const [training, setTraining] = useState(false);
  const [experience, setExperience] = useState(false);
  const [references, setReferences] = useState(false);
  const [tech, setTech] = useState(false);
  const [resume, setResume] = useState(false);
  const [identification, setIdentification] = useState(false);
  const [health, setHealth] = useState(false);
  const [immunization, setImmunization] = useState(false);
  const [liability, setLiability] = useState(false);
  const [employment, setEmployment] = useState(false);

  const [steps, setSteps] = useState({
    education: 0,
    work: 0,
    skill: 0,
    status: 0,
    withdraw: 0,
    report: 0,
    skills: 0,
    appSkills: 0,
    license: 0,
    workplace: 0,
    languages: 0,
    emergency: 0,
    social: 0,
    certifications: 0,
    specialityCertifications: 0,
    otherCertifications: 0,
    continuingEducation: 0,
    training: 0,
    experience: 0,
    references: 0,
    tech: 0,
    resume: 0,
    identification: 0,
    health: 0,
    immunization: 0,
    liability: 0,
    employment: 0,
  });

  const [tour, setTour] = useState(false);
  const [tourStep, setTourStep] = useState(0);

  const value = {
    license,
    deleteLicense,
    information,
    identity,
    education,
    languages,
    work,
    skill,
    status,
    withdraw,
    report,
    skills,
    appSkills,
    preference,
    workplace,
    contact,
    emergency,
    social,
    specialityCertifications,
    otherCertifications,
    certifications,
    emailSent,
    continuingEducation,
    training,
    experience,
    references,
    tech,
    resume,
    identification,
    health,
    immunization,
    liability,
    employment,
    steps,
    tour,
    tourStep,
    setLicense: useCallback((value) => {
      return setLicense(value);
    }, []),
    setDeleteLicense: useCallback((value) => {
      return setDeleteLicense(value);
    }, []),
    setEducation: useCallback((value) => {
      return setEducation(value);
    }, []),
    setWork: useCallback((value) => {
      return setWork(value);
    }, []),
    setSkill: useCallback((value) => {
      return setSkill(value);
    }, []),
    setStatus: useCallback((value) => {
      return setStatus(value);
    }, []),
    setWithdraw: useCallback((value) => {
      return setWithdraw(value);
    }, []),
    setReport: useCallback((value) => {
      return setReport(value);
    }, []),
    setSkills: useCallback((value) => {
      return setSkills(value);
    }, []),
    setAppSkills: useCallback((value) => {
      return setAppSkills(value);
    }, []),
    setPreference: useCallback((value) => {
      return setPreference(value);
    }, []),
    setWorkplace: useCallback((value) => {
      return setWorkplace(value);
    }, []),
    setContact: useCallback((value) => {
      return setContact(value);
    }, []),
    setInformation: useCallback((value) => {
      return setInformation(value);
    }, []),
    setIdentity: useCallback((value) => {
      return setIdentity(value);
    }, []),
    setLanguages: useCallback((value) => {
      return setLanguages(value);
    }, []),
    setEmergency: useCallback((value) => {
      return setEmergency(value);
    }, []),
    setSocial: useCallback((value) => {
      return setSocial(value);
    }, []),
    setCertifications: useCallback((value) => {
      return setCertifications(value);
    }, []),
    setEmailSent: useCallback((value) => {
      return setEmailSent(value);
    }, []),
    setSpecialityCertifications: useCallback((value) => {
      return setSpecialityCertifications(value);
    }, []),
    setOtherCertifications: useCallback((value) => {
      return setOtherCertifications(value);
    }, []),
    setContinuingEducation: useCallback((value) => {
      return setContinuingEducation(value);
    }, []),
    setTraining: useCallback((value) => {
      return setTraining(value);
    }, []),
    setExperience: useCallback((value) => {
      return setExperience(value);
    }, []),
    setReferences: useCallback((value) => {
      return setReferences(value);
    }, []),
    setTech: useCallback((value) => {
      return setTech(value);
    }, []),
    setResume: useCallback((value) => {
      return setResume(value);
    }, []),
    setIdentification: useCallback((value) => {
      return setIdentification(value);
    }, []),
    setHealth: useCallback((value) => {
      return setHealth(value);
    }, []),
    setImmunization: useCallback((value) => {
      return setImmunization(value);
    }, []),
    setLiability: useCallback((value) => {
      return setLiability(value);
    }, []),
    setEmployment: useCallback((value) => {
      return setEmployment(value);
    }, []),
    setSteps: useCallback(
      (key, value) => {
        return setSteps({ ...steps, [key]: value });
      },
      [steps]
    ),
    setTour: useCallback((value) => {
      return setTour(value);
    }, []),
    setTourStep: useCallback((value) => {
      return setTourStep(value);
    }, []),
  };
  return (
    <ModalContext.Provider value={value}>
      {children}
      <LicenseModal />
      <DeleteLicenseModal />
      <EducationModal />
      <WorkModal />
      <SkillModal />
      <SkillsModal />
      <AppSkillsModal />
      <PreferenceModal />
      <WorkplaceModal />
      <ContactModal />
      <InformationModal />
      <IdentityModal />
      <LanguagesModal />
      <EmergencyModal />
      <SocialModal />
      <CertificationsModal />
      <EmailSentModal />
      <SpecialityCertificationsModal />
      <OtherCertificationsModal />
      <ContinuingEducationModal />
      <TrainingModal />
      <ExperienceModal />
      <ReferencesModal />
      <TechModal />
      <ResumeModal />
      <IdentificationModal />
      <HealthModal />
      <ImmunizationModal />
      <LiabilityInsuranceModal />
      <EmploymentModal />
      <TourModal />
      <UpdateStatusModal />
      <WithdrawModal />
      <ReportModal />
    </ModalContext.Provider>
  );
};

export const useModals = () => useContext(ModalContext);
