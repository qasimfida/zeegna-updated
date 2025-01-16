"use client";

import {
  AwardIcon,
  BreifcaseIcon,
  BuildingIcon,
  DocumentIcon,
  DocumentMagnifyIcon,
  DocumentsIcon,
  DocumentsMinusIcon,
  HomeIcon,
  EducationIcon,
  MessagesIcon,
  ProfileIcon,
  SettingsIcon,
} from "@/svgs/icons";
import Overview from "@/components/Overview";
import Credentials from "@/components/Credentials";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Preferences from "@/components/Preferences";
import Documents from "@/components/Documents";

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
    name: "Resources",
    href: "/blogs",
    icon: <DocumentIcon className="w-6 h-6" aria-hidden="true" />,
    current: false,
  },
  {
    name: "Settings",
    href: "/settings/notifications",
    icon: <SettingsIcon className="w-6 h-6" aria-hidden="true" />,
    current: false,
  },
];

export const tabData = [
  {
    id: "overview",
    label: "Overview",
    component: <Overview />,
    icon: <DocumentMagnifyIcon className="w-5 h-5" aria-hidden="true" />,
  },
  {
    id: "credentials",
    label: "Credentials",
    component: <Credentials />,
    icon: <DocumentsMinusIcon className="w-5 h-5" aria-hidden="true" />,
  },
  {
    id: "education",
    label: "Education",
    component: <Education />,
    icon: <EducationIcon className="w-5 h-5" aria-hidden="true" />,
  },
  {
    id: "experience",
    label: "Experience",
    component: <Experience />,
    icon: <BreifcaseIcon className="w-5 h-5" aria-hidden="true" />,
  },
  {
    id: "documents",
    label: "Documents",
    component: <Documents />,
    icon: <DocumentsIcon className="w-5 h-5" aria-hidden="true" />,
  },
  {
    id: "skills",
    label: "Skills",
    component: <Skills />,
    icon: <AwardIcon className="w-5 h-5" aria-hidden="true" />,
  },
  {
    id: "preferences",
    label: "Preferences",
    component: <Preferences />,
    icon: <SettingsIcon className="w-5 h-5" aria-hidden="true" />,
  },
];
