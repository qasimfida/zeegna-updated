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
	ClockIcon,
} from "@/svgs/icons";
import Discover from "@/components/Discover";
import Invites from "@/components/Invites";
import Applications from "@/components/Applications";
import JobOffers from "@/components/JobOffers";
import trinityHealth from "../../../public/images/trinityHealth.png";
import feature from "../../../public/images/feature.png";
import Image from "next/image";

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

export const similarJobCards = [
	{
		icon: <ClockIcon />,
		respondBy: "Respond by : 6/15/2024",
		cardData: {
			image: feature,
			heading: "Bayada 1",
			subHeading: "Senior Registered Nurse - Critical Care Unit",
			hospitalName: "Home Health Care Agency",
			location: "Boston, MA (Onsite)",
			tags: [
				"40 Hours/Week",
				"Rotating Shifts",
				"Full-time",
				"$75,000 - $90,000",
			],
		},
	},
	{
		icon: <ClockIcon />,
		respondBy: "Respond by : 6/15/2024",
		cardData: {
			image: feature,
			heading: "Bayada 2",
			subHeading: "Senior Registered Nurse - Critical Care Unit",
			hospitalName: "Home Health Care Agency",
			location: "Boston, MA (Onsite)",
			tags: [
				"40 Hours/Week",
				"Rotating Shifts",
				"Full-time",
				"$75,000 - $90,000",
			],
		},
	},
	{
		icon: <ClockIcon />,
		respondBy: "Respond by : 6/15/2024",
		cardData: {
			image: feature,
			heading: "Bayada 3",
			subHeading: "Senior Registered Nurse - Critical Care Unit",
			hospitalName: "Home Health Care Agency",
			location: "Boston, MA (Onsite)",
			tags: [
				"40 Hours/Week",
				"Rotating Shifts",
				"Full-time",
				"$75,000 - $90,000",
			],
		},
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
