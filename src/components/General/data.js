import {
  TimerIcon,
  FilePlusIcon,
  FileIcon,
  CheckDoneIcon,
  DocumentNotificationIcon,
  BellRingingIcon,
  LikeIcon,
  MapIcon,
  StarOutlinedIcon,
  DocumentIcon,
  MessagesIcon,
  AnnouncementIcon,
} from "@/svgs/icons";
import moment from "moment";

export const generalQuestions = [
  {
    question: "How can I contact customer support?",
    answer:
      "You can contact our customer support team via the 'Contact Us' section on our website or by emailing us at support@zyrahealth.com.",
  },
  {
    question: "Is your platform available on mobile devices?",
    answer:
      "Yes, our platform is available on both Android and iOS devices. You can download the app from the respective app stores.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "To reset your password, go to the login page and click on the 'Forgot Password' link. Follow the instructions to receive a password reset link in your email.",
  },
];
export const tasksData = [
  {
    id: 1,
    question: "Your license expires in 20 days.",
    answer: "Please update license information.",
    icon: <TimerIcon />,
  },
  {
    id: 2,
    question:
      "The invitation from Bayada Home Care to apply for RN- ICU Night Shift job is expiring in 10 days.",
    answer: "Please upload your resume.",
    icon: <CheckDoneIcon />,
  },
  {
    id: 3,
    question:
      "You will need to upload your resume before you can apply for jobs.",
    answer: "Please upload your resume. ",
    icon: <FilePlusIcon />,
  },
  {
    id: 4,
    question: "Your Registered Nurse (RN) license is expiring in 20 days. ",
    answer: "Please update your license information ",
    icon: <TimerIcon />,
  },
  {
    id: 5,
    question: "Your Registered Nurse (RN) license has expired.",
    answer: "Please update your license information. ",
    icon: <FileIcon />,
  },
];
export const notification = [
  {
    id: 0,
    title: "Join fellow job seekers in finding rewarding jobs in healthcare.",
    description: "Please update license information.",
    icon: <DocumentNotificationIcon />,
    type: "Discover Jobs",
    date: moment(),
  },
  {
    id: 1,
    title: "Your profile is 40% complete. Add more details to your profile.",
    answer: "Please upload your resume.",
    icon: <DocumentNotificationIcon />,
    type: "Update Profile",
    date: moment(),
  },
  {
    id: 2,
    title: "Add Bio to enhance your profile and attract more employers.",
    description: "Please upload your resume. ",
    icon: <DocumentNotificationIcon />,
    type: "Add Bio",
    date: moment(),
  },
  {
    id: 3,
    title: "Add License details to your profile. ",
    description: "Please update your license information ",
    icon: <DocumentNotificationIcon />,
    type: "Add License",
    date: moment(),
  },
  {
    id: 4,
    title: "Add Certification details to your profile. ",
    description: "Please update your license information. ",
    icon: <DocumentNotificationIcon />,
    type: "Add Certification",
    date: moment(),
  },
  {
    id: 5,
    title: "Add Education details to your profile.",
    description: "Please update your license information. ",
    icon: <DocumentNotificationIcon />,
    type: "Add Education",
    date: moment(),
  },
  {
    id: 6,
    title: "Upload your Resume to enhance your profile",
    description: "Please update your license information. ",
    icon: <DocumentNotificationIcon />,
    type: "Upload Resume",
    date: moment(),
  },
  {
    id: 7,
    title: "Add Skills to your profile.",
    description: "Please update your license information. ",
    icon: <DocumentNotificationIcon />,
    type: "Add Skills",
    date: moment(),
  },
  {
    id: 8,
    title: "You have signed the Privacy Policy and the Terms of Use Agreement.",
    description: "Please update your license information. ",
    icon: <DocumentNotificationIcon />,
    type: "View Document",
    date: moment(),
  },
];
export const activities = [
  {
    id: 0,
    title: "Your license expires in 20 days.",
    description: "Please update license information.",
    icon: <DocumentNotificationIcon />,
    date: moment(),
  },
  {
    id: 1,
    title:
      "description invitation from Bayada Home Care to apply for RN- ICU Night Shift job is expiring in 10 days.",
    answer: "Please upload your resume.",
    icon: <DocumentNotificationIcon />,
    date: moment(),
  },
  {
    id: 2,
    title:
      "description will need to upload your resume before you can apply for jobs.",
    description: "Please upload your resume. ",
    icon: <DocumentNotificationIcon />,
    date: moment(),
  },
  {
    id: 3,
    title: "Your Registered Nurse (RN) license is expiring in 20 days. ",
    description: "Please update your license information ",
    icon: <DocumentNotificationIcon />,
    date: moment(),
  },
  {
    id: 4,
    title: "Your Registered Nurse (RN) license has expired.",
    description: "Please update your license information. ",
    icon: <DocumentNotificationIcon />,
    date: moment(),
  },
];
export const ticketsData = [
  {
    id: 1,
    ticketNumber: "#60260235234",
    title: "I have challenges navigating the platform. Please help.",
    progress: "In Review",
    hospital: "ZH",
    idea: "idea",
    date: moment(),
  },
  {
    id: 2,
    ticketNumber: "#60260235234",
    title: "I have challenges navigating the platform. Please help.",
    progress: "resolved",
    hospital: "ZH",
    idea: "idea",
    date: moment(),
  },
  {
    id: 3,
    ticketNumber: "#60260235234",
    title: "I have challenges navigating the platform. Please help.",
    progress: "In Review",
    hospital: "ZH",
    idea: "idea",
    date: moment(),
  },
  {
    id: 4,
    ticketNumber: "#60260235234",
    title: "I have challenges navigating the platform. Please help.",
    progress: "In Review",
    hospital: "ZH",
    idea: "idea",
    date: moment(),
  },
  {
    id: 5,
    ticketNumber: "#60260235234",
    title: "I have challenges navigating the platform. Please help.",
    progress: "In Review",
    hospital: "ZH",
    idea: "idea",
    date: moment(),
  },
];
export const notificationSettings = [
  {
    id: 0,
    title: "Reminders",
    description:
      "Updates and quick reminders related to jobs you've viewed, saved, and matched with.",
    icon: <BellRingingIcon />,
    date: moment(),
  },
  {
    id: 1,
    title: "Recommendations",
    description:
      "A personalized selection of jobs we think you'd love including recommendations based on your saved searches, sent to your inbox on a weekly cadence. We only send you jobs when you are ready to interview or open to offers.",
    icon: <LikeIcon />,
    date: moment(),
  },
  {
    id: 2,
    title: "Guidance",
    description:
      "Communications related to profile quality, best practices, and new profile features.",
    icon: <MapIcon />,
    date: moment(),
  },
  {
    id: 3,
    title: "Featured",
    description:
      "Get notified if you are eligible to be featured to top startups, as well as any alerts or updates related to your featured profile.",
    icon: <StarOutlinedIcon />,
    date: moment(),
  },
  {
    id: 4,
    title: "Newsletter",
    description:
      "Our weekly digest that highlights trending industries, top emerging startups, notable fundings & acquisitions, and more.",
    icon: <DocumentIcon />,
    date: moment(),
  },
  {
    id: 5,
    title: "Announcements",
    description:
      "Stay up to date on new product features, offers, and promotions.",
    icon: <AnnouncementIcon />,
    date: moment(),
  },
  {
    id: 6,
    title: "Messages",
    description:
      "Direct messages from founders & recruiters, as well as job application matches, confirmations, and rejections. If toggled off, you will still receive emails related to account security and error messages. If you would like to opt out of these emails as well, please reach out to our support team at team@zyrahealth.com",
    icon: <MessagesIcon />,
    date: moment(),
  },
];

export const supportCardData = [
  {
    label: "support",
    heading: "Need support?",
    subHeading:
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    label: "idea",
    heading: "Need support?",
    subHeading:
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    label: "chat",
    heading: "Need support?",
    subHeading:
      "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
];

export const colors = {
  support: "bg-primary-1100",
  idea: "bg-primary-800",
  chat: "bg-primary-800",
};
