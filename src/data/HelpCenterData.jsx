import GettingStarted from "../assets/icons/helpcentericons/GettingStarted";
import ChoosingProviders from "../assets/icons/helpcentericons/ChoosingProviders";
import ServiceDetail from "../assets/icons/helpcentericons/ServiceDetails";
import ProviderInteraction from "../assets/icons/helpcentericons/ProviderInteraction";
import BookingServices from "../assets/icons/helpcentericons/BookingServices";
import PaymentsFees from "../assets/icons/helpcentericons/PaymentsFees";
import AccountProfile from "../assets/icons/helpcentericons/AccountProfile";
import TrustSafety from "../assets/icons/helpcentericons/TrustSafety";
import FindingHelp from "../assets/icons/helpcentericons/FindingHelp";
import LegalCompliance from "../assets/icons/helpcentericons/LegalCompliance";
import ServiceListing from "../assets/icons/helpcentericons/ServiceListing";
import MarketingVisibility from "../assets/icons/helpcentericons/MarketingVisibility";
import SupportResources from "../assets/icons/helpcentericons/SupportResources";
import ClientInteraction from "../assets/icons/helpcentericons/ClientInteraction";
// Families data
const HelpCenterData = [
  {
    id: 1,
    name: "Getting started",
    description:
      "Learn how to easily sign up, explore, and find the right care for your loved ones.",
    Icon: GettingStarted,
    link: "/family-help-center"
  },
  {
    id: 2,
    name: "Finding help",
    description:
      "Discover how to search and filter services to match your specific needs.",
    Icon: FindingHelp,
    link: "/family-help-center"
  },
  {
    id: 3,
    name: "Choosing providers",
    description:
      "Tips on selecting the right providers and viewing qualifications.",
    Icon: ChoosingProviders,
    link: "/family-help-center"
  },
  {
    id: 4,
    name: "Service details",
    description:
      "Understand the services offered, such as specialized care, home mods, etc.",
    Icon: ServiceDetail,
    link: "/family-help-center"
  },
  {
    id: 5,
    name: "Provider interaction",
    description: "Learn how to contact service providers and stay informed.",
    Icon: ProviderInteraction,
    link: "/family-help-center"
  },
  {
    id: 6,
    name: "Booking service",
    description: "Find out how to easily request and book service providers.",
    Icon: BookingServices,
    link: "/family-help-center"
  },
  {
    id: 7,
    name: "Payments & fees",
    description: "Learn how to pay for services and understand membership.",
    Icon: PaymentsFees,
    link: "/family-help-center"
  },
  {
    id: 8,
    name: "Account & profile",
    description: "Manage account settings and update profiles for loved ones.",
    Icon: AccountProfile,
    link: "/family-help-center"
  },
  {
    id: 9,
    name: "Trust & safety",
    description:
      "Learn about the safety and quality of providers on the platform.",
    Icon: TrustSafety,
    link: "/family-help-center"
  },
];

// Partners data
const HelpCenterDataPartner = [
  {
    id: 10,
    name: "Getting started",
    description:
      "Learn how to join and start offering your services to families in need",
    Icon: GettingStarted,
    link: "/partner-help-center"
  },
  {
    id: 11,
    name: "Account & profile",
    description:
      "Set up, manage, and update your profile, and keep your account safe",
    Icon: AccountProfile,
    link: "/partner-help-center"
  },
  {
    id: 12,
    name: "Service listings",
    description:
      "Manage, and promote the services you offer to reach the right clients",
    Icon: ServiceListing,
    link: "/partner-help-center"
  },
  {
    id: 13,
    name: "Client interaction",
    description:
      "Learn to connect with families, handle inquiries, and manage bookings.",
    Icon: ClientInteraction,
    link: "/partner-help-center"
  },
  {
    id: 14,
    name: "Payments & fees",
    description:
      "Learn about the fees to join, and how you get paid for services rendered",
    Icon: PaymentsFees,
    link: "/partner-help-center"
  },
  {
    id: 15,
    name: "Trust & safety",
    description:
      "Learn about credentialing process and safety measures in place",
    Icon: TrustSafety,
    link: "/partner-help-center"
  },
  {
    id: 16,
    name: "Marketing & visibility",
    description:
      "Discover how to boost your visibility and attract more clients",
    Icon: MarketingVisibility,
    link: "/partner-help-center"
  },
  {
    id: 17,
    name: "Support & resources",
    description: "Access helpful resources and support to grow your business",
    Icon: SupportResources,
    link: "/partner-help-center"
  },
  {
    id: 18,
    name: "Legal & compliance",
    description:
      "Learn about legal and compliance requirements to provide services",
    Icon: LegalCompliance,
    link: "/partner-help-center"
  },
];

export { HelpCenterData, HelpCenterDataPartner };
