import FAQs from "@/components/FAQs";
import { TimerIcon, CheckDoneIcon, FilePlusIcon, FileIcon } from "@/svgs/icons";

const jobQuestions = [
  {
    question: "How do I search for a job?",
    answer:
      "Use the search bar on our website or app to find jobs based on keywords, location, and category. You can also filter your search by salary, job type, and company.",
  },
  {
    question: "How do I apply for a job?",
    answer:
      "Once you've found a job you want to apply for, click on the 'Apply' button. Fill in the required details and upload your resume. You can also include a cover letter if needed.",
  },
  {
    question: "How do I save a job for later?",
    answer:
      "To save a job, click on the bookmark icon next to the job listing. The job will be added to your 'Saved Jobs' section, which you can access from your account dashboard.",
  },
];

const generalQuestions = [
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

const offersQuestions = [
  {
    question: "How do I view job offers?",
    answer:
      "You can view your job offers in the 'Offers' section of your account. You'll receive notifications when you have new offers.",
  },
  {
    question: "How do I negotiate a job offer?",
    answer:
      "If you receive a job offer, you can respond to the employer with your questions or concerns. Use the platform's messaging system to communicate and negotiate terms.",
  },
  {
    question: "What should I consider when evaluating a job offer?",
    answer:
      "When evaluating a job offer, consider the salary, benefits, job responsibilities, location, and company culture. Make sure the offer aligns with your career goals and personal needs.",
  },
];

const accountQuestions = [
  {
    question: "How do I create an account?",
    answer:
      "To create an account, visit our website and click on 'Sign Up.' Fill in the required details and verify your email address.",
  },
  {
    question: "How do I delete my account?",
    answer:
      "To delete your account, go to 'Account Settings' and follow the steps to deactivate or delete your account. Keep in mind that this action is irreversible.",
  },
  {
    question: "How do I change my email address?",
    answer:
      "To change your email address, go to 'Account Settings' and update your email under 'Contact Information.' A verification link will be sent to your new email.",
  },
];

export const supportTabsData = [
  {
    id: "general",
    label: "General",
    component: <FAQs questions={generalQuestions} />,
  },
  {
    id: "account",
    label: "Account",
    component: <FAQs questions={accountQuestions} />,
  },
  {
    id: "jobs",
    label: "Jobs",
    component: <FAQs questions={jobQuestions} />,
  },
  {
    id: "offers",
    label: "Offers",
    component: <FAQs questions={offersQuestions} />,
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
  }
];

export const colors = {
  support: "bg-primary-1100",
  idea: "bg-primary-800",
  chat: "bg-primary-800",
};
